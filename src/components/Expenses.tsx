import React from 'react'

import { useInput } from '../hooks'
import Input from './Input'
import { Transaction } from '../types'


interface ExpenseProps {
    transactions: Transaction[]
    setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>
    balance: number
}

const Expenses = ({ transactions, setTransactions, balance }: ExpenseProps) => {
    const sourceInput = useInput()
    const amountInput = useInput()
    const dateInput = useInput()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('in the handleSubmit')
        const newTransaction: Transaction = {
            source: sourceInput.value,
            amount: parseInt(amountInput.value)*-1,
            date: dateInput.value
        }
        if(balance + newTransaction.amount >= 0) setTransactions(transactions.concat(newTransaction))

    }

  return (
    <section id='expenses'>
        <form onSubmit={handleSubmit}>
            <Input 
                inputId='sourceExpenseInp'
                inputLabel='Expense source'
                inputType='text'
                inputState={sourceInput}
                placeHolder='Expense type'
            />
            <Input 
                inputId='amountExpenseInp'
                inputLabel='Expense amount'
                inputType='text'
                inputState={amountInput}
                placeHolder='Expense amount'
            />
            <Input 
                inputId='dateExpenseInp'
                inputLabel='Expense date'
                inputType='date'
                inputState={dateInput}
            />
            <button
                type='submit'
            >Add expense</button>
        </form>
        <article id='previousExpenses'>
            <ul>
            {transactions.map((transaction, index) => {
                return transaction.amount <= 0
                ?<li key={index}>{transaction.source}: {transaction.amount}e on {transaction.date}</li>
                : null
            })}
            </ul>
        </article>
    </section>
  )
}

export default Expenses