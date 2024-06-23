'use client';
import React from 'react';
import s from './menu.module.css';
import MenuPosts from "@/components/MenuPosts/MenuPosts";
import CategoryMenu from "@/components/categoryMenu/CategoryMenu";

const Menu = () => {
    return (
        <div className={s.container}>
            <h2 className={s.subTitle}>(What is interesting)</h2>
            <h2 className={s.subTitleTwo}>Most Popular</h2>
            <MenuPosts withImage={false}/>
            <h2 className={s.subtitle}>Discover by topic</h2>
            <h2 className={s.subTitleTwo}>Categories</h2>
            <CategoryMenu/>
            <h2 className={s.subTitle}>chosen by the editor</h2>
            <h2 className={s.subTitleTwo}>Editors Pick</h2>
            <MenuPosts withImage={true}/>
        </div>
    );
};

export default Menu;
