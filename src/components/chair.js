import React from 'react'

const Chair = ({chair}) => {
	return (
		<div className="chair">
			<b className="chair-name">{chair.name}</b>
			<code className="chair-latlong">{chair.lat}, {chair.long}</code>
		</div>
	)
}

export default Chair
