<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
	data: () => {
        return {
           projects,
        };
    },
	computed: {
        contributeProjects() {
			return this.projects.filter((p) => p.isContribute === true);
        },
		nonContributeProjects() {
			return this.projects.filter((p) => p.isContribute === false);
        },
    },

};
</script>

<template>
	<div class="container mx-auto pb-20">
		<ProjectsGrid title="my work" category="Scalable ecosystem products" :projectList="contributeProjects" class="mb-20"/>
		<ProjectsGrid title="my work" category="Team contribution" :projectList="nonContributeProjects"/>
	</div>
</template>

<style scoped></style>
