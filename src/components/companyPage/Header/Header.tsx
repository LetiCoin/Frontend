import React from 'react';
import Container from '@/components/companyPage/Container/Container';
import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import css from './Header.module.css';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';

export const Header = () => (
    // TODO add sidebar menu if needed
    <header className={css.header}>
        <Container>
            <div className={css.header__inner}>
                <Logo />
                <BurgerMenu className={css.burger} />

                <Link className={css.login} href={{
                    pathname: '/login'
                }}>Войти</Link>
            </div>
        </Container>

    </header>
);
