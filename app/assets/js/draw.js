let React = require('react');

let Shared = require('./shared');
let shared = new Shared();

let Menu = require('react-mfb').Menu;
let MainButton = require('react-mfb').MainButton;
let ChildButton = require('react-mfb').ChildButton;

let map

class Draw extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			effect: 'zoomin',
			pos: 'br',
			method: 'hover'
		}
		this.draw = this.draw.bind(this);
	}

	set_map_if_necessary() {
		if (!map) map = shared.get('map');
	}

	set_drawing_manager_if_necessary() {
		if (!this.drawing_manager) {
			this.drawing_manager = new google.maps.drawing.DrawingManager({
				drawingControl: false,

			});
			this.drawing_manager.setMap(map);
		}
	}

	draw(type) {
		this.set_map_if_necessary();
		this.set_drawing_manager_if_necessary();
	}

	render() {
		return (
			<Menu effect={this.state.effect} method={this.state.method} position={this.state.pos}>
				<MainButton label='Select a Region' iconResting='ion-edit' iconActive='ion-edit' />
				<ChildButton icon='ion-android-checkbox-outline-blank' label='Draw Box' />
				<ChildButton icon='ion-android-radio-button-off' label='Draw Circle' />
				<ChildButton icon='ion-android-star-outline' label='Draw Polygon' />
			</Menu>
		)
	}
}

module.exports = Draw;