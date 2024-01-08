export default function Output({
  income,
  deposit,
  housePrice,
  maxBorrow,
  monthlyRepayments,
}: any) {
  return (
    <div>
      <h1>Your Details</h1>
      <p>income: £{income}</p>
      <p>deposit: £{Number(deposit).toFixed(2)} approx. </p>
      <h1>Home Estimation</h1>
      <p>house price: £{Number(housePrice).toFixed(2)}</p>
      <h1>Mortgage Estimation</h1>
      <p>max borrow: £{Number(maxBorrow).toFixed(2)}</p>
      <p>monthly repayments: £{Number(monthlyRepayments).toFixed(2)}</p>
    </div>
  );
}
// add icon with a hover over to explain how everything is calculated
// to do: type checking everything is a number, instead of parsing
