const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return state = {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return state = {
                ...state,
                sortBy: "amount"
            }
        case 'SORT_BY_DATE':
            return state = {
                ...state,
                sortBy: "date"
            }
        case 'SET_START_DATE':
            return state = {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return state = {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}