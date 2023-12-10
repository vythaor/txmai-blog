
<script>
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import blogdetails from '../data/blogdetails';

export default {
    name: 'SingleBlog',
    components: {
        // ProjectRelatedProjects,
    },
    data: () => ({
        component: null,
    }), 
    computed: {
        blogDetail() {
             return blogdetails.find((p) => p.id == this.$route.params.id) || {};
        },
    },
    methods: {
        getComponent() {
            return this.blogDetail?.component?.then((module) => (this.component = module.default));
        },
    },
    mounted() {
        this.getComponent();
    },
};
</script>

<template>
    <div class="">

        <!-- Project Detail -->
        <component :is="component"></component>
        <!-- Project related projects -->
        <!-- <ProjectRelatedProjects :relatedProject="projectDetail.relatedProject" /> -->
    </div>
</template>

<style scoped></style>
