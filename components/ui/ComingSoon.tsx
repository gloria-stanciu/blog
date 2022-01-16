import { motion } from 'framer-motion'
import { useRef } from 'react'
import { BgShape } from '../icons/BgShape'

export function ComingSoon() {
	const constraintsRef = useRef(null)

	return (
		<>
			<div
				className='container relative h-screen mx-auto '
				ref={constraintsRef}
			>
				<div className='h-screen mx-auto flex justify-center items-center'>
					<BgShape className='absolute  z-0 flex justify-center items-center'>
						<span className='top-0 z-20 text-stone-600 text-6xl font-semibold'>
							Coming soon
						</span>
					</BgShape>
				</div>
				<motion.div
					className='bg-orange-200 w-14 aspect-square rounded-full absolute cursor-pointer mix-blend-multiply
        left-28 top-24
        sm:right-64 sm:top-24
        lg:left-8 lg:top-60'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-200 w-36 aspect-square rounded-full absolute cursor-pointer mix-blend-multiply
        left-32 bottom-16
        lg:left-12 lg:bottom-48'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-400 w-20 aspect-square rounded-full absolute cursor-pointer mix-blend-multiply
        left-28 top-8
        lg:left-32 lg:top-96'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-400 w-28 aspect-square rounded-full absolute cursor-pointer mix-blend-multiply
        right-16 bottom-8
        lg:right-[28rem] lg:bottom-64'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-500 w-48 aspect-square rounded-full absolute cursor-pointer mix-blend-multiply
        right-16 top-16
        lg:left-72 lg:top-56'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-200 w-40 aspect-square rounded-full absolute cursor-pointer right-16 top-28 mix-blend-multiply hidden lg:block'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-200 w-12 aspect-square rounded-full absolute cursor-pointer right-48 bottom-64 mix-blend-multiply hidden lg:block'
					drag
					dragConstraints={constraintsRef}
				/>
				<motion.div
					className='bg-orange-400 w-32 aspect-square rounded-full absolute cursor-pointer right-64 top-64 mix-blend-soft-light hidden lg:block'
					drag
					dragConstraints={constraintsRef}
				/>
			</div>
		</>
	)
}
