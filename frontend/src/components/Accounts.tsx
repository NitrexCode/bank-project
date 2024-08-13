import React, { useEffect, useState, useMemo } from 'react';
import { ApiService } from '../services/ApiService';
import { Account, Balance, Transaction } from '../types';
import AccountList from './AccountList';
import AccountDetails from './AccountDetails';
import { convertAccountNumber } from '../utils/convertAccountNumber';

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [balance, setBalance] = useState<Balance | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const apiService = useMemo(() => new ApiService(), []);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const data = await apiService.getAccounts();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, [apiService]);

  useEffect(() => {
    if (selectedAccount) {
      const accountNumber = convertAccountNumber(selectedAccount.identification.otherAccountNumber);
      const fetchAccountDetails = async () => {
        try {
          const balanceData = await apiService.getAccountBalance(accountNumber.toString());
          setBalance(balanceData);
          const transactionsData = await apiService.getAccountTransactions(accountNumber.toString());
          setTransactions(transactionsData);
        } catch (error) {
          console.error('Error fetching account details:', error);
        }
      };

      fetchAccountDetails();
    }
  }, [selectedAccount, apiService]);

  return (
    <div className="p-4">
      <AccountList accounts={accounts} onSelectAccount={setSelectedAccount} />
      {selectedAccount && (
        <AccountDetails account={selectedAccount} balance={balance} transactions={transactions} />
      )}
    </div>
  );
};

export default Accounts;
