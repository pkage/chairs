import React from 'react'
import PropTypes from 'prop-types'
import Chair from './chair.js'
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import selfmarker from '../selfmarker.png'

class ChairMap extends React.Component {
	constructor(props) {
		super(props)
		this.selfIcon = L.icon({
			iconUrl: selfmarker,
			iconSize: [25, 41],
			iconAnchor: [12.5, 41],
			popupAnchor: [0, -41 + 10]
		});
	}
	render() {
		const chlist = this.props.chairs.map(chair => {
			return (
				<Marker key={chair.id} position={[chair.lat, chair.long]}>
					<Popup>
						<Chair chair={chair}/>
					</Popup>
				</Marker>
			)
		})
		return (
				<Map center={this.props.position} zoom={13}>
					<TileLayer
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					/>
					{chlist}
					<Marker position={this.props.position} icon={this.selfIcon}>
						<Popup>
							<span>Your current location</span>
						</Popup>
					</Marker>
				</Map>
		)
	}
}

ChairMap.propTypes = {
	position: PropTypes.array,
	chairs: PropTypes.array
}

export default ChairMap
