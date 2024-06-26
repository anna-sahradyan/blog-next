import React from 'react';
import s from './comments.module.css';
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = 'authenticated';
    return (
        <div className={s.cointainer}>
            <h2 className={s.title}>Comments</h2>
            {status === 'authenticated' ? (<div className={s.write}>
                <textarea placeholder={'write a comment ...'} className={s.input}/>
                <button className={s.btn}>Send</button>
            </div>) : (<Link href={'/login'}>Login to write a comment</Link>
            )}
            <div className={s.comments}>
                <div className={s.comment}>
                    <div className={s.userBox}>
                        <Image src={'/img/pic2.webp'} alt={'pic'} width={50} height={50} className={s.img}/>
                        <div className={s.info}>
                            <span className={s.usernmae}>John Doe</span>
                            <span className={s.date}>6.25.2024</span>
                        </div>
                    </div>
                    <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dolorum,
                        et eum fugit hic iure laboriosam magni minus mollitia neque placeat quo reprehenderit sit
                        tempore tenetur ullam vel vero?</p>
                </div>
            </div>
            <div className={s.comments}>
                <div className={s.comment}>
                    <div className={s.userBox}>
                        <Image src={'/img/pic2.webp'} alt={'pic'} width={50} height={50} className={s.img}/>
                        <div className={s.info}>
                            <span className={s.usernmae}>John Doe</span>
                            <span className={s.date}>6.25.2024</span>
                        </div>
                    </div>
                    <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dolorum,
                        et eum fugit hic iure laboriosam magni minus mollitia neque placeat quo reprehenderit sit
                        tempore tenetur ullam vel vero?</p>
                </div>
            </div>
            <div className={s.comments}>
                <div className={s.comment}>
                    <div className={s.userBox}>
                        <Image src={'/img/pic2.webp'} alt={'pic'} width={50} height={50} className={s.img}/>
                        <div className={s.info}>
                            <span className={s.usernmae}>John Doe</span>
                            <span className={s.date}>6.25.2024</span>
                        </div>
                    </div>
                    <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae dolorum,
                        et eum fugit hic iure laboriosam magni minus mollitia neque placeat quo reprehenderit sit
                        tempore tenetur ullam vel vero?</p>
                </div>
            </div>
        </div>
    );
};

export default Comments;
