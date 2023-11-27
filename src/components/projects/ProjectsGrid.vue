<script>
import feather from 'feather-icons';
// import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects from '../../data/projects';

export default {
	components: { ProjectSingle },
	props: {
		onlyFeature: {
			require: false
		},
		onlyContribute: {
			require: false
		}
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
                return this.projects.filter(p => p.isFeature === true);
            }
            return this.projects;
        },
		contributeProjects() {
            if (this.onlyFeature) {
                return this.projects.filter(p => p.isContribute === true);
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
			<h6 
			class="font-general-regular
					text-center text-secondary-dark
					dark:text-cyan-300
					text-md
					sm:text-xl
					font-normal
					mb-8
				"
			>
				my works
			</h6>
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-5xl
					sm:text-5xl
					font-semibold
					mb-4
				"
			>
			Scalable ecosystem products
			</h3>
			<div
				class="
					flex
					justify-between
					pb-3
					gap-2
				"
			>
				<!-- <div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div> -->
				<!-- <ProjectsFilter @filter="selectedCategory = $event" /> -->
			</div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
	</section>
</template>

<style scoped></style>
