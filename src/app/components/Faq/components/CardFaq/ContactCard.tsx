'use client'

import Image from 'next/image';

import { Card, Description, Title } from './CardFaq.style';

type ContactCardProps = {
    iconCard: string;
    titleCard: string;
    descriptionCard: string;
}

export function ContactCard( { iconCard, titleCard, descriptionCard }: ContactCardProps ){
    return(
        <Card>
            <Image src={iconCard} alt="Ícone"/>
            <Title>{titleCard}</Title>
            <Description>{descriptionCard}</Description>
        </Card>
    )
}