import React from 'react';
import { store } from './store';

export default class SubscribedComponent extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe( () => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}