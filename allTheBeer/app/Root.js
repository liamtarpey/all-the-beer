import React, { PureComponent, Fragment } from 'react';

// Components
import MainNav from './components/MainNav/MainNav.js';
import MainSearch from './components/MainSearch/MainSearch.js';

class Root extends PureComponent {
    constructor() {
        super();

        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit(value) {
        console.log('value to search:', value);
    }

    render() {
        return (
            <Fragment>
                <MainNav />
                <MainSearch onSubmit={this.handleSearchSubmit} />
            </Fragment>
        );
    }
}

export default Root;
