import { About } from '../../../helpers/get-about'
import { Button, Heading, Hobby, Link, SectionTitle } from '../../ui'

export default function Interests(props: { about: About }) {
	return (
		<div>
			<div
				className='w-full relative
		  mt-28
			xl:mt-72'
			>
				<div
					className='w-screen bg-orange-50 absolute left-0 z-0 transform -skew-y-6 
				-bottom-10 h-5/6
				lg:-bottom-16
				xl:-bottom-32
				'
				/>
				<div className='container mx-auto relative'>
					<div className='space-y-4 flex flex-col items-start'>
						<SectionTitle text={props.about.interests.sectionTitle} />
						<Heading title={props.about.interests.title} />
					</div>
					<div
						className='flex flex-row flex-wrap justify-between items-end
				my-16 space-y-4
				xl:my-52'
					>
						{props.about.interests.hobbies.map((_, index) => (
							<Hobby key={index} data={props.about.interests.hobbies[index]} />
						))}
					</div>
				</div>
			</div>
			<div className='container mx-auto space-x-4 pt-16 flex flex-row justify-start items-center'>
				<Button title='Contact me' />
				<Link title='Read my CV' url={props.about.cv} newTab={true} />
			</div>
		</div>
	)
}
