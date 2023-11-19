import styled, { keyframes } from 'styled-components';
import theme from '../../../theme';


const fadeIn = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;


export const OverlayModal = styled.div`
    background-color: #00000080;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2023;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
`

export const LostPassword = styled.div`
    animation: ${fadeIn} .5s ease;
    background-color: #FFFFFF;
    border-radius: 0.6rem;
    z-index: 2024;
    width: 100%;
    max-width: 74.2rem;
    height: 46rem;
    display: flex;
    box-shadow: 0px 15px 30px -10px rgba(76, 74, 94, 0.10);
`

export const LeftSide = styled.div`
    background-image: url('./bg-lost-password.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 22.2rem;
    height: 100%;
`

export const RightSide = styled.div`
    width: 100%;
    padding: 3.2rem 5rem 10.1rem 5.4rem;
    position: relative;
    .btnLostPassword{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .closeIcon{
        width: 12px;
        height: 12px;
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
        transition: all .3s ease;
        &:hover{
            opacity: 50%;
        }
    }
`

export const TitleLostPassword = styled.div`
    margin-top: 5rem;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    color: ${theme.colors.dark700};
`

export const ParagraphLostPassword = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${theme.colors.dark50};
    width: 334px;

`

export const WrapperInputLostPassword = styled.div`
    margin-top: 1.4rem;
    margin-bottom: 2.8rem;
    width: 100%;
`

export const LabelLostPassword = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    color: #052D41;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
`

export const InputLostPassword = styled.input`
    margin-top: 0.5rem;
    width: 100%;
    box-shadow: 0px 24px 32px 0px rgba(205, 208, 231, 0.30);
    padding: 1.7rem 2rem;
    background-color: #FFFFFF;
    transition: all .5s ease;
    &::placeholder{
        font-size: 1.4rem;
        font-weight: 400;   
        color: ${theme.colors.dark50};
    }
    &:focus-visible{
        outline: none;
        box-shadow: 0px 24px 32px 0px rgba(205, 208, 231, 0.60);
    }
`