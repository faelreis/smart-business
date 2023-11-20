'use client'

import Image from 'next/image';

import { Box, LeftSide, RightSide, SalesDesc, SalesNumber, SectionMethodology, StarBox, Step, StepDesc, StepTitle, Tag, Title, WrapperImages, WrapperMethodology, WrapperSalesNumber, WrapperSteps, WrapperText } from './Methodology.style';

import { Container } from "../Container";

import Cursor from '../../../assets/img/cursor.png';
import LaptopMockup from '../../../assets/img/laptop-mockup.jpg';
import StarIcon from '../../../assets/icon/star.svg';

export function Methodology(){
    return(
        <SectionMethodology>
            <Container>
                <WrapperMethodology>
                    <LeftSide>
                        <Tag>Entenda como funciona</Tag>
                        <Title>Veja como aplicamos nossa metodologia</Title>
                        <WrapperImages className='desktop'>
                            <WrapperSalesNumber data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                                <Image src={Cursor} alt='Cursor mouse'/>
                                <SalesNumber>1900</SalesNumber>
                                <SalesDesc>vendas realizadas</SalesDesc>
                            </WrapperSalesNumber>
                            <Image data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" src={LaptopMockup} alt='Dashboard Smart Business' className="laptopMockup"/>
                        </WrapperImages>
                    </LeftSide>
                    <RightSide>
                        <WrapperSteps>
                            <Step>
                                <Box>1</Box>
                                <WrapperText>
                                    <StepTitle>Cadastre-se em nosso site</StepTitle>
                                    <StepDesc>Ultricies sed leo ac vel lectus nisi vestibulum</StepDesc>
                                </WrapperText>
                            </Step>
                            <Step>
                                <Box>2</Box>
                                <WrapperText>
                                    <StepTitle>Selecione um produto</StepTitle>
                                    <StepDesc>Eros lorem ac viverra donec velit</StepDesc>
                                </WrapperText>
                            </Step>
                            <Step>
                                <Box>3</Box>
                                <WrapperText>
                                    <StepTitle>Realize a venda pleo Instagram</StepTitle>
                                    <StepDesc>Purus potenti ac elementum odio nulla</StepDesc>
                                </WrapperText>
                            </Step>
                            <Step>
                                <Box>4</Box>
                                <WrapperText>
                                    <StepTitle>Acompanhe seus rendimentos</StepTitle>
                                    <StepDesc>Ipsum varius egestas pharetra viverra</StepDesc>
                                </WrapperText>
                            </Step>
                            <Step>
                                <StarBox><Image src={StarIcon} alt="Ícone estrala" /></StarBox>
                                <WrapperText>
                                    <StepTitle>Compartihe com seu time</StepTitle>
                                    <StepDesc>Ipsum varius egestas pharetra viverra.</StepDesc>
                                </WrapperText>
                            </Step>
                        </WrapperSteps>
                    </RightSide>
                    <WrapperImages className='mobile'>
                            <WrapperSalesNumber data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                                <Image src={Cursor} alt='Cursor mouse' />
                                <SalesNumber>1900</SalesNumber>
                                <SalesDesc>vendas realizadas</SalesDesc>
                            </WrapperSalesNumber>
                            <Image data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" src={LaptopMockup} alt='Dashboard Smart Business' className="laptopMockup"/>
                        </WrapperImages>
                </WrapperMethodology>
            </Container>
        </SectionMethodology>
    )
}