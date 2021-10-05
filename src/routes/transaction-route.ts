import { Router } from "express";
import { commissionService } from "../services/comission-service";

const TransactionRoute = Router();
const CommissionService = new commissionService();

TransactionRoute.post("/", async (req, res) => {
  CommissionService.calculateCommissionAndSave(
    req.body.clientId,
    parseFloat(req.body.amount),
    req.body.currency,
    req.body.date
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error: Error) => {
      console.log(error);
      res.status(500);
      res.send(error.message);
    });
});

export default TransactionRoute;
