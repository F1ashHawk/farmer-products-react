import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,*::after,*::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1,h2,h3,h4 {
        font-family: ${(props) => props.theme.fontFamily};
        font-weight: 700;
        line-height: 115%;
    }

    h1 {
    font-size: 44px;
    }

    h2 {
    font-size: 36px;
    }

    h3 {
    font-size: 32px;
    }

    h4 {
    font-size: 24px;
    }
`;