<script>
export default {
    props: {
        project: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<template>
    <div>
        <!-- Project heading and meta info -->
        <div class="text-center text-sm sm:text-4xl text-primary-dark dark:text-primary-light my-6 sm:my-20">
            <div class="font-general-regular text-center text-secondary-dark dark:text-neutral-50 text-md sm:text-xl font-n italic mb-2 sm:mb-8">
                {{ project.name }}
            </div>
            <div class="self-stretch text-center text-white text-xl sm:text-5xl font-semibold leading-[25px] sm:leading-[72px]" v-html="project.title"></div>
        </div>
    </div>
</template>
