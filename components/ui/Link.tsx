export default function Link(props: {
	title?: string
	url?: string
	newTab?: boolean
}) {
	return (
		<a
			className='w-fit bg-transparent text-orange-500 border-b-2 border-yellow-800  
			text-xs h-4
			sm:h-4 sm:text-xs
			md:h-6 md:text-sm
			xl:h-7 xl:text-sm
			'
			href={props.url}
			target={props.newTab ? '_blank' : undefined}
		>
			{props.title}
		</a>
	)
}
