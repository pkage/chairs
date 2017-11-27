import React from 'react'
import PropTypes from 'prop-types'
import Chair from './chair.js'

const ChairList = ({chairs}) => {
	const chairlist = chairs.map((chair) => {
		return (
			<Chair key={chair.id} chair={chair}/>
		)
	})
	return (
		<div className="chairlist">
			<div className="chairlist-header">
				Tracked Chairs
			</div>
			<div className="chairlist-content">{chairlist}</div>
		</div>
	)
}

ChairList.propTypes = {
	chairs: PropTypes.array
}

export default ChairList
