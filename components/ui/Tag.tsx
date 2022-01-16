import { FC } from 'react'

export const Tag: FC<{ name?: string }> = ({ children }) => {
	return (
		<span className='w-fit bg-white text-stone-800 text-xs font-bold rounded-xl flex items-center py-2 px-4 shadow-sm'>
			{children}
		</span>
	)
}
