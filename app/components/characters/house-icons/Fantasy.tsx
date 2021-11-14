import React from 'react'

const Fantasy = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='assets/House of Fantasy.svg'></object>
)

export default Fantasy