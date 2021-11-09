import React from 'react'

const Comedy = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height}`}
		data='assets/images/House of Comedy.svg'></object>
)

export default Comedy
