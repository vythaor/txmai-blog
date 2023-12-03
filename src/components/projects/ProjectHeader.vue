<script>
export default {
    props: {
        singleProjectHeader: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<template>
    <div>
        <!-- Project heading and meta info -->
        <div class="font-general-medium text-center text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
            <div class="font-general-regular text-center text-secondary-dark dark:text-cyan-300 text-md sm:text-xl font-n italic mb-8">
                {{ singleProjectHeader.singleProjectTitle }}
            </div>
            {{ singleProjectHeader.singleProjectName }}
        </div>
        <!-- <div class="flex">
			<div class="flex items-center mr-10">
				<i
					data-feather="clock"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ singleProjectHeader.singleProjectDate }}</span
				>
			</div>
			<div class="flex items-center">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ singleProjectHeader.singleProjectTag }}</span
				>
			</div>
		</div> -->
    </div>
</template>
