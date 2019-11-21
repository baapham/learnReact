import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test("Should set default state", () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test("Should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test("Should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: '4',
            description: 'Water',
            note: '',
            amount: 300,
            createdAt: 0
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense])
});

test("Should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount: 1
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(1)
});

test("Should not edit an expense if not valid id", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});