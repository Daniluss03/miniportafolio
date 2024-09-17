import React from 'react';
import styled, { keyframes } from 'styled-components';



const Modal = ({ children, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
     
    </ModalOverlay>
  );
};



const fadeIn = keyframes`
  from {
    opacity: 2;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
  height: 80%;
  max-width: 1200px;
  max-height: 800px;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1002;
  animation: ${fadeIn} 2s ease-out; // Cambiado de 0.3s a 0.8s
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
`;

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-200px);
    opacity: 0;
  }
`;

const BubblesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1000; /* Asegúrate de que las burbujas estén detrás del contenido */
`;

const Bubble = styled.div`
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${bubbleAnimation} 4s infinite;
  &:nth-child(1) {
    left: 20%;
    animation-duration: 4s;
  }
  &:nth-child(2) {
    left: 40%;
    animation-duration: 5s;
  }
  &:nth-child(3) {
    left: 60%;
    animation-duration: 6s;
  }
  &:nth-child(4) {
    left: 80%;
    animation-duration: 7s;
  }
  &:nth-child(5) {
    left: 50%;
    animation-duration: 8s;
  }
`;

export default Modal;
