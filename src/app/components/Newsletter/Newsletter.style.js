import styled from 'styled-components';
import theme from '../../theme';

export const SectionNewsletter = styled.section`
    padding: 8.9rem 0rem 11.5rem 0rem;
    background-image: url('./bg-newsletter.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 828px){
        max-width: 6.4rem 0rem;
    }
`

export const WrapperNewsletter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Tag = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.primaryMain};
`

export const Title = styled.h2`
    color: ${theme.colors.gray1};
    font-size: 4rem;
    font-weight: 400;
    text-align: center;
    margin: 1.5rem 0rem 0.8rem 0rem;
    @media(max-width: 1000px){
        font-size: 3.8rem;
    }
    @media(max-width: 700px){
        font-size: 2.8rem;
    }
    @media(max-width: 375px){
        font-size: 2.4rem;
    }
`

export const Paragraph = styled.p`
    color: ${theme.colors.gray1};
    font-size: 1.6rem;
    font-weight: 400;
    width: 100%;
    max-width: 51.2rem;
    text-align: center;
`

export const WrapperInputNewsletter = styled.div`
    margin-top: 3.5rem;
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray1};
    padding: 1.1rem 1.223rem 1.1rem 2.05rem;
    width: 100%;
    max-width: 48.8rem;
`

export const InputNewsletter = styled.input`
    width: 100%;
    max-width: 28.7rem;
    margin-left: 1.4rem;
    margin-right: 0.8rem;
    background-color: ${theme.colors.gray1};
    &:focus{
        outline: none;
    }

    &::placeholder{
        font-size: 1.6rem;
        font-weight: 400;
    }
    @media(max-width: 500px){
        padding: 2rem;
    }
`

export const ButtonNewsletter = styled.button`
    padding: 1.3rem 2.4rem;
    background-color: ${theme.colors.primaryMain};
    color: ${theme.colors.gray1};
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: ${theme.colors.primaryDark};
    }
    @media(max-width: 500px){
        display: none;
    }
`

export const ButtonNewsletterMobile = styled.button`
    margin-top: 1.6rem;
    width: 100%;
    padding: 2rem;
    background-color: ${theme.colors.primaryMain};
    color: ${theme.colors.gray1};
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: ${theme.colors.primaryDark};
    }
    @media(min-width: 500px){
        display: none;
    }
`