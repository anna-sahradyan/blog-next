'use client'
import React from 'react';
import s from './blogPage.module.css';
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = () => {
    return (
        <>
            <div className={s.container}>
    <h2 className={s.title}>Style Blog</h2>
                <div className={s.content}>
                    <CardList/>
                    <Menu/>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
