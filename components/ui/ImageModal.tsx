import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Close } from '../icons/Close'

export function ImageModal(props: { src: string | undefined }) {
	const [openImage, setOpenImage] = useState(false)

	return (
		<>
			{openImage && (
				<Dialog
					as='div'
					className='fixed inset-0 z-10 overflow-y-auto bg-stone-50 bg-opacity-90 flex justify-center items-center'
					open={openImage}
					onClose={() => setOpenImage(false)}
					static
				>
					<div className='flex flex-col space-y-4 w-max-screen'>
						<button
							onClick={() => {
								setOpenImage(false)
							}}
							className='flex self-end '
						>
							<Close className='' />
						</button>
						<img
							key={props.src}
							alt=''
							src={props.src}
							className='self-center justify-center items-center w-full'
						/>
					</div>
				</Dialog>
			)}
			<button
				className='flex justify-center items-center'
				onClick={() => setOpenImage(true)}
			>
				<img key={props.src} src={props.src} className='self-center' />
			</button>
		</>
	)
}
