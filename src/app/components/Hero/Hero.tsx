'use client'

import Image from 'next/image';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { TypeAnimation } from 'react-type-animation';

import { ArrowIcon, LeftSideHero, MainText, ParagraphText, RightSideHero, StyledHero, Tag, TagText, WrapperButtons, WrapperHero } from './Hero.style';
import Theme from '../../theme';

import { Button, IconButton } from '../Button';
import { Container } from '../Container';

import ManHeroImage from '../../../assets/img/man-using-laptop.png';
import GlobalIcon from '../../../assets/icon/global.svg';
import SmarthphoneIcon from '../../../assets/icon/smartphone.svg';
import ArrowNextIcon from '../../../assets/icon/arrow-next.svg';
import GraphImg from '../../../assets/img/chart-hero.svg';
import ChartIcon from '../../../assets/img/chat-hero.svg';



export function Hero() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <StyledHero>
      <Container>
        <WrapperHero>
          <LeftSideHero>
            <Tag>
              <Image src={GlobalIcon} alt="Ícone global" />
              <TagText>A receita certa para o seu negócio</TagText>
            </Tag>
            <MainText>
              O segredo para um negócio de <strong>
                <TypeAnimation
                sequence={[
                  'sucesso!',
                  1000,
                  'destaque!',
                  1000,
                  'impacto!',
                  1000,
                ]}
                wrapper="strong"
                speed={50}
                repeat={Infinity}
                />
                </strong>

            </MainText>
            <ParagraphText>
              Pellentesque rutrum turpis non est turpis pretium morbi urna. Erat dictum blandit aliquam purus sed rhoncus.
            </ParagraphText>
            <WrapperButtons>
              <Button href='/login' $primary theme={Theme}>Cadastrar meu negócio</Button>
              <IconButton>
                <Image src={SmarthphoneIcon} alt="Celular ícone" />
                Fale conosco
              </IconButton>
            </WrapperButtons>
            <ArrowIcon data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">
              <Image src={ArrowNextIcon} alt="ícone seta" />
            </ArrowIcon>
          </LeftSideHero>
          <RightSideHero data-aos="fade-left" data-aos-once="true" data-aos-duration="1000">
            <Image src={ChartIcon} alt="ícone de bate-papo" className='hero-section__image-chat'/>
            <Image src={GraphImg} alt="Gráfico empresarial" className='hero-section__image-graph'/>
            <Image src={ManHeroImage} quality={100} alt="Homem usando notebook, ilustração 3D" className='hero-section__image-main'/>
          </RightSideHero>
        </WrapperHero>
      </Container>
    </StyledHero>
  );
}
