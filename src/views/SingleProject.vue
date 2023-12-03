<script>
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projectdetails from '../data/projectdetails';

export default {
    name: 'SingleProject',
    components: {
        ProjectHeader,
        ProjectRelatedProjects,
    },
    data: () => ({
        component: null,
    }), 
    computed: {
        projectDetail() {
             return projectdetails.find((p) => p.id == this.$route.params.id) || {};
        },
    },
    methods: {
        getComponent() {
            return this.projectDetail?.component?.then((module) => (this.component = module.default));
        },
    },
    mounted() {
        this.getComponent();
    },
};
</script>

<template>
    <div class="">
        <!-- Project header -->
        <ProjectHeader :project="projectDetail" />

        <!-- Project Detail -->
        <component :is="component"></component>
        <!-- Project related projects -->
        <ProjectRelatedProjects :relatedProject="projectDetail.relatedProject" />
    </div>
</template>

<style scoped></style>
