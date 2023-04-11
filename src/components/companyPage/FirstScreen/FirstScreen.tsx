import React from 'react';
import Image from 'next/image';
import flying_coinPic from '@/public/flying_leticoin.png';
import Container from '@/components/companyPage/Container/Container';
import css from './FirstScreen.module.css'
import { Title } from '../Title/Title';


export const FirstScreen = () => (
    <section className={css.first_screen}>

        <Container>
            <div className={css.screen_inner}>

                <div className={css.screen_text_item}>
                    <Title>Новый подход к обучению</Title>
                    <div className={css.buttons}>
                        <button className={`${css.button} ${css.button_first}`}>Войти</button>
                        <button className={`${css.button} ${css.button_second}`}>Узнать больше</button>
                    </div>
                </div>
                <div className={css.coin_image} >
                    <Image alt="Flying LETI-coin" src={flying_coinPic} fill />
                </div>
            </div>
        </Container>

    </section>
);
