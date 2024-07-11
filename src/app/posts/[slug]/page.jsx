'use client';
import React, {useEffect, useState} from 'react';
import s from './singlePage.module.css';
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = ({params}) => {
    const {slug} = params;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
                    cache: "no-store",
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    const createdAt = data.createdAt.substring(0, 10);
    console.log(data?.user.image)
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.textBox}>
                    <h2 className={s.title}>{data?.title}</h2>
                    <div className={s.user}>
                        <div className={s.userImgBox}>
                            {data?.user.image && (
                                <Image
                                    src={data.user.image}
                                    alt="User Image"
                                    fill
                                    priority
                                    className={s.avatar}
                                />
                            )}
                        </div>
                        <div className={s.userTextBox}>
                            <span className={s.username}>{data?.user.name}</span>
                            <span className={s.date}>{createdAt}</span>
                        </div>
                    </div>
                </div>
                <div className={s.imageBox}>
                    <Image src={'/img/coun2.webp'} alt={'country'} fill
                           priority
                           className={s.img}/>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.desc} dangerouslySetInnerHTML={{__html: data?.desc}}/>
                    <div className={s.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    );
};

export default SinglePage;
