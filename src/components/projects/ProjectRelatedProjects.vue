<script>
export default {
    props: {
        type: Array,
        default: () => [],
    },
};
</script>

<template>
    <div class="px-[168px] py-[80px] border-t-2 border-primary-light dark:border-secondary-dark">
        <p class="text-brand italic">my works</p>
        <p class="text-primary-light mt-4 text-5xl font-semibold leading-10">Other projects</p>
        <div class="mt-6">
            <div
                v-for="i in 2"
                :key="i"
                class="py-6 border-t border-neutral-500 border-dashed justify-between items-center flex gap-2"
            >
                <div class="flex-col justify-start items-start gap-2.5 inline-flex max-w-xs 2xl:max-w-lg">
                    <div class="self-stretch text-white text-xl font-semibold leading-normal">Bidding/Pilot projects</div>
                    <div class="self-stretch text-neutral-50 text-sm font-normal leading-none tracking-tight">
                        Holistic Design for digital products in the right time description
                    </div>
                </div>
                <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight flex items-center">
                    <span class="mr-6">Stake</span>
                    <div class="justify-start items-center gap-4 flex">
                        <img class="h-[30px] max-w-fit" src="@/assets/icons/figma.svg" />
                        <img class="h-[30px] max-w-fit" src="@/assets/icons/web3.svg" />
                    </div>
                </div>
                <div class="justify-start items-center flex">
                    <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight mr-6">Client</div>
                    <div class="w-24 p-2 bg-white rounded border border-neutral-300 justify-center items-center flex">
                        <img class="h-[30px] max-w-fit" src="@/assets/icons/aura.svg" />
                    </div>
                </div>
                <div class="bg-gray-900 rounded-xl shadow-inner shadow-brand/50 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div class="h-10 px-4 py-2.5  justify-center items-center gap-4 inline-flex">
                        <div class="text-center text-brand text-xl font-semibold leading-normal flex justify-between gap-4 cursor-pointer">
                            View
                            <img class="h-[30px] max-w-fit" src="@/assets/icons/arrow-right.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
