import { useState } from 'react'
import Image from 'next/image'
import { Menu } from '../icons/Menu'

import { motion } from 'framer-motion'
import { LayoutData } from '../../helpers/get-layout'

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

export default function Header(props: { info: LayoutData }) {
	const [open, setOpen] = useState(false)

	const MenuItems = () => (
		<>
			{props.info.sections?.map((elem, index) => (
				<motion.a
					key={index}
					href={elem.url}
					variants={variants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					{elem.name}
				</motion.a>
			))}
		</>
	)

	return (
		<header className='w-full absolute top-0 h-16 z-40 '>
			<div className='container mx-auto h-full flex justify-between items-center bg-transparent'>
				<motion.button
					className='w-5 sm:w-6 md:w-8 lg:hidden'
					initial={false}
					animate={open ? 'open' : 'closed'}
					onClick={() => setOpen(!open)}
				>
					<Menu />
				</motion.button>

				<img alt='' aria-hidden src={props.info.signature} />

				<div className='justify-evenly w-[40%] hidden lg:flex'>
					<MenuItems />
				</div>

				{open ? (
					<div
						className='flex flex-col space-y-6 bg-stone-100 text-stone-800 rounded-md absolute 
							top-full p-6 w-1/4 justify-between
							text-sm
							sm:text-sm
							md:text-base
						'
					>
						<MenuItems />
					</div>
				) : null}
			</div>
		</header>
	)
}
