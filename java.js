document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total expenses
    function updateTotalExpenses() {
        let totalExpenses = 0;
        const expenseInputs = document.querySelectorAll('.expense-input');
        expenseInputs.forEach(input => {
            const expenseValue = parseFloat(input.value) || 0;
            totalExpenses += expenseValue;
        });
        document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
        updateRemainingBudget();
    }

    // Function to update the remaining budget
    function updateRemainingBudget() {
        const budgetValue = parseFloat(document.getElementById('budget').value) || 0;
        const totalExpenses = parseFloat(document.getElementById('total-expenses').textContent.replace('$', '')) || 0;
        const remaining = budgetValue - totalExpenses;
        document.getElementById('remaining-budget').textContent = `$${remaining.toFixed(2)}`;
    }

    // Event listener for the budget input
    document.getElementById('budget').addEventListener('input', function () {
        const budgetValue = parseFloat(this.value) || 0;
        document.getElementById('monthly-limit').textContent = `$${budgetValue.toFixed(2)}`;
        updateRemainingBudget();
    });

    // Event listeners for all expense inputs
    const expenseInputs = document.querySelectorAll('.expense-input');
    expenseInputs.forEach(input => {
        input.addEventListener('input', updateTotalExpenses);
    });
});
