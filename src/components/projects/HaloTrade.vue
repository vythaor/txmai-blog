<script>
import HaloCard from './HaloCard.vue';
import { FigmaIcon, Web3Icon } from '@/components/icons';

export default {
    name: 'HaloTradeProject',
    components: {
        HaloCard,
        FigmaIcon,
        Web3Icon,
    },
};
</script>

<template>
    <div>
        <div class="relative bg-[url('@/assets/images/halo/bg-1.png')] bg-cover h-0 pb-[calc(800/1440*100%)]">
            <div class="absolute inset-0 h-full">
                <div class="absolute top-0 left-0 z-99 p-24 w-full grid place-items-center">
                    <p
                        class="text-7xl bold font-jost text-transparent bg-clip-text text-gradient bg-gradient-to-r from-lime-500 to-emerald-500 before:content-['HALOTRADE'] before:opacity-40 before:text-5xl before:absolute before:top-8 before:left-0"
                    >
                        HALLOTRADE
                    </p>
                    <img src="@/assets/images/halo/s1-item1.png" class="absolute z-99 rounded-xl cursor-pointer mt-36" alt="bg" />
                    <img src="@/assets/images/halo/s1-item2.png" class="rounded-xl cursor-pointer mt-24" alt="bg" />
                </div>
            </div>
        </div>
        <div class="relative bg-[url('@/assets/images/halo/s2-shape.png')] bg-cover h-0 pb-[calc(372/1440*100%)]">
            <div class="absolute inset-0 h-full">
                <div class="p-24 flex">
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
                    <div class="pt-4">
                        <div class="flex gap-6">
                            <div class="flex items-center gap-4 pr-6 border-r border-neutral-500">
                                <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Stake</div>
                                <FigmaIcon />
                                <Web3Icon />
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Client</div>
                                <img src="@/assets/images/aurascan/aura-network.png" alt="Aura Network" />
                            </div>
                        </div>
                    </div>
                    <img class="absolute right-0 top-0" src="@/assets/images/halo/line-bottom.svg" alt="line" />
                    <img class="absolute left-0 bottom-0" src="@/assets/images/halo/line-top.svg" alt="line" />
                </div>
            </div>
            </div>
        </div>
        <div class="relative">
                <img src="@/assets/images/halo/eco.png" alt="" class="w-full" />
                <div class="absolute top-[12%] inset-0 mx-auto my-auto text-lime-400 text-5xl text-center font-semibold font-jost leading-10 tracking-widest before:content-['Aura_Ecosystem'] before:text-center before:absolute before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest">
                    Aura Ecosystem
                </div>
            </div>
        <!-- Responsibilities -->
        <div class="relative bg-[url('@/assets/images/halo/s3-shape.png')] bg-cover h-0 pb-[calc(1000/1440*100%)]">
            <div class="absolute inset-0 h-full">
                <div
                    class="p-28 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['My_responsibilities'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest"
                >
                    My responsibilities
                </div>
                <div class="flex items-start">
                    <img class="mt-24" src="@/assets/images/halo/s3-mascot.png" alt="Light Logo" />
                    <div class="grid grid-rows-3 grid-flow-col gap-10">
						<div class="flex gap-10 ml-24">
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
						</div>
						<div class="flex gap-10 ml-12">
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
						</div>
						<div class="flex gap-10">
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
        <div class="relative">
            <img src="@/assets/images/halo/s5-shape.png" />
            <div class="absolute top-[5%] left-[5%] sm:top-[5%] sm:left-[5%]">
                <div
                    class="p-16 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Outcomes'] before:p-16 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
                >
                    Outcomes
                </div>
                <div class="w-full flex justify-center gap-8 items-start">
                    <div class="flex flex-col gap-8">
                        <HaloCard
                            order="1"
                            title="Consistent User Experience"
                            desc="across the trading platform, enhancing usability and reducing cognitive load for users."
                        />
                        <HaloCard
                            order="2"
                            title="Improved trading experience"
                            desc="enabling users to execute trades quickly and easily across multiple tokenized assets."
                        />
                        <HaloCard
                            order="3"
                            title="Streamlined Development"
                            desc="supported faster development with a library of reusable components."
                        />
                    </div>
                    <div class="flex-1">
                        <video controls class="rounded-md shadow-md pr-[120px]">
                            <source src="@/assets/images/halo/video-halo-variables.mp4" type="video/mp4" />
                            Your browser does not support the video tag
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <!-- End outcome -->

        <!-- Product screen -->
        <div class="relative bg-[url('@/assets/images/halo/s6-shape.png')] bg-cover h-0 pb-[calc(965/1440*100%)]">
            <div class="absolute top-0 inset-0 h-full">
                <div
                    class="p-20 text-lime-400 text-5xl font-semibold font-jost leading-10 tracking-widest before:content-['Product_screens'] before:p-20 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
                >
                    Product screens
                </div>
                <div class="w-full flex justify-center items-center">
                    <img src="@/assets/images/halo/s6-screens.png" alt="item" />
                </div>
            </div>
        </div>
        <div class="relative bg-[url('@/assets/images/halo/s7-shape.png')] bg-cover h-0 pb-[calc(1250/1440*100%)]">
            <div class="absolute flex w-full items-center inset-0 h-full">
                <img src="@/assets/images/halo/s7-screens.png" alt="item" />
            </div>
			<div class="text-center flex flex-col w-2/5 absolute right-[108px] top-[250px]">
                    <div class="text-white text-7xl font-normal font-['Redig'] leading-10 tracking-tight">Visit our work</div>
                    <div class="text-white text-2xl font-normal font-['Inter'] leading-normal tracking-widest mt-4">
                        <a href="https://halotrade.zone" target="_blank" class="hover:text-lime-400">halotrade.zone </a>
                    </div>
                    <img
                        src="@/assets/images/halo/s7-desktop.png"
                        alt="item"
                        class="mt-10 ilter drop-shadow-xl"
                        style="filter: drop-shadow(-18px -11px 65px rgba(27, 36, 20, 0.64))"
                    />
                </div>
            <!-- End Product screen -->
        </div>

        <!-- Single project right section details -->
        <div class="flex justify-center py-24">
            <div class="w-full px-24">
                <div
                    class="pt-24 pb-20 bg-gradient-to-r from-lime-500 via-green-500 to-teal-600 rounded-3xl flex-col justify-center items-center gap-8"
                >
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div class="text-center text-black text-2xl font-normal leading-loose">
                            Interested in exploring how I build a scalable design system?
                        </div>
                        <div>
                            <span class="text-4xl">Read my article </span>
                            <span class="text-4xl bold">Building smart components</span>
                        </div>
                        <div class="h-12 px-6 py-2.5 bg-gray-900 rounded-xl justify-center items-center gap-4 inline-flex mt-8">
                            <div class="text-center text-brand text-2xl font-semibold leading-loose">Dive in Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
