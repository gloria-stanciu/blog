export default function Link(props: { title: string | undefined }) {
	return (
		<button
			className='w-fit bg-transparent text-orange-500 border-b-2 border-yellow-800  
			text-xs h-4
			sm:h-4 sm:text-xs
			md:h-6 md:text-sm
			xl:h-7 xl:text-sm
			'
		>
			{props.title}
		</button>
	)
}
