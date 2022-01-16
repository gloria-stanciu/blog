import Image from 'next/image'
import { Project } from '../../../helpers/get-projects'
import { Arrow } from '../../icons/Arrow'
import { Tag } from '../../ui'

export default function ProjectCard(props: { project: Project }) {
	return (
		<div
			className='relative flex flex-row justify-start drop-shadow-xl w-fill h-full
		transparent rounded-3xl overflow-hidden'
		>
			<img
				alt=''
				aria-hidden={true}
				src={props.project.background?.url}
				className='absolute z-0'
			></img>
			<div className='py-4 lg:py-8 px-4 md:px-8 space-y-4 flex flex-col z-10'>
				<h1 className='text-base lg:text-2xl font-semibold text-white'>
					{props.project.title}
				</h1>
				<p className='text-sm lg:text-base lg:leading-7 text-white font-light'>
					{props.project.description}
				</p>
				<div className='flex flex-row flex-wrap justify-start items-center gap-2'>
					{props.project.tags
						.slice(0, 3)
						.map((elem, index) =>
							elem.includes('_') ? (
								<Tag key={index}>{elem.replace('_', ' ')}</Tag>
							) : (
								<Tag key={index}>{elem}</Tag>
							)
						)}
					<span className='text-white font-semibold'>
						+{props.project.tags.slice(3).length}
					</span>
				</div>
				<div className='flex flex-col sm:flex-row sm:justify-between items-start space-y-2 sm:space-y-0 sm:items-center'>
					<a
						href={props.project.website}
						className='mr-4 text-white text-xs w-fit'
					>
						{props.project.website}
					</a>
					<div className=' flex flex-row justify-end '>
						<a
							href={`projects/${props.project.slug}`}
							className='mr-4 text-white text-xs border-b-[1px] border-white w-fit'
						>
							Read more
						</a>
						<Arrow className='w-4 -rotate-90 text-white' />
					</div>
				</div>
			</div>
		</div>
	)
}
