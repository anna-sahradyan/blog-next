"use client";
import React, { useContext, useEffect, useState } from 'react';
import Link from "next/link";
import s from './authLinks.module.css';
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AuthComponent = () => {
    const [open, setOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const { status } = useSession();
    const router = useRouter();

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

    const handleLogout = () => {
        signOut().then(() => {
            router.push("/login");

        });
    };

    return (
        <>
            {status === "unauthenticated" ? (
                <Link href="/login" className={s.link}>
                    Login
                </Link>
            ) : (
                <>
                    <Link href="/write" className={s.link}>
                        Write
                    </Link>
                    <span className={s.link} onClick={handleLogout}>
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
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    {status === "unauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Write</Link>
                            <span className={s.link} onClick={handleLogout}>Logout</span>
                        </>
                    )}
                        </div>
            )}
        </>
    );
};

export default AuthComponent;
