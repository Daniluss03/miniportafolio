import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} Your Name. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #002040;
  color: #ffffff;
  border-radius:10px;
  padding: 20px ;
  width:100%;
  text-align: center;
  margin-top:10px;
`;

const SocialLinks = styled.div`
  margin-bottom: 10px;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #7498b6;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  margin: 0;
`;

export default Footer;