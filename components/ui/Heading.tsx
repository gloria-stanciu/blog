export default function Heading(props: {
	title: string
	color: 'text-red-700' | 'text-stone-800'
}) {
	return (
		<h1
			className={`font-bold font-sans ${props.color}
			text-lg
			sm:text-3xl
			md:text-4xl
			lg:text-5xl
			xl:text-6.5xl
			`}
		>
			{props.title}
		</h1>
	)
}
