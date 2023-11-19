import styled, { keyframes } from 'styled-components';
import theme from '../../../../theme';

const fadeIn = keyframes`
  from {
    transform: translateY(-20px)
  }

  to {
    transform: translateY(0px)
  }
`;

export const CardAccordion = styled.div`
    padding: 4.8rem 0rem;
    border-bottom: 0.15rem solid ${theme.colors.gray2};
    cursor: pointer;
    .visible {
        display: block;
        transition: all .3s ease;
        opacity: 1;
        animation: ${fadeIn} .3s ease;
    }

    .hidden {
        transition: all .3s ease;
        opacity: 0;
    }
`

export const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WrapperInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    justify-content: space-between;
`

export const Number = styled.span`
    font-size: 2.4rem;
    font-weight: 400;
    color: ${theme.colors.primaryMain};
`

export const Question = styled.h3`
    font-size: 20px;
    font-weight: 400;
    color: ${theme.colors.dark200};
`

export const Answer = styled.p`
    margin-top: 1.4rem;
    display: none;
    transition: all .3s ease;
`



