import React from 'react'
import GetToKnowUs from '../app/components/landing-page/GetToKnowUs'
import OurStories from '../app/components/landing-page/OurStories'
import MeetTheDevTeam from '../app/components/landing-page/MeetTheDevTeam'
import Header from '../app/components/global/header'

const Home = () => {
	return (
		<>
			<Header />
			<div className='flex flex-col items-center justify-center h-screen text-center text-white cursor-default'>
				<h2>INTRODUCING</h2>
				<h1 className='text-9xl'>
					CSUI<br></br>2021
				</h1>
			</div>
			<section className='h-full text-white'>
				<h2 className='my-24 text-center 2sm:max-w-md 2sm:text-left'>
					Message from our coordinator
				</h2>
				<div className='flex justify-center'>
					<p className='max-w-xs text-center 2sm:max-w-4xl 2sm:text-left'>
						{/* nnti dijdiin mapping */}
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo
						nulla facilisi nullam vehicula ipsum a arcu. Enim neque volutpat ac
						tincidunt vitae semper. Eu augue ut lectus arcu bibendum at varius
						vel. Est pellentesque elit ullamcorper dignissim cras tincidunt
						lobortis feugiat vivamus. Lacus vel facilisis volutpat est velit
						egestas dui id ornare. Nec ultrices dui sapien eget. Risus nec
						feugiat in fermentum. Pretium quam vulputate dignissim suspendisse
						in est ante. Accumsan in nisl nisi scelerisque. Sem et tortor
						consequat id porta. Sed risus ultricies tristique nulla aliquet
						enim. Nibh praesent tristique magna sit amet purus gravida quis. Id
						diam maecenas ultricies mi eget mauris pharetra et. Sapien
						pellentesque habitant morbi tristique senectus et netus et
						malesuada. Rutrum quisque non tellus orci ac. Tortor condimentum
						lacinia quis vel eros donec ac odio tempor. Egestas quis ipsum
						suspendisse ultrices. Lacus sed viverra tellus in hac habitasse
						platea dictumst vestibulum. Porttitor eget dolor morbi non. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Commodo nulla
						facilisi nullam vehicula ipsum a arcu. Enim neque volutpat ac
						tincidunt vitae semper. Eu augue ut lectus arcu bibendum at varius
						vel. Est pellentesque elit ullamcorper dignissim cras tincidunt
						lobortis feugiat vivamus. Lacus vel facilisis volutpat est velit
						egestas dui id ornare. Nec ultrices dui sapien eget. Risus nec
						feugiat in fermentum. Pretium quam vulputate dignissim suspendisse
						in est ante. Accumsan in nisl nisi scelerisque. Sem et tortor
						consequat id porta. Sed risus ultricies tristique nulla aliquet
						enim. Nibh praesent tristique magna sit amet purus gravida quis. Id
						diam maecenas ultricies mi eget mauris pharetra et. Sapien
						pellentesque habitant morbi tristique senectus et netus et
						malesuada. Rutrum quisque non tellus orci ac. Tortor condimentum
						lacinia quis vel eros donec ac odio tempor. Egestas quis ipsum
						suspendisse ultrices. Lacus sed viverra tellus in hac habitasse
						platea dictumst vestibulum. Porttitor eget dolor morbi non.
					</p>
				</div>
			</section>
			<OurStories />
			<GetToKnowUs />
			<MeetTheDevTeam />
		</>
	)
}

export default Home
