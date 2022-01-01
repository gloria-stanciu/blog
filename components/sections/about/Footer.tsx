import { About } from '../../../helpers/get-about'
import { Button, Link } from '../../ui'

export default function (props: { about: About }) {
	return (
		<footer
			className='container mx-auto flex justify-between py-16 space-y-4
		flex-col items-start
		sm:flex-row sm:items-center'
		>
			<div
				className='flex items-center
			space-x-4 pt-8
			lg:space-x-4 lg:pt-16
			xl:space-x-4 xl:pt-16'
			>
				<Button title='Hire me' />
				<Link title='Download CV' />
			</div>
			<div className='flex items-center space-x-4'>
				{props.about.contact.map((elem, index) => (
					<button key={index} className='w-1/6 sm:w-full'>
						<img src={elem.url} />
					</button>
				))}
			</div>
		</footer>
	)
}
