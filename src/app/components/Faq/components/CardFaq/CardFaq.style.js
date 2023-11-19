import styled from 'styled-components';
import theme from '../../../../theme';


export const Card = styled.a`
    padding: 5.7rem 4.7rem;
    background-color: ${theme.colors.gray1};
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        box-shadow: 0px 20px 30px -20px rgba(94, 97, 118, 0.30);
        background-color: #FFFFFF90;
    }
`

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    color: #140C40;
    margin: 2.7rem 0rem 0.5rem 0rem;
`

export const Description = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.dark300};
`