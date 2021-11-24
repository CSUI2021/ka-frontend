import React from 'react'
import { GradientImageDiv } from '../../characters/ProfileCard/styles'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TeamCardContent = () => {
	return (
		<div className='transition transform duration-500 hover:scale-110 relative m-0.5 w-36 h-36 2sm:w-44 2sm:h-44 lg:w-52 lg:h-52'>
			<SkeletonTheme
				baseColor='#252525'
				highlightColor='#505050'
				borderRadius='0.5rem'
				duration={4}>
				<Skeleton
					className='w-36 h-36 2sm:w-44 2sm:h-44 lg:w-52 lg:h-52'
					duration={8}
				/>
				<GradientImageDiv className='absolute bottom-0 left-0 w-full px-5 pt-12 pb-5'>
					<p className='text-2xs 2sm:text-1.5xs lg:text-sm text-white font-bold'>
						<Skeleton />
					</p>
					<p className='text-2xs 2sm:text-1.5xs lg:text-sm text-white font-extralight'>
						<Skeleton />
					</p>
				</GradientImageDiv>
			</SkeletonTheme>
		</div>
	)
}

export default TeamCardContent
