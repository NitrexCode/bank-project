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
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 shadow-lg mt-8">
      <h2 className="text-xl font-bold mb-2">{account.name}</h2>
      {balance ? (
        <div className="mb-4">
          <p>Balance: {balance.amount.value} {balance.amount.currency}</p>
        </div>
      ) : (
        <p>Loading balance...</p>
      )}
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default AccountDetails;
