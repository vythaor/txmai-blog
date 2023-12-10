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
        <div class="mx-[200px] text-center text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
            <div class="font-general-regular text-center text-secondary-dark dark:text-neutral-50 text-md sm:text-xl font-n italic mb-8">
                {{ project.name }}
            </div>
            <div class="self-stretch text-center text-white text-5xl font-semibold leading-[72px]" v-html="project.title"></div>
        </div>
    </div>
</template>
