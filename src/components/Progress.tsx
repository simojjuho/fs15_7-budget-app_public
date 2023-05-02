import React from 'react'
import { useState } from 'react'

import { useInput } from '../hooks'
import Input from './Input'

interface ProgressProps {
  savings: number
}

const Progress = ({savings}: ProgressProps) => {
  const [target, setTarget] = useState(0)

  const targetInput = useInput()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const targetNumber = parseInt(targetInput.value)
    if(targetNumber > 0) setTarget(targetNumber)
  }

  const getPercentage = () => target === 0 ? 0 : Math.round(savings / target * 100)

  return (
    <section id="progress">
      <form onSubmit={handleSubmit}>
        <Input
          inputId='savingsTargetInput'
          inputLabel='Savings target'
          inputState={targetInput}
          inputType='text'
        />
        <button type="submit">Reset</button>
      </form>
      <p>Current savings: {savings}</p>
      <p>Target: {target}</p>
      <p>Progress: {getPercentage()}%
        <progress id='savingsProgress' value={`${savings}`} max={`${target}`}></progress>
      </p>
      
    </section>
 )
}

export default Progress