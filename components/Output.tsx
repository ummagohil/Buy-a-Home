import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Separator } from "./ui/separator";

export default function Output({
  income,
  deposit,
  housePrice,
  maxBorrow,
  monthlyRepayments,
}: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Estimations</CardTitle>
        <CardDescription>
          All values are approximate and should be verified with a mortgage
          provider.
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Type</TableHead>
              <TableHead>Calculation</TableHead>
              <TableHead></TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Personal</TableCell>
              <TableCell>Income</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">£{income}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium"></TableCell>
              <TableCell>Deposit</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
                £{Number(deposit).toFixed(2)} approx.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">House</TableCell>
              <TableCell>House Price</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
                £{Number(housePrice).toFixed(2)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Mortgage</TableCell>
              <TableCell>Maximum Borrowing</TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
                £{Number(maxBorrow).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Monthly Repayments</TableCell>
              <TableCell className="text-right">
                £{Number(monthlyRepayments).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        {/* <p>income: £{income}</p>
        <p>deposit: £{Number(deposit).toFixed(2)} approx. </p> */}
        {/* <h1>Home Estimation</h1>
        <p>house price: £{Number(housePrice).toFixed(2)}</p> */}
        {/* <h1>Mortgage Estimation</h1>
        <p>max borrow: £{Number(maxBorrow).toFixed(2)}</p>
        <p>monthly repayments: £{Number(monthlyRepayments).toFixed(2)}</p> */}
      </CardContent>
    </Card>
  );
}
// add icon with a hover over to explain how everything is calculated
// to do: type checking everything is a number, instead of parsing
