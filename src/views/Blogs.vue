<script>
import BlogItem from '../components/blogs/BlogItem.vue';
import blogs from '../data/blogs';

export default {
    components: {
        BlogItem,
    },
    data: () => {
        return {
            blogs,
        };
    },
};
</script>

<template>
    <div class="px-4 px-4 md:px-[84px] xl:px-[168px] md:py-10 md:mt-10">
        <div>
            <h3 class="font-general-regular text-left text-ternary-light text-5xl xl:text-5xl font-semibold mb-4">
                Blogs
            </h3>
            <div class="flex justify-between pb-3 gap-2"></div>
        </div>
        <div class="grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 mt-6 xl:gap-10 pb-8">
            <BlogItem v-for="blog in blogs" :key="blog.id" :blog="blog" />
        </div>
    </div>
</template>
