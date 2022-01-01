import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Arrow } from '../components/icons/Arrow'
import styles from '../styles/Home.module.css'

import { About, getAbout } from '../helpers/get-about'
import Header from '../components/ui/Header'

const Home: NextPage<{ about: About }> = ({ about }) => {
	return (
		<>
			<Header url={about.signature} />
			<main className='min-h-screen'>
				<div className='h-screen flex justify-center items-center bg-gradient-to-br from-red-500 to-yellow-300'>
					<span className='text-7xl text-white'>Welcome!</span>
				</div>
			</main>

			{/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
		</>
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

export default Home
