import { Link } from '../icons/Link'

export function ExternalLink(props: {
	title?: string
	url?: string
	newTab?: boolean
}) {
	return (
		<div className='flex flex-row justify-start space-x-1'>
			<a
				className='w-fit bg-transparent text-stone-800 no-underline hover:underline hover:underline-offset-4
        text-xs h-4
        sm:h-4 sm:text-xs
        md:h-6 md:text-sm
        xl:h-7 xl:text-sm
        '
				href={props.url}
				target={props.newTab ? '_blank' : undefined}
				rel='noreferrer'
			>
				{props.title}
			</a>
			<Link />
		</div>
	)
}
