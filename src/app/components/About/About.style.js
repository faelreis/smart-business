import styled from 'styled-components';
import theme from '../../theme';

import ThumbnailVideo from '../../../assets/img/thumb-video.jpg';



export const SectionAbout = styled.section`
    padding: 11.7rem 0rem 12rem 0rem;
    @media(max-width: 830px){
        padding: 6.4rem 0rem;
    }
`

export const WrapperAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
    @media(max-width: 830px){
        flex-direction: column;
        text-align: center;
    }
`

//Topo side of the section
export const TopSideAbout = styled.div`
    width: 100%;
    max-width: 41.5rem;
    @media(max-width: 830px){
        max-width: 100%;
    }
    @media(max-width: 700px){
        max-width: 35rem;
    }
`

export const WrapperLeftSide = styled.div`
        display: flex;
`

export const WrapperTexts = styled.div`

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
    @media(max-width: 930px){
        font-size: 3.8rem;
    }
`

export const WrapperList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const List = styled.li`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const Image = styled.img` //Verificar!!!!!

`

export const TextList = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark400};
`

export const WrapperImages = styled.div`
    margin-top: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 19.3rem;
`

//Bottom side of the section
export const BottomSideAbout = styled.div`
    width: 100%;
    max-width: 69.6rem;
`

export const WrapperRightSide = styled.div`
    display: flex;
`

export const Video = styled.div`
    position: relative;
    margin-bottom: 3.9rem;
    height: 37.6rem;
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
    font-size: 1.8rem;
    font-weight: 400;
    width: 100%;
    max-width: 65.4rem;
    @media(max-width: 1000px){
        font-size: 1.6rem;
    }
`