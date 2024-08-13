import React from 'react';
import { Account, Balance, Transaction } from '../types';
import TransactionList from './TransactionList';

interface AccountDetailsProps {
  account: Account;
  balance: Balance | null;
  transactions: Transaction[];
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ account, balance, transactions }) => {
  return (
    <div className="bg-white rounded-lg p-6 mt-6 mb-6 bg-opacity-50 backdrop-blur-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{account.name}</h2>
      {balance ? (
        <div className="mb-4">
          <p className="text-lg text-gray-600">Zůstatek: {balance.amount.value} {balance.amount.currency}</p>
        </div>
      ) : (
        <p className="text-gray-500">Načítání zůstatku</p>
      )}
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default AccountDetails;
