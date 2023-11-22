import { ButtonProps } from "@/utils/types"

export default function Button({
    children,
    onClick,
    variant,
    size
}:ButtonProps){

    const buttonStyle = {}

    return (
        <button
            className={` 
                flex justify-center items-center rounded-md h-[40px] font-medium
                ${
                    size === 'sm' && ' w-[130px]' ||
                    size === 'full' && ' w-full'
                }
                ${ variant === 'contained' ? " bg-primary text-white ":" border border-primary text-primary  "}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}