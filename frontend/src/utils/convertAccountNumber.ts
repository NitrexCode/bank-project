export function convertAccountNumber(otherAccountNumber: string): number {
    const parts = otherAccountNumber.split(' ');
    const accountNumber = parseInt(parts[1], 10);
    return accountNumber;
  }
  