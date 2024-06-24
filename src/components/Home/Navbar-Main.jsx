import React, { useState, useEffect } from 'react';



import axios from 'axios';
import { makeStyles } from '@mui/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Grid, Button, Card,Typography,List,ListItem ,CardContent,Avatar,Item,Box,Modal } from '@mui/material';

//home imports 
import WelcomeCard from './HomeComponents/WelcomeMessage';
import StartButton from './HomeComponents/Start';
import DailyAdvice from './HomeComponents/DailyAdvice';
import ConsultCard from './HomeComponents/ConsultCard';

//lib imports 
import WelcomeLib from './libraryComponents/WelcomeToLibrary';
import CustomSearchBar from './libraryComponents/SearchBar';
import CardComponent from './HomeComponents/Card';

//market imports
import MarketTitle from './Market components/MarketTitle';
import InLineGridItem from './Market components/InlineGrid';
import MrkBtn from './Market components/MrkBtn';
import MrkBtn2 from './Market components/MrkBtn2';


//stats imports
import StatsAvatar from './Stats/avatar';
import Chart from './Stats/chart';
import Toggles from './Stats/toggle';
import AdministrationWidget from './Stats/AdministrationWidget';
import ProfileAvatar from './profile/avatar';
import Logout from './profile/LogoutBtn';
import Motivation from './Stats/Motivational';
import SelfPromotion from './Stats/SelfPromotion';
import Vegetables from './Stats/vegetables';
//import Stats from './profile/stats';
import Biometr from './profile/biometr';
import CreateButton from './profile/CreateBtn';
import CreateButtonStats from './Stats/CreateBtnStt';

//chatbot imports 
import Chatbot from "react-chatbot-kit";


import config from "../../chatbot/configs/chatbotConfig";
import MessageParser from "../../chatbot/chatbot/MessageParser";
import ActionProvider from "../../chatbot/chatbot/ActionProvider";
import "../../chatbot/chatbot.css"
import IframeComponent from './Stats/iframe';
import DoctorsPopover from './popovers/docPopover';
import DoctorsSmsPopover from './popovers/docSMS';
import ComplimentsModal from './Market components/complimentsModal';
import { LINK_TO_BACKEND } from '../../variables';
const theme = createTheme({
    typography: {
        fontFamily: [
        //   'YourCustomFont', // Replace 'YourCustomFont' with the name of your custom font
          'Arial', // Fallback font
          'sans-serif',
        ].join(','),
        color:'#3C676E'
      },
  palette: {
    primary: {
      light: '#3C676E',
      main: '#F6EDE4',
      dark: '#44A5A5',
      contrastText: '#3C676E',
    },
    secondary: {
      light: '#F6EDE4',
      main: '#3C676E',
      dark: '#44A5A5',
      contrastText: '#F6EDE4',
    },
  },
});


const useStyles = makeStyles({
    root: {
      width: '52vh',
      position: 'fixed',
      bottom: 10,
      background:"transparent",
      opacity:100,
    },
    circle: {
        width: '16vw',
        height: '16vw',
        borderRadius: '50%',
        backgroundColor: '#3C676E',
        position: 'absolute',
        transition: 'left 0.3s ease',
      },
      
  });
