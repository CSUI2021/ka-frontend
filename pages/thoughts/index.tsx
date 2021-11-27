import Link from 'next/link'
import React from 'react'
import Ticket from '../../public/assets/ticket.png'
import Image from 'next/image'
import GradientBackgroundRed from '../../app/components/sig/styles/GradientBackgroundRed'
import GradientBackgroundBlue from '../../app/components/sig/styles/GradientbackgroundBlue'
import nextButton from '../../public/assets/next.png'
import previousButton from '../../public/assets/previous.png'
import '@fortawesome/react-fontawesome'

const Thoughts = () => {
	return (
		<div className='h-screen w-screen overflow-x-hidden'>
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
									<button className=' hover:bg-black rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-2'>
										<p className='text-white text-lg'>Share Your Thoughts</p>
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
						<div className='h-full w-1/6 lg:w-1/4 flex justify-center items-center'>
							<div className='h-auto w-auto hover:bg-white rounded-full'>
								<button>
									<div>
										<Image src={nextButton} height={50} width={50} />
									</div>
								</button>
							</div>
						</div>
						<div className='h-full w-4/6 lg:w-2/4 flex items-center justify-center '>
							<div className=''>
								<Image src={Ticket} height={250} width={450} />
							</div>
						</div>
						<div className='h-full w-1/6 lg:w-1/4 flex justify-center items-center'>
							<div className='h-auto w-auto hover:bg-white rounded-full'>
								<button>
									<div>
										<Image src={previousButton} height={50} width={50} />
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Thoughts
