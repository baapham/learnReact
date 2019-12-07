import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test("Should render with 1 expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={23.40}/>)
    expect(wrapper).toMatchSnapshot();
});
test("Should render with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23333.40} />)
    expect(wrapper).toMatchSnapshot();
})