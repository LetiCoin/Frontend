import React from 'react';
import Container from '@/components/companyPage/Container/Container';
import css from './Footer.module.css'
import logo from '@/public/logo11blind.svg';
import Image from 'next/image';
import vkIcon from "@/public/vk-icon.svg"
import telegramIcon from "@/public/telegram-icon.svg"


export const Footer = () => (
    <footer className={css.footer}>
        <Container>
            <div className={css.footer__inner}>

                <div className={css.logo}>
                    <Image alt='Logo Leticoin' src={logo}></Image>
                </div>
                <div className={css.socials}>
                    <ul className={css.socials__items}>
                        <li className={css.social__item}>
                            <a className={css.vk} href="">
                                <Image alt='Мы во Вконтакте' src={vkIcon}></Image>
                            </a>

                        </li>
                        <li className={css.social__item}>
                            <a className={css.telegram} href="">
                                <Image alt='Мы во Телеграме' src={telegramIcon}></Image>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
);
