'use client'
import Image from 'next/image';
import { Container } from "../Container";
import { TopSideAbout, List, BottomSideAbout, SectionAbout, WrapperTexts, Tag, TextList, Title, Video, VideoText, WrapperAbout, WrapperImages, WrapperLeftSide, WrapperList, WrapperRightSide } from "./About.style";

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
                        <WrapperLeftSide>
                            <WrapperTexts>
                                <Tag>Sobre a empresa</Tag>
                                <Title>Criando e inovando desde 1988</Title>
                                <WrapperList>
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
                        </WrapperLeftSide>
                    </TopSideAbout>
                    <BottomSideAbout>
                        <WrapperRightSide>
                        <WrapperImages>
                                <Image src={ArrowNextIcon} alt='Ícone seta'/>
                                <Image src={SupplementaryImage} alt='Mulher usando celular, ilustração 3D'/>
                            </WrapperImages>
                            <VideoText>Suscipit pellentesque praesent auctor molestie massa nunc vitae. Felis eget est ut gravida in maecenas. Tempus in in in congue proin.<br/><br/>Sem in feugiat id dui bibendum. Nunc ut mauris congue amet. Facilisis amet enim pellentesque eu suspendisse diam sit. Bibendum pharetra malesuada aliquam hendrerit consectetur neque. <strong>Gravida rhoncus enim a sodales</strong> feugiat senectus aenean felis. Vitae purus, amet semper pulvinar.</VideoText>
                        </WrapperRightSide>
                    </BottomSideAbout>
                </WrapperAbout>
            </Container>
        </SectionAbout>
    )
}