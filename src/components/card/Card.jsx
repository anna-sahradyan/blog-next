'use client'
import React from 'react';
import s from './card.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = ({item}) => {
    const createdAt = new Date(item.createdAt);
    return (
        <div className={s.container}>
            <div className={s.imgBox}>
                <Image src={`/img/${item.img}`} alt={''} fill sizes="(max-width: 600px) 100vw, 50vw" className={s.img}/>
            </div>
            <div className={s.textBox}>
                <div className={s.items}>
                    <span className={s.date}>{createdAt.toLocaleDateString()} </span>
                    <span className={s.category}>{item.catSlug}</span>
                </div>
                <Link href={'/'}> <h2 className={s.title}>{item.title} </h2></Link>
                <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur distinctio eaque eos excepturi ?</p>
                <Link href={'/'} className={s.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
