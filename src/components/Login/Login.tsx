import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import InputLabeled from '@/components/InputLabeled/InputLabeled'
import { FormEventHandler, useRef, useState } from "react"
import { ISetToken } from "@/utils/Token/token"
import loginRequest from "@/utils/login"

interface Props {
    setToken: ISetToken;
}


const Login = ({ setToken }: Props) => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const loginInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)


    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        if (!loginInputRef || !loginInputRef.current) {
            throw new TypeError("loginInputRef is not valid")
        }
        if (!passwordInputRef || !passwordInputRef.current) {
            throw new TypeError("passwordInputRef is not valid")
        }
        setLogin(loginInputRef.current.value)
        setPassword(passwordInputRef.current.value)
        await loginRequest(login, password, setToken, setError)
    }



    return (

        <form className={css.login} onSubmit={handleSubmit}>
            <h1 className={css.title}>Войдите в LETICOIN</h1>
            <InputLabeled
                label='Логин'
                placeholder='superman'
                ref={loginInputRef}
                value={login}
                onChange={
                    (e) => setLogin(e.currentTarget.value)
                }
                required
            />
            <InputLabeled
                label='Пароль'
                type='password'
                ref={passwordInputRef}
                value={password}
                onChange={
                    (e) => setPassword(e.currentTarget.value)
                }
                required
            />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Login


