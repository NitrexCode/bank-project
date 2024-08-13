import React from 'react';
import { Account } from '../types';

interface AccountListProps {
  accounts: Account[];
  onSelectAccount: (account: Account) => void;
}

const AccountList: React.FC<AccountListProps> = ({ accounts, onSelectAccount }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li
            key={account.id}
            className="cursor-pointer p-2 mb-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 hover:shadow-xl transition-all duration-300"
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
