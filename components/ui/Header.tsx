import { useState } from 'react'
import { Menu } from '../icons/Menu'

import { motion } from 'framer-motion'

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

export default function Header(props: { url: string }) {
	const [open, setOpen] = useState(false)

	const MenuItems = () => (
		<>
			<motion.a
				href='/'
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				Home
			</motion.a>
			<motion.a
				href='/about'
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				About
			</motion.a>
			<motion.a
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				Projects
			</motion.a>
			<motion.a
				variants={variants}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
			>
				Posts
			</motion.a>
		</>
	)

	return (
		<header className='w-full absolute top-0 h-16 z-40'>
			<div className='container mx-auto h-full flex justify-between items-center bg-transparent'>
				<motion.button
					className='w-5 sm:w-6 md:w-8 lg:hidden'
					initial={false}
					animate={open ? 'open' : 'closed'}
					onClick={() => setOpen(!open)}
				>
					<Menu />
				</motion.button>

				<img src={props.url} />

				<div className='justify-between w-[40%] hidden lg:flex'>
					<MenuItems />
				</div>

				{open ? (
					<div
						className='flex flex-col space-y-4 bg-stone-100 text-stone-800 rounded-md absolute 
							top-full p-4 justify-between w-fit
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
