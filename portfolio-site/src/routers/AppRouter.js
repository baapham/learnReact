import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import PortfolioHomePage from '../components/PortfolioHomePage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import Contact from '../components/Contact';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioHomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;