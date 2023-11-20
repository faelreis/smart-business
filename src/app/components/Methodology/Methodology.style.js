import styled from 'styled-components';
import theme from '../../theme';

export const SectionMethodology = styled.section`
    padding: 12rem 0rem;
    @media(max-width: 1000px){
        padding: 6.4rem 0rem;
    }
`

export const WrapperMethodology = styled.div`
    display: flex;
    gap: 13.6rem;
    @media(max-width: 1000px){
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
`

export const LeftSide = styled.div`
    width: 100%;
    max-width: 59.2rem;
    @media(max-width: 1000px){
        text-align: center;
        max-width: 46rem;
        font-size: 3.8rem;
    }
`

export const Tag = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.primaryMain}
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
    color: ${theme.colors.dark700};
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

export const WrapperImages = styled.div`
    width: 100%;
    max-width: 38.4rem;
    margin-top: 6.7rem;
    display: flex;
    align-items: end;
    gap: 3.2rem;
    &.desktop{
        display: none;
        @media(min-width: 1000px){
            display: flex;
        }
    }
    &.mobile{
        display: none;
        margin-top: 0rem;
        @media(max-width: 1000px){
            display: flex;
        }
    }
    @media(max-width: 1080px){
        .laptopMockup{
            max-width: 80%;
        }
    }
    @media(max-width: 600px){
        .laptopMockup{
            max-width: 70%;
        }
    }
    @media(max-width: 520px){
        .laptopMockup{
            max-width: 60%;
        }
    }
    @media(max-width: 400px){
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
        .laptopMockup{
            max-width: 100%;
        }
    }

`

export const WrapperSalesNumber = styled.div`
    padding: 2.4rem;
    box-shadow: 0px 20px 30px -20px rgba(94, 97, 118, 0.15);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const SalesNumber = styled.h3`
    margin-top: 0.8rem;
    font-size: 2.4rem;
    font-weight: 400;
    @media(max-width: 600px){
        font-size: 2.0rem;
    }
`

export const SalesDesc = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
`

export const RightSide = styled.div`
    margin-top: 5.9rem;
    width: 100%;
    max-width: 45.5rem;
`

export const WrapperSteps = styled.div`
    width: 100%;
    max-width: 45.5rem;
`

export const Step = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-bottom: 5.8rem;
    &:not(:last-child)::before{
        position: absolute;
        content: "";
        background: url('./line-step.svg');
        width: 0.2rem;
        height: 6.4rem;
        bottom: -6.5rem;
        left: 3.2rem;
    }
    @media(max-width: 470px){
        gap: 1.4rem;
    }
`

export const WrapperText = styled.div`

`

export const Box = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${theme.colors.primaryMain};
    width: 100%;
    max-width: 6.4rem;
    height: 6.4rem;
    border: 2px solid ${theme.colors.gray2};
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    &:last-child{
        margin-bottom: 0rem;
    }
`

export const StarBox = styled.div`
    background-color: ${theme.colors.primaryMain};
    width: 100%;
    max-width: 6.4rem;
    height: 6.4rem;
    outline: 5px solid #2E7AFF20;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const StepTitle = styled.h4`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 0.6rem;
    color: ${theme.colors.dark700};
    @media(max-width: 470px){
        font-size: 1.8rem;
    }
    @media(max-width: 370px){
        font-size: 1.6rem;
    }
`

export const StepDesc = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.dark300};
    @media(max-width: 1080px){
        font-size: 1.6rem;
    }
    @media(max-width: 470px){
        font-size: 1.4rem;
    }
    @media(max-width: 430px){
        font-size: 1.2rem;
    }
`