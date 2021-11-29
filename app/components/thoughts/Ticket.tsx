import TicketBackground from '../../../public/assets/ticket.png'
import Image from 'next/image'
import React from 'react'
import { Thought } from './interfaces'

const Ticket = ({ desc }: Thought) => {
	return (
		<div>
			<div className='container h-auto w-auto  relative flex items-center justify-center'>
				<Image src={TicketBackground} height={250} width={450} />
				<div className='container w-full h-full absolute top-0 flex items-center justify-center text-white'>
					<p className='w-5/6 md:w-4/6 max-h-32 md:max-h-44 text-center text-xs sm:text-base md:text-base overflow-hidden'>
						{desc}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Ticket
