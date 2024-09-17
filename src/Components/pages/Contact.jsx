import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el correo a tu Gmail
    // Por ejemplo, podrías usar un servicio como EmailJS o una API backend
    console.log('Formulario enviado:', formData);
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <Title>Contacto</Title>
        <Subtitle>Envía un mensaje directamente a mi Gmail</Subtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Enviar</Button>
        </Form>
        <SocialLinks>
          <LinkedInLink href="https://www.linkedin.com/in/danilo-rincon-2a1bb9217" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ marginRight: '0.5rem' }} />
            Conéctate conmigo en LinkedIn
          </LinkedInLink>
        </SocialLinks>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;


const ContactWrapper = styled.div`
  background-color: #002040;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 1rem; // Añadir margen horizontal
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0 0.5rem; // Reducir margen en móviles
  }
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%; // Asegurar que ocupe todo el ancho disponible
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #1a2a3a; // Azul oscuro para contrastar con el fondo blanco del contenedor
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #555;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;

const Button = styled.button`
  background-color: #0077b5;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const LinkedInLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #0077b5;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;