import React from 'react';

export default class LifecycleComponent extends React.Component {

    componentWillMount() {
		console.log('Will mount');
	}

	componentDidMount() {
		console.log('Did mount');
	}

	componentDidUpdate() {
		console.log('Did update');
	}

	componentWillReceiveProps() {
		console.log('Will receive props');
	}

    render() {
        return (
            <div>LifecycleComponent</div>
        )
    }

}