import React from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AWS from '../images/Aws.png';
import Azure from '../images/azure.png';
import Oracle from '../images/Oracle.png';
import ProfileImage from '../images/profile.jpeg'; // Asegúrate de tener esta imagen en tu carpeta de imágenes
import Footer from '../Footer/Footer';

const Home = () => {
    const skills = ['AWS', 'Python', 'Django', 'Django REST Framework', 'Azure'];
    const certifications = [
        { name: 'AWS Cloud practicioner', image: AWS },
        { name: 'Microsoft Azure Fundamentals', image: Azure },
        { name: 'Oracle Cloud Infrastructure', image: Oracle },
        // Añade más certificaciones según sea necesario
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '0px',
    };

    return (
        <HomeContainer>
            <TitleContainer>
                <Title>Un poco de mí</Title>
            </TitleContainer>
            <TitleContainerh3>
                <Titleh3>Sobre mi</Titleh3>
            </TitleContainerh3>

            <AboutMeContainer>
                <AboutMeSection>
                    <p>
                        I'm a systems engineering student at the Industrial University of Santander (UIS) with a deep interest in efficiently implementing scalable systems through Cloud practices. I have been immersed in the world of software development and cloud infrastructure management with AWS. Now, I am seeking an internship opportunity that allows me to apply and expand my skills in a professional environment.
                    </p>
                </AboutMeSection>
                <ProfileImageContainer>
                    <img src={ProfileImage} alt="Profile" />
                </ProfileImageContainer>
            </AboutMeContainer>
            <TitleContainerh3>
                <Titleh3>Mis Habilidades</Titleh3>
            </TitleContainerh3>
            <SkillsSection>
                <SkillsContainer>
                    {skills.map((skill, index) => (
                        <SkillCircle key={index}>
                            <span>{skill}</span>
                        </SkillCircle>
                    ))}
                </SkillsContainer>
            </SkillsSection>
            <TitleContainerh3>
                <Titleh3>Mis Certificaciones</Titleh3>
            </TitleContainerh3>
            <CertificationsSection>
                <StyledSlider {...sliderSettings}>
                    {certifications.map((cert, index) => (
                        <CertificationSlide key={index}>
                            <div className="image-container">
                                <img src={cert.image} alt={cert.name} />
                            </div>
                            <p>{cert.name}</p>
                        </CertificationSlide>
                    ))}
                </StyledSlider>
            </CertificationsSection>
            <Footer />
        </HomeContainer>
    );
};

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const HomeContainer = styled.div`
  padding: 20px;
  background-color: #fff; // Color vainilla claro
  border-radius: 2%;
`;

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutMeSection = styled.div`
  flex: 1;
  background-color: #f0f5fa;
  margin-top: 10px;
  color: #002040;
  padding: 20px;
  border-radius: 10px;
  margin-right: 20px;
  box-shadow: 0 4px 8px rgba(0, 32, 64, 0.1);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ProfileImageContainer = styled.div`
  flex: 0 0 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  position: relative; // Add this line to position bubbles absolutely

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-left: auto;  // Add this line to center the image
    margin-right: auto; // Add this line to center the image
  }

  // Add bubble elements
  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    animation: ${bubbleAnimation} 3s infinite ease-in-out;
  }

  &::before {
    left: 20%;
    animation-duration: 4s;
    animation-delay: 1s;
  }

  &::after {
    left: 60%;
    animation-duration: 5s;
    animation-delay: 2s;
  }
`;

const SkillsSection = styled.div`
  margin-top:10px;
  width:100%;
  margin-bottom: 2rem;
  background-color: #002040;
  color:#fff;
  padding: 20px;
  border-radius: 10px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  color:#002040;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  span {
    word-wrap: break-word;
  }
`;

const CertificationsSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 25px;
  background-color: #fff // Color vainilla claro
  border-radius: 10px;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    background-color: #ff8000;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-prev {
    left: -25px;
  }

  .slick-next {
    right: -25px;
  }

  .slick-prev:before, .slick-next:before {
    color: black;
  }

  @media (max-width: 768px) {
    .slick-list {
      margin: 0;
    }

    .slick-slide > div {
      padding: 0;
    }

    .slick-prev, .slick-next {
      display: none;
    }
  }
`;

const CertificationSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%; // Asegura que el slide ocupe todo el ancho disponible

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%; // Asegura que el contenedor de la imagen ocupe todo el ancho
    margin-bottom: 10px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  p {
    font-size: 0.9rem;
    font-weight: bold;
    text-align: center;
    margin: 0;
    width: 100%; // Asegura que el texto ocupe todo el ancho
  }

  @media (max-width: 768px) {
    height: auto;
    .image-container {
      height: auto;
    }
  }
`;

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
`;

const TitleContainerh3 = styled.div`
  background-color:#004080;; // Light grayish blue background
 
  padding: 20px;
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
`;
const Titleh3 = styled.h3`
  color:#fff;
  text-align: lefth;
  font-size: 1rem;
  margin: 0;
`;
export default Home;