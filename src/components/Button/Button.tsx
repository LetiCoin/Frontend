import css from './Button.module.css'

type ButtonProps = JSX.IntrinsicElements['button'] & {
    children: string,
    onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button className={css.btn} onClick={onClick}>{children}</button>
    )
}

export default Button