<script>
import feather from 'feather-icons';

export default {
    name: 'Home',
    data: () => {
        return {
            theme: '',
        };
    },
    created() {
        this.theme = localStorage.getItem('theme') || 'dark';
    },
    mounted() {
        feather.replace();
        this.theme = localStorage.getItem('theme') || 'dark';
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <section class="flex flex-col xl:justify-between items-center xl:flex-row mt-6 xl:mt-10">
        <!-- Banner left contents -->
        <div class="flex flex-col w-full text-left z-50">
            <div class="w-full font-semibold mt-8 xl:text-6xl text-[32px] text-left xl:text-left text-primary-light">
                Xin chào! 👋 I’m Mai,
                <div class="flex flex-row mt-4 font-semibold xl:text-6xl text-[32px] leading-none text-primary-light">
                    a &nbsp;
                    <span class="text-brand"> Product Designer </span>
                </div>
            </div>
            <div class="w-full xl:w-2/3 pt-6 text-white xl:text-base text-sm font-normal leading-snug">
                Allow me to introduce myself as a design generalist with a diverse skill set in various areas, including UX design, design operations,
                building scalable design systems, and developing MVPs from the ground up.
            </div>
            <div class="flex flex-col justify-center mt-16">
                <div class="font-normal text-base xl:text-2xl xl:text-2xl text-center xl:text-left leading-none text-neutral-200 mb-6">
                    Visit my cool stuff below
                </div>
                <!-- <a
					download="Stoman-Resume.pdf"
					href="/files/Stoman-Resume.pdf"
					class="flex justify-center items-center w-36 xl:w-48 mt-12 mb-6 xl:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 xl:py-3 rounded-lg focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				> 
				</a>-->
                <div class="flex flex-col xl:flex-row items-center">
                    <!-- Works -->
                    <router-link to="/works">
                        <div
                            class="flex justify-center items-center xl:w-48 w-48 xl:mb-0 text-lg bg-gradient-to-r from-blue-800 from-50% to-cyan-300 to-87% w-36 xl:w-48 mb-6 rounded-xl p-0.5 cursor-pointer hover:bg-cyan-300"
                        >
                            <div class="flex justify-center w-full bg-primary-dark text-white rounded-xl p-2.5">
                                <img src="@/assets/icons/work.svg" class="w-8" alt="Work icon" />
                                <span class="text-xl xl:text-2xl font-medium duration-100 ml-4">Works </span>
                            </div>
                        </div>
                    </router-link>
                    <!-- Blogs -->
                    <router-link to="/blogs">
                        <div
                            class="flex xl:ml-5 justify-center items-center xl:w-48 w-48 mb-6 xl:mb-0 text-lg bg-gray-900 shadow-[inset_0_1px_1px_0px_rgba(218,218,218,0.25)] py-2.5 xl:py-3 rounded-lg focus:ring-1 focus:ring-cyan-300 hover:bg-cyan-300 cursor-pointer text-white hover:text-white duration-500"
                        >
                            <img src="@/assets/icons/blogs.svg" class="w-8" alt="Blog icon" />
                            <span class="text-xl xl:text-2xl font-medium duration-10 ml-4">Blogs</span>
                        </div>
                    </router-link>
                    <!-- About me -->
                    <router-link to="/about">
                        <div
                            class="flex xl:ml-5 justify-center items-center xl:w-48 w-48 mb-6 xl:mb-0 text-lg bg-gray-900 shadow-[inset_0_1px_1px_0px_rgba(218,218,218,0.25)] py-2.5 xl:py-3 rounded-lg focus:ring-1 focus:ring-cyan-300 hover:bg-cyan-300 cursor-pointer text-white hover:text-white duration-500"
                        >
                            <img src="@/assets/icons/about.svg" class="w-8" alt="About icon" />
                            <span class="text-xl xl:text-2xl font-medium duration-100 ml-4">About me</span>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="justify-center mt-16 animate-bounce hidden xl:flex">
                <img src="@/assets/icons/arrow-down.svg" class="w-12" alt="Down icon" />
            </div>
        </div>

        <!-- Banner right illustration -->
        <!-- <div class="text-left right-0 absolute z-0">
            <img src="@/assets/images/triangle-right.svg" alt="Shape" class="absolute w-1/2 right-0 top-72 hover:motion-safe:animate-pulse z-0" />
            <img src="@/assets/images/grid.svg" alt="Shape" />
        </div>
        <div class="text-left float-left z-0">
            <img src="@/assets/images/triangle-left.svg" alt="Shape" class="absolute w-1/5 left-0 top-40 hover:motion-safe:animate-ping" />
        </div> -->
    </section>
</template>

<style scoped></style>
