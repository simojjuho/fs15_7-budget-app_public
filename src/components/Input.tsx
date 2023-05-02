import React from 'react'

interface InputProps {
    inputType: string
    inputId: string
    inputLabel: string
    inputState: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void }
    placeHolder?: string
}

const Input = ({ inputType, inputId, inputLabel, inputState, placeHolder='' }: InputProps) => {
  return (
    <div>
        <label htmlFor={inputId}>{ inputLabel }</label>
        <input 
            id={inputId}
            type={inputType}
            {...inputState}
            placeholder={placeHolder}
        />
    </div>
  )
}

export default Input