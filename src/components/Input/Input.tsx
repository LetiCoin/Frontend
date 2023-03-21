import React from 'react'
import css from "./Input.module.css"


type Props = JSX.IntrinsicElements['input'] & {
    label?: string,
}


const Input = ({ label, type, placeholder, value }: Props) => {
    return (
        <label>
            <div className={css.label}>{label}</div>
            <input className={css.input} type={type || "text"} placeholder={placeholder} value={value} />
        </label>
    )
}

export default Input