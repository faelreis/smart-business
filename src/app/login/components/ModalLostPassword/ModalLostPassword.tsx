'use client'

import Image from 'next/image';

import { Button } from '@/app/components/Button';

import { LabelLostPassword, LeftSide, LostPassword, OverlayModal, ParagraphLostPassword, RightSide, TitleLostPassword, InputLostPassword, WrapperInputLostPassword } from './ModalLostPassword.style';
import Theme from '../../../theme';

import CloseIcon from '../../../../assets/icon/close.svg';

interface ModalLostPasswordProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export const ModalLostPassword: React.FC<ModalLostPasswordProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <OverlayModal>
        <LostPassword>
          <LeftSide />
          <RightSide>
            <Image onClick={onClose} src={CloseIcon} alt='Ícone fechar' className='closeIcon' />
            <TitleLostPassword>Esqueceu a senha?</TitleLostPassword>
            <ParagraphLostPassword>Digite seu e-mail e enviaremos instruções para redefinir sua senha</ParagraphLostPassword>
            <WrapperInputLostPassword>
              <LabelLostPassword>
                E-mail
                <InputLostPassword placeholder='jhon@example.com' />
              </LabelLostPassword>
            </WrapperInputLostPassword>
            <Button $primary theme={Theme} className='btnLostPassword'>
              Recuperar senha
            </Button>
          </RightSide>
        </LostPassword>
      </OverlayModal>
    );
  };