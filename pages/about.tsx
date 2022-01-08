import { NextPage } from 'next'
import {
	Hero,
	TechStack,
	LatestProjects,
	Skills,
	Interests,
} from '../components/sections/about'
import { default as Footer } from '../components/sections/Footer'
import { Header } from '../components/ui'
import { About, getAbout } from '../helpers/get-about'

const About: NextPage<{ about: About }> = ({ about }) => {
	return (
		<main className=' min-h-screen max-w-screen overflow-x-hidden bg-stone-50'>
			<Header url={about.signature} />
			<Hero about={about} />
			<TechStack about={about} />
			<LatestProjects about={about} />
			<Skills about={about} />
			<Interests about={about} />
			<Footer about={about} />
		</main>
	)
}

export async function getStaticProps() {
	const about = await getAbout()

	return {
		props: {
			about,
		},
	}
}

export default About
