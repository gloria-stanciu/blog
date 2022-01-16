import Image from 'next/image'
import { LayoutData } from '../../helpers/get-layout'

export default function Footer(props: { info: LayoutData }) {
	return (
		<footer className='bg-stone-50'>
			<div className='container mx-auto  py-16 border-t-2 border-t-stone-100'>
				<div className='flex flex-col items-start space-y-8 md:flex-row md:justify-between md:items-end'>
					<div className='flex justify-between flex-col items-start space-y-4'>
						{props.info.contact?.map((elem, index) => (
							<button
								key={index}
								className='flex flex-row items-center space-x-4'
							>
								<img alt='' aria-hidden src={elem.logo} />
								<a
									href={elem.url}
									target='_blank'
									rel='noreferrer'
									className='text-xs'
								>
									{elem.name}
								</a>
							</button>
						))}
					</div>
					<img alt='' aria-hidden src={props.info.signature} />
				</div>
			</div>
		</footer>
	)
}
