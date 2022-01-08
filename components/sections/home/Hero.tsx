import { motion } from 'framer-motion'
import { Home } from '../../../helpers/get-home'
import Bubbles from '../../decorations/Bubbles'

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
}
const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

export default function Hero(props: { home: Home }) {
	return (
		<div className='h-screen flex justify-start items-center bg-gradient-to-br from-red-600 to-yellow-300'>
			<motion.div
				className='container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between'
				variants={container}
				initial='hidden'
				animate='visible'
			>
				<div className='flex flex-col items-start space-y-16'>
					<div
						className='flex flex-col items-start space-y-2
							md:space-y-3
							lg:space-y-4'
					>
						<motion.span
							className='text-white font-light
							text-sm
							sm:text-lg
							md:text-lg
							lg:text-xl
							xl:text-xl
								'
							variants={item}
						>
							Hello there, I am
						</motion.span>
						<motion.span
							className='text-white font-bold
									text-xl
									sm:text-2xl
									md:text-3xl
									lg:text-5xl
									xl:text-6xl
									'
							variants={item}
						>
							Gloria Stanciu
						</motion.span>
						<motion.span
							className='text-white font-light
									text-xl
									sm:text-xl
									md:text-2xl
									lg:text-3xl
									xl:text-4xl'
							variants={item}
						>
							Software engineer
						</motion.span>
						<motion.span
							className='text-white font-light
									text-sm
									sm:text-base
									md:text-base
									lg:text-lg
									xl:text-lg'
							variants={item}
						>
							focused on developing full stack web applications
						</motion.span>
					</div>
					<motion.div className='flex flex-row space-x-6' variants={item}>
						{props.home.platforms.map((platform, index) => (
							<a
								key={index}
								href={platform.url}
								className='text-white text-sm sm:text-md'
							>
								{platform.name}
							</a>
						))}
					</motion.div>
				</div>
				<Bubbles photoUrl={props.home.image} />
			</motion.div>
		</div>
	)
}
