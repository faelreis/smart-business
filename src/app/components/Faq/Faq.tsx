'use client'

import Image from 'next/image';

import Theme from '../../theme';
import { BotttomSide, LeftSide, Paragraph, RightSide, SectionFaq, Tag, Title, TopSide, WrapperFaq } from './Faq.style';

import { Button, IconButton } from "../Button"
import { Container } from "../Container"

import { ContactCard } from './components/CardFaq/ContactCard';
import { Accordion } from './components/Accordion/Accordion';

import SmartphoneIcon from '../../../assets/icon/smartphone.svg';
import bePartIcon from '../../../assets/icon/be-part.svg';
import whatsappIcon from '../../../assets/icon/whatsapp.svg';
import doubtsIcon from '../../../assets/icon/doubts.svg';


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
                            <IconButton data-aos="fade-left" data-aos-once="true" data-aos-duration="1000" theme={Theme}><Image src={SmartphoneIcon} alt='Ícone Login'/>Fale conosco</IconButton>
                        </LeftSide>
                        <RightSide>
                            <Accordion numberingOrder='01' question='Quais recursos ainda posso acessar nas novas Páginas?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <Accordion numberingOrder='02' question='Como faço para abrir a minha nova Página?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <Accordion numberingOrder='03' question='Há algum conteúdo que não migrará com a minha Página?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <Accordion numberingOrder='04' question='Como as pessoas encontrarão a minha nova Página?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                            <Accordion numberingOrder='05' question='O que é o Feed? Como faço para configurá-lo?' answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
                        </RightSide>
                    </TopSide>
                    <BotttomSide data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
                        <ContactCard iconCard={doubtsIcon} titleCard='Dúvidas?' descriptionCard='Envie uma mensagem para nosso time'/>
                        <ContactCard iconCard={bePartIcon} titleCard='Faça parte' descriptionCard='Cadastre-se para transformar sua empresa'/>
                        <ContactCard iconCard={whatsappIcon} titleCard='Chama no zap' descriptionCard='Fale com conosso comercial'/>
                    </BotttomSide>
                </WrapperFaq>
            </Container>
        </SectionFaq>
    )
}