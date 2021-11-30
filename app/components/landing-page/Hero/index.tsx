import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
	const [angkatanName, setAngkatanName] = useState('CSUI')
	const [opacity, setOpacity] = useState(100)

	// sleep function to delay
	const sleep = (ms: number) => {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	useEffect(() => {
		AOS.init()
		const interval = setInterval(() => {
			setOpacity(0)
			sleep(2000).then(() => {
				setAngkatanName('BAKUNG')
				setOpacity(100)
			})
		}, 2000)
		return () => clearInterval(interval)
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
					<span className={`opacity-${opacity}  transition-all`}>
						{angkatanName}
					</span>
					<span>2021</span>
				</h1>
			</div>
		</section>
	)
}

export default Hero
