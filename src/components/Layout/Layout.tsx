import React from 'react'
import css from './Layout.module.css'

interface Props {
    children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
    return (
        <div className={css.layout}>
            <div className={css.container}>
                {children}

            </div>
        </div>
    )
}

export default Layout