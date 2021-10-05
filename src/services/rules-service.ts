import { transactionService } from "./transaction-service";

export class rulesService {
  TransactionService = new transactionService();

  constructor() {}

  default(priceInEuros: number): number {
    return priceInEuros * 0.005 > 0.05 ? priceInEuros * 0.005 : 0.05;
  }

  client42(clientId: number): number | null {
    return clientId === 42 ? 0.05 : null;
  }

  async amountOverTHousand(
    date: string,
    clientId: number
  ): Promise<Number | null> {
    const dateValues = date.split("-");
    const value = await this.TransactionService.getTransactionAmount(
      dateValues[0],
      dateValues[1],
      clientId
    );

    if (!value || value.length === 0) {
      return null;
    }

    if (value[0].amount < 1000) {
      return null;
    }

    return 0.03;
  }
}
