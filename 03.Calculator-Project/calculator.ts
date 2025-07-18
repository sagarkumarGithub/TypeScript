type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
}

type CalculateResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData) : CalculateResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = data;

    if(initialAmount < 0) {
        return "Initial investment amount must be greater than 0.";
    }

    if(duration <= 0) {
        return "No amount of year provided.";
    }

    if(expectedReturn < 0) {
        return "Expected return must be at least 0.";
    }

    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];
    for(let i=0; i<duration; i++) {
        const total =  ( 1 + expectedReturn )
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = total + annualContribution;

        annualResults.push({
            year: `${i + 1}`,
            totalAmount: total,
            totalInterestEarned: totalInterestEarned,
            totalContribution: totalContribution,
        });
    }

    return annualResults;
}

function printResults(results: CalculateResult) {
    if(typeof results === "string") {
        console.log(results);
        return;
    } 

    for(const yearEndResult of results) {
        console.log(`${yearEndResult.year}`);
        console.log(`Total : ${yearEndResult.totalAmount}`);
        console.log(`Total Contribution : ${yearEndResult.totalContribution}`);
        console.log(`Total Interest Earned : ${yearEndResult.totalInterestEarned}`);
        console.log("-----------------------------------");
    }
}

const InvestmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};

const results = calculateInvestment(InvestmentData);
printResults(results);