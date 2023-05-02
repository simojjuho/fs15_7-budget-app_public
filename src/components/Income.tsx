import React from 'react'

import { useInput } from '../hooks'
import Input from './Input'
import { Transaction } from '../types'
import TransactionComponent from './TransactionComponent'
import { createTransaction } from '../utils'

interface IncomeProps {
    transactions: Transaction[]
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
}

const Income = ({ transactions, setTransactions }: IncomeProps) => {
    const sourceInput = useInput()
    const amountInput = useInput()
    const dateInput = useInput()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('in the handleSubmit')
        const newTransaction: Transaction = createTransaction(
            sourceInput.value,
            amountInput.value,
            dateInput.value,
            1)
        setTransactions(transactions.concat(newTransaction))
    }

  return (
    <section id='income'>
        <form onSubmit={handleSubmit}>
            <Input 
                inputId='sourceIncomeInp'
                inputLabel='Income source'
                inputType='text'
                inputState={sourceInput}
                placeHolder='Income source'
            />
            <Input 
                inputId='amountIncomeInp'
                inputLabel='Income amount'
                inputType='text'
                inputState={amountInput}
                placeHolder='Income amount'
            />
            <Input 
                inputId='dateIncomeInp'
                inputLabel='Income date'
                inputType='date'
                inputState={dateInput}
            />
            <button
                type='submit'
            >
            Add income
            </button>
        </form>
        <article id='previousIncomes'>
            <ul>
            {transactions.map((transaction, index) => {
                return transaction.amount >= 0
                ? <TransactionComponent key={index} transaction={transaction}/>
                : null
            })}
            </ul>
        </article>
    </section>
  )
}

export default Income