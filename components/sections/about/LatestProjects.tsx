import { About } from '../../../helpers/get-about'
import { Button, Heading, Link, Project, SectionTitle } from '../../ui'

export default function LatestProjects(props: { about: About }) {
	return (
		<div className='container mx-auto mt-32 sm:mt-52 lg:mt-80'>
			<div className='flex flex-col items-start justify-center space-y-4'>
				<SectionTitle text='Projects' />
				<Heading title='Latest projects' />
			</div>

			<div className='mt-16 space-y-16'>
				{[1, 2, 3].map((index) => (
					<Project key={index} text='hello' />
				))}
			</div>

			<div className='space-x-4 pt-16 flex flex-row justify-start items-center'>
				<Button title='Hire me' />
				<Link title='Download CV' />
			</div>
		</div>
	)
}
