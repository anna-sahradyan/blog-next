'use client'
import React, {useContext, useEffect, useState} from 'react';
import Link from "next/link";
import s from './authLinks.module.css';
import {ThemeContext} from "@/context/ThemeContext";

const AuthComponent = () => {
    const [open, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const status = 'notauthenticated'
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href="/login" className={s.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write" className={s.link}>
                        Write
                    </Link>
                    <span className={s.link}>
            Logout
          </span>
                </>
            )}
            <div className={s.burger} onClick={() => setOpen(!open)}>
                <div className={s.line}></div>
                <div className={s.line}></div>
                <div className={s.line}></div>
            </div>
            {open && (
                <div className={s.resMenu}
                     style={{ backgroundColor: theme === 'dark' ? '#0f172a' : '#F0F8FF' }}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={s.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default AuthComponent;
