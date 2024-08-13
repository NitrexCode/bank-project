import express, { Request, Response } from 'express';
import cors from 'cors';

import accounts from './mocks/accounts.json';
import balances from './mocks/balance.json';
import transactions from './mocks/transactions.json';

import { Account, Balances, Transactions } from './types';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const typedAccounts: Account[] = accounts;
const typedBalances: Balances = balances;
const typedTransactions: Transactions = transactions;

app.get('/accounts', (req: Request, res: Response) => {
  res.json(typedAccounts);
});

app.get('/accounts/:accountNumber/balance', (req: Request<{ accountNumber: string }>, res: Response) => {
  const accountNumber = req.params.accountNumber;
  const balance = typedBalances[accountNumber];
  if (balance) {
    res.json(balance);
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

app.get('/accounts/:accountNumber/transactions', (req: Request<{ accountNumber: string }>, res: Response) => {
  const accountNumber = req.params.accountNumber;
  const accountTransactions = typedTransactions[accountNumber];
  if (accountTransactions) {
    res.json(accountTransactions);
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

app.listen(port, () => {
  console.log(`Bank API running at http://localhost:${port}`);
});
