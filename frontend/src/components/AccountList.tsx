import React from 'react';
import { Account } from '../types';

interface AccountListProps {
  accounts: Account[];
  onSelectAccount: (account: Account) => void;
}

const AccountList: React.FC<AccountListProps> = ({ accounts, onSelectAccount }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Účty</h2>
      <ul>
        {accounts.map((account) => (
          <li
            key={account.id}
            className="cursor-pointer p-3 mb-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200"
            onClick={() => onSelectAccount(account)}
          >
            {account.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
