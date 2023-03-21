import React from 'react'
import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'

const Login = () => {
    return (
        
        <form className={css.login}>
            <h1 className={css.title}>Войдите в LETICOIN</h1>
            <Input label='Email' placeholder='myemail@gmail.com' />
            <Input label='Пароль' type='password' />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Login