import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment";

export default function Results({ input }) {
    console.log(input);
    const resultsdata = calculateInvestmentResults(input);
    console.log(resultsdata);
    return <section id='results'>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsdata.map((result) => {
                    const totalInterest = result.valueEndOfYear - input.initialInvestment - (result.year * input.annualInvestment);
                    const totalAmount = input.initialInvestment + (result.year * input.annualInvestment);
                    return <tr key={result.year}>{/*key is used to uniquely identify each row but not used in the table*/}
                        <td>{result.year}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmount)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </section>
}