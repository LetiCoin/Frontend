import React from 'react'
import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import InputLabeled from '@/components/InputLabeled/InputLabeled'

const Login = () => {
    return (
        
        <form className={css.login}>
            <h1 className={css.title}>Войдите в LETICOIN</h1>
            <InputLabeled label='Email' placeholder='myemail@gmail.com' />
            <InputLabeled label='Пароль' type='password' />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Login