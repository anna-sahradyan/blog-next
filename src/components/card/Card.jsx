'use client'
import React from 'react';
import s from './card.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = ({item}) => {
    console.log(item.catSlug)
    const createdAt = item.createdAt.substring(0,10);
    return (
        <div className={s.container}>
            <div className={s.imgBox}>
                {item.img && <Image src={`/img/${item.img}`} alt={''} fill sizes="(max-width: 600px) 100vw, 50vw"
                                    priority
                        className={s.img}/>}
            </div>
            <div className={s.textBox}>
                <div className={s.items}>
                    <span className={s.date}>{createdAt}-</span>
                    <span className={s.category}>{item.catSlug}</span>
                </div>
                <Link href={`/post/${item.slug}`}> <h2 className={s.title}>{item.title} </h2></Link>
                <p className={s.desc}>{item.desc.substring(0,60)}</p>
                <Link href={`/post/${item.slug}`} className={s.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
