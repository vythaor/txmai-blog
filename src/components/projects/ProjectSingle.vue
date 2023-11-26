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
		<div class="flex flex-col">
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
			<div class="border-t border-t-2 border-primary-light px-4 py-6">
				<div class="flex justify-between items-center">
					<div class="flex items-center">
						<div class="text-sm text-ternary-dark dark:text-ternary-light">
							Stake
						</div>
						<img
							src="@/assets/icons/figma.svg"
							class="w-20 ml-4"
							alt="Light Logo"
							/>
						<img
							:src="project.skate"
							class="w-18 ml-4"
							alt="Light Logo"
							/>
					</div>
				</div>
			</div>
			<div class="border-t border-t-2 border-primary-light px-4 py-6">
				<div class="flex justify-between items-center">
					<div class="flex items-center">
						<div class="text-sm text-ternary-dark dark:text-ternary-light">
							Client
						</div>
						<img
							:src="project.client"
							class="w-24 ml-4"
							alt="Light Logo"
							/>
					</div>
					<div>
						<img
						src="@/assets/icons/arrow-right.svg"
						class="w-8"
						alt="Light Logo"/>
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
