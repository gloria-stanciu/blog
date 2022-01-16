import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'

export async function getLayout(): Promise<LayoutInterface[]> {
	const client = getGraphQLClient()
	const result = await client.query<{ generals: LayoutInterface[] }>({
		query: gql`
			query Layout {
				generals(where: { name_in: ["header", "footer"] }) {
					data
				}
			}
		`,
	})
	return result.data.generals
}

export interface LayoutInterface {
	__typename: string
	data: LayoutData
}

export interface LayoutData {
	contact?: Contact[]
	signature: string
	sections?: Section[]
}

export interface Contact {
	url: string
	logo: string
	name: string
}

export interface Section {
	name: string
	url: string
}
