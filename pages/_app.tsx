import '../styles/globals.css'
import App, { AppContext } from 'next/app'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../components/ui'
import { getLayout, LayoutData } from '../helpers/get-layout'

type LayoutProps = {
	header: LayoutData
	footer: LayoutData
}

function MyApp({ Component, pageProps, ...props }: AppProps & LayoutProps) {
	return (
		<Layout header={props.header} footer={props.footer}>
			<Head>
				<title>{`Gloria's Blog`}</title>
				<meta name='description' content='Created by Gloria Stanciu' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext)

	const [footer, header] = await getLayout()

	return { ...appProps, header: header.data, footer: footer.data }
}

export default MyApp
