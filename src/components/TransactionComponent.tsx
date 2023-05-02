import React from 'react'
import { Transaction } from '../types'

interface TransactionProps {
  transaction: Transaction
}

const TransactionComponent = ({ transaction }: TransactionProps) => {
  return (
    <li>{transaction.source}: {transaction.amount}e on {transaction.date} </li>
  )
}

export default TransactionComponent