import React from 'react';
import Container from '@/components/companyPage/Container/Container';
import numbers from '@/public/numbers.svg'
import Image from 'next/image';
import css from './SecondScreen.module.css'
import { Title } from '@/components/companyPage/Title/Title';

export const SecondScreen = () => (
    <section className={css.second_screen}>
        <Container>
            <div className={css.screen_inner}>
                <div className={css.text_item}>

                    <Title>Интереснее и увлекательнее</Title>
                    <p className={css.text}>
                        LETICOIN — это платформа, дополняющая
                        образовательный процесс
                        с элементами геймификации
                    </p>
                </div>
                <div className={css.numbers}>
                    <Image alt="1. Решай Problem Set'ы. 2. Получай LETICOIN'ы 3. Трать в магазине" src={numbers} fill />
                </div>
            </div>
        </Container>
    </section>
);
