import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'
import { Project } from './get-projects'

export async function getProjectContent(slug: string): Promise<Project> {
	const client = getGraphQLClient()
	const result = await client.query<{ project: Project }>({
		query: gql`
			query Project($slug: String!) {
				project(where: { slug: $slug }) {
					title
					website
					repository
					tags
					cover {
						url
					}
					content {
						raw
					}
				}
			}
		`,
		variables: {
			slug,
		},
	})
	return result.data.project
}
