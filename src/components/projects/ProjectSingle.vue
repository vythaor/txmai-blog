<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
		to="/projects/single-project"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div>
			<img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/>
		</div>
		<div class="text-left px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.title }}
			</p>
			<span
				class="font-general-regular text-sm text-ternary-dark dark:text-ternary-light"
				>{{ project.category }}</span
			>
		</div>
		<div class="border-b border-primary-light">
			<div class="flex">
				<div class="text-sm text-ternary-dark dark:text-ternary-light">
					Skate
				</div>
				<div>
					Figma
				</div>
			</div>
		</div>
		<div class="border-b border-primary-light">
			<div class="flex">
				<div class="text-sm text-ternary-dark dark:text-ternary-light">
					Skate
				</div>
				<div>
					Figma
				</div>
			</div>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
