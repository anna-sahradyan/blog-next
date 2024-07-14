"use client";
import s from './writePage.module.css';
import Image from "next/image";
import React, {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import 'quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import {app} from '@/utils/firebase'

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState('');
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState("");
    const {status} = useSession();
    const router = useRouter();
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }

    }, [status, router]);
    useEffect(() => {
        if (file) {
            const storage = getStorage(app);
            const upload = () => {
                const name = new Date().getTime() + file.name;
                const storageRef = ref(storage, name);
                const uploadTask = uploadBytesResumable(storageRef, file);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        console.error('Upload failed', error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                            setMedia(downloadURL);
                        });
                    }
                );
            }
            upload();
        }
    }, [file]);
    const slugify = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    const handleSubmit = async () => {
        const slug = slugify(title);
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug,
                catSlug:"travel"
            })

        })
        if (response.ok) {
            const data = await response.json();
            router.push(`/posts/${data.slug}`);
        }
    }

    if (status === "loading") {
        return <div className={s.loading}>Loading...</div>;
    }

    return (
        <div className={s.container}>
            <input type="text" placeholder={'Title'} className={s.input} onChange={(e) => setTitle(e.target.value)}/>
            <div className={s.editor}>
                <button className={`${s.btn}`} onClick={() => setOpen(!open)}>
                    <Image src={'/img/plus.svg'} alt={"plus"} width={16} height={16} className={s.img}/>
                </button>
                {open && (
                    <div className={s.add}>
                        <input type="file" id={'image'} onChange={(e) => setFile(e.target.files[0])}
                               style={{display: "none"}}/>

                        <button className={`${s.btn} ${s.addBtn}`}>
                            <label htmlFor="image">
                                <Image src={'/img/arrow.svg'} alt={""} width={16} height={16} className={s.img}/>
                            </label>
                        </button>

                        <button className={`${s.btn} ${s.addBtn}`}>
                            <Image src={'/img/img.svg'} alt={"img"} width={16} height={16} className={s.img}/>
                        </button>
                        <button className={`${s.btn} ${s.addBtn}`}>
                            <Image src={'/img/video.svg'} alt={"video"} width={16} height={16} className={s.img}/>
                        </button>
                    </div>
                )}
                <ReactQuill theme={'bubble'} value={value} onChange={setValue} placeholder={'Tell your story'}
                            className={s.textEditor}/>
            </div>
            <button className={s.btnPublish} onClick={handleSubmit}>Publish</button>
        </div>
    );
};

export default WritePage;

