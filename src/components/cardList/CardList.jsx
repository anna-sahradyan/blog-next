import React from 'react';
import Pagination from "@/components/pagination/Pagination";
import s from './cardLIst.module.css';

const CardList = () => {
    return (
        <div className={s.container}>
            <Pagination/>
        </div>
    );
};

export default CardList;
