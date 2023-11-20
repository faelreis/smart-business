'use client'

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { Button, IconButton } from '@/app/components/Button';
import Theme from '../theme';

import { AnotherAcess, ButtonGoogle, ButtonLostPassword, CheckInput, DivOr, DividerLine, Form, InputLogin, LabelLogin, LeftSide, LoginPage, Options, Register, RememberPassword, RightSide, SpanOr, Title, TitleLogin, WrapperInfosBrand, WrapperInputs, WrapperLogin } from './Login.style';

import SmartBusinessWhite from '../../assets/logo/smart-business-white.svg';
import IlustrationImage from '../../assets/img/woman-graph-business.png';
import ArrowIcon from '../../assets/icon/arrow.svg';
import GoogleLogo from '../../assets/logo/social/google.svg';
import { ModalLostPassword } from './components/ModalLostPassword/ModalLostPassword';



export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
      document.body.classList.add('modal-open');
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      document.body.classList.remove('modal-open');
    };
  
    return (
      <LoginPage>
        <WrapperLogin>
          <LeftSide>
            <WrapperInfosBrand>
              <Link href='/'>
                <Image src={SmartBusinessWhite} alt='Logo Smart Business' />
              </Link>
              <Title>O verdadeiro conceito de <strong>Smart Company</strong></Title>
            </WrapperInfosBrand>
            <Image src={IlustrationImage} alt='Ilustração de resultados Smart Business' quality={100} />
          </LeftSide>
          <RightSide>
            <IconButton href='/' className='icon-btn'>
              <Image src={ArrowIcon} alt='Ícone seta' />Voltar
            </IconButton>
            <TitleLogin>Login</TitleLogin>
            <Form>
              <WrapperInputs>
                <LabelLogin>
                  E-mail
                  <InputLogin placeholder="Digite seu e-mail" type='email' />
                </LabelLogin>
              </WrapperInputs>
              <WrapperInputs>
                <LabelLogin>
                  Senha
                  <InputLogin placeholder="Digite sua senha" type='password'/>
                </LabelLogin>
              </WrapperInputs>
              <Options>
                <RememberPassword>
                  <CheckInput type='checkbox' />
                  Lembrar senha
                </RememberPassword>
                <ButtonLostPassword onClick={openModal}>Esqueceu sua senha?</ButtonLostPassword>
              </Options>
              <Button $primary theme={Theme} className='acessBtn'>
                Entrar
              </Button>
            </Form>
            <AnotherAcess>
              <DividerLine>
                <DivOr></DivOr>
                <SpanOr>Ou</SpanOr>
                <DivOr></DivOr>
              </DividerLine>
              <ButtonGoogle>
                <Image src={GoogleLogo} alt='Google Logo' /><span>Entrar com o Google</span>
              </ButtonGoogle>
            </AnotherAcess>
            <Register>Não tem uma conta? <strong>Inscrever-se</strong></Register>
          </RightSide>
        </WrapperLogin>
        <ModalLostPassword isOpen={isModalOpen} onClose={closeModal} />
      </LoginPage>
    );
  }