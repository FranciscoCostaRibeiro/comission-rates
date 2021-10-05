import axios from "axios";

export class exchangeService {
  constructor() {}

  async exchangeAmount(
    amount: number,
    currency: string,
    date: string
  ): Promise<number> {
    if (currency === "EUR") {
      return amount;
    }

    let rates;

    await axios({
      method: "GET",
      url: `https://api.exchangerate.host/${date}`,
    })
      .then((data) => {
        const response: any = data.data;
        rates = response.rates;
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    if (!rates) {
      throw new Error("couldn't find rates");
    }

    const rateToUse: number = rates[currency];

    const amountConverted: number = amount * rateToUse;

    return amountConverted;
  }
}
