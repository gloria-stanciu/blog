import { motion } from 'framer-motion'
import { useRef } from 'react'

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: (i: number) => {
		return {
			y: 0,
			opacity: 1,
			transition: { delay: i * 2.5 },
		}
	},
}

export default function Bubbles(props: { photoUrl: string }) {
	const constraintsRef = useRef(null)

	return (
		<motion.div
			className='relative w-1/2 flex items-center justify-center m-10 lg:m-0'
			ref={constraintsRef}
		>
			<motion.img
				className='cursor-pointer'
				src={props.photoUrl}
				variants={item}
				custom={0.5}
				drag
				dragConstraints={constraintsRef}
			/>
			<motion.div
				className='bg-stone-700 w-14 aspect-square rounded-full absolute cursor-pointer mix-blend-soft-light
        -left-28 top-24
        sm:right-64 sm:top-24
        lg:left-0 lg:top-0'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.3}
			/>
			<motion.div
				className='bg-stone-700 w-14 aspect-square rounded-full absolute cursor-pointer mix-blend-soft-light
        left-32 -bottom-16
        lg:left-12 lg:-bottom-32'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.35}
			/>
			<motion.div
				className='bg-stone-700 w-8 aspect-square rounded-full absolute cursor-pointer mix-blend-soft-light
        right-28 -top-8
        lg:right-32 lg:-top-8'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.3}
			/>
			<motion.div
				className='bg-stone-700 w-8 aspect-square rounded-full absolute cursor-pointer mix-blend-soft-light
        -right-16 bottom-8
        lg:right-16 lg:bottom-14'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.5}
			/>
			<motion.div
				className='bg-stone-700 w-20 aspect-square rounded-full absolute cursor-pointer mix-blend-soft-light
        -right-16 -top-16
        lg:left-20 lg:bottom-0'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.45}
			/>
			<motion.div
				className='bg-stone-700 w-28 aspect-square rounded-full absolute cursor-pointer right-0 top-10 mix-blend-soft-light hidden lg:block'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.4}
			/>
			<motion.div
				className='bg-stone-700 w-32 aspect-square rounded-full absolute cursor-pointer -left-20 -bottom-4 mix-blend-soft-light hidden lg:block'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.45}
			/>
			<motion.div
				className='bg-stone-700 w-16 aspect-square rounded-full absolute cursor-pointer right-8 -bottom-14 mix-blend-soft-light hidden lg:block'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.4}
			/>
			<motion.div
				className='bg-stone-700 w-24 aspect-square rounded-full absolute cursor-pointer left-60 -bottom-44 mix-blend-soft-light hidden lg:block'
				drag
				dragConstraints={constraintsRef}
				variants={item}
				custom={0.5}
			/>
		</motion.div>
	)
}
