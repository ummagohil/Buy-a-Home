"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, InfoCircled } from "@radix-ui/react-icons";
import { Command } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function Form({
  income,
  onChangeIncome,
  multiplier,
  onChangeMultiplier,
  depositPercentage,
  onChangeDepositPercentage,
  mortgageInterestRate,
  onChangeMortgageInterestRate,
  mortgageLengthData,
  mortgageLengthValue,
  getMortgageLengthText,
}: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  console.log(getMortgageLengthText);
  return (
    <form>
      <label>
        Annual income (£){" "}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </label>
      <Input
        className="border rounded w-1/3"
        onChange={onChangeIncome}
        value={income}
      />
      <label>Income multiplier (3 - 5 times)</label>
      <Input
        className="border rounded w-1/3"
        type="number"
        min="3"
        max="5"
        defaultValue={multiplier}
        onChange={onChangeMultiplier}
      />
      <label>Deposit percentage (5% - 20%)</label>
      <Input
        className="border rounded  w-1/3"
        type="number"
        min="5"
        max="20"
        defaultValue={depositPercentage}
        onChange={onChangeDepositPercentage}
      />
      <label>Mortgage Interest Rate (2% - 5%)</label>
      <Input
        className="border rounded  w-1/3"
        type="number"
        min="2"
        max="5"
        defaultValue={mortgageInterestRate}
        onChange={onChangeMortgageInterestRate}
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {getMortgageLengthText
              ? `${getMortgageLengthText} years`
              : "Length of mortgage"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>{mortgageLengthValue}</Command>
        </PopoverContent>
      </Popover>
    </form>
  );
}
