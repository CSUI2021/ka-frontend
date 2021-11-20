import React from 'react'
import {
	ProfilePicture,
	ProfileImageBorder,
} from '../../characters/ProfileCard/styles'
import { ProfilePictureContainerInterface } from '../../characters/ProfileCard/interfaces/ProfilePictureContainer.interface'

export const TeamCardContainer = ({
	image,
}: ProfilePictureContainerInterface) => (
	<ProfileImageBorder className='rounded-md'>
		<ProfilePicture
			className='w-44 h-44 lg:w-52 lg:h-52 object-cover'
			src={image}
			alt='Profile-Image'
		/>
	</ProfileImageBorder>
)
