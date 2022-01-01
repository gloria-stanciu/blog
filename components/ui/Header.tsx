import { useEffect, useState } from 'react'
import { Menu } from '../icons/Menu'

export default function Header(props: { url: string }) {
	const [open, setOpen] = useState(false)
	const [menu, setMenu] = useState(false)

	function checkWidth() {
		window?.innerWidth >= 1024 ? setMenu(true) : setMenu(false)
	}

	useEffect(() => {
		window.addEventListener('resize', checkWidth)
	}, [])

	return (
		<header className='w-full absolute top-0 h-16 z-40'>
			{menu ? (
				<div className='container mx-auto h-full flex justify-between items-center bg-transparent'>
					<img src={props.url} />
					<div className='flex justify-between w-[40%]'>
						<a>Menu</a>
						<a href='/about'>About</a>
						<a>Projects</a>
						<a>Posts</a>
					</div>
				</div>
			) : (
				<div className='container mx-auto h-full flex items-center justify-between'>
					<div className='flex justify-between items-center w-full relative'>
						<button
							className=' w-5 sm:w-6 md:w-8 '
							onClick={() => setOpen(!open)}
						>
							<Menu />
						</button>
						<img
							src={props.url}
							className='scale-[0.65] sm:scale-75 md:scale-90'
						/>
					</div>
					{open ? (
						<div
							className='flex flex-col space-y-4 bg-stone-100 rounded-lg absolute 
							top-full p-4 justify-between w-fit
							text-sm
							sm:text-sm
							md:text-base
						'
						>
							<a>Menu</a>
							<a href='/about'>About</a>
							<a>Projects</a>
							<a>Posts</a>
						</div>
					) : null}
				</div>
			)}
		</header>
	)
}
