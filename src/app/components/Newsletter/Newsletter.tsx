'use client'

import Image from 'next/image';

import { InputNewsletter, Paragraph, SectionNewsletter, Tag, Title, WrapperNewsletter, WrapperInputNewsletter, ButtonNewsletter, ButtonNewsletterMobile } from './Newsletter.style';

import { Container } from '../Container';

import EmailIcon from '../../../assets/icon/email.svg';


export function Newsletter(){
    return(
        <SectionNewsletter>
            <Container>
                <WrapperNewsletter>
                    <Tag>Newsletter</Tag>
                    <Title>Fique por dentro das novidades</Title>
                    <Paragraph>Junte-se a mais de 20.000 clientes que já usam o SB para ficar por dentro de tudo que pode fazer sua empresa crescer. </Paragraph>
                    <WrapperInputNewsletter>
                        <Image src={EmailIcon} alt="Ícone email" />
                        <InputNewsletter placeholder='Insira seu melhor e-mail' type='text' />
                        <ButtonNewsletter>Cadastrar</ButtonNewsletter>
                    </WrapperInputNewsletter>
                    <ButtonNewsletterMobile>Cadastrar</ButtonNewsletterMobile>
                </WrapperNewsletter>
            </Container>
        </SectionNewsletter>
    )
}