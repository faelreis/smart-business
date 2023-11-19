import styled from 'styled-components';
import theme from '../../theme';

export const SectionMethodology = styled.section`
    padding: 12rem 0rem;
`

export const WrapperMethodology = styled.div`
    display: flex;
    gap: 13.6rem;
`

export const LeftSide = styled.div`
    width: 100%;
    max-width: 59.2rem;
`

export const Tag = styled.span`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.primaryMain}
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 400;
    color: ${theme.colors.dark700}
`

export const WrapperImages = styled.div`
    margin-top: 6.7rem;
    display: flex;
    align-items: end;
    gap: 3.2rem;
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
`

export const SalesDesc = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
`

//Right
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
        /* border-left: 2px dashed #97A5FF; */
        width: 0.2rem;
        height: 6.4rem;
        bottom: -6.5rem;
        left: 3.2rem;
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
`

export const StepDesc = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${theme.colors.dark300};
`