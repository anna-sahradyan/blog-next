'use client'
import React from 'react';
import s from './card.module.css';
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={s.container}>
            <div className={s.imgBox}>
                <Image src={'/img/pic2.webp'} alt={''} fill sizes="(max-width: 600px) 100vw, 50vw" className={s.img}/>
            </div>
            <div className={s.textBox}>
                <div className={s.items}>
                    <span className={s.date}>6.23.2024 - </span>
                    <span className={s.category}>Culture</span>
                </div>
                <Link href={'/'}> <h2 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h2></Link>
                <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequatur distinctio eaque eos excepturi ?</p>
                <Link href={'/'} className={s.link}>
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Card;
