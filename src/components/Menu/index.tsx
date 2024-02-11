/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom'
import Logo from '@assets/svg/logo.svg?react'
import Hamburguer from '@assets/svg/menu-burguer.svg?react'
import Close from '@assets/svg/menu-close.svg?react'
import styled from 'styled-components'
import { useState } from 'react'

interface IIcon {
  $visibilidade: boolean
  onClick?: (() => void) | undefined
}

const MenuEstilizado = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  z-index: 5;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    background-color: var(--lighter);
    max-height: 8rem;
    width: 100%;
  }
`

const BotoesContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 1.4rem;
  z-index: 1;
`

const BotaoMenu = styled(Hamburguer) <IIcon>`
  display: ${props => props.$visibilidade ? 'none' : 'block'};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const BotaoClose = styled(Close) <IIcon>`
  display: ${props => props.$visibilidade ? 'none' : 'block'};

  @media screen and (min-width: 1024px) {
    display: none;
  }
`

const MenuWrapper = styled.div <{ $visibilidade: boolean }>`
  color: var(--darker);
  max-width: 22.6rem;
  flex: 1;
  position: relative;
  top: 0;
  right: 0;


  @media screen and (min-width: 1024px) {
    display: flex;
    max-width: 94.4rem;
    width: 100%;
    height: 100%;
  }
`

const MenuClip = styled.div <{ $visibilidade: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  background: var(--lighter);
  height: 100vh;
  clip-path: ${props => props.$visibilidade ?
    'ellipse(10rem 10rem at 100% 0%)' :
    'ellipse(120vh 120vh at 100% 0%)'};
  transition: clip-path 1.5s ease-in-out;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 100%;
    clip-path: none;
  }
`

const LogoEstilizado = styled(Logo)`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 10rem;
  height: auto;

  @media screen and (min-width: 1024px) {
    position: static;
  }
`

const Navegacao = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 0 1.4rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
    padding: 0;
    margin-left: 8rem;
  }
`

const Opcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    max-width: none;
    gap: 2.8rem;
    align-items: center;
  }

  &:first-of-type {
    margin-top: 10.8rem;
    position: relative;

    @media screen and (min-width: 1024px) {
      margin: 0;
    }

    @media screen and (max-width: 1023px) {
      &::after {
        content: '';
        position: absolute;
        bottom: -3rem;
        left: 0;
        background-color: var(--darker);
        width: 100%;
        height: .3rem;
        border-radius: 1.5rem;
      }
    }
  }
`

const LinkEstilizado = styled(Link)`
  color: inherit;
  font-size: 2.4rem;
  font-weight: 900;
  text-transform: uppercase;
`

const SwitchContainer = styled.label`
  position: relative;
  width: 4.8rem;
  height: 2.5rem;
  align-self: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    width: calc(100% + 0.3rem);
    height: calc(100% + 0.3rem);
    background: var(--color-gradient-animate);
    background-size: 400% 400%;
    animation: gradient 15s linear infinite;
  }
`

const Bolinha = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--lighter);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 12.5rem;


  &:before {
    position: absolute;
    content: "";
    height: 2.3rem;
    width: 2.3rem;
    left: .1rem;
    bottom: .1rem;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 11.5rem;
    background: var(--color-gradient-animate);
    background-size: 400% 400%;
    animation: gradient 15s linear infinite;
  }
`

const Switch = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Bolinha} {
    background-color: var(--darker);
  }

  &:checked + ${Bolinha}::before {
    transform: translateX(2.3rem);
  }
`

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (

    <MenuEstilizado>

      <BotoesContainer>
        <BotaoMenu
          onClick={() => setMenuOpen(!menuOpen)}
          $visibilidade={menuOpen}
        />

        <BotaoClose
          onClick={() => setMenuOpen(!menuOpen)}
          $visibilidade={!menuOpen} />
      </BotoesContainer>

      <MenuWrapper $visibilidade={!menuOpen}>
        <LogoEstilizado />

        <MenuClip $visibilidade={!menuOpen}>
          <Navegacao>
            <Opcoes>
              <LinkEstilizado to={'/'}>Nosso serviço</LinkEstilizado>
              <LinkEstilizado to={'/'}>Contatos</LinkEstilizado>
            </Opcoes>
            <Opcoes>
              <LinkEstilizado to={'/'}>Login</LinkEstilizado>
              <LinkEstilizado to={'/'}>Cadastre-se</LinkEstilizado>
            </Opcoes>
          </Navegacao>

          <SwitchContainer>
            <Switch checked={isChecked} onChange={handleSwitchChange} type='checkbox' />
            <Bolinha />
          </SwitchContainer>
        </MenuClip>
      </MenuWrapper>
    </MenuEstilizado>
  )
}

export default Menu