"use client";
import Form from "@/components/Form";
import Output from "@/components/Output";
import { cn } from "@/lib/utils";
import { CommandGroup, CommandItem } from "@/components/ui/command";

import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

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

export default function Home() {
  const [income, setIncome] = useState<number>(0);
  const [incomeMultiplier, setIncomeMultiplier] = useState<number>(0);
  const [mortgageInterestRate, setMortgageInterestRate] = useState<number>(0);
  const [lengthOfMortgage, setLengthOfMortgage] = useState(0);
  const [depositPercentage, setDepositPercentage] = useState(0);
  const [open, setOpen] = useState(false);

  const maxBorrow = income * incomeMultiplier;
  const housePrice = maxBorrow / (1 - depositPercentage / 100); // Adjusted formula
  const depositAmount = housePrice * (depositPercentage / 100); // Now depends on the adjusted housePrice
  const principalLoan = housePrice - depositAmount;
  const monthlyInterestRate = mortgageInterestRate / 100 / 12;
  const totalPayments = lengthOfMortgage * 12;
  const monthlyRepayments =
    (principalLoan *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

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

  const onChangeDepositPercentage = (e: any) => {
    e.preventDefault;
    setDepositPercentage(e.target.value);
  };

  const mortgageLengthData = [
    {
      value: 15,
      label: "15 years",
    },
    {
      value: 20,
      label: "20 years",
    },
    {
      value: 25,
      label: "25 years",
    },
    {
      value: 30,
      label: "30 years",
    },
  ];

  const mortgageLengthValue = (
    <CommandGroup>
      {mortgageLengthData.map((years: any) => (
        <CommandItem
          key={years.value}
          value={years.value}
          onSelect={() => {
            setLengthOfMortgage(years.value as any);
            setOpen(false);
          }}
        >
          {years.label}
          <CheckIcon
            className={cn(
              "ml-auto h-4 w-4",
              lengthOfMortgage === years.value ? "opacity-100" : "opacity-0"
            )}
          />
        </CommandItem>
      ))}
    </CommandGroup>
  );

  return (
    <div className="flex">
      <Form
        income={income}
        onChangeIncome={onChangeIncome}
        multiplier={incomeMultiplier}
        onChangeMultiplier={onChangeIncomeMultiplier}
        mortgageInterestRate={mortgageInterestRate}
        onChangeMortgageInterestRate={onChangeMortgageInterestRate}
        mortgageLengthData={mortgageLengthData}
        mortgageLengthValue={mortgageLengthValue}
        onChangeDepositPercentage={onChangeDepositPercentage}
        depositPercentage={depositPercentage}
      />
      <Output
        income={income}
        deposit={depositAmount}
        housePrice={housePrice}
        maxBorrow={maxBorrow}
        totalPayments={totalPayments}
        monthlyRepayments={monthlyRepayments}
      />
    </div>
  );
}
