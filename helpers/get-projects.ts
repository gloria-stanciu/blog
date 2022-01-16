import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'
import { RichTextContent } from '@graphcms/rich-text-types'

export async function getProjects(): Promise<Project[]> {
	const client = getGraphQLClient()
	const result = await client.query<{ projects: Project[] }>({
		query: gql`
			query Pages {
				projects {
					title
					slug
					description
					website
					tags
					background {
						url
					}
				}
			}
		`,
	})
	return result.data.projects
}

export interface Project {
	title: string
	website: string
	repository: string
	description: string
	tags: string[]
	slug: string
	cover: Image
	background: Image
	content: Content
}

export interface Image {
	url: string
}

export interface Content {
	raw: RichTextContent
}
