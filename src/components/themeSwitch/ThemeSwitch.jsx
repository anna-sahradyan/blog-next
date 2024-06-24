"use client";
import Image from "next/image";
import s from "./themeSwitch.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeSwitch = () => {
    const { toggle, theme } = useContext(ThemeContext);

    return (
        <div
            className={s.container} onClick={toggle}
            style={theme==='dark'?{backgroundColor:"#F0F8FF"}:{backgroundColor:"#0f172a"}}
        >
            <Image src="/img/moon.svg" alt="" width={14} height={14} />
            <div className={s.ball}  style={theme==='dark'?{left:1,backgroundColor:"#0f172a"}:{right:1,backgroundColor:"#F0F8FF"}}></div>
            <Image src="/img/sun.svg" alt="" width={14} height={14} />
        </div>
    );
};

export default ThemeSwitch;
