import React from 'react'
import { MessagesCard } from '../styles'
import { MessagesItemInterface } from './interfaces/MessagesItem.interface'
import { MessagesImage } from '../styles'

const MessagesItem = ({
	name,
	position,
	major,
	image,
	message,
	index,
}: MessagesItemInterface) => {
	return (
		<MessagesCard className={index === 0 ? 'row-span-2' : ''}>
			<div className='flex items-center space-x-7'>
				<MessagesImage src={image} alt={name} />
				<div className='text-left'>
					<h4>{name}</h4>
					<p className='text-md'>
						{position}
						<br />
						{major}
					</p>
				</div>
			</div>
			<p className='mt-7 text-left'>{message}</p>
		</MessagesCard>
	)
}

export default MessagesItem
