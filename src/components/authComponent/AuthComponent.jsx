'use client'
import React, {useState} from 'react';
import Link from "next/link";
import s from './authLinks.module.css';

const AuthComponent = () => {
    const [open, setOpen] = useState(false);
    const status = 'falseworld'
    return (
        <>
            {status === "falseworld" ? (
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
                <div className={s.resMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "falseworld" ? (
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
