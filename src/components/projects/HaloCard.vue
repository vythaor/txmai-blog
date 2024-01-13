<script>
export default {
    name: 'HaloCard',
    props: {
        order: {
            type: String,
        },
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        accordian: {
            type: Boolean,
            default: false,
        },
    },
    data: () => ({
        isOpen: false,
    }),
    methods: {
        toggle() {
            if (!this.accordian) return;

            this.isOpen = !this.isOpen;
        },
    },
};
</script>

<template>
    <div
        class="h-full p-6 flex items-start rounded-2xl backdrop-blur-2xl justify-start gap-5 font-jost"
        style="background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%); backdrop-filter: blur(6px)"
    >
        <div class="w-full grid grid-cols-[min-content_auto] grid-rows-[auto] overflow-hidden transition-[height] duration-[0.5s] ease-linear">
            <div class="flex items-center mx-4 text-lime-400 text-3xl font-semibold leading-loose">{{ order }}</div>
            <div class="flex justify-between items-center text-stone-200 text-lg font-semibold leading-loose">
                {{ title }}
                <span class="p-4 cursor-pointer text-3xl" @click="toggle">{{ isOpen ? '-' : '+' }}</span>
            </div>
            <div class="transition-[height] duration-[0.5s] ease-linear" :class="{ 'h-0': !isOpen }"></div>
            <div class="text-zinc-400 text-lg font-normal leading-7 transition-[height] duration-[0.5s] ease-linear" :class="{ 'h-0': !isOpen }">
                {{ desc }}
            </div>
        </div>

        <!-- <div class="relative">
            <div class="text-lime-400 text-3xl font-semibold leading-loose">{{ order }}</div>
        </div>
        <div class="w-full">
            <div class="flex justify-between items-center text-stone-200 text-lg font-semibold leading-loose">
                {{ title }}
                <span class="cursor-pointer text-3xl" @click="toggle">+</span>
            </div>
            <div class="text-zinc-400 text-lg font-normal leading-7" :class="{ 'hidden': !isOpen }">
                {{ desc }}
            </div>
        </div> -->
        <img class="absolute left-0 top-0" src="@/assets/images/halo/line-top.svg" alt="line" />
        <img class="absolute right-0 bottom-0" src="@/assets/images/halo/line-bottom.svg" alt="line" />
    </div>
</template>
