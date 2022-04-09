import React, { Component } from 'react';
import { Route, Redirect,Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { connect } from 'react-redux';
import asyncComponent from "../until/AsyncFunc.js"


class PublicRoutes extends Component {
    render() {
        const {history} = this.props
        return (
        <ConnectedRouter history={history}> 
        <div>
            <Route
                exact
                path={'/login'}
                component={asyncComponent(() => import('../pages/signin/index'))}
            />
            <Route
                exact
                path={'/home'}
                component={asyncComponent(() => import('../pages/home/index'))}
            />
        </div>
        </ConnectedRouter>
        );
    }
}

export default connect()(PublicRoutes);