"use client"
import React, { useEffect, useState } from 'react';
import Pagination from "@/components/pagination/Pagination";
import s from './cardLIst.module.css';
import Card from "@/components/card/Card";

const getData = async (page) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
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

const CardList = ({ page }) => {
    const [data, setData] = useState([]);
    const [hasPrev, setHasPrev] = useState(false);
    const [hasNext, setHasNext] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData(page);
            setData(result.data);
            setHasPrev(result.hasPrev);
            setHasNext(result.hasNext);
        };

        fetchData();
    }, [page]);

    return (
        <div className={s.container}>
            <h2 className={s.title}>Recent Posts</h2>
            <div className={s.posts}>
                {data?.map((item) => (
                    <Card key={item._id} item={item} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    );
};

export default CardList;
