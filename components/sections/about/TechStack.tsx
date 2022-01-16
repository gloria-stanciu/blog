import { About } from '../../../helpers/get-about'
import Image from 'next/image'
import { Heading, Link, ScrollButton, SectionTitle } from '../../ui'

export default function TechStack(props: { about: About }) {
	return (
		<div
			className='container mx-auto flex justify-between items-center space-y-16	
		flex-col mt-24
		sm:flex-row sm:mt-64 sm:space-y-0 sm:space-x-8
		md:mt-52 md:space-x-8
		lg:mt-64
		xl:mt-[33rem]'
		>
			<img
				alt='A schema displaying the main tech skills: NodeJS, React, Amazon Web Services and PostgreSQL'
				src={props.about.techSkills.image}
				className='pr-4 w-10/12 sm:w-1/2 md:w-1/2 lg:w-1/3'
			/>
			<div
				className='flex flex-col items-start justify-center space-y-4
				w-full
				sm:w-6/12
			'
			>
				<SectionTitle text={props.about.techSkills.sectionTitle} />
				<Heading title={props.about.techSkills.title} color='text-red-700' />
				<p
					className='
					text-sm
					md:text-base'
				>
					{props.about.techSkills.bio}
				</p>
				<div
					className='flex content-start items-center
				space-x-4 pt-8
				lg:space-x-4 lg:pt-16
				xl:space-x-4 xl:pt-16'
				>
					<ScrollButton title='Contact me' />
					<Link title='Read my CV' url={props.about.cv} newTab={true} />
				</div>
			</div>
		</div>
	)
}
