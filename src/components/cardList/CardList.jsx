"use client"
import React from 'react';
import Pagination from "@/components/pagination/Pagination";
import s from './cardLIst.module.css';
import Image from "next/image";

const CardList = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Recent Posts</h2>
            <div className={s.posts}>
                <div className={s.post}>
                    <div className={s.imgBox}>
<Image src={'/img/pic2.webp'} alt={''} fill sizes="(max-width: 600px) 100vw, 50vw"/>
                    </div>
                    <div className={s.textBox}></div>
                </div>
            </div>
            <Pagination/>
        </div>
    );
};

export default CardList;
