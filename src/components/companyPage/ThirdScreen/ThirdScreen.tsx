import React from 'react';
import Container from '@/components/companyPage/Container/Container';
import css from './ThirdScreen.module.css'
import { Title } from '@/components/companyPage/Title/Title';
import { Subject } from './Subject';


export const ThirdScreen = () => (
    <section className={css.third_screen}>
        <Container>
            <div className={css.screen_inner}>

                <Title>Problem Set’ы</Title>
                <ul className="benefits">
                    <li className={css.benefits_item}>
                        Задачи, максимально приближенные
                        к реальным и упакованные в удобные ТЗ.
                    </li>
                    <li className={css.benefits_item}>
                        Прекрасная альтернатива
                        стандартным лабораторным работам.
                    </li>

                </ul>
                <div className="subjects">
                    <ul className={css.subjects__items}>
                        <li className={css.subject__item}>

                            <Subject coins="+15">Физика</Subject>
                        </li>
                        <li className={css.subject__item}>
                            <Subject coins="+15">АиГ</Subject>
                        </li>
                        <li className={css.subject__item}>
                            <Subject coins="+15">Информатика</Subject>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
);
