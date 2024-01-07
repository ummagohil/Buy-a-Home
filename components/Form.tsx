"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Command } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

// bug: the val of length of year does not currently change onClick

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
}: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <form>
      <label>Annual income (£)</label>
      <Input
        className="border rounded w-1/3"
        onChange={onChangeIncome}
        value={income}
      />
      <label>Income multiplier (3 - 5)</label>
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
            {value
              ? mortgageLengthData.find(
                  (mortgageLengthData: any) =>
                    mortgageLengthData.value === value
                )?.label
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
