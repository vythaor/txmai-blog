
<script>
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import BlogHeader from '../components/blogs/BlogHeader.vue';
import BlogRelated from '../components/blogs/BlogRelated.vue';
import blogdetails from '../data/blogdetails';

export default {
    name: 'SingleBlog',
    components: {
    BlogHeader,
    BlogRelated
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
    <div class="container mx-auto pb-20">
        <BlogHeader :blog="blogDetail"/>
        <!-- Blog Detail -->
        <component :is="component"></component>
        <!-- Blog related projects -->
        <BlogRelated :relatedBlog="blogDetail.relatedBlog"/>
    </div>
</template>

<style scoped></style>
