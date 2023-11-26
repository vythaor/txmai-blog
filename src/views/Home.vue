<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center items-center">
			<router-link
				to="/works"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300 hover:text-cyan-300"
				aria-label="More Projects"
			>
				<Button title="Browse more works" class="font-general-italic underline"/>
				<img
						src="@/assets/icons/arrow-right.svg"
						class="w-8 ml-4"
						alt="Arrow Right icon"
					/>	
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
