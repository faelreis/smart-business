'use client'
import Image from 'next/image';
import { Card, Description, Title } from './CardFaq.style';
import WhatsAppIcon from '../../../../../assets/icon/whatsapp.svg';

export function ContactCard(){
    return(
        <Card>
            <Image src={WhatsAppIcon} alt="Ícone"/>
            <Title>Dúvidas?</Title>
            <Description>Envie uma mensagem para nosso time</Description>
        </Card>
    )
}