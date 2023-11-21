import styled from 'styled-components';
import theme from '../../theme';

export const SectionAbout = styled.section`
    padding: 11.7rem 0rem 12rem 0rem;
    @media(max-width: 830px){
        padding: 6.4rem 0rem;
    }
`

export const WrapperAbout = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 830px){
        flex-direction: column;
        text-align: center;
    }
`

export const TopSideAbout = styled.div`
`

export const WrapperTopSide = styled.div`
    display: flex;   
    align-items: start;
    justify-content: space-between;
    gap: 10.4rem;
    @media(max-width: 828px){
        flex-direction: column;
        align-items: center;
        gap: 4.8rem;
    }
`

export const WrapperTexts = styled.div`
    width: 100%;
    max-width: 41.5rem;
    @media(max-width: 828px){
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const Tag = styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${theme.colors.primaryMain};
`
export const Title = styled.h2`
    margin: 1.6rem 0rem 4.0rem 0rem;
    font-size: 4.8rem;
    font-weight: 400;
    color: ${theme.colors.dark700};
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

export const WrapperList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 2.5rem;
`

export const List = styled.li`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const TextList = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark400};
`

export const WrapperImages = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 19.3rem;
    width: 100%;
    max-width: 38.302rem;
    .nextIcon{
        align-self: flex-end;
    }
    @media(max-width: 828px){
        gap: 0;
        max-width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`


export const BottomSideAbout = styled.div`

`

export const WrapperBottomSide = styled.div`
    display: flex;
    gap: 13.598rem;
    @media(max-width: 1100px){
        gap: 11.5rem;
    }
    @media(max-width: 1000px){
        gap: 9.5rem;
    }
    @media(max-width: 828px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 4rem;
        .nextIcon{
            display: none;
        }
    }
`

export const Video = styled.div`
    position: relative;
    width: 100%;
    max-width: 69.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    .icon-play{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        outline: 0.6rem solid #4760FF30;
        border-radius: 50%;
        transition: all .4s ease-in;
        cursor: pointer;
        &:hover{
            outline-width: 2rem;
        }
    }
    .thumbnail{
        transition: all .4s ease;
        &:hover{
            transform: scale(1.05);
            filter: blur(2px);
        }
    }
`

export const VideoText = styled.p`
    margin-top: 3.9rem;
    font-size: 1.8rem;
    font-weight: 400;
    width: 100%;
    max-width: 65.4rem;
    @media(max-width: 1200px){
        margin-top: 0rem;
    }
    @media(max-width: 1000px){
        font-size: 1.6rem;
    }
    @media(max-width: 828px){
        margin-top: 3.9rem;
    }
`