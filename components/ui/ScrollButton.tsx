export default function ScrollButton(props: { title?: string }) {
	return (
		<button
			onClick={() =>
				window.scroll({
					top: document.body.scrollHeight,
					behavior: 'smooth',
				})
			}
			className='w-fit bg-orange-500 text-white rounded-3xl flex items-center
			text-xs h-10 px-4
			sm:h-10 sm:px-4 sm:text-xs  
			md:h-12 md:px-5 md:text-sm
			xl:h-14 xl:px-12 xl:text-sm 
			'
		>
			{props.title}
		</button>
	)
}
