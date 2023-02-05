import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
`;

export const FooterText = styled.span`
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
`;