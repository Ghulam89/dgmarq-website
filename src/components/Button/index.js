import React from 'react'

const  Button = ({
    type,
    label,
    disabled,
    className,
    IconLeft,
    IconRight,
    onClick
}) => {
  return (
    <button onClick={onClick} type={type} className={` text-white bg-[#19173E] px-5 py-2.5 text-center flex gap-5 justify-center   rounded-lg  font-medium ${className}`} disabled={disabled}> {IconLeft} {label} {IconRight} </button>
  )
}

export default Button