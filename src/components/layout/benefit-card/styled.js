import styled from 'styled-components';

export const GreenCard = styled.li`
    background-color: #E1EDCE;
    padding: 22px 20px 20px;
    min-height: 197px;
    width: 540px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const RedCard = styled.li`
    background-color: #F8DDD7;
    padding: 22px 20px 20px;
    min-height: 197px;
    width: 540px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: ${(props) => props.theme.fontFamily};
`;

export const CardHeading = styled.div`
    display: flex;
    gap: 20px;
`;

export const CardTitle = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
`;

export const CategoryGreen = styled.span`
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    padding: 2px 10px;
    background-color: #88AA4D;
    color: #ffffff;
`;

export const CategoryRed = styled.span`
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    padding: 2px 10px;
    background-color: #F75531;
    color: #ffffff;
`;

export const CardName = styled.h5`
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
`;

export const CardText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
`;