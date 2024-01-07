export default function Output() {
  return (
    <div>
      <p>annual income: value they inputted</p>
      <p>deposit: value of deposit calculated</p>
      <p>House price: maximum borrowing + deposit amount</p>
      <p>Maximum borrowing: income x multiplier</p>
      <p>Monthly repayments: all the values above calculated</p>
    </div>
  );
}
// annualIncome = income
// depositMultiplier = incomeMultiplier
// depositAmount = housePrice * depositMultiplier
// maxBorrow = annualIncome * incomeMultiplier
// housePrice = maxBorrow + deposit amount
// principalLoan = housePrice - depositAmount
// annualInterestRate = value between 2% - 5% [user needs to input this]
// monthlyInterestRate = annualInterestRate / 12
// totalPayments = lengthOfMortgage * 12
// monthlyRepayments = principalLoan * (monthlyInterestRate*(1+monthlyInterestRate)**totalPayments - 1)