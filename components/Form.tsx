import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      <label>Length of Mortgage</label>
      [dropdown of values of 15, 20, 25, 30]
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Length of Mortgage</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto text-center">
          <DropdownMenuGroup className="text-center">
            <DropdownMenuItem>15 years</DropdownMenuItem>
            <DropdownMenuItem>20 years</DropdownMenuItem>
            <DropdownMenuItem>25 years</DropdownMenuItem>
            <DropdownMenuItem>30 years</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu> */}
      <div className="flex justify-around ">
        <Button variant="outline">15 years</Button>
        <Button variant="outline">20 years</Button>
        <Button variant="outline">25 years</Button>
        <Button variant="outline">30 years</Button>
      </div>
    </form>
  );
}
