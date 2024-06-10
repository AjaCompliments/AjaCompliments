import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  position: absolute;
  width: 44.4vh;
  height: 21.9vh;
  left: 6vw;
  top: 38vh;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(60, 103, 110, 1);
  border-radius: 1.6vh;
`;

const TopRectangle = styled.div`
  position: absolute;
  width: 44.4vh;
  height: 7.5vh;
  left: 0vh;
  top: 0vh;
  background: linear-gradient(180deg, rgba(209, 158, 142, 0.71) 0%, rgba(171, 228, 170, 0) 100%);
  border-radius: 1.6vh;
`;

const SmallRectangle = styled.div`
  position: absolute;
  width: 9.1vh;
  height: 3.8vh;
  left: 32.8vh;
  top: 1.9vh;
  background: #FFFFFF;
  box-shadow: 1px 0.1vh 0.2vh rgba(0, 0, 0, 0.5);
  border-radius: 1.2vh;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1.3vh;
  position: absolute;
  width: 28.8vh;
  height: 3vh;
  left: calc(50% - 28.8vh / 2);
  top: 11.7vh;
`;

const Title = styled.h1`
  font-size: 3.0vh;
  font-weight:500;
  margin-top: -9vh;
  margin-left: -5vh;
`;

const SubTitle = styled.h2`
  font-size: 1.5vh;
  margin: 0;
`;

const Fab = styled.div`
  background: transparent;
  border-radius: 50%;
  width: 9vh;
  height: 4vh;
  display: flex;
  font-weight:600;
  font-size:2vh;
  justify-content: center;
  align-items: center;
`;

const WeekDays = styled.div`
  display: flex;
  gap: 0.7vh;
  position: absolute;
  bottom: 2vh;
  left: 67%;
  transform: translateX(-50%);
  scale:160%
`;

const Day = styled.div`
  background: ${({ active }) => (active ? 'rgba(60, 103, 110, 1)' : 'transparent')};
  border-radius: 50%;
  width: 3vh;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vh;
  color: ${({ active }) => (active ? '#fff' : 'rgba(60, 103, 110, 1)')};
  font-weight:500;
  box-shadow: ${({ active }) => (active ? '0px 0.1vh 0.2vh rgba(0, 0, 0, 0.5)' : 'none')};
`;

const AdministrationWidget = ({ storedCompliments }) => {
  const [complimentIndex, setComplimentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setComplimentIndex((prevIndex) => (prevIndex + 1) % storedCompliments.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [storedCompliments]);

  const compliment = storedCompliments[complimentIndex] || {};

  const { tempsprise, prise } = compliment;

  const getPriseDays = () => {
    return prise.split('').map((day, index) => ({ day, index }));
  };

  return (
    <WidgetContainer>
      <TopRectangle />
      <SmallRectangle>
        <Fab>
          <span>{tempsprise || "1:00 AM"}</span>
        </Fab>
      </SmallRectangle>
      <Frame>
        <Title>Rappel de prise de : {compliment.complimentname || "complement"}</Title>
      </Frame>
      <WeekDays>
        {getPriseDays().map(({ day, index }) => (
          <Day key={index} active={day === '1'}>
            {['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'][index]}
          </Day>
        ))}
      </WeekDays>
    </WidgetContainer>
  );
};

export default AdministrationWidget;
