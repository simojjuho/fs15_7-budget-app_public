import React from 'react'
import { useInput } from '../hooks'
import Input from './Input'

interface CurrentBalanceProps {
  savings: number
  balance: number
  setSavings: React.Dispatch<React.SetStateAction<number>>
  setBalance: React.Dispatch<React.SetStateAction<number>>

}

const CurrentBalance = ({savings, balance, setSavings, setBalance}: CurrentBalanceProps) => {
  const toSavingsInput = useInput()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const toSavings = parseInt(toSavingsInput.value)
    if(balance >= toSavings) {
      setSavings(savings + toSavings) 
      setBalance(balance - toSavings)
    }
  }

  return (
    <section id="currentBalance">
      <p>Balance is {balance}</p>
      <form onSubmit={handleSubmit}>
        <Input
          inputType='text'
          inputId='toSavingsInput'
          inputLabel='Transfer to savings'
          inputState={toSavingsInput}
        />
        <button type="submit">Transfer</button>
      </form>
    </section>
  )
}

export default CurrentBalance