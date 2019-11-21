import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test("Should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe('amount');
})

test("Should set sortBy to date", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: "SORT_BY_DATE" };
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date');
})

test("Should set text filter", () => {
    const state = filtersReducer(undefined, {text: "THIS IS MY FILTER", type: "SET_TEXT_FILTER"});
    expect(state.text).toBe("THIS IS MY FILTER");
}) 

test("Should set startDate filter", () => {
    const state = filtersReducer(undefined, {startDate: moment(0), type: "SET_START_DATE"});
    expect(state.startDate).toEqual(moment(0));
}) 

test("Should set endDate filter", () => {
    const state = filtersReducer(undefined, {endDate: moment(0), type: "SET_END_DATE"});
    expect(state.endDate).toEqual(moment(0));
}) 