import styled from 'styled-components';
import theme from '../../theme';


export const SectionFaq = styled.section`
    padding: 14rem 0rem;
    @media (max-width: 828px){
        padding: 6.4rem 0rem;
    }
`

export const WrapperFaq = styled.div`

`

export const TopSide = styled.div`
    display: flex;
    gap: 12.9rem;
    @media (max-width: 828px){
        gap: 3.2rem;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
`

export const LeftSide = styled.div`
    width: 100%;
    max-width: 39.1rem;
    a{
        margin-bottom: 2.6rem;
    }
    @media (max-width: 828px){
        max-width: 49.1rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`


export const Tag = styled.h4`
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.primaryMain};
`

export const Title = styled.h2`
    color: ${theme.colors.dark700};
    font-size: 4.8rem;
    font-weight: 400;
    @media (max-width: 1000px){
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
    font-size: 2rem;
    font-weight: 400;
    color: ${theme.colors.dark500};
    margin-bottom: 4rem;
`


export const RightSide = styled.div`
    width: 100%;
    max-width: 69.6rem;
`

export const BotttomSide = styled.div`
    margin-top: 7.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;
    text-align: center;
    @media (max-width: 828px){
        flex-direction: column;
    }
`