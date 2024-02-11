import styled from 'styled-components'

import AmazonMusic from '@assets/svg/Plataformas/AmazonMusic.svg'
import AppleMusic from '@assets/svg/Plataformas/AppleMusic.svg'
import Deezer from '@assets/svg/Plataformas/Deezer.svg'
import Spotify from '@assets/svg/Plataformas/Spotify.svg'
import TikTok from '@assets/svg/Plataformas/TikTok.svg'
import YoutubeMusic from '@assets/svg/Plataformas/YoutubeMusic.svg'

import dollar from '@assets/svg/dollar.svg'
import confirmado from '@assets/svg/confirmado.svg'
import negado from '@assets/svg/negado.svg'

const PlataformaWrapper = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 8rem;
  }
`

const PlataformaLogo = styled.img`
  height: 2rem;

  @media screen and (min-width: 430px) {
    height: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    height: 3rem;
  }
`

const IconContainer = styled.div``

const Icon = styled.img<{animate?: boolean}>`
  width: 2rem;
  height: 2rem;
  animation: 
    ${props => props.animate ? 'pulsant .5s ease infinite, fade-in 3s forwards' : 'fade-in 5s forwards'};

  @media screen and (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`

type PlataformasMapType = {
  [key: string]: string;
};

const PlataformasMap: PlataformasMapType = {
  'AmazonMusic': AmazonMusic,
  'AppleMusic': AppleMusic,
  'Deezer': Deezer,
  'Spotify': Spotify,
  'TikTok': TikTok,
  'YoutubeMusic': YoutubeMusic,
};

interface IPlataforma {
  nome: string,
  busca: string,
}

const Plataforma = ({ nome, busca }: IPlataforma) => {
  return (
    <PlataformaWrapper>
      <PlataformaLogo src={PlataformasMap[nome]} />
      <IconContainer>
        {busca ?
          <>
            <Icon animate={true} src={dollar} />
            <Icon src={confirmado} />
          </>
          :
          <Icon src={negado} />
        }
      </IconContainer>
    </PlataformaWrapper>
  )
}

export default Plataforma