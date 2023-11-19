'use client'
import React, { useState } from 'react';
import { Answer, CardAccordion, Panel, Question, Number, WrapperInfos } from './Accordion.style';
import Image from 'next/image';
import PlusIcon from '../../../../../assets/icon/plus-accordion.svg';

export function Accordion() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <CardAccordion onClick={toggleVisibility}>
      <Panel>
        <WrapperInfos>
          <Number>01</Number>
          <Question>Há algum conteúdo que não migrará com a minha Página?</Question>
        </WrapperInfos>
        <Image src={PlusIcon} alt="Ícone maximizar" />
      </Panel>
        <Answer className={`element ${isVisible ? 'visible' : 'hidden'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Answer>
    </CardAccordion>
  );
}
