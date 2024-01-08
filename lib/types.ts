import { ChangeEventHandler } from "react";

export type Form = {
  income: number | ChangeEventHandler<HTMLInputElement>;
  onChangeIncome: number;
  multiplier: number | ChangeEventHandler<HTMLInputElement>;
  onChangeMultiplier: number;
  depositPercentage: number | ChangeEventHandler<HTMLInputElement>;
  onChangeDepositPercentage: number;
  mortgageInterestRate: number;
  onChangeMortgageInterestRate: number;
  mortgageLengthValue: number;
  getMortgageLengthText: number;
};

export type Output = {
  income: number;
  deposit: number;
  housePrice: number;
  maxBorrow: number;
  monthlyRepayments: number;
};
