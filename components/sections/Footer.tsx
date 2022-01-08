import { About, Contact } from '../../helpers/get-about'

export default function (props: { about: About }) {
	return (
		<footer className='container mx-auto  py-16 mt-36 border-t-2 border-t-stone-100'>
			<div className='flex flex-col items-start space-y-8 md:flex-row md:justify-between md:items-end'>
				<div className='flex justify-between flex-col items-start space-y-4'>
					{props.about.contact.map((elem, index) => (
						<button
							key={index}
							className='flex flex-row items-center space-x-4  '
						>
							<img src={elem.logo} />
							<a href={elem.url} target='_blank' className='text-xs'>
								{elem.name}
							</a>
						</button>
					))}
				</div>
				<img src={props.about.signature} />
			</div>
		</footer>
	)
}
