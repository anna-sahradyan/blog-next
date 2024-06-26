import React from 'react';
import s from './singlePage.module.css';
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.textBox}>
                    <h2 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                    <div className={s.user}>
                        <div className={s.userImgBox}>
                            <Image src={'/img/pic2.webp'} alt={'country'} fill className={s.avatar}/>
                        </div>
                        <div className={s.userTextBox}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>6.23.2024</span>
                        </div>
                    </div>
                </div>
                <div className={s.imageBox}>
                    <Image src={'/img/coun2.webp'} alt={'country'} fill className={s.img} />
                </div>
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.desc}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at beatae blanditiis eos error facilis fugit ipsa itaque nisi omnis qui, reiciendis ut! Dolorem eius eveniet molestiae nesciunt, reiciendis voluptatem.</p>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut debitis, harum hic iste laborum necessitatibus nostrum numquam omnis pariatur perferendis possimus quasi qui quisquam ratione recusandae sed unde velit!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut deserunt ea enim fugit, hic id nihil non officiis omnis optio quisquam repellat repellendus velit voluptas! Amet ex provident vero!</p>
                    </div>
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
