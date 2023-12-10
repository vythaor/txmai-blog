<script>
export default {
    props: ['blog'],
};
</script>

<template>
    <router-link
        :to="{ name: 'blog', params: { id: blog.id } }"
        class="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
        aria-label="Blog item"
    >
        <div>
            <img :src="blog.img" :alt="blog.title" class="rounded-t-xl border-none" />
        </div>
        <div class="grid grid-rows-[min-content_1fr_min-content] gap-3 p-6 flex-1">
            <div class="text-left">
                <p class="font-general-semibold text-xl text-ternary-light font-semibold mb-2">
                    {{ blog.title }}
                </p>
            </div>
            <div>
                <span class="font-general-regular text-sm text-neutral-50">{{ blog.desc }}</span>
            </div>
            <div class="w-40 h-8 bg-[#082F49] rounded-lg border border-cyan-900 justify-center items-center gap-2 inline-flex">
                <img src="@/assets/images/blog/calendar.svg" alt="calendar" />
                <div class="text-center text-cyan-200 text-base font-semibold font-['Poppins'] leading-tight">Dec 12nd, 2023</div>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped></style>
