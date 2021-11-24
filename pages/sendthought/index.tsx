import Link from 'next/link'
import React from 'react'

const SendThoughts = () => {
	return (
		<div className='h-screen w-screen overflow-x-hidden'>
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
									<button className='border-blue-300 border-b-2 pb-1'>
										<p className='text-blue-300  text-lg '>
											Share Your Thoughts
										</p>
									</button>
								</Link>
							</div>
							<div className='w-full h-1/2 flex justify-center items-center mt-3 lg:mt-0'>
								<Link href='/thoughts'>
									<button className='pb-1'>
										<p className='text-white text-lg'>Our Thoughts</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='w-full h-5/6 border border-red-600'></div>
				</div>
			</div>
		</div>
	)
}

export default SendThoughts
