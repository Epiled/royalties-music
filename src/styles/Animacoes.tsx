import { createGlobalStyle } from "styled-components";

const Animacoes: React.FC = createGlobalStyle`
  @keyframes gradient {
    0%{
      background-position:0% 50%
    }
    50%{
      background-position:100% 50%
    }
    100%{
      background-position:0% 50%
    }
  }
`

export default Animacoes;