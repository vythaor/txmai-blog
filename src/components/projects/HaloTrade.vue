<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="mt-14 bg-#060606">
		<!-- Single project left section details -->
		<div class="w-full text-left">
            <!-- <img
                src="@/assets/images/halo/bg-1.png"
				class="rounded-xl cursor-pointer"
				alt="bg"
			/> -->
		</div>
		<div class="bg-[url('@/assets/images/halo/bg-1.png')]">
			<div class="p-24 grid place-items-center">
				<p class="text-7xl bold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-lime-500 to-emerald-500">
					HALLOTRADE
				</p>
				<img
					src="@/assets/images/halo/s1-item1.png"
					class="rounded-xl cursor-pointer w-1/3 mt-12"
					alt="bg"
				/>
			</div>
		</div>
		<div class="w-full flex">
			<div class="relative flex-1 w-1/2 flex justify-center place-items-center">
				<img
					src="@/assets/images/halo/s2-mascot.png"
					class="rounded-xl cursor-pointer"
					alt="bg"
				/>
				<img
					src="@/assets/images/halo/s2-fireflies.png"
					class="rounded-xl cursor-pointer absolute top-0 left-0"
					alt="bg"
				/>
			</div>
			<div class="p-24 flex-2 w-1/2" style="border: 2px solid linear-gradient(to right, #ff5733, #00ff00)">
				<p class="text-white">
					HaloTrade is  DeFi Trading Platform on the Aura Network blockchain. The goal of this project is to deliver a scalable Design System for DeFi Trading Platform
				</p>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
		
		</div>
	</div>
</template>
