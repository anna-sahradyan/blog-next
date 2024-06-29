"use client";
import s from './writePage.module.css';
import Image from "next/image";
import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import 'quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const { status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/login");
        }
    }, [status, router]);

    if (status === "unauthenticated") {
        return null;
    }
    return (
        <div className={s.container}>
            <input type="text" placeholder={'Title'} className={s.input}/>
            <div className={s.editor}>
                <button className={`${s.btn}`} onClick={() => setOpen(!open)}>
                    <Image src={'/img/plus.svg'} alt={"plus"} width={16} height={16} className={s.img}/>
                </button>
                {open && (
                    <div className={s.add}>
                        <button className={`${s.btn} ${s.addBtn}`}>
                            <Image src={'/img/arrow.svg'} alt={""} width={16} height={16} className={s.img}/>
                        </button>
                        <button className={`${s.btn} ${s.addBtn}`}>
                            <Image src={'/img/img.svg'} alt={"img"} width={16} height={16} className={s.img}/>
                        </button>
                        <button className={`${s.btn} ${s.addBtn}`}>
                            <Image src={'/img/video.svg'} alt={"video"} width={16} height={16} className={s.img}/>
                        </button>
                    </div>
                )}
                <ReactQuill theme={'bubble'} value={value} onChange={setValue} placeholder={'Tell your story'} className={s.textEditor}/>
            </div>
            <button className={s.btnPublish}>Publish</button>
        </div>
    );
};

export default WritePage;
