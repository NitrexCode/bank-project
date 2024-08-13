// src/components/TransactionList.tsx
import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h3 className="text-lg font-bold mt-4">Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="p-2 mb-2 bg-white bg-opacity-20 rounded-lg">
            <p>{transaction.bookingDate}: {transaction.amount.value} {transaction.amount.currency}</p>
            <p className="text-sm text-gray-400">{transaction.details.detail1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
