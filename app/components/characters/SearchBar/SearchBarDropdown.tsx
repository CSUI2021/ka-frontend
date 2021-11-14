import React, { useState } from 'react'
import { SearchDropdown } from './styles'

export const SearchBarDropdown = () => {
	const [isDropdown, setIsDropdown] = useState(false)
	const [major, setMajor] = useState('')

	return (
		<SearchDropdown className='relative inline-block bg-transparent lg:text-base md:text-sm text-2xs md:px-4 lg:px-6 px-2 border-black lg:w-4/12 md:w-5/12 w-4/12 text-gray-400'>
			<div className='bg-transparent'>
				<button
					onClick={() => setIsDropdown(!isDropdown)}
					type='button'
					className='inline-flex w-full text-gray-400'>
					<span className='w-11/12 text-left'>
						{major === '' ? 'Major' : major}
					</span>
					<svg
						className={`w-1/12 bg-transparent ${
							isDropdown && 'transform rotate-180'
						}`}
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
			</div>
			<div>
				{isDropdown && (
					<div className='z-10 absolute left-0 mr-4 w-full mt-4 text-gray-400 bg-dark-2 rounded-xl'>
						<button
							type='button'
							onClick={() => {
								setMajor('Computer Science')
							}}
							value={major}
							name='major'
							className='text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full md:border-b-2 border-b-1 md:px-4 lg:px-6 px-2 md:py-2 py-0.5 rounded-t-lg border-dark-2'>
							Computer Science
						</button>
						<button
							type='button'
							onClick={() => {
								setMajor('Information System')
							}}
							name='major'
							value={major}
							className='text-left bg-dark-3 hover:bg-dark-2 text-gray-400 w-full border-t-2 lg:px-6 md:px-4 px-2 md:py-2 py-0.5 rounded-b-lg border-dark-2'>
							Information System
						</button>
					</div>
				)}
			</div>
		</SearchDropdown>
	)
}