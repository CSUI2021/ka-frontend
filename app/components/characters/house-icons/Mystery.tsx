import React from 'react'

const Mystery = ({
	width = '',
	height = '',
}: {
	width: string
	height: string
}) => (
	<object
		className={`${width} ${height} `}
		data='assets/images/House of Mystery.svg'></object>
)

export default Mystery
