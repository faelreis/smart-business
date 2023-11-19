'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Description, Job, Name, Post, Type, Date, WrapperAutor, WrapperInfos, WrapperPost, Wrapperassignment, CoverPost } from './BlogPost.style';
import ExampleAuthor from '../../../../assets/img/blog/woman-pointing-her-smartphone-smiling.jpg';
import ExamplateAuthor2 from '../../../../assets/img/blog/madelyn-carder.png';

export function BlogPost(){
    return(
        <Post>
            <WrapperPost>
                <CoverPost>
                    <Image src={ExampleAuthor} alt={'name'} />
                </CoverPost>
                <WrapperInfos>
                    <Type>Business</Type>
                    <Date>Outubro 2021</Date>
                </WrapperInfos>
                <Description>Sollicitudin a sagittis, risus nisl, fermentum, tincidunt dolor</Description>
                <WrapperAutor>
                    <Image src={ExamplateAuthor2} alt={'name'} />
                    <Wrapperassignment>
                        <Name>Savannah Nguyen</Name>
                        <Job>Autor</Job>
                    </Wrapperassignment>
                </WrapperAutor>
            </WrapperPost>
        </Post>
    )
}