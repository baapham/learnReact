export default (expenses) => {
    let total = 0;
    if (expenses.length > 0) {
        let amounts = expenses.map((expense) => expense.amount);
        total = amounts.reduce((acc, curr) => acc + curr);
    }
    return total;
}