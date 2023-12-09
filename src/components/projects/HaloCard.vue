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
    },
};
</script>

<template>
    <div>
        <div
            class="w-[406px] h-full p-6 flex items-start rounded-2xl backdrop-blur-2xl justify-start gap-5 font-jost"
            style="background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%); backdrop-filter: blur(6px)"
        >
            <div class="relative">
                <div class="text-lime-400 text-3xl font-semibold leading-loose">{{ order }}</div>
            </div>
            <div>
                <div class="self-stretch text-stone-200 text-lg font-semibold leading-loose">{{ title }}</div>
                <div class="self-stretch text-zinc-400 text-lg font-normal leading-7">
                    {{ desc }}
                </div>
            </div>
            <img class="absolute left-0 top-0" src="@/assets/images/halo/line-top.svg" alt="line" />
            <img class="absolute right-0 bottom-0" src="@/assets/images/halo/line-bottom.svg" alt="line" />
        </div>
    </div>
</template>
