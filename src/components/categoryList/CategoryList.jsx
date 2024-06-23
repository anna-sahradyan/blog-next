import React from 'react';
import s from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';

const CategoryList = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Popular Categories</h2>
            <div className={s.categories}>
                <Link href="/blog?cat=style" className={`${s.category} ${s.style}`}>
                    <Image src="/img/abs.webp" alt="category" width={32} height={32} className={s.img} />
                    Style
                </Link>
                <Link href="/blog?cat=fashion" className={`${s.category} ${s.fashion}`}>
                    <Image src="/img/pic2.webp" alt="category" width={32} height={32}  className={s.img}/>
                    Fashion
                </Link>
                <Link href="/blog?cat=travel" className={`${s.category} ${s.travel}`}>
                    <Image src="/img/pic1.webp" alt="category" width={32} height={32} className={s.img} />
                    Travel
                </Link>
                <Link href="/blog?cat=culture" className={`${s.category} ${s.culture}`}>
                    <Image src="/img/coun2.webp" alt="category" width={32} height={32} className={s.img} />
                    Culture
                </Link>
                <Link href="/blog?cat=coding" className={`${s.category} ${s.coding}`}>
                    <Image src="/img/pic3.webp" alt="category" width={32} height={32}  className={s.img}/>
                    Coding
                </Link>
                <Link href="/blog?cat=food" className={`${s.category} ${s.food}`}>
                    <Image src="/img/fr1.webp" alt="category" width={32} height={32} className={s.img} />
                    Food
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;
