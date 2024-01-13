<script>
/* eslint-disable vue/no-unused-components */
import { Swiper, SwiperSlide } from 'swiper/vue';
import HaloCard from '@/components/projects/HaloCard.vue';
import { FigmaIcon, Web3Icon } from '@/components/icons';

import 'swiper/css';

export default {
    name: 'HaloTradeProject',
    components: {
        Swiper,
        SwiperSlide,
        HaloCard,
        FigmaIcon,
        Web3Icon,
    },
};
</script>

<template>
    <div>
        <!-- Section 1 -->
        <div class="relative bg-[url('@/assets/images/halo/mobile/bg-1.png')] bg-cover h-0 pb-[calc(914/563*100%)]">
            <div class="absolute inset-0 h-full">
                <div
                    class="relative text-center mt-20 text-[32px] font-bold font-jost text-transparent bg-clip-text bg-gradient-to-r z-[999] from-lime-500 to-emerald-500"
                >
                    HALLOTRADE
                </div>

                <div class="mt-10 mx-7">
                    <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                        <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/s1-item1.png" alt="" /></swiper-slide>
                        <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/s1-item-2.png" alt="" /></swiper-slide>
                        <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/s1-item-3.png" alt="" /></swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <!-- Section 2 -->
        <div class="relative bg-[url('@/assets/images/halo/mobile/bg-2.png')] bg-cover">
            <div class="pt-10 ml-4">
                <img src="@/assets/images/halo/s2-mascot.png" class="w-[72px] rounded-xl cursor-pointer" alt="bg" />
                <div
                    class="text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['Introduction'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px] relative"
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
                class="mx-4 mt-4 flex flex-col px-10 p-10 rounded-2xl"
            >
                <div class="text-left font-jost">
                    <span class="text-stone-200 text-lg font-[600] leading-8">HaloTrade</span>
                    <span class="text-stone-200 text-lg font-normal leading-8"></span>
                    <span class="text-zinc-400 text-lg font-normal leading-8">
                        is DeFi Trading Platform on the Aura Network blockchain. The goal of this project is to deliver a scalable Design System for
                        DeFi Trading Platform</span
                    >
                </div>
                <div class="pt-4">
                    <div class="flex flex-col gap-6">
                        <div class="flex items-center gap-4 pr-6">
                            <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Stake</div>
                            <FigmaIcon class="text-white" />
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
        <!-- Section 3 -->
        <div class="relative bg-[url('@/assets/images/halo/mobile/bg-3.png')] bg-cover h-0 pb-[calc(604/563*100%)]">
            <div class="absolute inset-0 h-full">
                <div
                    class="text-center mt-6 text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['Aura_Ecosystem'] before:text-center before:absolute before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px]"
                >
                    Aura Ecosystem
                </div>
            </div>
        </div>
        <!-- Section 4 -->
        <div class="relative px-4 pt-[70px] bg-[url('@/assets/images/halo/mobile/bg-4.png')] bg-cover">
            <div
                class="mx-4 relative text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['My_responsibilities '] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px]"
            >
                My responsibilities
            </div>
            <div class="flex flex-col gap-2 mt-5 pb-[120px] relative z-10">
                <HaloCard
                    accordian
                    class="w-full"
                    order="1"
                    title="Design planning & review"
                    desc="Defined timelines. Provided guidance to junior designers, and fostered a collaborative and creative work environment."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="2"
                    title="Research and Analysis"
                    desc="Explored best practices for scalability, modularity, and usability in design systems."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="3"
                    title="Research and Analysis"
                    desc="Explored best practices for scalability, modularity, and usability in design systems."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="4"
                    title="Research and Analysis"
                    desc="Explored best practices for scalability, modularity, and usability in design systems."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="5"
                    title="Research and Analysis"
                    desc="Explored best practices for scalability, modularity, and usability in design systems."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="6"
                    title="Research and Analysis"
                    desc="Explored best practices for scalability, modularity, and usability in design systems."
                />
            </div>
            <div class="w-[243px] h-[132px] absolute z-0 left-0 bottom-[20px] bg-[url('@/assets/images/halo/mobile/bg-4-1.png')] bg-cover"></div>
        </div>
        <!-- Design Process -->
        <div class="mt-[50px]">
            <div
                class="mx-4 relative text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['Design_process'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px]"
            >
                Design process
            </div>
            <img src="@/assets/images/halo/mobile/design-process.png" alt="" class="w-full" />
        </div>
        <!-- Outcomes -->
        <div class="relative px-4 pt-[70px] bg-[url('@/assets/images/halo/mobile/bg-5.png')] bg-cover">
            <div
                class="mx-4 relative text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['Outcomes'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px]"
            >
                Outcomes
            </div>
            <div class="flex flex-col gap-2">
                <HaloCard
                    accordian
                    class="w-full"
                    order="1"
                    title="Consistent User Experience"
                    desc="across the trading platform, enhancing usability and reducing cognitive load for users."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="2"
                    title="Improved trading experience"
                    desc="enabling users to execute trades quickly and easily across multiple tokenized assets."
                />
                <HaloCard
                    accordian
                    class="w-full"
                    order="3"
                    title="Streamlined Development"
                    desc="supported faster development with a library of reusable components."
                />
            </div>
            <div class="w-full mt-14">
                <video controls class="rounded-md shadow-md">
                    <source src="@/assets/images/halo/video-halo-variables.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
        </div>
        <!-- Product Screen -->
        <div class="relative px-4 pt-[70px] pb-[200px] bg-[url('@/assets/images/halo/mobile/bg-6.png')] bg-cover">
            <div
                class="mx-4 relative text-lime-400 text-[32px] font-[600] font-jost leading-[60px] tracking-[1.28px] before:content-['Product_Screen'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-[32px] before:blur-sm before:font-[600] before:leading-[60px] before:tracking-[1.28px]"
            >
                Product Screen
            </div>
            <div>
                <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                    <swiper-slide class="w-[80%] bg-black"
                        ><img src="@/assets/images/halo/mobile/product-1.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"
                        ><img src="@/assets/images/halo/mobile/product-2.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"
                        ><img src="@/assets/images/halo/mobile/product-3.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"
                        ><img src="@/assets/images/halo/mobile/product-4.png" alt="" class="w-full"
                    /></swiper-slide>
                </swiper>
            </div>
            <div class="w-[283px] h-[211px] absolute z-0 left-0 bottom-[20px] bg-[url('@/assets/images/halo/mobile/bg-6-1.png')] bg-cover"></div>
        </div>
        <div class="relative px-4 pt-[70px] pb-[200px] bg-[url('@/assets/images/halo/mobile/bg-6-2.png')] bg-cover">
            <img src="@/assets/images/halo/mobile/s6-desktop.png" alt="item" />
            <div class="mt-[38px]">
                <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p1.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p2.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p3.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p4.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p5.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p6.png" alt="" class="w-full" /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black"><img src="@/assets/images/halo/mobile/s6-p7.png" alt="" class="w-full" /></swiper-slide>
                </swiper>
            </div>
            <div class="mt-[58px] flex flex-col items-center">
                <div class="text-white text-7xl font-normal font-['Redig'] leading-10 tracking-tight">Visit our work</div>
                <div class="text-white text-2xl font-normal font-['Inter'] leading-normal tracking-widest mt-4">
                    <a href="https://halotrade.zone" target="_blank" class="hover:text-lime-400">halotrade.zone </a>
                </div>
            </div>
            <div class="w-[282px] h-[192px] absolute z-0 right-0 bottom-[20px] bg-[url('@/assets/images/halo/mobile/s6-mask.png')] bg-cover"></div>
        </div>
        <div class="px-4 my-10 lex justify-center">
            <div class="w-full">
                <div
                    class="py-[100px] px-10 pb-20 bg-gradient-to-r from-lime-500 via-green-500 to-teal-600 rounded-3xl flex-col justify-center items-center gap-8"
                >
                    <div class="flex flex-col justify-center items-center gap-4">
                        <div class="w-[327px] text-center text-black text-sm font-normal font-['Poppins'] leading-[17.50px] tracking-tight">
                            Interested in exploring how I build a scalable design system?
                        </div>

                        <div class="w-[327px] text-center">
                            <span class="text-black text-2xl font-normal font-['Poppins']">Read my article </span
                            ><span class="text-black text-2xl font-bold font-['Poppins']">Building smart components</span>
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
