import css from "./InputLabeled.module.css"
import { ForwardedRef, forwardRef } from "react"


type Props = JSX.IntrinsicElements['input'] & {
    label?: string,
}

const InputLabeled = forwardRef(({ label, type, placeholder, value, ...other }: Props, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <label>
            <div className={css.label}>{label}</div>
            <input className={css.input} type={type || "text"} placeholder={placeholder} ref={ref} {...other} />
        </label>
    )
});

InputLabeled.displayName = "InputLabeled";


export default InputLabeled