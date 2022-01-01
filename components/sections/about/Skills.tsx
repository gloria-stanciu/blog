import { About } from '../../../helpers/get-about'
import { Button, Heading, Link, Project, SectionTitle, Skill } from '../../ui'

export default function Skills(props: { about: About }) {
	return (
		<div className='container mx-auto mt-48'>
			<div className='mb-8 space-y-4'>
				<SectionTitle text={props.about.softSkills.sectionTitle} />
				<Heading title={props.about.softSkills.title} />
			</div>
			<div
				className='flex flex-col flex-wrap space-y-4	
				sm:flex-row sm:justify-center sm:space-y-0 sm:gap-4
				xl:justify-between
			'
			>
				{props.about.softSkills.skills.map((_, index) => (
					<Skill key={index} data={props.about.softSkills.skills[index]} />
				))}
			</div>
		</div>
	)
}
