'use client'
import { useState } from 'react';
import { Container } from '../Container';
import { StyledTopBarMessage, WrapperTopBarMessage } from './style.js';
import Image from 'next/image';
import CloseIcon from '../../../assets/icon/close-top-message.svg';

export function TopBarMessage() {

  const [isVisible, setIsVisible] = useState(true);

  const closeTopBar = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <StyledTopBarMessage>
      <Container>
        <WrapperTopBarMessage>
          <span>
            Mês do digital, aproveite para <strong>fazer parte do SmartBusiness!</strong>
          </span>
          <button onClick={closeTopBar}>
            <Image src={CloseIcon} alt="Ícone fechar" className="button--close" />
          </button>
        </WrapperTopBarMessage>
      </Container>
    </StyledTopBarMessage>
  ) : null;
}
