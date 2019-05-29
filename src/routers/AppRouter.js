import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from '../components/pages/FrontPage';
import FeedbackPage from '../components/pages/FeedbackPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route 
                    path="/"
                    component={FrontPage}
                    exact={true}
                />
                <Route 
                    path="/feedback"
                    component={FeedbackPage}
                />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;