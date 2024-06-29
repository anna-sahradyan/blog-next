"use client"
import React from 'react';
import s from './loginPage.module.css';

const LoginPage = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
             <div className={s.socialBtn}>Sign In with Google</div>
             <div className={s.socialBtn}>Sign In with GitHub</div>
             <div className={s.socialBtn}>Sign In with Facebook</div>
            </div>

        </div>
    );
};

export default LoginPage;
