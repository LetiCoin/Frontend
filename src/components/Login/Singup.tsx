import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import InputLabeled from '@/components/InputLabeled/InputLabeled'
import { useState } from "react"
import { ISetToken } from "@/api/Token/token"
import { register } from "../../api/register"

interface Props {
    setToken: ISetToken;
}


const Login = ({ setToken }: Props) => {
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        await register(email, login, password, role, setToken, setError)

    }
    return (

        <form className={css.login} onSubmit={handleSubmit}>
            <h1 className={css.title}>Войдите в LETICOIN</h1>
            <InputLabeled
                label='Email'
                placeholder='myemail@gmail.com'
                value={email}
                onChange={
                    (e) => setEmail(e.currentTarget.value)
                }
            />
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
            <InputLabeled
                label='Роль'
                value={role}
                onChange={
                    (e) => setRole(e.currentTarget.value)
                }
            />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Login