const Navbar = (props) => {
    const [username,setUsername]=useState("")
    const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [botStarted,setBotStart] = useState(false); 

  //is lib search bar empty
  const [isEmpty,setIsEmpty]=useState(false)

  const [circleLeft, setCircleLeft] = useState(20);

  const handleLogoClick = (index) => {
    setValue(index);

    // Calculate the left position for the circle based on the index of the clicked logo
    const circlePosition = index * 20; // Assuming each logo takes 25% of the width
    setCircleLeft(circlePosition);
  };
//global variables
            //user credentials




//variables for home
const [DocOpen,setDocOpen]=useState(false)

//variables for library
const [query,setQuery]=useState("")
const [smsOpen,setSmsOpen]=useState(false)
const [compliments, setCompliments] = useState([]);
const [storedCompliments,setStoredCompliments]=useState([]);
const fetchCompliments = async () => {
  try {
    const response = await axios.get(`${LINK_TO_BACKEND}/compliments/fetchAll`);
    setCompliments(response.data);
  } catch (error) {
    console.error('Error fetching compliments:', error);
  }
};
const fetchAndStoreCompliments = async () => {
  try {
    // Fetch newPrescriptions from localStorage
    const newPrescriptions = localStorage.getItem('newPrescriptions');
    const uploadedPrescriptions = JSON.parse(localStorage.getItem('USR')).newrescriptions.split(",")
    console.log("parsed newrescriptions",uploadedPrescriptions)
    if (!newPrescriptions&&!uploadedPrescriptions) return; // If newPrescriptions is not set, exit early

    // Fetch all compliments from the provided URL
    const response = await axios.get(`${LINK_TO_BACKEND}/compliments/fetchAll`);
    const allCompliments = response.data;

    // Filter compliments based on newPrescriptions
    const filteredCompliments = newPrescriptions?allCompliments.filter(compliment =>
      newPrescriptions.includes(compliment.complimentname)):uploadedPrescriptions?allCompliments.filter(compliment =>uploadedPrescriptions.includes(compliment.complimentname)
    ):null;

    // Store the filtered compliments in local storage
    localStorage.setItem('compliments', JSON.stringify(filteredCompliments));
  } catch (error) {
    console.error('Error fetching and storing compliments:', error);
  }
};

useEffect(() => {

  fetchAndStoreCompliments();

}, []);







useEffect(() => {
  // Check if 'compliments' exists in localStorage
  let storedCompliments = JSON.parse(localStorage.getItem('compliments'));

  // If it doesn't exist, initialize it as an empty array
  if (!storedCompliments) {
    storedCompliments = [];
    localStorage.setItem('compliments', JSON.stringify(storedCompliments));
  }

  setStoredCompliments(storedCompliments);
}, []);

useEffect(() => {
  fetchCompliments();
}, []);
const filteredCompliments = compliments.filter(compliment =>
  compliment.complimentname.toLowerCase().includes(query.toLowerCase()) ||
  compliment.category.toLowerCase().includes(query.toLowerCase()) ||
  compliment.counterFlags.toLowerCase().includes(query.toLowerCase())
);
const hc= () => {
  const userData = JSON.parse(localStorage.getItem('USR'));
  console.log("usrdata",userData)
  if (userData && userData.healthcomplications) {
      const complicationIndexes = JSON.parse(userData.healthcomplications);
      console.log("indexes",complicationIndexes)
     axios.get(`${LINK_TO_BACKEND}/questions/getAll`)
          .then(response => {
              const allQuestions = response.data;
              console.log("allquestions",allQuestions)
              const complications = complicationIndexes.map(index => JSON.parse(allQuestions[7].answears)[index]);
              console.log("parsed",JSON.parse(allQuestions[7].answears));
              setHealthComplications(complications);
          })
          .catch(error => {
              console.error('Error fetching questions:', error);
          });
  }
}
useEffect(()=>{hc()}, []);

//variables for marketplace
const [showCart,setShowCart]=useState(false)
const [showObjective,setShowObjective]=useState(false)
const [achats,setAchats]=useState(false)

//variables for chart
const heartwidget=["iframe","energie","sommeil"];
const [showChart,setShowChart]=useState(false)


//variables for profile
const topOffsetPrescMed = '-19vh'; // Offset for Presc Med
const topOffsetATCD = '-28vh'; // Offset for ATCD
const [user, setUser] = useState(null);
const [bmi, setBmi] = useState(null);
const [age, setAge] = useState(22); // Set this to the actual age when you add it
const [openPrescMed, setOpenPrescMed] = useState(false);
const [openATCD, setOpenATCD] = useState(false);
const [pastPrescriptions, setPastPrescriptions] = useState([]);
const [healthComplications, setHealthComplications] = useState([]);

useEffect( () => {
  const userData = JSON.parse(localStorage.getItem('USR'));
  if (userData.pastprescriptions) {
    setUser(userData);
    const heightInMeters = userData.height / 100;
    const calculatedBmi = (userData.weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);
    setPastPrescriptions(userData.pastprescriptions.split(', '));
    console.log("usrdata.healthcomplications",userData.healthomplications)
    setHealthComplications(userData.healthcomplications);//as an array
    setAge(userData.age); // Adjust as needed when you add age to localStorage
  }
}, []);

const handleOpenPrescMed = () => setOpenPrescMed(true);
const handleClosePrescMed = () => setOpenPrescMed(false);

const handleOpenATCD = () => healthComplications.length?setOpenATCD(true):null;
const handleCloseATCD = () => setOpenATCD(false);





  return (<ThemeProvider theme={theme}>


    <div style={{ //height: '100vh',

position: "relative",
width: "100vw",
height: value===4? "145vh":value===5?"110vh":"100vh",

background: "#F6EDE4",
"border radius": "40px",

    }}>



      <div style={{
        /* Ellipse 113 */
zIndex:0,
position: "absolute",
width: "117vw",
height:"58vh",
left: "-15vw",
top: "-15vh",
borderRadius:"50% 0% 0% 50% ",
background: "linear-gradient(145.63deg, #44A5A5 12.8%, #91FCFC 12.81%, rgba(255, 255, 255, 0) 94.92%)",

    }}>







    
    </div> {/* end of eclipse*/}

   
    
<BottomNavigation style={{"margin-left":"-2vw","margin-bottom":"-1vh",backgroundColor:"#F6EDE4","z-index":"5","height":"10vh"}}
      value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
      onChange={(event, newValue) => handleLogoClick(newValue)}
      showLabels={false}
      className={classes.root}
    >
        
        <div className={classes.circle} style={{"margin-left":"-18.6vw", left: `${circleLeft}%`,bottom:8 }}></div>
      <BottomNavigationAction label="Accueil" icon={<HomeOutlinedIcon fontSize="large" />} />
      <BottomNavigationAction label="Libraire" icon={<BookOutlinedIcon  fontSize="large" />} />
      <BottomNavigationAction label="Marché" icon={<StoreOutlinedIcon  fontSize="large"/>} />
      <BottomNavigationAction label="Suivi" icon={<BarChartOutlinedIcon  fontSize="large"/>} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleOutlinedIcon fontSize="large" />} />
      
    </BottomNavigation>


    {value===1? // case : screen 1 home : chatbot
<Grid sx={10}> 
{!botStarted?<List sx={10}>
  
        <ListItem>
            <WelcomeCard username={props.user?props.user:"user"}/>
        </ListItem>
        <ListItem>
          <StartButton callback={()=>{setBotStart(true)}} />
        </ListItem>
        <ListItem>
          <DailyAdvice title="" advice=""/>
        </ListItem>
        <ListItem>
          <ConsultCard callback={()=>{setDocOpen(true)}}/>
          <DoctorsPopover open={DocOpen} setOpen={setDocOpen}/>
        </ListItem>


   
     </List>:<div style={{height:"10vh",width:"99vw",zIndex:5}}><Chatbot 
           config={config}  
          messageParser={MessageParser}
         actionProvider={ActionProvider}    
           /></div>}
</Grid>
:value===2? // case : screen 2 library : search through compliments
<Grid sx={10}> 
    <List sx={10}>
        <ListItem sx={10}>
        <WelcomeLib/>
        </ListItem>
        <ListItem sx={10}>
        <CustomSearchBar value={query} onChange={(event)=>{setQuery(event.target.value)}} callback={()=>{}}/>
        </ListItem>
       
      



      </List>
      {query.length?
         <div style={{
          display:"grid",
          "grid-template-columns": "auto auto ",
          maxHeight:"110vh",
          maxWidth:"100vw",
          marginLeft:"-2vw",
          background: "#F6EDE4",
          paddingBottom:"24vh",
          padding:"3vw",
         }}>
          {/* <div style={{ 
  padding: "2.5vw",}}>
          <CardComponent prise={} category={} complimentname={} picture={}/>
             </div> */}
             {filteredCompliments.length ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          maxHeight: "90vh",
          maxWidth: "100vw",
          background: "#F6EDE4",
          paddingBottom: "24vh",
          padding: "3vw",
        }}>
          {filteredCompliments.map((compliment, index) => (
            <div key={index} style={{ padding: "2.5vw" }}>
              <CardComponent
                prise={compliment.prise}
                category={compliment.category}
                complimentname={compliment.complimentname}
                picture={compliment.picture}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No compliments found</p>
      )}
          
          
         
         </div>
:<div style={{position:"absolute",marginTop:"-33vh",marginLeft:"3.4vw"}}><ConsultCard title="Poser  une  Question!" subtitle=" " hideArrow={true} callback={()=>{setSmsOpen(true)}}/>
<div style={{position:"relative",marginLeft:"-3.4vw",marginTop:"-5vh"}}>
  <DailyAdvice title="Le saviez vous?" advice="prendre une cure de vetamine D diminue le risque
  d'osteoporose de 15% et risque de depressoin de 10%"/></div></div>}
  <DoctorsSmsPopover open={smsOpen} setOpen={setSmsOpen}/>
</Grid>
:value===3? // case : screen 3 market : see added to cart items
<Grid sx={10}> 
    <List sx={10}>
        <ListItem>
          <MarketTitle/>
        </ListItem>
        <ListItem>
        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={2}>
      {storedCompliments.length?storedCompliments.map((compliment, index) => (
        <Grid item key={index}>
          <InLineGridItem img={compliment.picture} title={compliment.complimentname} />
        </Grid>
      )):null}
    </Grid>
<ComplimentsModal open={achats} handleClose={()=>{setAchats(false)}} compliments={storedCompliments}/>

      </ListItem>
      <ListItem>
         
      <div style={{marginTop:"10vh",padding:"2vw"}}>
          <MrkBtn title="Acceder a l'achat" callback={()=>{setAchats(true)}}/>
          </div>
          </ListItem>
          <ListItem>
          <div style={{padding:"2vw",marginTop:"-1vh"}}>
          <MrkBtn2 title="Ajouter un Objectif" callback={()=>{alert("coming soon")}}/>
          </div>
          </ListItem>
     
        



    </List>
</Grid>
:value===4? // case : screen 4 stats  : see charts 
<Grid sx={10}> 
    <List sx={10}>
        <ListItem sx={10}>
          <StatsAvatar avatar="" username={props.user} usersubtitle=""/>
        </ListItem>
        <ListItem>
          <div style={{width:"80vw",marginTop:"-1vh",marginLeft:"10vw",borderRadius:"50%",scale:"70%"}}>
          {/* <Card sx={12}> */}
           <Toggles disabled1={true} disabled2={true} disabled3={false} callback={()=>{}}/>
          {/* </Card> */}
          </div>
        </ListItem>
       <ListItem>
        <div style={{marginTop:"-10vh"}}>
       {showChart?<Chart/>:null}   {/*dont forget to add switchbtn between screens*/}
        </div>
        
        <IframeComponent opacity={true}/>
        
       </ListItem>
      
       <ListItem>
       {storedCompliments.length?<>
       <div style={{zIndex:5,marginTop:"25.8vh"}}>
        <Motivation/>
        </div>
       
        <AdministrationWidget storedCompliments={storedCompliments}/></>:null
      }
       </ListItem>
        
       <div style={{marginTop:"32vh",scale:"94%"}}>
        <SelfPromotion/>
        
        </div>
<div style={{position:"absoulte",bottom:storedCompliments.length?"10vh":"0vh"}}>

<Vegetables/>


<div style={{marginTop:"20vh",  marginBottom:"10vh",}}>
<CreateButtonStats callback={()=>{handleLogoClick(1)}}/>
</div>
</div>
     </List>
</Grid>
:value===5? // case : screen 5 profile ; profile screen is gonna include an avatar
// a log out button; a
<Grid sx={10}> 
    <List sx={10}>
        <ListItem sx={10}>
<ProfileAvatar username={props.user}/>
        </ListItem>
        <ListItem sx={10}>
          <div style={{scale:"80%",marginTop:"-17vh",marginLeft:"68vw"}}>
<Logout callback={()=>{props.tokenCallback("");localStorage.removeItem("USR");localStorage.removeItem('token');window.location.reload(false)}}/>
</div>
        </ListItem>
<ListItem>
  <div style={{marginTop:"-7vh",marginLeft:"-5vw",scale:"90%",transform:"scaleY(1)"}}>
  <Box sx={{ position: 'absolute', width: '97.4vw', height: '51.89vh', left: '3.21vw', top: '7vh' }}>
        {/* Age */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: '0vh' }}>
          <img src={require("./AGE.png")} alt="Age Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw' ,marginLeft:"-18vw"}} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            Age
          </Typography>
        </Box>
        <Typography sx={{ position: 'absolute', width: '4.87vw', height: '4.72vh', left: '89.5vw', top: '1vh', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 700, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
          {age}
        </Typography>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: '6vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: '3vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* BMI */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: '6vh' }}>
          <img src={require("./BMI.png")} alt="BMI Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            BMI
          </Typography>
        </Box>
        <Typography sx={{ position: 'absolute', width: '8.68vw', height: '4.72vh', left: '89.3vw', top: '7vh', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 700, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
          {bmi}
        </Typography>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: '12vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: '9vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* Presc Med */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: `calc(32vh + ${topOffsetPrescMed})` }}>
          <img src={require("./prescmed.png")} alt="Presc Med Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            Presc Med
          </Typography>
          <Button sx={{ position:"absolute",marginLeft: '59.5vw',zIndex:5,color:"#000"  }} onClick={handleOpenPrescMed}>➔</Button>
        </Box>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: `calc(38vh + ${topOffsetPrescMed})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: `calc(35vh + ${topOffsetPrescMed})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* ATCD */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: `calc(48vh + ${topOffsetATCD})` }}>
          <img src={require("./atcd.png")} alt="ATCD Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            ATCD
          </Typography>
          <Button sx={{ marginLeft: '56vw',zIndex:5,color:"#000" }} onClick={handleOpenATCD}>➔</Button>
        </Box>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: `calc(54vh + ${topOffsetATCD})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: `calc(51vh + ${topOffsetATCD})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* Presc Med Modal */}
        <Modal open={openPrescMed} onClose={handleClosePrescMed}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              Past Prescriptions
            </Typography>
            {pastPrescriptions?
            <ul>
              {pastPrescriptions.map((presc, index) => (
                <li key={index}>{presc}</li>
              ))}
            </ul>:null
  }
          </Box>
        </Modal>
  
        {/* ATCD Modal */}
        <Modal open={openATCD} onClose={handleCloseATCD}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              Health Complications
            </Typography>
          
            <List>
              {healthComplications&&openATCD?healthComplications.map((comp) => (
                <ListItem>{comp}</ListItem>)):null}
            </List>

          </Box>
        </Modal>
      </Box>
  </div>
</ListItem>
<div style={{marginTop:"27vh",scale:"94%"}}>
        <SelfPromotion/>
        
        </div>
<div style={{marginTop:"-40vh"}}>
<Biometr/>
</div>
<div style={{marginTop:"20vh"}}>
<CreateButton callback={()=>{handleLogoClick(1)}}/>
</div>


     </List>
</Grid>
:null}
   </div>
  
    </ThemeProvider>
  );
}

export default Navbar;