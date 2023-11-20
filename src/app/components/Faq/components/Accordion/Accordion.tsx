'use client'
import React, { useState } from 'react';
import { Answer, CardAccordion, Panel, Question, Number, WrapperInfos } from './Accordion.style';
import Image from 'next/image';
import PlusIcon from '../../../../../assets/icon/plus-accordion.svg';

type AccordionProps = {
  numberingOrder: string;
  question: string;
  answer: string;
}


export function Accordion( { numberingOrder, question, answer }: AccordionProps ) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <CardAccordion onClick={toggleVisibility}>
      <Panel>
        <WrapperInfos>
          <Number>{numberingOrder}</Number>
          <Question>{question}</Question>
        </WrapperInfos>
        <Image src={PlusIcon} alt="Ícone maximizar"/>
      </Panel>
        <Answer className={`element ${isVisible ? 'visible' : 'hidden'}`}>{answer}</Answer>
    </CardAccordion>
  );
}
