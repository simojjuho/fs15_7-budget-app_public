import React from 'react'
import { useState, useEffect } from 'react'

import Income from './components/Income'
import Expenses from './components/Expenses'
import Progress from './components/Progress'
import CurrentBalance from './components/CurrentBalance'
import { Transaction } from './types'

  /* 
  TODO:
  State: useState
  The next in flex-row:
    - Component for income
    - Component for expense
    - custom hook for input
    - Following in one component
      - state for savings
      - state for target
      - progress-bar
  - The following will be in flex-box
    - Show current balance
    - Input for transfering to savings account  
   */

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [balance, setBalance] = useState(0)
  const [savings, setSavings] = useState(0)
  
  useEffect(() => {
    setBalance(transactions.reduce((a,c) => a+c.amount, 0))
  }, [transactions])

  return (
    <main>
      <section id="upperSection">
        <Income 
          transactions={transactions}
          setTransactions={setTransactions}
          />
        <Expenses 
          transactions={transactions}
          setTransactions={setTransactions}
          balance={balance}
          />
        <Progress savings={savings}/>
      </section>
      <CurrentBalance savings={savings} balance={balance} setSavings={setSavings} setBalance={setBalance}/>
      
    </main>
  )
}

export default App