import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        This is an individual item page with id {props.match.params.id}
        <a href="/portfolio">Go back</a>
    </div>
);

export default PortfolioItemPage;