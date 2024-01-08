'use client'
import clsx from "clsx"
import { type } from "os"

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullwidth?: boolean;
    children?: React.ReactNode;
    onclick?: () => void;
    secondary?: boolean; // ?
    disabled?: boolean;
    danger?: boolean; // ?
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullwidth,
    children,
    onclick,
    secondary,
    disabled,
    danger,
}) => {
    return (
        <button
            onClick={onclick}
            type={type}
            disabled={disabled}
            className={clsx(`
        flex
        justify-center
        rounded-md
        px-6
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:-outline-offset-2
        `,
        disabled && 'opacity-50 cursor-default',
        fullwidth && 'w-full',
        secondary?'text-gray-900':'text-white',
        danger && 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
        !secondary && !danger && 'bg-indigo-600 hover:bg-indigo-700 focus-visble:outline-indigo-600'
            )}
        >
            {children}
        </button>
    )
}

export default Button