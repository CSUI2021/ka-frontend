import Link from 'next/link'
import React from 'react'
import GradientBackgroundRed from '../../app/components/sig/styles/GradientBackgroundRed'
import GradientBackgroundBlue from '../../app/components/sig/styles/GradientbackgroundBlue'
import style from '../../app/components/thoughts/styles/MeetKaryaAngkatanTeam.module.css'

const SendThoughts = () => {
	return (
		<div className='h-screen w-full overflow-x-hidden'>
			<GradientBackgroundBlue />
			<GradientBackgroundRed />
			<div className='w-full h-1/6 navbar'></div>
			<div className='h-5/6 w-full '>
				<div className='h-1/6 w-full flex justify-center items-center'>
					<p className='text-3xl text-white lg:text-4xl font-sora font-semibold'>
						Apa Kata CSUI 2021?
					</p>
				</div>
				<div className='h-5/6 w-full lg:pt-5'>
					<div className='w-full h-1/6 lg:h-auto flex justify-center items-center'>
						<div className='h-full w-1/2 lg:flex'>
							<div className='w-full h-1/2 flex justify-center items-center mt-1 lg:mt-0'>
								<Link href='/sendthought'>
									<button className='border-blue-300 border-b-2 pb-1'>
										<p className='text-blue-300  text-lg font-sora  '>
											Share Your Thoughts
										</p>
									</button>
								</Link>
							</div>
							<div className='w-full h-1/2 flex justify-center items-center mt-3 lg:mt-0'>
								<Link href='/thoughts'>
									<button className='hover:bg-black rounded-full transition duration-500 ease-in-out transform hover:translate-y-1 lg:hover:-translate-y-1 hover:scale-110 p-2'>
										<p className='text-white text-lg font-sora '>
											Our Thoughts
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='w-full h-5/6'>
						<div className='h-full w-full flex justify-center items-center'>
							<div className={style.glow}>
								<button className='bg-gradient-to-r from-red-600 to-red-900 py-5 px-10 rounded-lg'>
									<div>
										<p className='text-center text-white text-xl'>
											Submit Your Message
										</p>
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

export default SendThoughts
