'use client'

import Image from 'next/image';

import { Container } from '../Container';
import { Copyright, CreatedBy, Logo, LogoSocial, SectionFooter, WrapperFooter, WrapperSocial } from './Footer.style';

import TwitterLogo from '../../../assets/logo/social/twitter.svg';
import FacebookLogo from '../../../assets/logo/social/facebook.svg';
import LinkedinLogo from '../../../assets/logo/social/linkedin.svg';
import InstagramLogo from '../../../assets/logo/social/instagram.svg';
import SmartBusinessLogo from '../../../assets/logo/smart-business.svg';


export function Footer(){
    return(
        <SectionFooter>
            <Container>
                <WrapperFooter>
                    <Logo>
                        <Image src={SmartBusinessLogo} alt='Logo Smart Business' />
                    </Logo>
                    <Copyright>© 2022 SmartBusiness. Todos os direitos reservados</Copyright>
                    <WrapperSocial>
                        <LogoSocial href='#'><Image src={TwitterLogo} alt="Logo Twitter" /></LogoSocial>
                        <LogoSocial href='#'><Image src={LinkedinLogo} alt="Logo LinkedIn" /></LogoSocial>
                        <LogoSocial href='#'><Image src={InstagramLogo} alt="Logo Instagram" /></LogoSocial>
                        <LogoSocial href='#'><Image src={FacebookLogo} alt="Logo Facebook" /></LogoSocial>
                    </WrapperSocial >
                    <CreatedBy href='https://insany.design/' target='_blank'>Desenvolvido por <strong>Insany Design</strong></CreatedBy>
                </WrapperFooter>
            </Container>
        </SectionFooter>
    )
}