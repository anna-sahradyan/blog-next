'use client';

import React, { useEffect, useState } from 'react';
import s from './categoryList.module.css';
import Image from 'next/image';
import Link from 'next/link';

const getData = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/categories`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();

    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const CategoryList =  () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className={s.container}>
            <h2 className={s.title}>Popular Categories</h2>
            <div className={s.categories}>
                {data?.map((item) => (
                    <Link key={item.id} href={`/blog?cat=${item.slug}`} legacyBehavior>
                        <a className={`${s.category} ${s[item.slug]}`}>
                            <Image src={`/img/${item.img}`} alt="category" width={32} height={32} className={s.img}/>
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;
