import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <Router>
      <AppContainer>
        <BubbleBackground>
          {[...Array(20)].map((_, index) => (
            <Bubble key={index} />
          ))}
        </BubbleBackground>
        {showWelcome && (
          <WelcomeOverlay $fadeOut={fadeOut}>
            <WelcomeText>
              <h1>Bienvenido a mi portafolio</h1>
              <h2>¿Qué te gustaría conocer de mí?</h2>
            </WelcomeText>
          </WelcomeOverlay>
        )}
        <Navbar />
     
        <ContentContainer>
          <Routes>
            
          </Routes>
        </ContentContainer>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const move = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(0.5);
    opacity: 0;
  }
`;

const BubbleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -50px;
  background-color: rgba(255, 165, 0, 0.3);
  border-radius: 50%;
  animation: ${move} 15s infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: 10%;
    width: 20%;
    height: 20%;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
  }

  ${[...Array(20)].map((_, index) => `
    &:nth-child(${index + 1}) {
      left: ${Math.random() * 100}%;
      width: ${20 + Math.random() * 60}px;
      height: ${20 + Math.random() * 60}px;
      animation-duration: ${10 + Math.random() * 20}s;
      animation-delay: ${-Math.random() * 20}s;
    }
  `).join('')}
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const WelcomeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.$fadeOut ? 0 : 1};
  transition: opacity 1s ease-out;
`;

const WelcomeText = styled.div`
  text-align: center;
  color: white;
  margin-top:-50vh;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: ${fadeIn} 1s ease-in 0.5s both;
  }
  
  h2 {
    font-size: 2rem;
    animation: ${fadeIn} 1s ease-in 1.5s both;
  }
`;

const ContentContainer = styled.div`
  padding-top: 80px; // Ajusta este valor según sea necesario
`;
