import { gql } from '@apollo/client'
import { getGraphQLClient } from './apollo-client'

export async function getAbout(): Promise<About> {
	const client = getGraphQLClient()
	const result = await client.query({
		query: gql`
			query About {
				generals(where: { name: "about" }) {
					data
				}
			}
		`,
	})

	return result.data.generals[0].data
}

export interface About {
	cv: string
	hero: Hero
	contact: Contact[]
	fullName: string
	interests: Interests
	portfolio: Portfolio
	signature: string
	softSkills: SoftSkills
	techSkills: TechSkills
	decorations: Decorations
}

export interface Contact {
	logo: string
	url: string
	name: string
}

export interface Decorations {
	cubeGrid: string
}

export interface Hero {
	bio: string
	image: string
	profession: string
}

export interface Interests {
	title: string
	hobbies: Hobby[]
	sectionTitle: string
}

export interface Hobby {
	name: string
	image: string
}

export interface Portfolio {
	name: string
	sectionTitle: string
}

export interface SoftSkills {
	title: string
	skills: Skill[]
	sectionTitle: string
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
