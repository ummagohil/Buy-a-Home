"use client";
import Form from "@/components/Form";
import Output from "@/components/Output";
import { cn } from "@/lib/utils";
import { CommandGroup, CommandItem } from "@/components/ui/command";

import { CheckIcon } from "@radix-ui/react-icons";
import { ChangeEventHandler, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// to do: make deposit optional, if there is a val use that in calculations otherwise do it automatically

export default function Home() {
  const [income, setIncome] = useState<number>(0);
  const [incomeMultiplier, setIncomeMultiplier] = useState<number>(0);
  const [mortgageInterestRate, setMortgageInterestRate] = useState<number>(0);
  const [lengthOfMortgage, setLengthOfMortgage] = useState<number>(0);
  const [depositPercentage, setDepositPercentage] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const maxBorrow = income * incomeMultiplier;
  const housePrice = maxBorrow / (1 - depositPercentage / 100); // Adjusted formula
  const depositAmount = housePrice * (depositPercentage / 100); // Now depends on the adjusted housePrice
  const principalLoan = housePrice - depositAmount;
  const monthlyInterestRate = mortgageInterestRate / 100 / 12;
  const totalPayments = lengthOfMortgage * 12;
  const monthlyRepayments = totalPayments
    ? (principalLoan *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalPayments))) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
    : 0;

  const onChangeIncome = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setIncome(e.target.value as unknown as number);
  };

  const onChangeIncomeMultiplier = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setIncomeMultiplier(e.target.value as unknown as number);
  };

  const onChangeMortgageInterestRate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault;
    setMortgageInterestRate(e.target.value as unknown as number);
  };

  const onChangeDepositPercentage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault;
    setDepositPercentage(e.target.value as unknown as number);
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
      {mortgageLengthData.map((years: { value: number; label: string }) => (
        <CommandItem
          key={years.value}
          value={years.value}
          onSelect={() => {
            setLengthOfMortgage(years.value as number);
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
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[600px] rounded-lg "
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-screen items-center justify-center p-6">
          <span className="font-semibold">
            <Form
              income={income}
              onChangeIncome={
                onChangeIncome as unknown as ChangeEventHandler<HTMLInputElement>
              }
              multiplier={incomeMultiplier}
              onChangeMultiplier={onChangeIncomeMultiplier}
              mortgageInterestRate={mortgageInterestRate}
              onChangeMortgageInterestRate={onChangeMortgageInterestRate}
              mortgageLengthData={mortgageLengthData}
              mortgageLengthValue={mortgageLengthValue}
              onChangeDepositPercentage={onChangeDepositPercentage}
              depositPercentage={depositPercentage}
              getMortgageLengthText={lengthOfMortgage}
            />
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">
            {" "}
            <Output
              income={income}
              deposit={depositAmount}
              housePrice={housePrice}
              maxBorrow={maxBorrow}
              totalPayments={totalPayments}
              monthlyRepayments={monthlyRepayments}
            />
          </span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
