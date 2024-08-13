import React from 'react';
import { Transaction } from '../types';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Transakce</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="p-3 mb-2 bg-gray-100 rounded-lg">
            <p className="text-gray-600">{transaction.bookingDate}: {transaction.amount.value} {transaction.amount.currency}</p>
            <p className="text-sm text-gray-400">{transaction.details.detail1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
