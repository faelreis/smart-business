import styled from 'styled-components';
import theme from '../../../theme';

export const Post = styled.div`
    cursor: pointer;
    width: 100%;
    max-width: 27.9rem;
`

export const WrapperPost = styled.div`

`

export const CoverPost = styled.div`
    width: 100%;
    max-width: 28rem;
    overflow: hidden;
    margin-bottom: 2.4rem;
    img{
        transition: all .3s ease-in-out;
    }
    &:hover{
        img{
            transform: scale(1.1);
        }
    }
`

export const WrapperInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const Type = styled.h4`
    color: ${theme.colors.primaryMain};
    font-size: 1.6rem;
    font-weight: 600;
`

export const Date = styled.span`
    color: ${theme.colors.dark300};
    font-size: 1.6rem;
    font-weight: 400;
`

export const Description = styled.h3`
    margin: 1.2rem 0rem 2.4rem 0rem;
    font-size: 1.9rem;
    font-weight: 400;
    color: ${theme.colors.dark700};
`

export const WrapperAutor = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    img{
        border-radius: 50%;
    }
`

export const Wrapperassignment = styled.div`
`

export const Name = styled.div`
    margin-bottom: 0.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${theme.colors.dark700};
`

export const Job = styled.div`
    color: ${theme.colors.dark400};
    font-size: 1.4rem;
    font-weight: 400;
`