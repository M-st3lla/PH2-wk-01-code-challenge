import React from 'react'
import TransactionItem from "./TransactionItem"
import { bankTransactions } from './Data'

function Transactions() {
    return (
        <div className="transact-container">
            <TransactionItem props={bankTransactions} />
        </div>
    )
}

export default Transactions;