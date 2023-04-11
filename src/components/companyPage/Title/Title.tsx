import React from 'react';
import css from './Title.module.css';

interface Props {
    children: string;
}
export const Title = ({ children }: Props) => (
    <h1 className={css.title}>
        {children}
    </h1>
);
