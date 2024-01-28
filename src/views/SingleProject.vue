<script>
import { usePiniaStore } from '@/stores/piniaStore';

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
        isSmallScreen() {
            const piniaStore = usePiniaStore();
            return piniaStore.isSmallScreen;
        },
    },
    methods: {
        getComponent() {
            const component = this.isSmallScreen ? 'componentMobile' : 'component';
            return this.projectDetail?.[component]?.then((module) => (this.component = module.default));
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
    </div>
</template>

<style scoped></style>
