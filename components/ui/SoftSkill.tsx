import { Skill } from '../../helpers/get-about'

const color: Colors = {
	red: 'bg-red-400',
	yellow: 'bg-yellow-400',
	orange: 'bg-orange-300',
}

export default function SoftSkill(props: { data: Skill }) {
	return (
		<div
			className={` rounded-2xl flex flex-col items-center justify-around
			w-full p-8 space-y-4
			sm:w-2/5 
			xl:w-1/4 xl:h-96 ${color[props.data.bgColor as keyof Colors]}`}
		>
			<img
				src={props.data.image}
				className='
			w-2/3
			'
			/>
			<div className='flex flex-col items-center space-y-4'>
				{props.data.name.split(';').map((text, index) => (
					<span
						key={index}
						className='
					text-sm
					lg:text-lg font-bold text-white'
					>
						{text}
					</span>
				))}
			</div>
		</div>
	)
}

interface Colors {
	red: string
	yellow: string
	orange: string
}
