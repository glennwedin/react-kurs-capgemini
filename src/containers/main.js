import React from 'react';

class Main extends React.Component {
	
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

	render () {
		return (
			<div>
				<h1>This is react</h1>
				<p>This is text</p>
			</div>
		);
	}
}

export default Main;