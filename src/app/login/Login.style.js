import styled from 'styled-components';
import theme from '../theme';

export const LoginPage = styled.section`
    height: 100vh;
    overflow: hidden;
`

export const WrapperLogin = styled.div`
    display: flex;
`

export const LeftSide = styled.div`
    width: 100%;
    max-width: 52.8rem;
    height: 100vh;
    background-color: ${theme.colors.primaryMain};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperInfosBrand = styled.div`
    padding: 8.8rem 11.2rem 0px 8.8rem;
`

export const Title = styled.h1`
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 125%;
    color: ${theme.colors.gray1};
    margin-top: 6.3rem;
    strong{
        font-weight: 600;
        font-size: 3.2rem;
    }
`

export const RightSide = styled.div`
    width: 100%;
    padding: 8.8rem 18.7rem 18.7rem 24.7rem;
    background-color: #FFFFFF;
    .icon-btn{
        font-size: 1.4rem;
        font-weight: 600;
        img{
            transform: rotate(-180deg);
        }
    }
`


export const TitleLogin = styled.h2`
    font-size: 3.2rem;
    font-weight: 40;
    color: ${theme.colors.dark200};
    margin-bottom: 3.8rem;
    margin-top: 8.1rem;
`

export const Form = styled.form`
    width: 100%;
    max-width: 47.8rem;
    .acessBtn{
        width: 100%;
        display: block;
        color: #FFFFFF;
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 3.5rem;
        text-align: center;
    }
`

export const WrapperInputs = styled.div`
    margin-bottom: 2.8rem;

`

export const LabelLogin = styled.label`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark50};
`

export const InputLogin = styled.input`
    width: 100%;
    padding: 1.7rem 2rem;
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.dark800};
    caret-color: ${theme.colors.primaryMain};
    border: 1.5px solid rgba(160, 170, 178, 0.40);
    background-color: #FFFFFF;
    transition: all .3s ease;
    &:focus-visible{
        outline: none;
        border: 1.5px solid rgba(29, 99, 255, 0.50);
    }

    &::placeholder{
        font-size: 14px;
        font-weight: 400;
    }
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2rem;

`

export const ButtonLostPassword = styled.span`
    cursor: pointer;
    color: ${theme.colors.primaryMain};
    font-size: 1.4rem;
    font-weight: 400;
    transition: all .3s ease;
    &:hover{
        text-decoration: underline;
        opacity: 70%;
    }
`

export const RememberPassword = styled.div`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark50};
    display: flex;
    align-items: center;
    gap: 0.8rem;
`

export const CheckInput = styled.input`
    border-radius: 3px;
    border: 0.15rem solid rgba(160, 170, 178, 0.40);
    background: #FFFFFF;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`

export const AnotherAcess = styled.div`

`

export const DividerLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;
    width: 100%;
    max-width: 47.8rem;
`

export const DivOr = styled.div`
    width: 100%;
    height: 0.1rem;
    background-color: #00000010;
`

export const SpanOr = styled.span`
    font-size: 1.4rem;
    font-weight: 400;
    color: #A9ABB7;
    background-color: #FFFFFF;
    padding: 0.3rem 1.3rem;
`

export const ButtonGoogle = styled.a`
    width: 100%;
    width: 47.8rem;
    background-color: #6D789F10;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 1.7rem 16.7rem 1.7rem 14.2rem;
    margin-bottom: 3.2rem;
    transition: all .3s ease;
    cursor: pointer;
    span{
        color: #5C6277;
        text-align: left;
        font-size: 1.4rem;
        font-weight: 400;
        width: 100%;
    }
    &:hover{
        background-color: #6D789F25;
    }
`

export const Register = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.dark100};
    transition: all .3s ease;
    cursor: pointer;
    strong{
        text-decoration: underline;
    }
    &:hover{
        opacity: 70%;
    }
`