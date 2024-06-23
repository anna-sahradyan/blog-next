'use client';
import React from 'react';
import s from './footer.module.css';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.logo}>

                        <Image src={'/img/avatar.svg'} alt={'avatar'} width={50} height={50}/>
                        <h2 className={s.logoText}>AnnaBlog</h2>
                    </div>
                    <p className={s.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur debitis dolore doloremque est ex hic iste itaque laborum magnam modi, quaerat quasi rem repellat repellendus similique temporibus totam, voluptates!
                    </p>
                    <div className={s.icons}>
                        <Image src="/img/facebook.svg" alt="facebook" width={18} height={18}/>
                        <Image src='/img/instagram.svg' alt={'instagram'} width={18} height={18}/>
                        <Image src={'/img/tiktok.svg'} alt={'tiktok'} width={18} height={18}/>
                        <Image src={'/img/youtube.svg'} alt={'youtube'} width={18} height={18}/>
                    </div>
                </div>
                <div className={s.links}>
                    <div className={s.list}>
                        <span className={s.titleLists}>Links</span>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/'}>About</Link>
                        <Link href={'/'}>Blog</Link>
                        <Link href={'/'}>Contacts</Link>
                    </div>     <div className={s.list}>
                        <span className={s.titleLists}>Tags</span>
                        <Link href={'/'}>Style</Link>
                        <Link href={'/'}>Fashion</Link>
                        <Link href={'/'}>Coding</Link>
                        <Link href={'/'}>Travel</Link>
                    </div>     <div className={s.list}>
                        <span className={s.titleLists}>Social</span>
                        <Link href={'/'}>Facebook</Link>
                        <Link href={'/'}>Instagram</Link>
                        <Link href={'/'}>Tiktok</Link>
                        <Link href={'/'}>YouTube</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
