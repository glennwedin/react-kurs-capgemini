/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { string } from 'prop-types';

export default class LifecycleComponent extends React.Component {
    static propTypes = {
        value: string
    };

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };

        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        console.log('Did mount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Did update', snapshot);
    }

    componentWillUnmount() {
        console.log('Unmounting');
    }

    // Deprecated
    componentWillMount() {
        console.log('will mount');
    }
    // Deprecated
    componentWillReceiveProps() {
        console.log('will receive props');
    }
    // Deprecated
    componentWillUpdate() {
        console.log('will update');
    }

    /*
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count !== this.state.count) {
            return true;
		}
		return false;
	}
	*/

    // exists for only one purpose. It enables a component to update its internal state as the result of changes in props.
    /*
	static getDerivedStateFromProps(nextProps, prevState) {
        console.log(
            'derived state from props - component did receive new props and did update:',
            nextProps,
            prevState
        );
        return { test: 'test' };
	}
	*/

    /*
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('called before dom-update');
        return 'getSnapShotBeforeUpdate';
    }
    */

    updateState() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <div>LifecycleComponent</div>
                <div>Counter: {this.state.count}</div>
                <button onClick={this.updateState}>Update state</button>
            </div>
        );
    }
}
