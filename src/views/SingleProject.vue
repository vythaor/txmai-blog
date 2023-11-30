<script>
import feather from 'feather-icons';
import HaloTrade from '../components/projects/HaloTrade.vue';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
// import ProjectGallery from '../components/projects/ProjectGallery.vue';
// import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectdetails from '../data/projectdetails'

export default {
	name: 'Projects',
	components: {
    ProjectHeader,
    // ProjectGallery,
    // ProjectInfo,
    ProjectRelatedProjects,
    HaloTrade
},
	computed: {
		getProjectDetails() {
			return projectdetails.find(p => p.id == this.$route.params.id)
		}
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="getProjectDetails.singleProjectHeader" />

		<!-- Project gallery -->
		<!-- <ProjectGallery :projectImages="projectImages" /> -->

		<!-- Project information -->
		<!-- <ProjectInfo :projectInfo="projectInfo" /> -->
		<HaloTrade/>

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="getProjectDetails.relatedProject" />
	</div>
</template>

<style scoped></style>
