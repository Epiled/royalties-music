/// <reference types="vite-plugin-svgr/client" />
import styled from 'styled-components'
import video from '@assets/video/bg.mp4'
import bgImagem from '@assets/img/textura.png'

import Microfone from '@assets/svg/Microfone.svg'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import Plataforma from '../Plataforma'

const BannerEstilizado = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;

  &::before {
    content: '';
    position: absolute;
    background-image: 
      linear-gradient(transparent 0 61%, var(--darker) 83% 100%),
      url(${bgImagem}),
      linear-gradient(var(--color-black-60), var(--color-black-60));
    background-size: 1.2rem;
    width: 100%;
    height: 100vh;
    z-index: -1;
    filter: contrast(100%) grayscale(100%);
  }
`

const Titulo = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--lighter);
  font-size: 3.2rem;
  font-weight: 200;
  line-height: 4.5rem;

  @media screen and (min-width: 430px) {
    font-size: 4rem;
    line-height: 6rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 6.4rem;
    line-height: 10rem;
  }
`

const DestaqueTxt = styled.span`
  font-size: inherit;
  font-weight: 900;
  text-transform: uppercase;
  background: var(--color-gradient-animate);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 15s linear infinite;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`

const Plataformas = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 8rem);
  justify-content: center;
  gap: 3.4rem 8rem;
  margin: 2.5rem 0 4rem 0;

  @media screen and (min-width: 430px) {
    grid-template-columns: repeat(2, 10rem);
    margin: 4rem 0 5rem 0;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 15rem);
    gap: 5rem 11rem;
    margin: 5rem 0 8.5rem 0;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 12rem);
    gap: 4.5rem;
    margin: 4rem 0 3rem 0;
  }
`

const Buscador = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  position: relative;
  max-width: 35rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-color: var(--color-black-60);
    border-radius: 5rem;
    flex-direction: row;
    margin: 0 auto;
    max-width: 54rem;
    width: 100%;
    height: 5rem;
    gap: 0;
  }
`

const BordaGradiente = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0.3rem;
  border-radius: 5rem;
  background: var(--color-gradient-animate);
  background-size: 400% 400%;
  animation: gradient 15s linear infinite;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`

const CampoBusca = styled.input`
  background-color: var(--color-black-60);
  background-image: url(${Microfone});
  background-position: 1.4rem 0.75rem;
  background-size: 1.8rem;
  background-repeat: no-repeat;

  border-radius: 5rem;
  border: 0;
  outline: 0;

  color: var(--lighter);
  font-size: 1.2rem;
  font-weight: 200;
  padding-left: 4rem;
  width: 100%;
  height: 3.5rem;

  &::placeholder {
    color: var(--lighter);
  }

  @media screen and (min-width: 430px) {
    background-position: 1.4rem 1.5rem;
    font-size: 1.6rem;
    height: 5rem;
  }

  @media screen and (min-width: 768px) {
    height: -webkit-fill-available;
    padding-right: 16rem;
    background-position: 1.4rem 1.2rem
  }
`

const BotaoBusca = styled.button`
  background: var(--color-gradient-animate);
  color: var(--lighter);
  border: 0;
  border-radius: 5rem;
  font-size: 1.4rem;
  font-weight: 900;
  width: 13.5rem;
  height: 3rem;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;
  background-size: 400% 400%;
  animation: gradient 15s linear infinite;

  @media screen and (min-width: 768px) {
    width: 14.8rem;
    height: 100%;
    position: absolute;
    right: 0;
  }
`

const Menssagem = styled(Link)`
  color: var(--lighter);
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  margin-top: 4rem;
`

const ListaPlataformas = [
  {
    'id': 1,
    'nome': 'AmazonMusic',
  },
  {
    'id': 2,
    'nome': 'AppleMusic',
  },
  {
    'id': 3,
    'nome': 'Deezer',
  },
  {
    'id': 4,
    'nome': 'Spotify',
  },
  {
    'id': 5,
    'nome': 'TikTok',
  },
  {
    'id': 6,
    'nome': 'YoutubeMusic',
  }
]

const Banner = () => {

  const [resultado, setResultado] = useState('');
  const [busca, setBusca] = useState('');

  return (
    <BannerEstilizado>

      <Titulo>
        <span>
          Sua<DestaqueTxt> música</DestaqueTxt>
        </span>
        <span>
          Sua<DestaqueTxt> arte</DestaqueTxt>
        </span>
        <span>
          Seus<DestaqueTxt> Royalties</DestaqueTxt>
        </span>
      </Titulo>

      <Plataformas>
        {ListaPlataformas.map((item) => {
          return <Plataforma key={item.id} busca={resultado} {...item} />
        })}
      </Plataformas>

      <Buscador>
        <BordaGradiente>
          <CampoBusca
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder='Consulte seu nome ou múscia'
          />
        </BordaGradiente>
        <BotaoBusca onClick={() => setResultado(busca)}>
          Buscar
        </BotaoBusca>
      </Buscador>

      {busca &&
        <Menssagem to={'/'}>
          Parece que existir valores para o seu resgate, click aqui e Entre em contato com nossa equipe
        </Menssagem>
      }

      <Video autoPlay muted>
        <source src={video} type="video/mp4" />
      </Video>

    </BannerEstilizado>
  )
}

export default Banner