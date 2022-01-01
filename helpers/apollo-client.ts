import { ApolloClient, InMemoryCache } from '@apollo/client'

function getGraphQLClient() {
	const client = new ApolloClient({
		uri: process.env.GRAPHCMS_PROJECT_API,
		cache: new InMemoryCache(),
	})
	return client
}

export { getGraphQLClient }
