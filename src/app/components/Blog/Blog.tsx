'use client'

import Image from 'next/image';
import React, { useRef } from 'react';
import { Container } from '../Container';
import { BottomSide, NavigateButtons, SectionBlog, Tag, Title, TopSide, WrapperBlog, WrapperTitle } from './Blog.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BlogPost } from './components/BlogPost';
import { LineButton } from '../Button';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowBlogIcon from '../../../assets/icon/arrow-blog.svg';
import ArrrowIcon from '../../../assets/icon/arrow.svg';
import SwiperCore from 'swiper/core';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { HomePageData } from '@/app/types/page-info';

SwiperCore.use([Navigation, Pagination]);


type SwiperRef = {
  slidePrev: () => void;
  slideNext: () => void;
}

type HomeSectionProps = {
  homeInfo: HomePageData;
};


export function Blog( { homeInfo }: HomeSectionProps ) {

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
            <LineButton className='btnLine'>
              <span>Conheça nosso blog</span>
              <Image src={ArrrowIcon} alt='Ícone seta' />
            </LineButton>
            <NavigateButtons>
              <button onClick={goPrev}><Image src={ArrowBlogIcon} alt="Anterior" /></button>
              <button onClick={goNext}><Image src={ArrowBlogIcon} alt="Próximo" /></button>
            </NavigateButtons>
          </TopSide>
          <BottomSide data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <Swiper
              spaceBetween={35}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Pagination, Navigation]}
              className='swiper-wrapper'
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                800: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 4,
                }
              }}
            >
              {homeInfo.blogs.map((blogPost: any, index: number) => (
                <SwiperSlide key={index}>
                  <BlogPost
                    type={blogPost.type}
                    date={blogPost.date}
                    description={blogPost.description}
                    author={blogPost.author}
                    authorProfile={blogPost.authorProfile}
                    thumbnail={blogPost.thumbnail}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <LineButton className='btnLineMobile'><span>Conheça nosso blog</span><Image src={ArrrowIcon} alt='Ícone seta' /></LineButton>
          </BottomSide>
        </WrapperBlog>
      </Container>
    </SectionBlog>
  );
}