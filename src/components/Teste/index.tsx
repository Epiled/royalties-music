import { useState } from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
`;

const MenuHamburguer = styled.div`
  cursor: pointer;
`;

const MenuLinks = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: #333;
  color: white;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  clip-path: circle(0% at 100% 0%);
  transition: clip-path 0.5s ease-in-out;
`;

const MenuLink = styled.a`
  margin-bottom: 1rem;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ExemploMenu = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <MenuWrapper>
        <MenuHamburguer onClick={toggleMenu}>☰</MenuHamburguer>
      </MenuWrapper>
      <MenuLinks style={{ clipPath: `circle(${menuAberto ? '100%' : '0%'})` }}>
        <MenuLink href="#" onClick={toggleMenu}>
          Home
        </MenuLink>
        <MenuLink href="#" onClick={toggleMenu}>
          Sobre
        </MenuLink>
        <MenuLink href="#" onClick={toggleMenu}>
          Contato
        </MenuLink>
      </MenuLinks>
    </>
  );
};

export default ExemploMenu;