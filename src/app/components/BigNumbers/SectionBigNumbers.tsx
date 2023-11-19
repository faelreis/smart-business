'use client'
import Image from 'next/image';
import { Container } from "../Container";
import { Autor, AutorJob, AutorName, BigNumber, BigNumberDesc, BigNumberText, DividerLine, LeftSideBigNumbers, RectangleBottomBg, RectangleTopBg, RightSideBigNumbers, SectionBigNumbers, SpanText, TestimonialText, WrapperAutor, WrapperBigNumber, WrapperQuote, WrappperSectionBigNumbers } from "./BigNumbers.style";

import TestimonyPerson from '../../../assets/img/testimony-person.png';
import QuoteIcon from '../../../assets/icon/quote.svg';

export function BigNumbers(){
    return(
        <SectionBigNumbers>
            <RectangleTopBg></RectangleTopBg>
            <RectangleBottomBg></RectangleBottomBg>
            <Container>
                <WrappperSectionBigNumbers>
                    <LeftSideBigNumbers>
                        <WrapperQuote>
                            <Image src={QuoteIcon} alt='Ícone de citação' />
                            <TestimonialText>Quis sed commodo est aliquam, praesent fames pretium quam. Nisi, massa of tipe tincidunt week.</TestimonialText>
                            <WrapperAutor>
                                <Image src={TestimonyPerson} alt='Autor do depoimento' />
                                <Autor>
                                    <AutorName>Savannah Nguyen</AutorName>
                                    <AutorJob>UX Designer | Google</AutorJob>
                                </Autor>
                            </WrapperAutor>
                        </WrapperQuote>
                    </LeftSideBigNumbers>
                    <RightSideBigNumbers>
                        <WrapperBigNumber>
                            <BigNumber>
                                <BigNumberText>120</BigNumberText>
                                <BigNumberDesc>Projeto realizado 2021</BigNumberDesc>
                            </BigNumber>
                            <BigNumber>
                                <BigNumberText>12</BigNumberText>
                                <BigNumberDesc>Escritórios no Brasil</BigNumberDesc>
                            </BigNumber>
                            <BigNumber>
                                <BigNumberText>325m</BigNumberText>
                                <BigNumberDesc>Faturamento</BigNumberDesc>
                            </BigNumber>
                        </WrapperBigNumber>
                        <DividerLine></DividerLine>
                        <SpanText>Expandindo para todo território nacional</SpanText>
                    </RightSideBigNumbers>
                </WrappperSectionBigNumbers>
            </Container>
        </SectionBigNumbers>
    )
}