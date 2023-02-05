import styled from "styled-components";

export const StyledButton = styled.a`
    display: block;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    background-color: ${(props) => props.theme.colorForButton};
    color: ${(props) => props.theme.colorWhite};
    padding: 17px 78px;
    border: 0;
    max-width: 314px;
    min-width: ${(props) => `${props.$minWidth}px` || "100%"};
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #FC7427;
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }

    &:active {
        background-color: #FC7427;
    }
`;