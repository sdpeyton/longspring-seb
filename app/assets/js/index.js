let React = require('react');
let ReactDOM = require('react-dom');

let Draw = require('./draw');
let Map = require('./map');

class App extends React.Component {
	render() {
		return (
			<div id='container'>
				<Draw />
				<Map />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('main'));