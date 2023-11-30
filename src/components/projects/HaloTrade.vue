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
	<div class="mt-14">
		<!-- Single project left section details -->
		<div class="w-full text-left">
            <img
                src="@/assets/images/halo/bg-1.png"
				class="rounded-xl cursor-pointer"
				alt="bg"
			/>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
		
		</div>
	</div>
</template>
