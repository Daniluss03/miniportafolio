import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, } from 'react-icons/ai';
import Modal from '../Modal/Modal'; // Asegúrate de crear este componente
import Home from '../pages/home'; // Asegúrate de crear este componente
import Contact from '../pages/Contact'; // Asegúrate de crear este componente
import Proyects from '../pages/Proyects';
const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const navItems = [

    { icon: AiOutlineProject, name: "Proyects", component: Proyects },
    { icon: AiOutlineHome, name: "Inicio", component: Home },
    { icon: AiOutlineUser, name: "About me", component: Contact },
  
  ];

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <NavContainer>
        <div className="links">
          {navItems.map((item, index) => (
            <NavItem 
              key={index}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <button onClick={() => openModal(index)}>
                <item.icon />
                {hoveredIcon === index && <IconName>{item.name}</IconName>}
              </button>
            </NavItem>
          ))}
        </div>
      </NavContainer>
      {activeModal !== null && (
        <Modal onClose={closeModal}>
          {React.createElement(navItems[activeModal].component)}
        </Modal>
      )}
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #002040;
  border-radius: 50px;
  padding: 10px;
  z-index: 1000;

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .links {
      flex-direction: column;
    }
  }
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 15px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 24px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const IconName = styled.span`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  animation: fadeIn 0.3s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      top: calc(100% + 10px);
    }
  }
`;