import React, { DetailedHTMLProps, FC, InputHTMLAttributes, forwardRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


interface PropsType extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string,
  isError?: boolean,
  errorMessage?: string
  inputClassName?: string,
}

const Input = forwardRef<HTMLInputElement, PropsType>(({
  type,
  label,
  required,
  className,
  placeholder,
  inputClassName,
  isError = false,
  errorMessage = "invalid input",
  ...props
}, ref) => {
  const [inputType, setInputType] = useState<string | undefined>(type)
  const handleShowPassword = () => {
    setInputType(prevState => {
      if (prevState === "password") return "text"
      return "password"
    })
  }
  const style = twMerge("h-[74px] w-[315px] flex flex-col justify-between text-[14px] leading-[20px] relative", className)
  return (
    <>
      <div className={style}>
        {
          label && <label className={isError ? "text-red-700" : "text-[#888888] text-[18px]"} htmlFor={props.id}>
            {label}{required && "*"}
          </label>
        }
        <input
          ref={ref}
          {...props}
          type={inputType}
          required={required}
          placeholder={isError ? errorMessage : placeholder}
          className={twMerge(`w-[100%] outline-none rounded-[10px] h-[65px] flex px-4 border-[1px] ${isError ? "border-red-700 placeholder-red-700 placeholder:text-[13px]" : "border-[rgba(136, 136, 136, 0.60)] placeholder-[#E4E3E0]"}  rounded-[10px]`, inputClassName)}
          style={{
            boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)"
          }}
        />
        {inputType === "password" && (
          <AiOutlineEyeInvisible onClick={handleShowPassword} className="absolute right-4 bottom-3 cursor-pointer text-[20px] text-[#697586]" />
        )}

        {inputType === "text" && label?.toLowerCase().includes("password") && (
          <AiOutlineEye onClick={handleShowPassword} className="absolute right-4 bottom-3 cursor-pointer text-[20px] text-[#697586]" />
        )}
      </div>
    </>
  )
})

Input.displayName = "Input"

export default Input