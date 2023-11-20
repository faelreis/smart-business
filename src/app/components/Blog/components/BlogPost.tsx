'use client'
import Image from 'next/image';
import { Description, Job, Name, Post, Type, Date, WrapperAutor, WrapperInfos, WrapperPost, Wrapperassignment, CoverPost } from './BlogPost.style';
import { Blog } from '@/app/types/blog';

export function BlogPost( { description, type, date, author, thumbnail, authorProfile }: Blog ){
    return(
        <Post href='#'>
            <WrapperPost>
                <CoverPost>
                    <Image width={280} height={340} src={thumbnail.url} alt={description} />
                </CoverPost>
                <WrapperInfos>
                    <Type>{type}</Type>
                    <Date>{date}</Date>
                </WrapperInfos>
                <Description>{description}</Description>
                <WrapperAutor>
                    <Image width={48} height={48} src={authorProfile.url} alt={author} />
                    <Wrapperassignment>
                        <Name>{author}</Name>
                        <Job>Autor</Job>
                    </Wrapperassignment>
                </WrapperAutor>
            </WrapperPost>
        </Post>
    )
}