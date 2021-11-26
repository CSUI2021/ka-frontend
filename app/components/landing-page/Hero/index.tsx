import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<section className='w-full bg-no-repeat bg-contain cursor-default lg:bg-cover h-gigantic bg-shade-pattern-sm lg:bg-shade-pattern'>
			<div className='flex flex-col items-center justify-center w-full h-screen text-center text-white'>
				<h2
					className='3sm:text-3xl'
					data-aos='fade-right'
					data-aos-anchor='#example-anchor'
					data-aos-offset='500'
					data-aos-duration='500'>
					INTRODUCING
				</h2>
				<h1
					className='flex flex-col 2sm:text-9xl text-8xl'
					data-aos='fade-left'
					data-aos-anchor='#example-anchor'
					data-aos-offset='500'
					data-aos-duration='500'>
					<span>CSUI</span>
					<span>2021</span>
				</h1>
			</div>
		</section>
	)
}

export default Hero
