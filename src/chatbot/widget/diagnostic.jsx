import React, { useState, useEffect } from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, FormControl, Button, Checkbox } from '@mui/material';
import axios from 'axios';
import SuccessModal from './modal';
import { LINK_TO_BACKEND } from '../../variables';

const Diagnostic = () => {
  const [page, setPage] = useState(0);
  const [flags, setFlags] = useState(Array(10).fill(null).map(() => []));
  const [compliments, setCompliments] = useState([]);
  const [success,setSuccess]=useState(false)

  // Fetch compliments on component mount
  useEffect(() => {
    axios.get(`${LINK_TO_BACKEND}:4000/compliments/fetchAll`)
      .then(response => {
        setCompliments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the compliments!', error);
      });
  }, []);

  // Function to handle radio button selection
  const handleRadioChange = (index) => {
    const updatedFlags = [...flags];
    updatedFlags[page] = [index];
    setFlags(updatedFlags);
  };

  // Function to handle checkbox selection for multi-select questions
  const handleCheckboxChange = (index) => {
    const updatedFlags = [...flags];
    if (updatedFlags[page].includes(index)) {
      updatedFlags[page] = updatedFlags[page].filter(i => i !== index);
    } else {
      updatedFlags[page].push(index);
    }
    setFlags(updatedFlags);
  };

  // Function to deduce new prescriptions based on the user's answers
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
      const selectedIndex = flags[index][0]; // Get the selected index for each question
      const selectedCompliment = compliments.find(compliment => compliment.category === category && selectedIndex !== undefined);
      return selectedCompliment ? selectedCompliment.complimentname : null;
    });

    const deducedPrescriptions = newPrescriptions.filter(Boolean).join(', ');

    // Store the deduced prescriptions in local storage
    localStorage.setItem('newPrescriptions', deducedPrescriptions);

    return deducedPrescriptions;
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const newPrescriptions = deducePrescriptions();

    // Fetch user details from local storage
    const userDetails = await JSON.parse(localStorage.getItem('USR'));

    const userData = {
      iduser: userDetails.iduser,
      weight: userDetails.weight,
      height: userDetails.height,
      gender: userDetails.gender,
      goal: userDetails.goal,
      metabolism: flags[0][0],
      vitamins: flags[1][0],
      magnesium: flags[2][0],
      smoking: flags[3][0],
      screentime: flags[4][0],
      sleephrs: flags[5][0],
      allergies: flags[6],
      diet: flags[7],
      healthcomplications: flags[8],
      pastprescriptions: flags[9],
      newrescriptions: newPrescriptions
    };

    axios.put(`${LINK_TO_BACKEND}:4000/users/updateUsr`,
    {
      iduser: userDetails.iduser,
      weight: userDetails.weight,
      height: userDetails.height,
      gender: userDetails.gender,
      goal: userDetails.goal,
      metabolism: flags[0][0],
      vitamins: flags[1][0],
      magnesium: flags[2][0],
      smoking: flags[3][0],
      screentime: flags[4][0],
      sleephrs:flags[5][0],
      allergies: JSON.stringify( flags[6]),
      diet: JSON.stringify( flags[7]),
      healthcomplications: JSON.stringify(flags[8]),
    //  pastprescriptions:flags[9],
      newrescriptions:newPrescriptions
    }
    
    
    , {
      headers: {
        'authorization': `bearer ${await JSON.parse(localStorage.getItem("token"))}`
      }
    })
      .then(response => {
        console.log('User updated successfully:', response.data);
        let existing=JSON.parse(localStorage.getItem("USR"))
        let coplic=[]
        questions[8].answers.map((e,i)=>{if(flags[8].includes(i)){coplic.push(e)}})
        let newUsr={...existing,
          metabolism: flags[0][0],
          vitamins: flags[1][0],
          magnesium: flags[2][0],
          smoking: flags[3][0],
          screentime: flags[4][0],
          sleephrs:flags[5][0],
          allergies: flags[6],
          diet: flags[7],
          healthcomplications: coplic,
        //  pastprescriptions:flags[9],
          newrescriptions:newPrescriptions
        }
        localStorage.setItem("USR",JSON.stringify(
          newUsr
        ))
        console.log(newUsr)
        setSuccess(true)
       
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
      });
  };

  const questions = [
    {
      question: "Comment décririez-vous votre état d'energie ?",
      answers: ["Je suis épuisée et sereine", "Je suis fatiguée depuis un moment", "J'ai besoin d'un coup de boost"]
    },
    {
      question: "Combien de fruits et légumes mangez-vous chaque jour ?",
      answers: ["Une ou deux fois", "Trois fois ou plus", "Zéro"]
    },
    {
      question: "Combien de fois par semaine mangez-vous du poisson ou des fruits de mer ?",
      answers: ["Une ou deux fois", "Trois fois ou plus", "Zéro"]
    },
    {
      question: "Est-ce-que vous fumez quotidiennement ?",
      answers: ["Non", "Oui"]
    },
    {
      question: "Regardez-vous un écran d'ordinateur plus de 3 heures par jour ?",
      answers: ["Non", "Oui"]
    },
    {
      question: "Combien d'heures dormez-vous en moyenne par nuit ?",
      answers: ["3-5h", "5-7h", "7-9h"]
    },
    {
      question: "Avez-vous des allergies ou des intolérances ?",
      answers: ["Aucune", "Lait", "Œufs", "Poisson", "Crustacés", "Arachides", "Soja", "Gluten", "Fruits à coque", "Céleri", "Moutarde", "Graines de sésame", "Anhydride sulfureux et sulfates", "Lupin", "Mollusques"]
    },
    {
      question: "Suivez-vous un régime particulier ?",
      answers: ["Aucun", "Sans gluten", "Vegan", "Végétarien", "Paléo", "Sans lait", "Cétogène", "Flexitarien", "Pescétarien"]
    },
    {
      question: "Êtes-vous concernée par l'une de ces situations ?",
      answers: ["Aucune", "Problèmes de foie", "Insuffisance rénale", "Accumulation anormale de fer", "Cancer hormono-dépendant", "Problèmes cardiaques", "Enceinte ou allaitante", "Hypocholestérolémiants", "Problèmes de thyroïde"]
    },
    {
      question: "Prenez-vous actuellement des médicaments ?",
      answers: ["Non", "Oui"]
    }
  ];

  const isLongAnswer = (answer) => {
    return answer.split(' ').length > 4;
  };

  return (
    <Box 
      sx={{ 
        transform: 'scale(1.5)', 
        mt: '27vh', 
        ml: '17vw',
        mb: '30vh',
        width: '52vw', 
        height: '90vh' 
      }}
    >
      {page < questions.length ? (
        <>
          <Typography variant="h6">{questions[page].question}</Typography>
          <FormControl component="fieldset" sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
            {page === 6 || page === 8 ? (
              // Multi-select with checkboxes
              questions[page].answers.map((answer, index) => (
                <FormControlLabel 
                  key={index}
                  control={
                    <Checkbox 
                      checked={flags[page].includes(index)} 
                      onChange={() => handleCheckboxChange(index)} 
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
                    padding: '6px 6px 6px 0px',
                    border: '1px solid black',
                    borderRadius: '4px',
                    backgroundColor: flags[page].includes(index) ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                    width: isLongAnswer(answer) ? '100%' : 'auto',
                    minWidth: '130px',
                    boxSizing: 'border-box',
                    transition: 'background-color 0.3s',
                    wordBreak: "break-word",
                    hyphens: "auto",
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    },
                  }}
                />
              ))
            ) : (
              // Single-select with radio buttons in a grid
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
                      width: isLongAnswer(answer) ? '100%' : 'auto',
                      minWidth: '130px',
                      boxSizing: 'border-box',
                      transition: 'background-color 0.3s',
                      wordBreak: 'break-word',
                      hyphens: "auto",
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
          <SuccessModal open={success} handleClose={()=>{setSuccess(false); window.location.reload(false)}}/>
        </>
      ) : null}
    </Box>
  );
};

export default Diagnostic;
