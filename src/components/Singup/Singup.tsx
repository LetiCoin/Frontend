import css from "./Login.module.css"
import Button from '@/components/Button/Button'
import InputLabeled from '@/components/InputLabeled/InputLabeled'
import { FormEventHandler, useRef, useState } from "react"
import { ISetToken } from "@/utils/Token/token"
import register from "@/utils/register"

interface Props {
    setToken: ISetToken;
}


const Singup = ({ setToken }: Props) => {
    // Declare state variables for email, login, password, role and error
    const [email, setEmail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [error, setError] = useState("")

    // Create references to the HTMLInputElement for each of the state variables
    const emailInputRef = useRef<HTMLInputElement>(null)
    const loginInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)
    const roleInputRef = useRef<HTMLInputElement>(null)


    const handleSubmit: FormEventHandler = async (e) => {
        e.preventDefault()
        if (!emailInputRef || !emailInputRef.current) {
            throw new TypeError("emailInputRef is not valid")
        }
        if (!loginInputRef || !loginInputRef.current) {
            throw new TypeError("loginInputRef is not valid")
        }
        if (!passwordInputRef || !passwordInputRef.current) {
            throw new TypeError("passwordInputRef is not valid")
        }
        if (!roleInputRef || !roleInputRef.current) {
            throw new TypeError("roleInputRef is not valid")
        }
        setEmail(emailInputRef.current.value)
        setLogin(loginInputRef.current.value)
        setPassword(passwordInputRef.current.value)
        setRole(roleInputRef.current.value)
        await register(email, login, password, role, setToken, setError)
    }

    return (

        <form className={css.login} onSubmit={handleSubmit}>
            <h1 className={css.title}>Зарегистрируйтесь на LETICOIN</h1>
            <InputLabeled
                type="email"
                label='Email'
                placeholder='myemail@gmail.com'
                ref={emailInputRef}
                value={email}
                onChange={
                    (e) => setEmail(e.currentTarget.value)
                }
                required
            />
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
            <InputLabeled
                label='Роль'
                ref={roleInputRef}
                value={role}
                onChange={
                    (e) => setRole(e.currentTarget.value)
                }
                required
            />
            <a className={css.forget_password} href="forget_password">Забыли пароль?</a>
            <Button>Войти</Button>
        </form>
    )
}

export default Singup


