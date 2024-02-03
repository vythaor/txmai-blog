<script>
export default {
    props: {
        blog: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>
<template>
    <div>
        <img class="relative rounded-2xl" src="@/assets/images/blog/blog-1/banner.png" />
        <div class="text-center text-3xl xl:text-4xl text-primary-dark dark:text-primary-light mt-14 xl:mt-20 mb-20">
            <div class="font-general-regular text-center text-secondary-dark dark:text-neutral-50 text-md xl:text-xl font-n italic mb-8">
               my blog
            </div>
            <div class="px-[170px] self-stretch text-center text-white text-5xl font-semibold leading-[72px]" v-html="blog.title"></div>
            <div class="w-40 h-8 bg-[#082F49] rounded-lg border border-cyan-900 justify-center items-center gap-2 inline-flex">
                <img src="@/assets/images/blog/calendar.svg" alt="calendar" />
                <div class="text-center text-cyan-200 text-base font-semibold font-['Poppins'] leading-tight">{{ blog.time }}</div>
            </div>
        </div>
    </div>
</template>