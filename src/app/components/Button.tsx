import styled, { css, keyframes } from 'styled-components';
import theme from '.././theme'

const FadeIn = keyframes`
  to{
    opacity: 1;
    transform: translateX(0px);
  }
  from{
    opacity: 0;
    transform: translateX(-5px);
  }
`

const baseStyles = css`
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1.6rem 3.2rem;
  cursor: pointer;
  transition: all .3s ease-in-out;
`;

export const Button = styled.a<{ $outline?: boolean; $primary?: boolean; icon?: string }>`
  display: inline-block;
  ${baseStyles}
  padding: ${({ $outline, theme }) => ($outline && '1rem 1.6rem')};
  color: ${({ $outline, $primary, theme }) => ($outline ? theme.colors.primaryMain : $primary && theme.colors.gray1)};
  background-color: ${({ $outline, $primary, theme }) => ($outline ? 'transparent' : $primary && theme.colors.primaryMain)};
  border: 1px solid ${theme.colors.primaryMain};
  img{
    animation: ${FadeIn} .5s ease;
    transition: all .5s ease;
    display: none;
  }

  &:hover {
    background-color: ${({ $outline, $primary, theme }) => ($outline ? theme.colors.primaryMain : $primary && theme.colors.primaryDark)};
    color: ${({ $outline, $primary, theme }) => ($outline && theme.colors.gray1)};
    img{
      animation: ${FadeIn} .5s ease;
      opacity: 1;
      display: block;
    }
  }
`;

export const IconButton = styled.a`
    cursor: pointer;
    padding: 0rem;
    display: flex;
    align-items: center;
    stroke: none;
    gap: 1.2rem;
    color: ${theme.colors.dark500};
    background-color: transparent;
    border: none;
    &:hover{
        text-decoration: underline;
    }
`;

export const LineButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${theme.colors.dark700};
  text-decoration: underline;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  img{
    transition: all .3s ease-in-out;
  }
  &:hover{
    img{
      transform: rotate(-45deg);
    }
  }
`