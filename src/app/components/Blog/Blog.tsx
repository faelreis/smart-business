'use client'

// Importações
import React, { useRef } from 'react';
import Image from 'next/image';
import { Container } from '../Container';
import { BottomSide, NavigateButtons, SectionBlog, Tag, Title, TopSide, WrapperBlog, WrapperTitle } from './Blog.style';
import { BlogPost } from './components/BlogPost';
import { LineButton } from '../Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowBlogIcon from '../../../assets/icon/arrow-blog.svg';
import ArrrowIcon from '../../../assets/icon/arrow.svg';


import SwiperCore from 'swiper/core';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';

SwiperCore.use([Navigation, Pagination]);


interface SwiperRef {
  slidePrev: () => void;
  slideNext: () => void;
}

export function Blog() {
  const swiperRef = useRef<SwiperRef | null>(null);

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <SectionBlog>
      <Container>
        <WrapperBlog>
          <TopSide>
            <WrapperTitle>
              <Tag>Nosso blog</Tag>
              <Title>Notícias do mundo da tecnologia</Title>
            </WrapperTitle>
            <LineButton href="#">
              <span>Conheça nosso blog</span>
              <Image src={ArrrowIcon} alt='Ícone seta' />
            </LineButton>
            <NavigateButtons>
              <button onClick={goPrev}><Image src={ArrowBlogIcon} alt="Anterior" /></button>
              <button onClick={goNext}><Image src={ArrowBlogIcon} alt="Próximo" /></button>
            </NavigateButtons>
          </TopSide>
          <BottomSide>
            <Swiper
                spaceBetween={35}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={() => console.log('slide change')}
                modules={[Autoplay, Pagination, Navigation]}
                className='swiper-wrapper'
            >
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
                <SwiperSlide><BlogPost /></SwiperSlide>
            </Swiper>
          </BottomSide>
        </WrapperBlog>
      </Container>
    </SectionBlog>
  );
}
