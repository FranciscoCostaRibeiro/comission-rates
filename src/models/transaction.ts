import { Schema, Document, model } from "mongoose";

export interface ITransaction extends Document {
  date: string;
  amount: number;
  currency: string;
  clientId: number;
  commissionAmount: number;
  commissionCurrency: string;
}

export const TransactionSchema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    clientId: {
      type: Number,
      required: true,
    },
    amountInEuro: {
      type: Number,
      required: true,
    },
    commissionAmount: {
      type: Number,
      required: true,
    },
    commissionCurrency: {
      type: String,
      required: true,
      default: "EUR",
    },
  },
  {
    collection: "transactions",
  }
);

const Transaction = model<ITransaction>("Transaction", TransactionSchema);
export default Transaction;
