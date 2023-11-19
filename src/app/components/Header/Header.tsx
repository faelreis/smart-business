'use client'

import Image from 'next/image';

import { StyledHeader, WrapperHeader, Nav } from './style';
import Theme from '../../theme';

import { Logo } from './components/Logo';
import { Container } from '../Container';
import { Button, IconButton } from '../Button';

import LoginIcon from '../../../assets/icon/login.svg';
import ArrowIcon from '../../../assets/icon/arrow-btn.svg';


export function Header(){
    return(
        <StyledHeader>
            <Container>
                <WrapperHeader>
                    <Logo />
                    <Nav>
                        <IconButton href='/login' theme={Theme}><Image src={LoginIcon} alt='Ícone Login'/>Acessar</IconButton>
                        <Button href='/login' $outline theme={Theme} className='btnPrimaryIcon'>Cadastre-se gratuitamente<Image src={ArrowIcon} alt='Ícone seta' /></Button>
                    </Nav>
                </WrapperHeader>
            </Container>    
        </StyledHeader>
    )
}