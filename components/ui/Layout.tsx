import { FC } from 'react'
import { LayoutData } from '../../helpers/get-layout'
import { Header, Footer } from './index'

type Props = {
	header: LayoutData
	footer: LayoutData
}

export const Layout: FC<Props> = ({ children, header, footer }) => {
	return (
		<>
			<Header info={header} />
			<main>{children}</main>
			<Footer info={footer} />
		</>
	)
}
