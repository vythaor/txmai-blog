<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'dark';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'dark';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-6 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class=" flex flex-col w-full md:w-3/3 text-left">
			
			
			<div
					class="font-general-semibold mt-12 text-6xl md:text-6xl xl:text-6xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
			>
			Xin chào! 👋 I’m Mai, 
			<div class="flex flex-row mt-4">
				<div
					class="font-general-semibold mr-4 text-6xl sm:text-6xl  xl:text-6xl text-center sm:text-left leading-none text-ternary-dark dark:text-primary-light"
				>
				a
				</div>
				<div
					class="font-general-semibold  text-6xl sm:text-6xl  xl:text-6xl text-center sm:text-left leading-none text-cyan-200"
				>
				Product Designer
				</div>
			</div>
		</div>
			<div class="flex justify-center sm:block mt-16">
				<div
					class="font-general-semibold mr-4 text-2xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none text-slate-400"
				>
				Visit my cool stuff below
				</div>
				<!-- <a
					download="Stoman-Resume.pdf"
					href="/files/Stoman-Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				> 
				</a>-->
				<!-- <div class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border 
				py-2.5 sm:py-3 rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500">
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Works</span
				>
				</div> -->
				<div class="flex flex-row">
					<!-- Works -->
					<div class="flex-initial">
						<div class="flex justify-center items-center sm:w-42 mt-6 mb-6 sm:mb-0 text-lg 
						bg-gradient-to-r from-blue-500 to-cyan-500 w-36 sm:w-48 mt-12 mb-6 sm:mb-0 rounded-xl p-0.5">
							<div class="flex justify-center w-full bg-primary-dark text-white rounded-xl p-2">
								<i
									data-feather="arrow-down-circle"
									class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 mt-1"
								></i>
								<span
									class="text-2xl sm:text-2xl font-general-medium duration-100"
									>Works
							</span>
							</div>
						</div>
					</div>
					<!-- Blogs -->
					<div class="flex-initial ml-5">
						<div class="flex justify-center items-center sm:w-42 mt-6 mb-6 sm:mb-0 text-lg 
							bg-gradient-to-r from-blue-500 to-cyan-500 w-36 sm:w-48 mt-12 mb-6 sm:mb-0 rounded-xl p-0.5">
								<div class="flex justify-center w-full bg-primary-dark text-white rounded-xl p-2">
									<i
										data-feather="arrow-down-circle"
										class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 mt-1"
									></i>
									<span
										class="text-2xl sm:text-2xl font-general-medium duration-100"
										>Works
								</span>
								</div>
						</div>
					</div>
					<!-- About me -->
					<!-- Blogs -->
					<div class="flex-initial ml-5">
						<div class="flex justify-center items-center sm:w-42 mt-6 mb-6 sm:mb-0 text-lg 
							bg-gradient-to-r from-blue-500 to-cyan-500 w-36 sm:w-48 mt-12 mb-6 sm:mb-0 rounded-xl p-0.5">
								<div class="flex justify-center w-full bg-primary-dark text-white rounded-xl p-2">
									<i
										data-feather="arrow-down-circle"
										class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100 mt-1"
									></i>
									<span
										class="text-2xl sm:text-2xl font-general-medium duration-100"
										>About me
								</span>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Banner right illustration -->
		<!-- <div class="w-full md:w-2/3 text-right float-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/developer.svg"
				alt="Developer"
			/>
			<img
				v-else
				src="@/assets/images/developer-dark.svg"
				alt="Developer"
			/>
		</div> -->
	</section>
</template>

<style scoped></style>
