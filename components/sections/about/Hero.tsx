import { About } from '../../../helpers/get-about'
import { Button, Heading, Link } from '../../ui'
import SectionTitle from '../../ui/SectionTitle'

export default function Hero(props: { about: About }) {
	return (
		<>
			<div
				className='container mx-auto 
				pt-[22rem] flex flex-col items-center
				sm:pt-28 sm:items-start
				md:pt-44
				lg:pt-52
				xl:pt-[13.5rem]
			'
			>
				<div
					className='bg-yellow-100 rounded-b-[5rem] top-0 absolute flex justify-center items-end z-0
					w-48 h-60  right-[10%]
					sm:w-[14rem] sm:h-[21rem] sm:right-[5%]
					md:w-[22rem] md:h-[29rem] md:right-[6%]
					lg:w-[30rem] lg:h-[37rem] lg:right-[7%]
					xl:w-[38rem] xl:h-[45rem] xl:right-[8%]
				'
				>
					<img
						src={props.about.hero.image}
						className='drop-shadow-2xl scale-75 z-20
						-mb-[3rem]
						sm:-mb-[3rem]
						md:-mb-[6rem]
						lg:-mb-[8rem]
						xl:-mb-40
						'
					/>
					<img
						src={props.about.decorations.cubeGrid}
						className='absolute  
						bottom-5 scale-[0.30] -right-[4.5rem]
						sm:bottom-24 sm:scale-[0.40] sm:-right-[4.75rem]
						md:bottom-40 md:scale-[0.50]
						lg:bottom-72 lg:scale-[0.65]
						xl:bottom-96 xl:scale-75 
						'
					/>
					<img
						src={props.about.decorations.branches}
						className='absolute z-10
						bottom-0 scale-75 right-28
						sm:-bottom-8 sm:scale-50 sm:right-32
						md:-bottom-16 md:right-52
						lg:-bottom-20 lg:scale-75 lg:right-[22rem]
						xl:-bottom-24 xl:right-[26rem]
						'
					/>
				</div>
				<div
					className='flex flex-col content-start items-start 
					w-full space-y-4
					sm:w-3/5
					md:w-1/2
					lg:w-5/12
					'
				>
					<SectionTitle text={props.about.hero.profession} />
					<Heading title={props.about.fullName} />
					<p
						className='
					text-sm
					md:text-base
					'
					>
						{props.about.hero.bio}
					</p>
					<div
						className='flex content-start items-center 
						space-x-4 pt-8
						lg:space-x-4 lg:pt-16
						xl:space-x-4 xl:pt-16
						'
					>
						<Button title='Contact me' />
						<Link title='Download CV' />
					</div>
				</div>
			</div>
		</>
	)
}
