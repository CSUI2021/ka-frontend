import React from 'react'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'
import getToKnowUsItems from './utils/getToKnowUsItems'
import GetToKnowUsCard from './GetToKnowUsCard'
import { useHorizontalScroll } from '../OurStories/hooks/useHorizontalScroll.hook'
import GetToKnowUsContainer from './GetToKnowUsContainer'

const GetToKnowUs = () => {
	const scrollRef = useHorizontalScroll()
	return (
		<section className='h-full mx-auto text-white max-w-9/10'>
			<h2 className='my-24 text-center 2md:text-left' data-aos='fade-right'>
				Get to
				<br />
				Know Us
			</h2>
			<GetToKnowUsContainer
				className='flex w-full gap-5 overflow-x-auto p-7'
				ref={scrollRef}>
				{getToKnowUsItems.map(({ url, ...props }) => {
					return url.includes('http') ? (
						<a href={url} key={uuid()}>
							{<GetToKnowUsCard {...props} />}
						</a>
					) : (
						<Link href={url} passHref key={uuid()}>
							<a>{<GetToKnowUsCard {...props} />}</a>
						</Link>
					)
				})}
			</GetToKnowUsContainer>
		</section>
	)
}

export default GetToKnowUs
