import React from 'react';
import s from "@/components/categoryMenu/categoryMenuList.module.css";
import Link from "next/link";

const CategoryMenu = () => {
    return (
        <>
            <div className={s.categoryList}>
                <Link href={'/blog?cat=style'} className={`${s.categoryItem} ${s.style}`}>
                    Style
                </Link>
                <Link href={'/blog?cat=food'} className={`${s.categoryItem} ${s.food}`}>
                    Food
                </Link> <Link href={'/blog?cat=fashion'} className={`${s.categoryItem} ${s.fashion}`}>
                Fashion
            </Link> <Link href={'/blog?cat=travel'} className={`${s.categoryItem} ${s.travel}`}>
                Travel
            </Link> <Link href={'/blog?cat=culture'} className={`${s.categoryItem} ${s.culture}`}>
                Culture
            </Link>
                <Link href={'/blog?cat=codding'} className={`${s.categoryItem} ${s.coding}`}>
                    Codding
                </Link>
            </div>
        </>
    );
};

export default CategoryMenu;
