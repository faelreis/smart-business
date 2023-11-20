'use client'

import Image from 'next/image';

import { Container } from "../Container";
import { TopSideAbout, List, BottomSideAbout, SectionAbout, WrapperTexts, Tag, TextList, Title, Video, VideoText, WrapperAbout, WrapperImages, WrapperTopSide, WrapperList, WrapperBottomSide } from "./About.style";

import CheckIcon from '../../../assets/icon/check.svg';
import ArrowNextIcon from '../../../assets/icon/arrow-next.svg';
import SupplementaryImage from '../../../assets/img/woman-using-smarphone.png';
import ThumbnailVideo from '../../../assets/img/thumb-video.jpg';
import PlayIcon from '../../../assets/icon/btn-play.svg';

export function About(){
    return(
        <SectionAbout>
            <Container>
                <WrapperAbout>
                    <TopSideAbout>
                        <WrapperTopSide>
                            <WrapperTexts>
                                <Tag>Sobre a empresa</Tag>
                                <Title>Criando e inovando desde 1988</Title>
                                <WrapperList data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">
                                    <List>
                                        <Image src={CheckIcon} alt='Ícone verificar'/>
                                        <TextList>Sagittis sed cursus sed malesuada ultrices</TextList>
                                    </List>
                                    <List>
                                        <Image src={CheckIcon} alt='Ícone verificar'/>
                                        <TextList>Lectus ac at massa ac tellus fringilla aenean</TextList>
                                    </List>
                                    <List>
                                        <Image src={CheckIcon} alt='Ícone verificar'/>
                                        <TextList>Cras faucibus tristique volutpat accumsan</TextList>
                                    </List>
                                </WrapperList>
                            </WrapperTexts>
                            <Video>
                                <Image  src={PlayIcon} alt='Ícone play' className='icon-play'/>
                                <Image  src={ThumbnailVideo} alt='Capa vídeo' className='thumbnail'/>
                            </Video>
                        </WrapperTopSide>
                    </TopSideAbout>
                    <BottomSideAbout>
                        <WrapperBottomSide>
                            <WrapperImages>
                                <Image src={ArrowNextIcon} alt='Ícone seta' className='nextIcon' data-aos="fade-down" data-aos-once="true" data-aos-duration="1000"/>
                                <Image src={SupplementaryImage} alt='Mulher usando celular, ilustração 3D' className='woman3d' data-aos="fade-right" data-aos-once="true" data-aos-duration="1000"/>
                            </WrapperImages>
                            <VideoText data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">Suscipit pellentesque praesent auctor molestie massa nunc vitae. Felis eget est ut gravida in maecenas. Tempus in in in congue proin.<br/><br/>Sem in feugiat id dui bibendum. Nunc ut mauris congue amet. Facilisis amet enim pellentesque eu suspendisse diam sit. Bibendum pharetra malesuada aliquam hendrerit consectetur neque. <strong>Gravida rhoncus enim a sodales</strong> feugiat senectus aenean felis. Vitae purus, amet semper pulvinar.</VideoText>
                        </WrapperBottomSide>
                    </BottomSideAbout>
                </WrapperAbout>
            </Container>
        </SectionAbout>
    )
}