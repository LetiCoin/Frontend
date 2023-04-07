import React from 'react';
import css from './Container.module.css'
interface ContainerProps {
    children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => (
    <div className={css.container}>
        {children}
    </div>
);

export default Container;
