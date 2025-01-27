import {calculateInvestmentResults, formatter} from '../util/investment'

export default function Results({userInput}) {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = 
    resultsData[0].valueEndOfYear - 
    resultsData[0].interest -
    resultsData[0].annualInvestment;

    return (
        <>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInterest = 
                    yearData.valueEndOfYear - 
                    yearData.annualInvestment * yearData.year -
                    initialInvestment;

                    const totalAmountInvested = 
                    yearData.valueEndOfYear - totalInterest;
                    
                    return <tr key={yearData.key}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
        </>
    )
}