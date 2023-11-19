import styled from 'styled-components';
import theme from '../../../theme'

export const WrapperRectangules = styled.div`
    display: flex;
    align-items: end;
    gap: 5.61px;
`

export const FirstRectangule = styled.div`
    width: 18.714px;
    height: 18.714px;
    border: 3px solid ${theme.colors.primaryMain};
    background-color: transparent;
    transition: all .5s ease;
`

export const SecondRectangule = styled.div`
    background-color: ${theme.colors.primaryMain};
    width: 18.714px;
    height: 37.429px;
    border-radius: 0.831px;
    transition: all .5s ease;
`

export const LogoSmartBusiness = styled.div`
    display: flex;
    align-items: end;
    gap: 1.1rem;
    &:hover{
        ${WrapperRectangules}{
            ${FirstRectangule}{
                width: 18.714px;
                height: 37.429px;
        }
            ${SecondRectangule}{
                width: 18.714px;
                height: 18.714px;
            }
        }
    }

`