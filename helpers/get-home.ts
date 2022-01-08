import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'

export async function getHome(): Promise<Home> {
	const client = getGraphQLClient()
	const result = await client.query({
		query: gql`
			query About {
				generals(where: { name: "home" }) {
					data
				}
			}
		`,
	})

	return result.data.generals[0].data
}

export interface Home {
	mail: string
	signature: string
	image: string
	platforms: Platform[]
}

export interface Platform {
	url: string
	name: string
}
