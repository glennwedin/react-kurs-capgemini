import React from 'react';
import LifecycleComponent from '../components/LifecycleComponent';

class Main extends React.Component {

	render () {
		return (
			<div>
				<h1>This is react</h1>
				<p>This is text</p>
				<LifecycleComponent />
			</div>
		);
	}
}

export default Main;