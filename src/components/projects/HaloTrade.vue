<script>
export default {
    name: 'HaloTradeProject',
};
</script>

<template>
    <div class="mt-14 bg-neutral-950">
        <div class="bg-[url('@/assets/images/halo/bg-1.png')] bg-auto bg-center h-screen">
            <div class="p-24 grid place-items-center">
                <p class="text-7xl bold text-transparent bg-clip-text text-gradient bg-gradient-to-r from-lime-500 to-emerald-500">HALLOTRADE</p>
                <img src="@/assets/images/halo/s1-item1.png" class="rounded-xl cursor-pointer w-2/5 mt-12" alt="bg" />
                <img src="@/assets/images/halo/s1-item2.png" class="absolute z-99 rounded-xl cursor-pointer mt-32" alt="bg" />
            </div>
        </div>
        <div class="bg-[url('@/assets/images/halo/s2-shape.png')] bg-no-repeat">
            <div class="mx-auto flex px-[138px] py-[67px]">
                <div class="relative w-1/2 flex flex-col place-items-center">
                    <img src="@/assets/images/halo/s2-mascot.png" class="rounded-xl cursor-pointer" alt="bg" />
                    <div
                        class="text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Introduction'] before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
                    >
                        Introduction
                    </div>
                </div>
                <div
                    style="
                        background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%);
                        backdrop-filter: blur(6px);
                    "
                    class="flex flex-col justify-between h-72 px-10 w-1/2 rounded-2xl"
                >
                    <div class="h-px bg-gradient-to-l from-lime-500 from-1% via-lime-500 via-70% to-lime-500 to-5% rounded-xl"></div>
                    <div class="text-left">
                        <span class="text-stone-200 text-xl font-semibold leading-9">HaloTrade</span>
                        <span class="text-stone-200 text-xl font-normal leading-9"> </span>
                        <span class="text-zinc-400 text-xl font-normal leading-9">
                            is DeFi Trading Platform on the Aura Network blockchain. The goal of this project is to deliver a scalable Design System
                            for DeFi Trading Platform</span
                        >
                    </div>
                    <div class="flex items-center space-x-4 mt-4">
                        <div class="text-white text-xs font-semibold uppercase leading-none">stake</div>
                        <img src="@/assets/icons/figma.svg" class="w-20 ml-4" alt="Light Logo" />
                        <img src="@/assets/icons/web3.svg" class="w-18 ml-4" alt="Light Logo" />
                        <div class="h-8 border border-neutral-500"></div>
                        <div class="text-white text-xs font-semibold uppercase leading-none">Client</div>
                        <img src="@/assets/icons/aura.svg" class="w-24 ml-4" alt="Light Logo" />
                    </div>
                    <div class="h-px rotate-180 bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"></div>
                </div>
            </div>
            <div
                class="mt-16 text-lime-400 text-5xl text-center font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Aura_Ecosystem'] before:text-center before:absolute before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
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
        <div class="bg-[url('@/assets/images/halo/s3-shape.png')] bg-no-repeat">
            <div
                class="p-28 text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['My_responsibilities'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                My responsibilities
            </div>
            <div class="flex gap-10">
                <img src="@/assets/images/halo/s3-mascot.png" alt="Light Logo" />
                <div
                    class="w-96 h-44 p-6 rounded-2xl backdrop-blur-2xl justify-start items-start gap-5 inline-flex"
                    style="
                        background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%);
                        backdrop-filter: blur(6px);
                    "
                >
                    <div class="w-4 h-8 relative">
                        <div class="left-0 top-0 absolute text-lime-400 text-3xl font-semibold leading-loose">1</div>
                    </div>
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div class="self-stretch text-stone-200 text-lg font-semibold leading-loose">Design planning & review</div>
                        <div class="self-stretch text-zinc-400 text-lg font-normal leading-7">
                            Defined timelines. Provided guidance to junior designers, and fostered a collaborative and creative work environment.
                        </div>
                    </div>
                    <div class="w-96 h-px left-0 top-0 absolute bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"></div>
                    <div
                        class="w-96 h-px left-[430px] top-[174px] absolute origin-top-left rotate-180 bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"
                    ></div>
                </div>
                <div
                    class="w-96 h-44 p-6 rounded-2xl backdrop-blur-2xl justify-start items-start gap-5 inline-flex"
                    style="
                        background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%);
                        backdrop-filter: blur(6px);
                    "
                >
                    <div class="w-4 h-8 relative">
                        <div class="left-0 top-0 absolute text-lime-400 text-3xl font-semibold leading-loose">2</div>
                    </div>
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div class="self-stretch text-stone-200 text-lg font-semibold leading-loose">Research and Analysis</div>
                        <div class="self-stretch text-zinc-400 text-lg font-normal leading-7">
                            Explored best practices for scalability, modularity, and usability in design systems.
                        </div>
                    </div>
                    <div class="w-96 h-px left-0 top-0 absolute bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"></div>
                    <div
                        class="w-96 h-px left-[430px] top-[174px] absolute origin-top-left rotate-180 bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"
                    ></div>
                </div>
            </div>
        </div>
        <!-- End Responsibilities -->

        <!-- Design Process -->
        <div
            class="p-28 text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Design_process'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
        >
            Design process
        </div>
        <img src="@/assets/images/halo/s4-process.png" alt="item" />
        <!-- End Design Process -->

        <!-- Outcome -->
        <div class="bg-[url('@/assets/images/halo/s5-shape.png')] bg-no-repeat">
            <div
                class="p-28 text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Outcomes'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
            >
                Outcomes
            </div>
            <div class="flex justify-center gap-8">
                <div class="flex flex-col">
                    <div
                        class="w-96 h-44 p-6 rounded-2xl backdrop-blur-2xl justify-start items-start gap-5 inline-flex"
                        style="
                            background: linear-gradient(180deg, rgba(241, 255, 231, 0.05) 0%, rgba(241, 255, 231, 0.02) 100%);
                            backdrop-filter: blur(6px);
                        "
                    >
                        <div class="w-4 h-8 relative">
                            <div class="left-0 top-0 absolute text-lime-400 text-3xl font-semibold leading-loose">1</div>
                        </div>
                        <div class="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                            <div class="self-stretch text-stone-200 text-lg font-semibold leading-loose">Design planning & review</div>
                            <div class="self-stretch text-zinc-400 text-lg font-normal leading-7">
                                Defined timelines. Provided guidance to junior designers, and fostered a collaborative and creative work environment.
                            </div>
                        </div>
                        <div class="w-96 h-px left-0 top-0 absolute bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"></div>
                        <div
                            class="w-96 h-px left-[430px] top-[174px] absolute origin-top-left rotate-180 bg-gradient-to-l from-lime-500 via-lime-500 to-lime-500 rounded-xl"
                        ></div>
                    </div>
                </div>
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
                class="p-28 text-lime-400 text-5xl font-semibold font-['Jost'] leading-10 tracking-widest before:content-['Product_screens'] before:p-28 before:absolute before:top-0 before:left-0 before:opacity-60 before:text-lime-400 before:text-5xl before:blur-sm before:font-semibold before:leading-10 before:tracking-widest relative"
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
                        <div class="text-center text-black text-2xl font-normal leading-loose">
                            Interested in exploring how I build a scalable design system?
                        </div>
                        <div>
                            <span class="text-4xl">Read my article </span>
                            <span class="text-4xl bold">Building smart components</span>
                        </div>
                        <div class="h-12 px-6 py-2.5 bg-gray-900 rounded-xl justify-center items-center gap-4 inline-flex">
                            <div class="text-center text-brand text-2xl font-semibold leading-loose">Dive in Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
