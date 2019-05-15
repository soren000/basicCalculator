import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from '../components/pages/FrontPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route 
                    path="/"
                    component={FrontPage}
                    exact={true}
                />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;