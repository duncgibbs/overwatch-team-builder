import ReactDOM from 'react-dom';
import React from 'react';
import Fluxxor from 'fluxxor';

import TeamStore from './stores/TeamStore';
import TeamActions from './actions/TeamActions';

const actions = {
    team: TeamActions
};

const stores = {
    TeamStore: new TeamStore()
};

const flux = new Fluxxor.Flux(stores, actions);

flux.setDispatchInterceptor(function(action, dispatch) {
    ReactDOM.unstable_batchedUpdates(function() {
        dispatch(action);
    });
});

export function connectToStores(Component, stores, getStateFromStores) {
    const StoreConnection = React.createClass({
        getInitialState() {
            return getStateFromStores(this.props);
        },
        componentDidMount() {
            this.handleStoresChanged();
            stores.forEach(store =>
                store.on('change', this.handleStoresChanged)
            );
        },
        componentWillUnmount() {
            stores.forEach(store =>
                store.removeListener('change', this.handleStoresChanged)
            );
        },
        handleStoresChanged() {
            let state = getStateFromStores(this.props);
            this.setState(state);
        },
        render() {
            return <Component {...this.props} {...this.state} />;
        }
    });
    return StoreConnection;
}

export default flux;
