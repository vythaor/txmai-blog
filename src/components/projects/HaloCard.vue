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
        class="p-6 items-start rounded-2xl backdrop-blur-2xl justify-start font-jost"
        style="background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%); backdrop-filter: blur(6px)"
    >
        <div class="grid grid-cols-[min-content_auto]" @click="toggle">
            <div class="items-center mx-4 text-lime-400 text-3xl font-semibold leading-loose">{{ order }}</div>
            <div class="flex justify-between items-center text-stone-200 text-lg font-semibold leading-loose">
                <span class="mr-2">{{ title }}</span>
                <div
                    v-if="accordian"
                    class="w-3 h-3 border-l-0 border-b-0 border-t-[3px] border-r-[3px] transform transition-all"
                    :class="{
                        'rotate-[-45deg] mt-2': isOpen,
                        'rotate-[135deg] -mt-1': !isOpen,
                    }"
                ></div>
            </div>
        </div>

        <div
            class="grid grid-cols-[min-content_auto] transition-[grid-template-rows] duration-300 ease-out"
            :class="{ 'grid-rows-[0fr]': accordian && !isOpen, 'grid-rows-[1fr]': accordian && isOpen }"
        >
            <div class="opacity-0 h-0 items-center mx-4 text-lime-400 text-3xl font-semibold leading-loose">{{ order }}</div>

            <div class="text-zinc-400 text-lg font-normal leading-7 overflow-hidden">
                <div>{{ desc }}</div>
            </div>
        </div>
        <img class="absolute left-0 top-0" src="@/assets/images/halo/line-top.svg" alt="line" />
        <img class="absolute right-0 bottom-0" src="@/assets/images/halo/line-bottom.svg" alt="line" />
    </div>
</template>
