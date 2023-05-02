import React from 'react'

import { useInput } from '../hooks'
import Input from './Input'
import { Transaction } from '../types'
import { createTransaction } from '../utils'
import TransactionComponent from './TransactionComponent'


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
        const newTransaction: Transaction = createTransaction(
            sourceInput.value,
            amountInput.value,
            dateInput.value,
            -1)
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
                ? <TransactionComponent key={index} transaction={transaction} />
                : null
            })}
            </ul>
        </article>
    </section>
  )
}

export default Expenses