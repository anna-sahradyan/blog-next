"use client";
import React, {useEffect} from 'react';
import s from './loginPage.module.css';
import {useSession, handlers, signIn, signOut, auth} from "next-auth/react";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className={s.loading}>Loading...</div>;
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.socialBtn} onClick={() => signIn("google")}>Sign In with Google</div>
                <div className={s.socialBtn}>Sign In with GitHub</div>
                <div className={s.socialBtn}>Sign In with Facebook</div>
            </div>

        </div>
    );
};

export default LoginPage;
