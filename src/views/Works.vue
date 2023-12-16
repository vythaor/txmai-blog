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
	mounted() {
        window.addEventListener('resize', this.updateScreenSize);
    },
	computed: {
        contributeProjects() {
			return this.projects.filter((p) => p.isContribute === false);
        },
		nonContributeProjects() {
			return this.projects.filter((p) => p.isContribute === true);
        },
    },
	methods:{
        updateScreenSize() {
            this.isSmallScreen = window.innerWidth < 414;
        },
    }

};
</script>

<template>
	<div class="container mx-auto pb-20">
		<ProjectsGrid title="my work" category="Scalable ecosystem products" :projectList="contributeProjects" class="mb-20"/>
		<ProjectsGrid title="my work" category="Team contribution" :projectList="nonContributeProjects"/>
	</div>
</template>

<style scoped></style>
