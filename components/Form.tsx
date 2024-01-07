"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
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

export default function Form({
  income,
  onChangeIncome,
  multiplier,
  onChangeMultiplier,
  depositPercentage,
  onChangeDepositPercentage,
  mortgageInterestRate,
  onChangeMortgageInterestRate,
  lengthOfMortgage,
  onChangeLengthOfMortgage,
}: any) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <form>
      <label>Annual income</label>
      <Input
        className="border rounded w-1/3"
        onChange={onChangeIncome}
        value={income}
      />
      <label>Income multiplier</label>
      <Input
        className="border rounded w-1/3"
        type="number"
        min="3"
        max="5"
        defaultValue={multiplier}
        onChange={onChangeMultiplier}
      />
      <label>Deposit percentage</label>
      <Input
        className="border rounded  w-1/3"
        type="number"
        min="5"
        max="20"
        defaultValue={depositPercentage}
        onChange={onChangeDepositPercentage}
      />
      <label>Mortgage Interest Rate [2-5%]</label>
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
                  (mortgageLengthData) => mortgageLengthData.value === value
                )?.label
              : "Length of mortgage"}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandGroup>
              {mortgageLengthData.map((years) => (
                <CommandItem
                  key={years.value}
                  value={years.value}
                  onSelect={(currentValue: any) => {
                    setValue(years.value as any);
                    setOpen(false);
                  }}
                >
                  {years.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === years.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </form>
  );
}
