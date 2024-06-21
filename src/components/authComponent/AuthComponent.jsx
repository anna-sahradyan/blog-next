import React from 'react';
import Link from "next/link";
import s from './authLinks.module.css';
const AuthComponent = () => {
    const status= false
    return (
        <>
            {status===false ?(<Link href={'/login'}>Login</Link>):(
                <>
                <Link href={'/write'}>Write</Link>
            <span className={s.link}>Logout</span>
                </>
            )}
        </>
    );
};

export default AuthComponent;
