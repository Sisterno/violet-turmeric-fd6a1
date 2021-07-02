import React, { useState, useEffect } from 'react';
import style from "./style/MyProjectCard.module.css"
export default function myProjectCard(
    {
        text = 'Lukuma.pe web',
        tag = "JS | Nextjs",
        img = "http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg"
    },
){
    return (
        <div className={style.card}>
            <div className={style.image}>
                <img src={img}/>
            </div>
            <div className={style.details}>
                <div className={style.center}>
                    <h1>{text}</h1>
                    <p>{tag}</p>
                    <ul>
                        <li>
                            <a href="#">
                                <img src='/dog.svg' alt='next' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
