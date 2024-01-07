"use client";
import Form from "@/components/Form";
import Output from "@/components/Output";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState<number>(0);
  const [incomeMultiplier, setIncomeMultiplier] = useState<number>(0);
  const [mortgageInterestRate, setMortgageInterestRate] = useState<number>(0);
  const [lengthOfMortgage, setLengthOfMortgage] = useState<number>(0);

  const onChangeIncome = (e: any) => {
    e.preventDefault;
    setIncome(e.target.value);
  };

  const onChangeIncomeMultiplier = (e: any) => {
    e.preventDefault;
    setIncomeMultiplier(e.target.value);
  };

  const onChangeMortgageInterestRate = (e: any) => {
    e.preventDefault;
    setMortgageInterestRate(e.target.value);
  };

  return (
    <div className="flex">
      <p>income:{income}</p>
      <p>multiplier: {incomeMultiplier}</p>
      <p>interest rate: {mortgageInterestRate}</p>
      <p>length of mortgage:{lengthOfMortgage}</p>
      <Form
        income={income}
        onChangeIncome={onChangeIncome}
        multiplier={incomeMultiplier}
        onChangeMultiplier={onChangeIncomeMultiplier}
        mortgageInterestRate={mortgageInterestRate}
        onChangeMortgageInterestRate={onChangeMortgageInterestRate}
      />
      <Output />
    </div>
  );
}

// send income, multiplier, deposit percentage, deposit values as props (so it can be handled here with calculations)

// program all calculations for everything here and pass it down to the output component

// remember to do typechecking (though everything will be a number)

// send the follow calculations to the output component:
// annualIncome = user val
// depositMultiplier = user val
// depositAmount = housePrice * depositMultiplier
// maxBorrow = annualIncome * incomeMultiplier
// housePrice = maxBorrow + deposit amount
// principalLoan = housePrice - depositAmount
// annualInterestRate = value between 2% - 5% [user needs to input this]
// monthlyInterestRate = annualInterestRate / 12
// totalPayments = lengthOfMortgage * 12
// monthlyRepayments = principalLoan * (monthlyInterestRate*(1+monthlyInterestRate)**totalPayments - 1)
