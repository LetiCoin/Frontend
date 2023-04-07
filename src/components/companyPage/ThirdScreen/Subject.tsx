import React from 'react';
import css from './Subject.module.css';
import Image from 'next/image';
import coin from "@/public/coin.svg";

export const Subject = ({ children, coins }) => (
    <div className={css.subject}>
        {children}
        <div className={css.coins}>{coins}
            <Image alt='coins' src={coin}></Image></div>
    </div>
);
