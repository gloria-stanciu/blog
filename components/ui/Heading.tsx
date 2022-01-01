export default function Heading(props: { title: string }) {
	return (
		<h1
			className='font-bold font-sans text-red-700 
			text-lg
			sm:text-3xl
			md:text-4xl
			lg:text-5xl
			xl:text-6.5xl
			'
		>
			{props.title}
		</h1>
	)
}
