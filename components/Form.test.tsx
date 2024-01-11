import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Form from "./Form";
import { Form as FormProps } from "@/lib/types";

const FormProps: FormProps = {
  income: 0,
  onChangeIncome: 0,
  multiplier: 0,
  onChangeMultiplier: 0,
  depositPercentage: 0,
  onChangeDepositPercentage: 0,
  mortgageInterestRate: 0,
  onChangeMortgageInterestRate: 0,
  mortgageLengthValue: "test",
  mortgageLengthData: 4,
  getMortgageLengthText: 0,
};

test("render elements on the form page", async () => {
  it("render the input", () => {
    render(<Form {...FormProps} />);
    expect(screen.getByRole("input")).toHaveLength(2);
  });
  it("render labels", () => {
    render(<Form {...FormProps} />);
    expect(screen.getByRole("label")).toHaveLength(2);
  });
});
