import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test("Should return total of multiple expenses", () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
})

test("Should return total 0 for no expenses", () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
})

test("Should return total of one expenses", () => {
    let newExpenses = [expenses[0]];
    const total = selectExpensesTotal(newExpenses);
    expect(total).toBe(195);
})