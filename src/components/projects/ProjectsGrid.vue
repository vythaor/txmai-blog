<script>
import feather from 'feather-icons';
// import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
    components: { ProjectSingle },
    props: {
        onlyFeature: {
            require: false,
        },
        onlyContribute: {
            require: false,
        },
    },
    data: () => {
        return {
            projects,
            projectsHeading: 'Projects Portfolio',
            selectedCategory: '',
            searchProject: '',
        };
    },
    computed: {
        // Get the filtered projects
        filteredProjects() {
            if (this.onlyFeature) {
                return this.projects.filter((p) => p.isFeature === true);
            }
            return this.projects;
        },
        contributeProjects() {
            if (this.onlyFeature) {
                return this.projects.filter((p) => p.isContribute === true);
            }
            return this.projects;
        },
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <!-- Projects grid -->
    <section class>
        <!-- Projects grid title -->
        <!-- <div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div> -->

        <!-- Filter and search projects -->
        <div>
            <h6 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-8">my works</h6>
            <h3 class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-5xl sm:text-5xl font-semibold mb-4">
                Scalable ecosystem products
            </h3>
            <div class="flex justify-between pb-3 gap-2">
            </div>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 mb-20">
            <ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style scoped></style>
