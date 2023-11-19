import styled from 'styled-components';
import theme from '../../theme';

export const SectionBlog = styled.section`
    background-color: ${theme.colors.gray1};
    padding: 12rem 0rem;
`

export const WrapperBlog = styled.div`
    position: relative;
`

export const TopSide = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 4rem;
`

export const WrapperTitle = styled.div`

`

export const Tag = styled.div`
    color: ${theme.colors.primaryMain};
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.4rem;
`


export const Title = styled.div`
    width: 100%;
    max-width: 40.3rem;
    color: ${theme.colors.dark700};
    font-size: 4.8rem;
    font-weight: 400;
`
export const NavigateButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 3.3rem;
    button{
        transition: all .3s ease-in-out;
        cursor: pointer;
        &:hover{
            opacity: 50%;
        }
        &:last-child{
            transform: rotate(-180deg);
        }
    }
`



export const BottomSide = styled.div`
    .swiper-wrapper{
        padding-bottom: 4rem;
        .swiper-pagination{

        }
        .swiper-button-prev:after, .swiper-button-next:after{
        color: ${theme.colors.primaryMain};
        top: 0;
    }
    }
    
`