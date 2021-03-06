import React from 'react'
import { ChangePageButtonInterface } from './interfaces/ChangePageButton.interface'

export const ChangePageButton = ({
	className = 'rotate-90',
	onClick,
}: ChangePageButtonInterface) => (
	<button onClick={onClick} type='button' className='md:w-12 w-6 text-gray-400'>
		<svg
			className={`transform ${className} bg-transparent`}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 20'
			fill='gray'
			aria-hidden='true'>
			<path
				fillRule='evenodd'
				d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
				clipRule='evenodd'
			/>
		</svg>
	</button>
)
