import { NextPage } from 'next'
import { ProjectCard } from '../../components/sections/projects'
import { Heading } from '../../components/ui'
import { getProjects, Project } from '../../helpers/get-projects'

const Projects: NextPage<{ projects: Project[] }> = ({ projects }) => {
	return (
		<main className='min-h-screen max-w-screen overflow-x-hidden bg-stone-50'>
			<div className='container mx-auto flex flex-col mt-32 space-y-8 lg:space-y-16'>
				<Heading title='Projects' color={'text-stone-800'} />
				<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-start lg:justify-items-center items-center place-content-stretch'>
					{projects.map((elem, index) => (
						<ProjectCard key={index} project={elem} />
					))}
				</div>
				<p>More coming soon...</p>
			</div>
		</main>
	)
}

export async function getStaticProps() {
	const projects = await getProjects()

	return {
		props: {
			projects,
		},
	}
}

export default Projects
