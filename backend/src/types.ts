
export interface Account {
    currency: string;
    id: string;
    identification: {
      iban: string;
      otherAccountNumber: string;
    };
    name: string;
    product: string;
    servicer: {
      bankCode: string;
      bic: string;
      countryCode: string;
    };
  }
  
  export interface Balance {
    amount: {
      currency: string;
      value: number;
    };
    date: string;
    type: string;
  }
  
  export interface Transaction {
    amount: {
      currency: string;
      value: number;
    };
    bankref: string;
    bookingDate: string;
    counterPartyAccount: {
      accountName: string;
      accountNumber: string;
      bankCode: string;
    };
    creditDebitIndicator: string;
    details: {
      detail1: string;
    };
    id: string;
    ownAccountNumber: string;
    postingDate: string;
    productBankRef: string;
    specificSymbol: string;
    statementNumber: string;
    statementPeriod: string;
    transactionId: string;
    transactionType: string;
    transactionTypeCode: number;
    variableSymbol: string;
  }
  
  export interface Balances {
    [accountNumber: string]: Balance;
  }
  
  export interface Transactions {
    [accountNumber: string]: Transaction[];
  }
  