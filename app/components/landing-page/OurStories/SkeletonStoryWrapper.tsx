import React from 'react'

const SkeletonStoryWrapper = ({ children }: any) => {
	return (
		<span style={{ marginRight: '1.25rem', overflow: 'hidden' }}>
			{children}
		</span>
	)
}

export default SkeletonStoryWrapper
