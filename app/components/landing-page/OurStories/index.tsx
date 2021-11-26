import React, { useEffect, useState } from 'react'
import { StoryContainer } from '../styles'
import { Content } from './interfaces/Content.interface'
import { useHorizontalScroll } from './hooks/useHorizontalScroll.hook'
import StoryItem from './StoryItem'
import axios from 'axios'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMediaQuery } from 'react-responsive'
import SkeletonStoryWrapper from './SkeletonStoryWrapper'

const OurStories = () => {
	const [stories, setStories] = useState([])
	const [details, setDetails] = useState('')
	const [titles, setTitles] = useState('')
	const [isClickedGlobal, setIsClickedGlobal] = useState(1)
	const scrollRef = useHorizontalScroll()
	const [isLoading, setIsLoading] = useState(false)
	const lessThanMobile = useMediaQuery({
		maxWidth: '350px',
	})

	const getStories = async () => {
		try {
			setIsLoading(true)
			const { data }: { data: [] } = await axios.get(
				`${process.env.NEXT_PUBLIC_BASE_URL}/story/list`
			)
			setIsLoading(false)
			setStories(data)
		} catch (error) {
			setIsLoading(false)
			console.log(error)
			return []
		}
	}

	useEffect(() => {
		getStories()
	}, [])

	return (
		<section className='h-full mx-auto text-white max-w-9/10'>
			<h2
				className='my-24 text-center 3md:mb-5 2md:text-left'
				data-aos='fade-right'>
				Our Stories
			</h2>
			<SkeletonTheme
				baseColor='#252525'
				highlightColor='#505050'
				borderRadius='0.5rem'
				duration={4}>
				<div className='grid-cols-8 2md:grid'>
					{isLoading ? (
						<div className='col-start-2 my-auto' data-aos='fade-right'>
							<h4>
								<Skeleton />
							</h4>
							<p>
								<Skeleton count={4} />
							</p>
						</div>
					) : (
						<div className='col-span-3 m-auto 3md:mb-10' data-aos='fade-right'>
							<div className='flex flex-col items-center h-full mx-auto 2md:max-w-xs 3sm:max-w-xs 3md:mb-10'>
								<h4 className='text-center'>{titles}</h4>
								<p className='mt-4 text-justify'>{details}</p>
							</div>
						</div>
					)}

					<StoryContainer
						className='flex col-start-4 col-end-9 gap-5 overflow-x-auto p-7'
						ref={scrollRef}>
						{isLoading ? (
							<div className='-mr-96'>
								<Skeleton
									width='300px'
									height='450px'
									count={lessThanMobile ? 1 : 2}
									inline
									wrapper={SkeletonStoryWrapper}
								/>
							</div>
						) : (
							stories.map((content: Content) => (
								<StoryItem
									{...content}
									key={content.id}
									setDetails={setDetails}
									setTitles={setTitles}
									setIsClickedGlobal={setIsClickedGlobal}
									isClickedGlobal={isClickedGlobal}
								/>
							))
						)}
					</StoryContainer>
				</div>
			</SkeletonTheme>
		</section>
	)
}

export default OurStories
