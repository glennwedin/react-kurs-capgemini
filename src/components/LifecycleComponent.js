/* eslint-disable no-unused-vars, no-undef */
import React from 'react';
import { string } from 'prop-types';

export default class LifecycleComponent extends React.Component {

	static propTypes = {
		value: string
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.value === this.props.value) {
			return false;
		}
		return true;
	}

    getDerivedStateFromProps(nextProps, prevState) {
		console.log('derived state from props - component did receive new props and did update:', nextProps, prevState);
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('called before dom-update');
		return 'snapshot value returned to componentDidUpdate';
	}

	componentDidMount() {
		console.log('Did mount');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Did update');
	}

    render() {
        return (
            <div>LifecycleComponent</div>
        )
    }

}