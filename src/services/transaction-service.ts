import { CallbackError } from "mongoose";
import Transaction, { ITransaction } from "../models/transaction";

export class transactionService {
  constructor() {}

  createTransaction(transaction: any): Promise<ITransaction> {
    return new Promise<ITransaction>((resolve, reject) => {
      Transaction.create(transaction)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getTransactionAmount(
    year: string,
    month: string,
    clientId: number
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      Transaction.aggregate(
        [
          {
            $match: {
              date: {
                $regex: `${year}-${month}`,
                $options: "i",
              },
              clientId: clientId,
            },
          },
          {
            $group: {
              _id: null,
              amount: {
                $sum: "$amountInEuro",
              },
            },
          },
        ],
        (error: CallbackError, data: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    });
  }
}
