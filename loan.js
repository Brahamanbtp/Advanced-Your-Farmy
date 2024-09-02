document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", () => {
        const loanAmount = parseFloat(document.getElementById("loanAmount").value);
        const interestRate = parseFloat(document.getElementById("interestRate").value);
        const loanTerm = parseFloat(document.getElementById("loanTerm").value);

        if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm)) {
            const monthlyRate = (interestRate / 100) / 12;
            const numberOfPayments = loanTerm * 12;
            const monthlyPayment = 
                (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

            document.getElementById("monthlyPayment").textContent = 
                `Your estimated monthly payment is Rs.${monthlyPayment.toFixed(2)}`;
        } else {
            document.getElementById("monthlyPayment").textContent = 
                "Please enter valid values for all fields.";
        }
    });
});
