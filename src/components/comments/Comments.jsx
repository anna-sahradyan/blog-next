'use client';
import React from 'react';
import s from './comments.module.css';
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
import useSWR from "swr";


const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};
const Comments = ({postSlug}) => {
    const {status} = useSession();
    const {data, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)
    console.log(data)
    return (
        <div className={s.cointainer}>
            <h2 className={s.title}>Comments</h2>
            {status === 'authenticated' ? (<div className={s.write}>
                <textarea placeholder={'write a comment ...'} className={s.input}/>
                <button className={s.btn}>Send</button>
            </div>) : (<Link href={'/login'}>Login to write a comment</Link>
            )}
            <div className={s.comments}>
                {isLoading ? 'loading' : data?.map((item) => (
                        <div className={s.comment} key={item._id}>
                            <div className={s.userBox}>
                                {item?.user?.image &&
                                    < Image src={item?.user?.image} alt={'pic'} width={50} height={50}
                                            priority={true} className={s.img}/>}
                                <div className={s.info}>
                                    <span className={s.usernmae}>{item.user.name}</span>
                                    <span className={s.date}>{item.createdAt.substring(0,10)}</span>
                                </div>
                            </div>
                            <p className={s.desc}>{item.desc}
                            </p>
                        </div>
                    )
                )}

            </div>

        </div>
    )
        ;
};

export default Comments;
