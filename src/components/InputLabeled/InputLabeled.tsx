import React from 'react'
import css from "./InputLabeled.module.css"


type Props = JSX.IntrinsicElements['input'] & {
    label?: string,
}


const InputLabeled = ({ label, type, placeholder, value }: Props) => {
    return (
        <label>
            <div className={css.label}>{label}</div>
            <input className={css.input} type={type || "text"} placeholder={placeholder} value={value} />
        </label>
    )
}

export default InputLabeled