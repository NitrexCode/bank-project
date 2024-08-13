import { Account, Balance, Transaction } from '../types';

export class ApiService {
    private baseUrl: string = 'http://localhost:3001';
  
    async getAccounts(): Promise<Account[]> {
      const response = await fetch(`${this.baseUrl}/accounts`);
      return response.json();
    }
  
    async getAccountBalance(accountNumber: string): Promise<Balance> {
      const response = await fetch(`${this.baseUrl}/accounts/${accountNumber}/balance`);
      return response.json();
    }
  
    async getAccountTransactions(accountNumber: string): Promise<Transaction[]> {
      const response = await fetch(`${this.baseUrl}/accounts/${accountNumber}/transactions`);
      return response.json();
    }
  }
  