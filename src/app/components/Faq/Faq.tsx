'use client'

import Image from 'next/image';

import Theme from '../../theme';
import { Button, IconButton } from "../Button"
import { Container } from "../Container"
import { BotttomSide, LeftSide, Paragraph, RightSide, SectionFaq, Tag, Title, TopSide, WrapperFaq } from './Faq.style';

import SmartphoneIcon from '../../../assets/icon/smartphone.svg';
import { ContactCard } from './components/CardFaq/ContactCard';
import { Accordion } from './components/Accordion/Accordion';


export function Faq(){
    return(
        <SectionFaq>
            <Container>
                <WrapperFaq>
                    <TopSide>
                        <LeftSide>
                            <Tag>Tire suas dúvidas</Tag>
                            <Title>Perguntas mais frequentes</Title>
                            <Paragraph>Separamos algumas perguntas e respostas que podem te ajudar na sua decisão</Paragraph>
                            <Button $primary theme={Theme}>Cadastrar meu negócio</Button>
                            <IconButton theme={Theme}><Image src={SmartphoneIcon} alt='Ícone Login'/>Fale conosco</IconButton>
                        </LeftSide>
                        <RightSide>
                            <Accordion />
                            <Accordion />
                            <Accordion />
                            <Accordion />
                            <Accordion />
                        </RightSide>
                    </TopSide>
                    <BotttomSide>
                        <ContactCard />
                        <ContactCard />
                        <ContactCard />
                    </BotttomSide>
                </WrapperFaq>
            </Container>
        </SectionFaq>
    )
}