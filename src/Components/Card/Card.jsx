import React, { useState } from 'react'
import styled from 'styled-components';
import { projectsData } from "../data/data";
import Footer from '../Footer/Footer';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Card = () => {
    const [flipped, setFlipped] = useState({});

    const handleFlip = (index) => {
        setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <CardWrapper>
            <TitleContainer>
                <Title>Mis Proyectos</Title>
            </TitleContainer>
            {projectsData.map((project, index) => (
                <FlipCard key={index}>
                    <FlipCardInner flipped={flipped[index]}>
                        <CardFront bgColor={project.bgColor} onClick={() => handleFlip(index)}>
                            <CardContent>                           
                                <Small>{project.title}</Small>
                                <CardImage src={project.image} alt={project.title} />
                            </CardContent>
                        </CardFront>
                        <CardBack bgColor={project.bgColor}>
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                                <CardButton onClick={project.onButtonClick}>
                                    {project.buttonText}
                                </CardButton>
                            </CardContent>
                            <FlipBackButton onClick={() => handleFlip(index)}>
                               
                            <AiOutlineArrowLeft/>
                            </FlipBackButton>
                        </CardBack>
                    </FlipCardInner>
                </FlipCard>
            ))}
            <Footer />
        </CardWrapper>
    );
}

export default Card;

const TitleContainer = styled.div`
  background-color: #002040; // Dark blue background
  padding: 20px;
  width: 100%;
  border-radius: 10px 10px 0 0; // Rounded top corners
`;

const Title = styled.h1`
  color: #ffffff; // White text
  text-align: center;
  font-size: 2rem;
  margin: 0;
 
  border-radius:20px;
`;
const CardImage = styled.img`
  width: 60%; 
  height: auto; 
  object-fit: cover;
  border-radius: 8px;
  margin-top: 10px; 
  display: block;
  margin-left: auto; 
  margin-right: auto; 

`;

const CardButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  margin: 10px auto 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #0056b3;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
background-color: #f0f5fa;
`;

const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px;
  position: relative;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFront = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.bgColor || '#e6f7ff'
  }
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
  animation: fadeIn 1s ease-in-out;

  // Add bubble animation
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: bubble 10s infinite;
  }

  &::before {
    width: 40px;
    height: 40px;
    bottom: 20%;
    left: 10%;
    animation-duration: 8s;
  }

  &::after {
    width: 60px;
    height: 60px;
    bottom: 10%;
    right: 10%;
    animation-duration: 12s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    50% {
      transform: translateY(-50px) scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100px) scale(1);
      opacity: 0;
    }
  }
`;

const CardBack = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.bgColor || '#e6f7ff'
  }
}))`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
`;

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
`;
const Small = styled.small`
  font-size: 0.8rem;
  color: #fff;
  display: block;
  margin-top: 10px;
`;



const CardContent = styled.div`
  text-align: center;
     background-color: #6c8eb4; 
     border-radius:20px;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin-bottom: 15px;
`;

const FlipBackButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

// Remove FishAnimation and related styles

