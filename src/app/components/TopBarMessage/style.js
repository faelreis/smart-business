import styled from 'styled-components';
import theme from '../../theme';

export const StyledTopBarMessage = styled.div`
    background-color: ${theme.colors.dark700};
    padding: 0.6rem 0rem;
`;

export const WrapperTopBarMessage = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    span{
        flex-grow: 1;
        display: inline-block;
        color: ${theme.colors.gray1};
        font-size: 1.4rem;
        font-weight: 400;
        transition: opacity .3s ease;

        &:hover{
        opacity: 80%;
        cursor: pointer;
    }
    }
    strong{
        font-size: 1.4rem;
        text-decoration: underline;
        font-weight: 400;
    }

    .button--close{
        transition: all .3s ease-in-out;
        opacity: 50%;
        &:hover{
            cursor: pointer;
            opacity: 100%;
        }
    }

    @media(max-width: 450px){
        span{
            width: 250px;
        }
    }
    @media(max-width: 280px){
        span{
            width: 200px;
        }
    }
`