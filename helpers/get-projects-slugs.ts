import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'
import { Project } from './get-projects'

export async function getProjectsSlugs(): Promise<string[]> {
	const client = getGraphQLClient()
	const result = await client.query<{ projects: Pick<Project, 'slug'>[] }>({
		query: gql`
			query Projects {
				projects {
					slug
				}
			}
		`,
	})
	return result.data.projects.map((elem) => elem.slug)
}
