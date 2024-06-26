"use client";
import s from './writePage.module.css';
import Image from "next/image";
import {useState} from "react";

const WritePage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={s.container}>
            <input type="text" placeholder={'Title'} className={s.input}/>
            <div className={s.editor}>
                <button className={`${s.btn}`}><Image src={'/img/plus.svg'} alt={"plus"} width={16} height={16}
                                                 className={s.img}/>
                </button>
                {open && <div className={s.add}>
                    <button className={`${s.btn}${s.addBtn}`}><Image src={'/img/arrow.svg'} alt={""} width={16} height={16}
                                                     className={s.img}/>
                    </button>
                    <button className={`${s.btn}${s.addBtn}`}><Image src={'/img/img.svg'} alt={"img"} width={16} height={16}
                                                     className={s.img}/>
                    </button>
                    <button className={`${s.btn}${s.addBtn}`}><Image src={'/img/video.svg'} alt={"video"} width={16} height={16}
                                                     className={s.img}/>
                    </button>

                </div>}
            </div>
        </div>
    );
};

export default WritePage;
