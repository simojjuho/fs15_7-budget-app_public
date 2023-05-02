import { v4 as uuid } from 'uuid'

import { Transaction } from './types'

export const createTransaction = (source: string, amount: string, date: string, factor: number): Transaction => {
    const amountNum = parseInt(amount) * factor
    return {
        id: getId(),
        source,
        amount: amountNum,
        date
    }
}

export const getId = () => {
    return uuid()
}
