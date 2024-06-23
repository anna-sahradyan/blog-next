"use client"
import React from 'react';
import s from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}><b>Hello I am Ann!</b>Discover my stories and creative ideas</h1>
            <div className={s.post}>
                <div className={s.imgBox}>
                    <Image src={'/img/coun1.webp'} alt={'country'} fill className={s.img} sizes="(max-width: 600px) 100vw, 50vw"/>
                </div>
                <div className={s.textBox}>
                    <h2 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    <p className={s.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi hic impedit nemo omnis pariatur porro possimus recusandae rerum voluptatibus</p>
                    <button className={s.btn}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
