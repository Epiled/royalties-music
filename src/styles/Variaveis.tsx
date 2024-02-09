import { createGlobalStyle } from "styled-components";

const Variaveis: React.FC = createGlobalStyle`
  :root {
    --lighter: #FFFFFF;
    --darker: #000000;

    --color-main: #6A00FF;
    --color-secondary: #FFC900;

    --color-gradient: linear-gradient(90deg, var(--color-main), var(--color-secondary));

    --color-txt: #1A1A1A;
  }
`

export default Variaveis;