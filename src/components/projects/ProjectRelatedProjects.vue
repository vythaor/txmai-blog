<script>
export default {
    props: {
        type: Array,
        default: () => [],
    },
};
</script>

<template>
    <div
        class="px-[168px] py-[80px] border-t-2 border-primary-light dark:border-secondary-dark"
    >
        <p class="text-brand italic">my works</p>
        <p class="text-primary-light mt-4 text-5xl font-semibold leading-10">
            Other projects
        </p>
        <div class="mt-6">
            <div
                class="py-6 border-t border-neutral-500 border-dashed justify-between items-center inline-flex"
            >
                <div
                    class="w-80 flex-col justify-start items-start gap-2.5 inline-flex"
                >
                    <div
                        class="self-stretch text-white text-xl font-semibold leading-normal"
                    >
                        Bidding/Pilot projects
                    </div>
                    <div
                        class="self-stretch text-neutral-50 text-sm font-normal leading-none tracking-tight"
                    >
                        Holistic Design for digital products in the right time
                        description
                    </div>
                </div>
                <div class="justify-start items-center gap-6 flex">
                    <div
                        class="text-neutral-200 text-sm font-normal leading-none tracking-tight"
                    >
                        Stake
                    </div>
                    <div class="justify-start items-center gap-4 flex">
                        <div class="justify-start items-center gap-1 flex">
                            <img
                                class="w-8 h-8"
                                src="https://via.placeholder.com/32x34"
                            />
                            <div
                                class="text-neutral-200 text-xs font-semibold font-['Inter'] leading-none"
                            >
                                Figma
                            </div>
                        </div>
                        <div
                            class="w-16 h-7 rounded justify-center items-center flex"
                        >
                            <img
                                class="w-20 h-7"
                                src="https://via.placeholder.com/79x30"
                            />
                        </div>
                    </div>
                </div>
                <div class="justify-start items-center gap-6 flex">
                    <div
                        class="text-neutral-200 text-sm font-normal leading-none tracking-tight"
                    >
                        Client
                    </div>
                    <div
                        class="w-24 p-2 bg-white rounded border border-neutral-300 justify-center items-center flex"
                    >
                        <img
                            class="w-6 h-7"
                            src="https://via.placeholder.com/26x27"
                        />
                        <img
                            class="w-12 h-5"
                            src="https://via.placeholder.com/51x21"
                        />
                    </div>
                </div>
                <div
                    class="shadow shadow-inner flex-col justify-center items-center gap-2.5 inline-flex"
                >
                    <div
                        class="h-10 px-4 py-2.5 bg-gray-900 rounded-xl justify-center items-center gap-4 inline-flex"
                    >
                        <div
                            class="text-center text-cyan-200 text-xl font-semibold leading-normal"
                        >
                            View
                        </div>
                        <div class="w-6 h-6 relative"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
