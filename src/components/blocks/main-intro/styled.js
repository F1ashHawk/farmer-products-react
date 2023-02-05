import styled from 'styled-components';
import farmer from '../../../assets/intro-back/farmer-male.svg';

export const Intro = styled.div`
    background-color: #D8ECFE;
    max-height: 600px;
    overflow: hidden;
`;

export const IntroWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &::after {
        content: '';
        display: block;
        background-image: url(${farmer});
        width: 446px;
        height: 627px;
        background-repeat: no-repeat;
        margin-top: 37px;
    }
`;

export const IntroTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 640px;
    padding: 183px 0;
`;

export const IntroHeading = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 115%;
`;

export const IntroText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    max-width: 538px;
`;

