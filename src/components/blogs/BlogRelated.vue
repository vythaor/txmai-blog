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
    <div class="pt-[80px] mt-[-4px]">
        <p class="text-white italic">my blogs</p>
        <p class="text-primary-light mt-4 text-5xl font-semibold leading-10">Other blogs</p>
        <div class="mt-6">
            <div v-for="i in 2" :key="i" class="py-6 border-t border-neutral-500 border-dashed items-center flex">
                <img class="max-w-fit" src="@/assets/icons/arrow-right.svg" />
                <div class="ml-4 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div class="self-stretch text-white text-xl font-semibold leading-normal">Building smart components in Figma </div>
                    <div class="self-stretch text-neutral-50 text-sm font-normal leading-none tracking-tight">
                        #Design System #Figma components
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
