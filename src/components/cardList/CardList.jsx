"use client"
import React from 'react';
import Pagination from "@/components/pagination/Pagination";
import s from './cardLIst.module.css';
import Image from "next/image";
import Card from "@/components/card/Card";

const CardList = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Recent Posts</h2>
            <div className={s.posts}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Pagination/>
        </div>
    );
};

export default CardList;
