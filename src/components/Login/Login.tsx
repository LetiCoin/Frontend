import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import InputLabeled from '@/components/InputLabeled/InputLabeled'
import { FormEventHandler, useState } from "react"
import { ISetToken } from "@/utils/Token/token"
import loginRequest from "@/utils/login"

interface Props {
    setToken: ISetToken;
}


const Login = ({ setToken }: Props) => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()

        await loginRequest(login, password, setToken, setError)

    }
    return (

        <form className={css.login} onSubmit={handleSubmit}>
            <h1 className={css.title}>Войдите в LETICOIN</h1>
            <InputLabeled
                label='Логин'
                placeholder='superman'
                value={login}
                onChange={
                    (e) => setLogin(e.currentTarget.value)
                }
            />
            <InputLabeled
                label='Пароль'
                type='password'
                value={password}
                onChange={
                    (e) => setPassword(e.currentTarget.value)
                }
            />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Login


