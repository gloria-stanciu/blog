export default function SectionTitle(props: { text: string }) {
	return (
		<span
			className=' flex items-center box-border border-l-4 border-yellow-400 pl-4 
		text-sm
		sm:text-sm
		md:text-md
		lg:text-xl
		xl:text-2xl'
		>
			{props.text}
		</span>
	)
}
