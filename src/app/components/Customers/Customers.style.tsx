import styled from 'styled-components';
import theme from '../../theme';


export const SectionCustomers = styled.section`
    padding: 4.6rem 0rem;
    background-color: ${theme.colors.gray1};
`

export const WrapperCustomers = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8.4rem;
    @media(max-width: 1100px){
        gap: 4.4rem;
    }
    @media(max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 640px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`