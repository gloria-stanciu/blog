import { Menu } from '../icons/Menu'
import { Link } from './index'

export default function LatestProjectCard(props: { text: string }) {
	return (
		<div
			className='bg-white rounded-tl-3xl rounded-tr-lg rounded-br-3xl rounded-bl-lg 
			flex justify-center overflow-hidden drop-shadow-2xl
			flex-col-reverse w-full
			lg:flex-row
			'
		>
			<div
				className=' flex flex-col justify-center items-start space-y-4
				p-8
				lg:w-1/3 lg:p-12'
			>
				<span
					className='font-semibold
				text-base
				sm:text-lg
				md:text-xl
				lg:text-2xl'
				>
					Project name
				</span>
				<p className='text-sm md:text-base'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industrys standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<Link title='Read more' />
			</div>
			<div
				className='bg-orange-500
				aspect-video
				lg:w-2/3 lg:aspect-auto'
			></div>
		</div>
	)
}
