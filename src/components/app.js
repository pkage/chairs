import React from 'react'
import '../styles/main.scss'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'


import Sidebar from './sidebar'
import ChairList from './chairlist'
import Loader from './loader'
import ChairMap from './map'
import LocationUpdater from './updateloc'

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			sidebarActive: false,
			chairsHaveLoaded: false,
			chairs: [],
			self: []
		}
	}
	// Render
	render() {
		return (
			<Router>
				<div>
					<Sidebar
						active={this.state.sidebarActive}
						toggleSidebar={this.onSidebarToggle}>
						{this.state.chairsHaveLoaded ?
							<ChairList
								chairs={this.state.chairs}
								onHeaderClick={() => this.loadChairs()}/> :
							<Loader/>
						}
					</Sidebar>
					<div className="chairmap">
					{this.state.self.length !== 0 ?
							<ChairMap
								position={this.state.self}
								chairs={this.state.chairs}/> :
							<Loader/>
					}
					</div>
					<Route path='/c/:shortid' component={({match}) => (
						<LocationUpdater
							shortid={match.params.shortid}
							location={this.state.self}
							apiUrl={this.props.apiUrl}/>
					)}/>
				</div>
			</Router>
		)
	}

	// Event handlers
	onSidebarToggle = () => {
		this.setState({
			sidebarActive: !this.state.sidebarActive
		})
	}

	// lifecycle
	componentDidMount() {
		this.loadChairs()
		this.getLocation()
	} 

	// getters
	loadChairs() {
		fetch(this.props.apiUrl + '/list')
			.then(r => r.json())
			.then(r => {
				this.setState({
					chairs: r.chairs,
					chairsHaveLoaded: true
				})
			})
	}

	getLocation() {
		if (!navigator.geolocation) return;
		navigator.geolocation.getCurrentPosition(pos => {
			this.setState({
				self: [pos.coords.latitude, pos.coords.longitude]
			})

		})
	}
}

export default App
