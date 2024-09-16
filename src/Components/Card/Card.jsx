import React, { useState } from 'react'
import styled from 'styled-components';
import { projectsData } from "../data/data";
import Footer from '../Footer/Footer';

const Card = () => {
    const [flipped, setFlipped] = useState({});

    const handleFlip = (index) => {
        setFlipped(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <CardWrapper>
            <TitleContainer>

                <Title>

                    Mis Proyectos
                </Title>
            </TitleContainer>
            {projectsData.map((project, index) => (
                <FlipCard key={index} flipped={flipped[index]}>
                    <FlipCardInner flipped={flipped[index]}>
                        <CardFront bgColor={project.bgColor}>
                            <CardContent>                           
                                    <Title>{project.title}</Title>
                                <CardImage src={project.image} alt={project.title} />
                            </CardContent>
                        </CardFront>
                        <CardBack bgColor={project.bgColor}>
                            <CardContent>
                                <CardDescription>{project.description}</CardDescription>
                                <CardButton onClick={(e) => {
                                    e.stopPropagation();
                                    project.onButtonClick();
                                }}>{project.buttonText}</CardButton>
                            </CardContent>
                        </CardBack>
                    </FlipCardInner>
                    <ClickArea onClick={() => handleFlip(index)} />
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

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${props => props.bgColor || '#e6f7ff'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px; 
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${props => props.bgColor || '#e6f7ff'};
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

// Remove FishAnimation and related styles

