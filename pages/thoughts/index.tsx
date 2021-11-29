import Link from 'next/link'
import React from 'react'
import GradientBackgroundRed from '../../app/components/sig/styles/GradientBackgroundRed'
import GradientBackgroundBlue from '../../app/components/sig/styles/GradientbackgroundBlue'
import Ticket from '../../app/components/thoughts/Ticket'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { thoughts } from '../../app/components/thoughts/utils/thoughts'
import { Thought } from '../../app/components/thoughts/interfaces'

const settings = {
	infinite: true,
	arrows: false,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 6000,
}

const Thoughts = () => {
	return (
		<div className='h-screen w-auto overflow-hidden'>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<div className='w-full h-1/6 navbar'></div>
			<div className='h-5/6 w-full '>
				<div className='h-1/6 w-full flex justify-center items-center'>
					<p className='text-3xl text-white lg:text-4xl'>Apa Kata CSUI 2021?</p>
				</div>
				<div className='h-5/6 w-full lg:pt-5'>
					<div className='w-full h-1/6 lg:h-auto flex justify-center items-center'>
						<div className='h-full w-1/2 lg:flex'>
							<div className='w-full h-1/2 flex justify-center items-center mt-1 lg:mt-0'>
								<Link href='/sendthought'>
									<button className=' hover:bg-black  rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2'>
										<p className='text-white text-lg hover:text-blue-300'>
											Share Your Thoughts
										</p>
									</button>
								</Link>
							</div>
							<div className='w-full h-1/2 flex justify-center items-center mt-3 lg:mt-0'>
								<Link href='/thoughts'>
									<button className='border-blue-300 border-b-2 pb-1'>
										<p className='text-blue-300  text-lg '>Our Thoughts</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='h-1/6'></div>
					<div className='w-full h-4/6 flex items-center justify-center object-bottom'>
						<div className='h-auto w-4/6 lg:w-2/4'>
							<Slider
								{...settings}
								className='flex justify-center items-center'>
								{thoughts.map((thoughts: Thought) => (
									<div key={thoughts.id}>
										<Ticket key={thoughts.id} desc={thoughts.desc} />
									</div>
								))}
							</Slider>
							<div className='flex items-center justify-center'>
								<p className='text-gray-500'>Slide to see more</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Thoughts
