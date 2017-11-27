import React from 'react'

class LocationUpdater extends React.Component {
	render() {
		console.log(this.props)
		console.log('location update loaded')

		if (this.props.location.length > 0) {
			fetch(`${this.props.apiUrl}/upd/${this.props.shortid}?lat=${this.props.location[0]}&long=${this.props.location[1]}`)
				.then(r => r.json())
				.then(r => {
					window.location.href = window.location.origin
				})
		}

		return null
	}
}

export default LocationUpdater
