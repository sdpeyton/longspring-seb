let React = require('react');

let Shared = require('./shared');
let shared = new Shared();

class Map extends React.Component {

	componentDidMount() {
		let map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: 37.09024, lng: -95.712891 },
          	zoom: 4,
          	// mapTypeId: 'satellite',
          	zoomControl: true,
	        zoomControlOptions: {
	              position: google.maps.ControlPosition.TOP_LEFT
	        },
	        // mapTypeControl: true,
	        // mapTypeControlOptions: {
	        //     style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	        //     position: google.maps.ControlPosition.TOP_RIGHT
	        // },
	        streetViewControl: false
		});
		shared.set('map', map);
	}

	render() {
		return <div id='map'></div>;
	}
}

module.exports = Map;