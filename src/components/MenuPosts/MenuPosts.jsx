import React from 'react';
import s from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({withImage}) => {
    return (
        <div>

            <div className={s.items}>
                <Link href={'/'} className={s.item}>
                    {withImage && (<div className={s.imgBox}>
                        <Image src={'/img/pic1.webp'} alt={'picture'} fill sizes={'(max-width:600px) 100vw ,50vw'}
                               className={s.img}/>
                    </div>
                    )}
                    <div className={s.textBox}>
                        <span className={`${s.category} ${s.travel}`}>Travel</span>
                        <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <div className={s.detail}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}> - 6.23.2024</span>
                        </div>
                    </div>
                </Link>
                <Link href={'/'} className={s.item}>
                    {withImage && (  <div className={s.imgBox}>
                        <Image src={'/img/pic1.webp'} alt={'picture'} fill sizes={'(max-width:600px) 100vw ,50vw'}
                               className={s.img}/>
                    </div>)}
                    <div className={s.textBox}>
                        <span className={`${s.category} ${s.food}`}>Food</span>
                        <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <div className={s.detail}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}> - 6.23.2024</span>
                        </div>
                    </div>
                </Link> <Link href={'/'} className={s.item}>
                {withImage && (  <div className={s.imgBox}>
                    <Image src={'/img/pic1.webp'} alt={'picture'} fill sizes={'(max-width:600px) 100vw ,50vw'}
                           className={s.img}/>
                </div>)}
                <div className={s.textBox}>
                    <span className={`${s.category} ${s.fashion}`}>Fashion</span>
                    <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <div className={s.detail}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 6.23.2024</span>
                    </div>
                </div>
            </Link>
                <Link href={'/'} className={s.item}>
                    {withImage && (  <div className={s.imgBox}>
                        <Image src={'/img/pic1.webp'} alt={'picture'} fill sizes={'(max-width:600px) 100vw ,50vw'}
                               className={s.img}/>
                    </div>)}
                    <div className={s.textBox}>
                        <span className={`${s.category} ${s.culture}`}>Culture</span>
                        <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                        <div className={s.detail}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}> - 6.23.2024</span>
                        </div>
                    </div>
                </Link> <Link href={'/'} className={s.item}>
                {withImage && (   <div className={s.imgBox}>
                    <Image src={'/img/pic1.webp'} alt={'picture'} fill sizes={'(max-width:600px) 100vw ,50vw'}
                           className={s.img}/>
                </div>)}
                <div className={s.textBox}>
                    <span className={`${s.category} ${s.coding}`}>Coding</span>
                    <h3 className={s.postTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                    <div className={s.detail}>
                        <span className={s.username}>John Doe</span>
                        <span className={s.date}> - 6.23.2024</span>
                    </div>
                </div>
            </Link>
            </div>
        </div>

    );
};

export default MenuPosts;
