import styled from 'styled-components';
import theme from '../../theme';

export const StyledHeader = styled.header`
    background-color: #FFFFFF;
    padding: 4rem 0rem;
`;

export const WrapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const Nav = styled.div`
    display: flex;
    align-items: center;
    gap: 4.4rem;
    .btnPrimaryIcon{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    @media(max-width: 890px) {
        gap: 1.5rem;
    }
    @media(max-width: 790px) {
        & > *:last-child {
            display: none;
        }
    }
    @media(max-width: 500px) {
        & > *:first-child {
           font-size: 1.4rem;
        }
    }
`;