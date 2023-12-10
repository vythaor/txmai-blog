<script>
import ProjectSingle from './ProjectSingle.vue';

export default {
    components: { ProjectSingle },
    props: {
        title: {
            type: String,
        },
        category: {
            type: String,
        },
        projectList: {
            type: Array,
        }
    }
};
</script>

<template>
    <!-- Projects grid -->
    <section class="">
        <div>
            <h6 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-8"> {{ title }}</h6>
            <h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-5xl sm:text-5xl font-semibold mb-4">
                {{category}}
            </h3>
            <div class="flex justify-between pb-3 gap-2">
            </div>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 mb-4">
            <ProjectSingle v-for="project in projectList" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style scoped></style>
