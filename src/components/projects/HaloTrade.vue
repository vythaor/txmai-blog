<script>
import HaloCard from './HaloCard.vue';
export default {
    name: 'HaloTradeProject',
    components: {
        HaloCard,
    },
};
</script>

<template>
    <div class="mt-14 bg-neutral-950">
        <div class="bg-[url('@/assets/images/halo/bg-1.png')] bg-auto bg-center h-screen">
            <div class="relative p-24 grid place-items-center">
                <p
                    class="text-7xl bold font-jost text-transparent bg-clip-text text-gradient bg-gradient-to-r from-lime-500 to-emerald-500 before:content-['HALOTRADE'] before:opacity-40 before:text-5xl before:absolute before:top-8 before:left-0"
                >
                    HALLOTRADE
                </p>
                <img src="@/assets/images/halo/s1-item1.png" class="absolute z-99 rounded-xl cursor-pointer mt-36" alt="bg" />
                <img src="@/assets/images/halo/s1-item2.png" class="rounded-xl cursor-pointer mt-24" alt="bg" />
            </div>
        </div>
        <div class="bg-[url('@/assets/images/halo/s2-shape.png')] bg-cover bg-no-repeat">
            <div class="mx-auto flex px-[138px] py-[67px]">
                <div class="relative w-1/2 flex flex-col place-items-center">
                    <img src="@/assets/images/halo/s2-mascot.png" class="rounded-xl cursor-pointer" alt="bg" />
                    <div
                        class="text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Introduction'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
                    >
                        Introduction
                    </div>
                </div>
                <div
                    style="
                        background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%);
                        backdrop-filter: blur(6px);
                        border-radius: var(--border-radius-large, 16px);
                    "
                    class="flex flex-col px-10 w-1/2 p-10 rounded-2xl"
                >
                    <div class="text-left font-jost">
                        <span class="text-stone-200 text-xl font-semibold leading-9">HaloTrade</span>
                        <span class="text-stone-200 text-xl font-normal leading-9"></span>
                        <span class="text-zinc-400 text-xl font-normal leading-9">
                            is DeFi Trading Platform on the Aura Network blockchain. The goal of this project is to deliver a scalable Design System
                            for DeFi Trading Platform</span
                        >
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div class="text-white text-xs font-semibold uppercase leading-none">stake</div>
                        <div class="flex items-center text-neutral-200 text-xs font-semibold leading-none">
                            <img src="@/assets/icons/figma.svg" class="ml-4" alt="Light Logo" />
                            <span class="ml-1">Figma</span>
                        </div>
                        <img src="@/assets/icons/web3.svg" class="w-18 ml-4" alt="Light Logo" />
                        <div class="h-8 border border-neutral-500"></div>
                        <div class="text-white text-xs font-semibold uppercase leading-none">Client</div>
                        <img src="@/assets/icons/aura.svg" class="w-24 ml-4" alt="Light Logo" />
                    </div>
                    <img class="absolute right-0 top-0" src="@/assets/images/halo/line-bottom.svg" alt="line" />
                    <img class="absolute left-0 bottom-0" src="@/assets/images/halo/line-top.svg" alt="line" />
                </div>
            </div>
            <div
                class="mt-16 text-lime-400 text-5xl text-center font-semibold font-jost leading-10 tracking-widest before:content-['Aura_Ecosystem'] before:text-center before:absolute before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                Aura Ecosystem
            </div>
            <div class="mt-12 flex flex-col justify-around items-center">
                <div>
                    <img src="@/assets/images/halo/s2-eco-1.png" alt="item" class="wiggle" />
                </div>
                <div class="flex flex-row justify-between items-center gap-32 p-24">
                    <img src="@/assets/images/halo/s2-eco-2.png" alt="item" class="w-[84px] h-[84px]" />
                    <img src="@/assets/images/halo/s2-eco-3.png" alt="item" />
                    <img src="@/assets/images/halo/s2-eco-4.png" alt="item" />
                    <img src="@/assets/images/halo/s2-eco-5.png" alt="item" class="w-[84px] h-[84px]" />
                </div>
                <div class="flex flex-row gap-[32em]">
                    <img src="@/assets/images/halo/s2-eco-6.png" alt="item" />
                    <img src="@/assets/images/halo/s2-eco-7.png" alt="item" />
                </div>
            </div>
        </div>
        <!-- Responsibilities -->
        <div class="bg-[url('@/assets/images/halo/s3-shape.png')] bg-cover bg-no-repeat">
            <div
                class="p-28 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['My_responsibilities'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                My responsibilities
            </div>
            <div class="relative">
                <img class="absolute left-0" src="@/assets/images/halo/s3-mascot.png" alt="Light Logo" />
                <div class="grid grid-cols-2 gap-10">
                    <HaloCard
                        order="1"
                        title="Design planning & review"
                        desc="Defined timelines. Provided guidance to junior designers, and fostered a collaborative and creative work environment."
                    />
                    <HaloCard
                        order="2"
                        title="Research and Analysis"
                        desc="Explored best practices for scalability, modularity, and usability in design systems."
                    />
                    <HaloCard
                        order="3"
                        title="Research and Analysis"
                        desc="Explored best practices for scalability, modularity, and usability in design systems."
                    />
                    <HaloCard
                        order="4"
                        title="Research and Analysis"
                        desc="Explored best practices for scalability, modularity, and usability in design systems."
                    />
                    <HaloCard
                        order="5"
                        title="Research and Analysis"
                        desc="Explored best practices for scalability, modularity, and usability in design systems."
                    />
                    <HaloCard
                        order="6"
                        title="Research and Analysis"
                        desc="Explored best practices for scalability, modularity, and usability in design systems."
                    />
                </div>
            </div>
        </div>
        <!-- End Responsibilities -->

        <!-- Design Process -->
        <div
            class="p-28 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Design_process'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
        >
            Design process
        </div>
        <img src="@/assets/images/halo/s4-process.png" alt="item" />
        <!-- End Design Process -->

        <!-- Outcome -->
        <div class="bg-[url('@/assets/images/halo/s5-shape.png')] bg-cover bg-no-repeat">
            <div
                class="p-28 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Outcomes'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                Outcomes
            </div>
            <div class="flex justify-center gap-8">
                <HaloCard
                    order="1"
                    title="Consistent User Experience"
                    desc="across the trading platform, enhancing usability and reducing cognitive load for users."
                />
                <video controls class="w-1/2 rounded-md shadow-md">
                    <source src="@/assets/images/halo/video-halo-variables.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
        </div>
        <!-- End outcome -->

        <!-- Product screen -->
        <div class="bg-[url('@/assets/images/halo/s6-shape.png')] bg-no-repeat">
            <div
                class="p-28 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Product_screens'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                Product screens
            </div>
            <div class="flex justify-center">
                <img src="@/assets/images/halo/s6-screens.png" alt="item" />
            </div>
        </div>
        <div class="bg-[url('@/assets/images/halo/s7-shape.png')] bg-no-repeat p-40">
            <div class="flex">
                <img src="@/assets/images/halo/s7-screens.png" alt="item" />
                <div class="absolute right-0">
                    <div class="text-white text-7xl font-normal font-['Redig'] leading-10 tracking-tight">Visit our work</div>
                    <div class="text-white text-2xl font-normal font-['Inter'] leading-normal tracking-widest">halotrade.zone</div>
                    <img src="@/assets/images/halo/s7-desktop.png" alt="item" />
                </div>
            </div>
            <!-- End Product screen -->
        </div>

        <!-- Single project right section details -->
        <div class="flex justify-center">
            <div class="w-full px-24">
                <div
                    class="pt-24 pb-20 bg-gradient-to-r from-lime-500 via-green-500 to-teal-600 rounded-3xl flex-col justify-center items-center gap-8"
                >
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div class="text-center text-black text-2xl font-normal font-['Poppins'] leading-loose">
                            Interested in exploring how I build a scalable design system?
                        </div>
                        <div>
                            <span class="text-4xl">Read my article </span>
                            <span class="text-4xl bold">Building smart components</span>
                        </div>
                        <div class="h-12 px-6 py-2.5 bg-gray-900 rounded-xl justify-center items-center gap-4 inline-flex">
                            <div class="text-center text-brand text-2xl font-semibold font-['Poppins'] leading-loose">Dive in Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
