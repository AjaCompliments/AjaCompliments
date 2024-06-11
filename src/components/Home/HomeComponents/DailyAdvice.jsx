import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LINK_TO_BACKEND } from '../../../variables';

const DailyAdvice = (props) => {
  const [adviceList, setAdviceList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get(`${LINK_TO_BACKEND}/astuces/getAll`);
      setAdviceList(response.data);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % adviceList.length);
    }, 7000); // Change every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [adviceList.length]);

  const currentAdvice = adviceList[currentIndex] || { astuce: "Selon votre suivi, AJA vous recommande de faire 30 minutes de marche et de prendre du soleil" };

  return (
    <div
      style={{
        position: 'absolute',
        width: '79vw',
        height: '18vh',
        left: '5vw',
        top: '10vh',
        background: '#F1FFFF',
        border: '1px solid #3C676E',
        borderRadius: '16px',
        fontFamily: 'Epilogue',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '5vw',
        lineHeight: '6.5vw',
        textAlign: 'justify',
        color: '#2C2C2C',
        padding: '5vw',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h3 style={{ fontSize: '5vw', fontWeight: 800, marginLeft: '-43vw', marginTop: '0.9vh', marginBottom: '1.2vh' }}>
       {props.title?props.title:"Conseil du Jour !"}
      </h3>
      {currentAdvice.astuce}
    </div>
  );
};

export default DailyAdvice;

