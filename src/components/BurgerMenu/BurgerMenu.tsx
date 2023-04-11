import React from 'react'

interface Props {
    className?: string | undefined;

}

const BurgerMenu = ({ className }: Props) => {
    return (
        <svg className={className} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.6253 0H17.3991C18.2798 0 19 0.720401 19 1.60094C19 2.48148 18.2798 3.20204 17.3991 3.20204H1.6253C0.744756 3.20204 0.0242004 2.48164 0.0242004 1.6011C0.0242004 0.720401 0.744756 0 1.6253 0ZM1.6253 12.7981H17.3991C18.2798 12.7981 19 13.5185 19 14.3991C19 15.2796 18.2798 16 17.3991 16H1.6253C0.744756 16 0.0242004 15.2796 0.0242004 14.3991C0.0242004 13.5185 0.744756 12.7981 1.6253 12.7981ZM1.6253 6.39914H17.3991C18.2798 6.39914 19 7.11954 19 8.00008C19 8.88062 18.2798 9.60117 17.3991 9.60117H1.6253C0.744756 9.60117 0.0242004 8.88062 0.0242004 8.00008C0.0242004 7.11954 0.744756 6.39914 1.6253 6.39914Z" fill="url(#paint0_linear_103_341)" />
            <defs>
                <linearGradient id="paint0_linear_103_341" x1="-48.5283" y1="16.3654" x2="-48.5283" y2="-0.365901" gradientUnits="userSpaceOnUse">
                    <stop offset="2.67547e-07" stop-color="#0044D0" />
                    <stop offset="0.1002" stop-color="#034AD2" />
                    <stop offset="0.6777" stop-color="#1569DE" />
                    <stop offset="1" stop-color="#1B75E2" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default BurgerMenu