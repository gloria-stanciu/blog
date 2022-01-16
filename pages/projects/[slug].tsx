import type { NextPage } from 'next'
import React from 'react'
import { ExternalLink, Heading, ImageModal, Tag } from '../../components/ui'
import { getProjectContent } from '../../helpers/get-project-content'
import { Project } from '../../helpers/get-projects'
import { RichText } from '@graphcms/rich-text-react-renderer'
import { getProjectsSlugs } from '../../helpers/get-projects-slugs'

const CityRide: NextPage<{ project: Project }> = ({ project }) => {
	return (
		<div className='bg-stone-50 pb-4'>
			<div className='container mx-auto max-w-2xl flex flex-col pt-20 space-y-4'>
				<img
					alt=''
					aria-hidden
					src={project.cover.url}
					className='w-full aspect-video object-cover rounded-xl shadow-lg  mb-2 sm:mb-5 md:mb-10'
				/>
				<Heading title={project.title} color='text-stone-800' />
				<div className='flex flex-row justify-start space-x-8'>
					<ExternalLink title='Website' url={project.website} newTab={true} />
					<ExternalLink
						title='Repository'
						url={project.repository}
						newTab={true}
					/>
				</div>
				<div className='flex flex-wrap flex-row justify-start gap-2 pt-4 pb-8'>
					{project.tags.map((elem, index) =>
						elem.includes('_') ? (
							<Tag key={index}>{elem.replace('_', ' ')}</Tag>
						) : (
							<Tag key={index}>{elem}</Tag>
						)
					)}
				</div>
			</div>
			<article className='container mx-auto prose prose-stone max-w-2xl'>
				<RichText
					content={project.content.raw}
					renderers={{
						h1: ({ children }) => <h1 className='font-normal '>{children}</h1>,
						h2: ({ children }) => <h2 className='font-medium'>{children}</h2>,
						h3: ({ children }) => <h3 className='font-medium'>{children}</h3>,
						img: ({ src }) => <ImageModal src={src} />,
						italic: ({ children }) => <i className='font-medium'>{children}</i>,
						a: ({ children }) => (
							<a className='no-underline hover:underline hover:underline-offset-2 cursor-pointer'>
								{children}
							</a>
						),
						bold: ({ children }) => (
							<strong className='font-semibold'>{children}</strong>
						),
					}}
				/>
			</article>
		</div>
	)
}

export async function getStaticPaths() {
	const slugs = await getProjectsSlugs()

	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }: { params: any }) {
	const project = await getProjectContent(params.slug)

	return {
		props: {
			project,
		},
	}
}

export default CityRide
