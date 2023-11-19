import styled from 'styled-components';
import theme from '../../theme';


export const SectionBigNumbers = styled.div`
    background-color: ${theme.colors.primaryMain};
    padding: 7.3rem 0rem 7.6rem 0rem;
    color: ${theme.colors.gray1};
    position: relative;
`

export const WrappperSectionBigNumbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14.2rem;
    @media(max-width: 1180px){
        gap: 7.2rem;
    }
    @media(max-width: 828px){
        flex-direction: column;
        gap: 5.6rem;
    }
`

export const LeftSideBigNumbers = styled.div`
    width: 100%;
    max-width: 37.8rem;
    @media(max-width: 930px){
        max-width: 27.8rem;
    }
    @media(max-width: 828px){
        max-width: 36.7rem;
        text-align: center;
    }
`

export const WrapperQuote = styled.div`
    width: 100%;
    text-align: left;
    @media(max-width: 828px){
        max-width: 36.7rem;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const TestimonialText = styled.p`
    margin: 1.6rem 0rem;
    font-size: 2rem;
    font-weight: 400;
    @media(max-width: 1180px){
        font-size: 1.8rem;
    }
    @media(max-width: 960px){
        font-size: 1.7rem;
    }
`

export const WrapperAutor = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const Autor = styled.div`

`

export const AutorName = styled.h4`
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 3px;
    text-align: left;
`

export const AutorJob = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    text-align: left;
`

export const RightSideBigNumbers = styled.div`
    @media(max-width: 580px){
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const WrapperBigNumber = styled.div`
    display: flex;
    align-items: start;
    gap: 5.6rem;
    @media(max-width: 828px){
        text-align: center;
    }
    @media(max-width: 580px){
        flex-direction: column;
        align-items: center;
    }
`

export const BigNumber = styled.div`

`

export const BigNumberText = styled.h3`
    font-size: 5.6rem;
    font-weight: 400;
    @media(max-width: 1180px){
        font-size: 4.6rem;
    }
    @media(max-width: 970px){
        font-size: 4.0rem;
    }
`

export const BigNumberDesc = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 150%;
    @media(max-width: 1180px){
        font-size: 1.6rem;
    }
`

export const DividerLine = styled.div`
    background-color: #97A5FF;
    width: 3.8rem;
    height: 0.1rem;
    margin: 3.2rem 0rem;
`

export const SpanText = styled.div`
    text-align: center;
`

export const RectangleTopBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.colors.primaryLight};
    height: 2rem;
    width: 11.2rem;
`

export const RectangleBottomBg = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 110px;
    width: 110px;
    background-color: transparent;
    border-top: 2.4rem solid ${theme.colors.primaryLight};
    border-left: 2.4rem solid ${theme.colors.primaryLight};
    @media(max-width: 850px){
        height: 50px;
        width: 80px;
    }
    @media(max-width: 580px){

    }
`