import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Gloria's Blog</title>
				<meta name='description' content='Created by Gloria Stanciu' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Oooh+Baby&family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
