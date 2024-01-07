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
      <p>income: {income}</p>
      <p>deposit: {deposit} </p>
      <h1>Home Estimation</h1>
      <p>house price: {housePrice}</p>
      <h1>Mortgage Estimation</h1>
      <p>max borrow: {maxBorrow}</p>
      <p>monthly repayments:{monthlyRepayments}</p>
    </div>
  );
}
