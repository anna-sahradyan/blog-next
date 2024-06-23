import React from 'react';
import s from './header.module.css';
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";
import AuthComponent from "@/components/authComponent/AuthComponent";

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.social}>
                <Image src="/img/facebook.svg" alt="facebook" width={24} height={24}/>
                <Image src='/img/instagram.svg' alt={'instagram'} width={24} height={24}/>
                <Image src={'/img/tiktok.svg'} alt={'tiktok'} width={24} height={24}/>
                <Image src={'/img/youtube.svg'} alt={'youtube'} width={24} height={24}/>
            </div>

            <div className={s.logo}>AnnaBlog</div>
            <div className={s.menu}>
                <ThemeSwitch/>
                <Link href={'/'} className={s.menuItem}>Home</Link>
                <Link href={'/'} className={s.menuItem}>Contacts</Link>
                <Link href={'/'} className={s.menuItem}>About</Link>
                <AuthComponent/>
            </div>
        </div>
    );
};

export default Header;
