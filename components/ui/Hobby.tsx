import { Hobby } from '../../helpers/get-about'
import Image from 'next/image'

export default function SoftSkill(props: { data: Hobby }) {
	return (
		<div
			className='flex flex-col items-center 
		w-1/2 space-y-6
		lg:w-1/4 lg:space-y-16'
		>
			<img
				alt={`An image displaying a hobby: ${props.data.name}`}
				src={props.data.image}
				className='w-1/2 lg:w-2/3'
			/>
			<span
				className='text-stone-800
			text-sm
			sm:text-base
			xl:text-lg'
			>
				{props.data.name}
			</span>
		</div>
	)
}
