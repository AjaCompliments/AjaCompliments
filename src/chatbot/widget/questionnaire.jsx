import React, { useState, useEffect } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, TextField, IconButton, Popover } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import SuccessModal from './modal';
import { LINK_TO_BACKEND } from '../../variables';

const Questionnaire = () => {
  const [page, setPage] = useState(0);
  const [flags, setFlags] = useState(Array(10).fill(null).map(() => []));
  const [compliments, setCompliments] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [newMedication, setNewMedication] = useState("");
  const [medications, setMedications] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`${LINK_TO_BACKEND}/compliments/fetchAll`)
      .then(response => {
        setCompliments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the compliments!', error);
      });
  }, []);

  const handleRadioChange = (index) => {
    const updatedFlags = [...flags];
    updatedFlags[page] = [index];
    setFlags(updatedFlags);
  };

  const handleCheckboxChange = (index) => {
    const updatedFlags = [...flags];
    if (updatedFlags[page].includes(index)) {
      updatedFlags[page] = updatedFlags[page].filter(i => i !== index);
    } else {
      updatedFlags[page].push(index);
    }
    setFlags(updatedFlags);
  };

  const handleNumberChange = (e) => {
    const updatedFlags = [...flags];
    updatedFlags[page] = [e.target.value];
    setFlags(updatedFlags);

    if (page === 3) { // Assuming age is on the fourth page (index 3)
      const userDetails = JSON.parse(localStorage.getItem('USR'));
      userDetails.age = e.target.value;
      localStorage.setItem('USR', JSON.stringify(userDetails));
    }
  };

  const handleAddMedication = () => {
    const updatedMedications = [...medications, newMedication];
    setMedications(updatedMedications);
    setNewMedication("");
    setAnchorEl(null);

    // Update localStorage with the new medications list
    const userDetails = JSON.parse(localStorage.getItem('USR'));
    userDetails.pastprescriptions = updatedMedications.join(', ');
    localStorage.setItem('USR', JSON.stringify(userDetails));
  };

  const deducePrescriptions = () => {
    const categoryMapping = [
      'metabolism',
      'vitamins',
      'magnesium',
      'smoking',
      'screentime',
      'sleephrs',
      'allergies',
      'diet',
      'healthcomplications',
      'pastprescriptions'
    ];

    const newPrescriptions = categoryMapping.map((category, index) => {
      const selectedIndex = flags[index][0];
      const selectedCompliment = compliments.find(compliment => compliment.category === category && selectedIndex !== undefined);
      return selectedCompliment ? selectedCompliment.complimentname : null;
    });

    const deducedPrescriptions = newPrescriptions.filter(Boolean).join(', ');

    localStorage.setItem('newPrescriptions', deducedPrescriptions);

    return deducedPrescriptions;
  };

  const handleSubmit = async () => {
    const newPrescriptions = deducePrescriptions();

    const userDetails = JSON.parse(localStorage.getItem('USR'));

    const userData = {
      iduser: userDetails.iduser,
      age: flags[3][0], // Retrieve age from the flags
      weight: flags[1][0],
      height: flags[2][0],
      gender: flags[0][0],
      goal: userDetails.goal,
      pastprescriptions: medications.join(', '),
      newrescriptions: newPrescriptions
    };

    axios.put(`${LINK_TO_BACKEND}/users/updateUsr`, userData, {
      headers: {
        'authorization': `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
      .then(response => {
        console.log('User updated successfully:', response.data);
        setSuccess(true);
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
      });
  };

  const questions = [
    {
      question: "Quel est votre genre ?",
      answers: ["Homme", "Femme"]
    },
    {
      question: "Quel est votre poids ? (kg)",
      type: "number"
    },
    {
      question: "Quelle est votre taille ? (cm)",
      type: "number"
    },
    {
      question: "Quel est votre âge ? (ans)",
      type: "number"
    },
    {
      question: "Vous prenez des médicaments ?",
      type: "medication"
    }
  ];

  return (
    <Box 
      sx={{ 
        transform: 'scale(1.5)', 
        mt: '27vh', 
        ml: '17vw',
        mb: '10vh',
        width: '52vw', 
        height: '90vh' 
      }}
    >
      {page < questions.length ? (
        <>
          <Typography variant="h6">{questions[page].question}</Typography>
          <FormControl component="fieldset" sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
            {questions[page].type === "number" ? (
              <TextField
                type="number"
                value={flags[page][0] || ""}
                onChange={handleNumberChange}
                sx={{ gridColumn: 'span 2', minWidth: '130px' }}
              />
            ) : questions[page].type === "medication" ? (
              <Box sx={{ gridColumn: 'span 2' }}>
                <Box display="flex" alignItems="center">
                  <TextField
                    value={newMedication}
                    onChange={(e) => setNewMedication(e.target.value)}
                    label="Ajouter un médicament"
                    sx={{ marginRight: '8px' }}
                  />
                  <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                    <AddIcon />
                  </IconButton>
                  <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Button onClick={handleAddMedication}>Ajouter</Button>
                  </Popover>
                </Box>
                <Box mt={2}>
                  {medications.map((med, index) => (
                    <Typography key={index}>{med}</Typography>
                  ))}
                </Box>
              </Box>
            ) : (
              <RadioGroup sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                {questions[page].answers.map((answer, index) => (
                  <FormControlLabel 
                    key={index}
                    control={
                      <Radio 
                        checked={flags[page][0] === index} 
                        onChange={() => handleRadioChange(index)} 
                        id={`answer${index}`} 
                        sx={{
                          '&.Mui-checked': {
                            color: 'black',
                          },
                        }}
                      />
                    } 
                    label={answer} 
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '6px',
                      border: '1px solid black',
                      borderRadius: '4px',
                      backgroundColor: flags[page][0] === index ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                      width: 'auto',
                      minWidth: '130px',
                      boxSizing: 'border-box',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  />
                ))}
              </RadioGroup>
            )}
          </FormControl>
          <Box sx={{ mt: 3 }}>
            {page > 0 && (
              <Button variant="contained" color="secondary" onClick={() => setPage(page - 1)} sx={{ mr: 2 }}>
                Précédent
              </Button>
            )}
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => page < questions.length - 1 ? setPage(page + 1) : handleSubmit()}
            >
              {page < questions.length - 1 ? 'Suivant' : 'Soumettre'}
            </Button>
          </Box>
          <SuccessModal open={success} handleClose={() => { setSuccess(false); window.location.reload(false) }} />
        </>
      ) : null}
    </Box>
  );
};

export default Questionnaire;
