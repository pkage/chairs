import React from 'react'
import PropTypes from 'prop-types'

class Sidebar extends React.Component {
	render() {
		return (
			<div
				className="sidebar"
				active={this.props.active ? '' : undefined}>
				<div className="sidebar-content">	
					{this.props.children}
				</div>
				<div
					className="sidebar-toggle"
					onClick={this.props.toggleSidebar}>
					<i className="material-icons">
						{this.props.active ? 'arrow_back' : 'menu'}
					</i>
				</div>
			</div>
		)
	}
}

Sidebar.propTypes = {
	active: PropTypes.bool,
	toggleSidebar: PropTypes.func
}

export default Sidebar
