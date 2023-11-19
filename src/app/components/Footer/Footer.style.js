import styled from 'styled-components';
import theme from '../../theme';

export const SectionFooter = styled.footer`
    padding: 5.4rem 0rem;
    background-color: ${theme.colors.gray1};
`

export const WrapperFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    
`

export const Copyright = styled.span`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark300};
`

export const WrapperSocial = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`

export const LogoSocial = styled.a`
    transition: all .4s ease;
    cursor: pointer;
    
    &:hover{
        opacity: 60%;
    }
`

export const CreatedBy = styled.a`
    font-size: 1.4rem;
    font-weight: 400;
    color: ${theme.colors.dark400};
    transition: all .4s ease;
    strong{
        font-size: 1.4rem;
        font-weight: 400;
        text-decoration: underline;
    }
    &:hover{
        opacity: 60%;
    }
`