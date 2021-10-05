import { exchangeService } from "./exchange-service";
import { rulesService } from "./rules-service";
import { transactionService } from "./transaction-service";

export class commissionService {
  ExchangeService = new exchangeService();
  TransactionService = new transactionService();
  RulesService = new rulesService();

  constructor() {}

  async calculateCommissionAndSave(
    clientId: number,
    amount: number,
    currency: string,
    date: string
  ): Promise<any> {
    try {
      const amountInEuro = await this.ExchangeService.exchangeAmount(
        amount,
        currency,
        date
      );

      const defaultAmount: number = this.RulesService.default(amountInEuro);
      const client42Amount: number | null =
        this.RulesService.client42(clientId);
      const commissionOverThousand = await this.RulesService.amountOverTHousand(
        date,
        clientId
      );

      const commissionsArray: Array<any> = [
        defaultAmount,
        client42Amount,
        commissionOverThousand,
      ].filter((value) => {
        return value != null;
      });

      const commission = Math.min(...commissionsArray);

      const transaction = {
        clientId,
        amount,
        currency,
        amountInEuro,
        date,
        commissionAmount: commission,
        commissionCurrency: "EUR",
      };

      await this.TransactionService.createTransaction(transaction);
      return {
        amount: commission,
        currency: "EUR",
      };
    } catch (e: any) {
      console.log(e);
      throw new Error(e.message);
    }
  }
}
