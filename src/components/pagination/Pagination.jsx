'use client'
import React from 'react';
import s from '@/components/pagination/pagination.module.css'
const Pagination = () => {
    return (
        <div className={s.container}>
            <button className={s.btn}>Previous</button>
            <button className={s.btn}>Next</button>
        </div>
    );
};

export default Pagination;
