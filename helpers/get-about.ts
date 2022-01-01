import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'

export async function getAbout(): Promise<About> {
	const client = getGraphQLClient()
	const result = await client.query({
		query: gql`
			query Data {
				general(where: { id: "ckxm5cxb4jk820b52m9urrk3o" }) {
					data
				}
			}
		`,
	})

	return result.data.general.data
}

export interface About {
	hero: Hero
	contact: Contact[]
	fullName: string
	signature: string
	interests: Interests
	softSkills: SoftSkills
	techSkills: TechSkills
	portfolio: Portfolio
	decorations: Decorations
}

export interface Contact {
	name: string
	url: string
}

export interface Decorations {
	cubeGrid: string
	branches: string
}

export interface Hero {
	bio: string
	image: string
	profession: string
}

export interface Interests {
	sectionTitle: string
	title: string
	hobbies: Hobby[]
}

export interface Hobby {
	name: string
	image: string
}

export interface Portfolio {
	sectionTitle: string
	name: string
}

export interface SoftSkills {
	sectionTitle: string
	title: string
	skills: Skill[]
}

export interface Skill {
	name: string
	image: string
	bgColor: string
}

export interface TechSkills {
	bio: string
	image: string
	title: string
	sectionTitle: string
}
