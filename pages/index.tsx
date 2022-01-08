import type { NextPage } from 'next'
import React from 'react'

import Header from '../components/ui/Header'
import { Home, getHome } from '../helpers/get-home'
import { Hero } from '../components/sections/home'

const Home: NextPage<{ home: Home }> = ({ home }) => {
	return (
		<>
			<Header url={home.signature} />
			<main className='min-h-screen'>
				<Hero home={home} />
			</main>
		</>
	)
}

export async function getStaticProps() {
	const home = await getHome()

	return {
		props: {
			home,
		},
	}
}

export default Home
