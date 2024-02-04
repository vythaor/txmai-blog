<template>
    <div class="w-full bg-gradient-to-b from-slate-800 to-zinc-900 flex-col justify-start items-start gap-px inline-flex">
        <!-- Top banner -->
        <div class="px-4 py-[150px] relative bg-[url('@/assets/images/costco-wholesale/mobile/bg-1.png')] bg-cover">
            <div
                class="p-6 capitalize text-[#C7EEFF] text-2xl leading-normal border-[rgba(0,0,0,0.2)] rounded-lg backdrop-blur-[8px] bg-gradient-to-br from-[rgba(121,117,131,0.20)] from-[6.35%] via-[rgba(54,53,103,0.20)] via-[83.85%] to-[rgba(49,48,54,0.30)]"
            >
                <span class="font-bold">Power BI Dashboard</span><span class="font-[500]"> For a multi-billion dollar global retailer</span>
            </div>
            <div>
                <div class="mt-6 text-white text-xs font-semibold leading-[15px] flex gap-4 items-center">
                    <span>STAKE</span>
                    <FigmaIcon class="text-white" />
                    <PowerBI />
                </div>
                <div class="mt-4 text-white text-xs font-semibold leading-[15px] flex gap-4 items-center">
                    <span>CLIENT</span>
                    <img src="@/assets/images/costco-wholesale/logo.png" alt="" class="h-[33px]" />
                </div>
            </div>
        </div>
        <!-- About projects -->
        <div class="px-4 mt-10 text-white py-12">
            <div class="text-[20px] font-semibold leading-[25px]">About projects</div>
            <div class="mt-6 relative grow shrink basis-0 p-8 rounded-[20px] justify-start items-start gap-6 flex">
                <img src="@/assets/images/costco-wholesale/project-border.png" alt="" class="absolute inset-0 w-full h-full pointer-events-none" />
                <div class="grow shrink basis-0">
                    <span class="text-base font-semibold leading-9">Diversity Dashboard</span
                    ><span class="text-base font-normal leading-[30px]">
                        displays workforce representation of different demographic groups and evaluates Costco's organizational makeup.
                    </span>
                </div>
                <div class="relative font-extrabold capitalize leading-[96px] w-[38px]">
                    <img src="@/assets/images/costco-wholesale/1.png" alt="" class="absolute inset-0 top-[-5px] w-full" />
                </div>
            </div>
            <div class="mt-6 relative grow shrink basis-0 p-8 rounded-[20px] justify-start items-start gap-6 flex">
                <img src="@/assets/images/costco-wholesale/project-border.png" alt="" class="absolute inset-0 w-full h-full pointer-events-none" />
                <div class="grow shrink basis-0">
                    <span class="text-base font-semibold leading-9">Factsheet report</span>
                    <span class="text-lg font-normal capitalize"> </span>
                    <span class="text-base font-normal leading-[30px]">
                        provides detailed information and key facts about a specific warehouse such as location details, capacity and dimensions,
                        inventory status, etc.
                    </span>
                </div>
                <div class="relative font-extrabold capitalize leading-[96px] w-[55px]">
                    <img src="@/assets/images/costco-wholesale/2.png" alt="" class="absolute inset-0 top-[-5px] w-full" />
                </div>
            </div>
        </div>
        <!-- Scope of work -->
        <div class="px-4 py-12 w-full relative bg-[url('@/assets/images/costco-wholesale/mobile/bg-2.png')] bg-cover">
            <div class="text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">Scope of works</div>
            <div class="mt-12">
                <div class="w-full flex flex-col justify-center items-center gap-[50px]">
                    <div class="flex-col justify-center items-center gap-4 flex">
                        <div
                            class="w-[145px] h-[104px] p-[33px] bg-gradient-to-br from-zinc-500 to-slate-700 rounded-full flex-col justify-center items-center gap-2.5 flex"
                        >
                            <svg width="56" height="46" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.2 0.5C8.11125 0.5 5.6 3.02246 5.6 6.125V25.8125H1.68C0.7525 25.8125 0 26.5684 0 27.5C0 31.2266 3.01 34.25 6.72 34.25H28V25.8125H11.2V6.125H39.2V8.9375H44.8V6.125C44.8 3.02246 42.2888 0.5 39.2 0.5H11.2ZM44.8 11.75H35C32.6813 11.75 30.8 13.6396 30.8 15.9688V41.2812C30.8 43.6104 32.6813 45.5 35 45.5H51.8C54.1188 45.5 56 43.6104 56 41.2812V23H47.6C46.0513 23 44.8 21.7432 44.8 20.1875V11.75ZM47.6 11.75V20.1875H56L47.6 11.75Z"
                                    fill="#82E6EF"
                                />
                            </svg>
                        </div>
                        <div class="flex-col justify-center items-center flex">
                            <div class="text-white text-base font-semibold leading-9">UX Innovation</div>
                            <div class="text-white text-sm font-normal leading-tight">for Desktop Dashboard</div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-center gap-4 flex">
                        <div
                            class="w-[145px] h-[104px] p-[33px] bg-gradient-to-br from-zinc-500 to-slate-700 rounded-full flex-col justify-center items-center gap-2.5 flex"
                        >
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_217_48382)">
                                    <path
                                        d="M32.379 2.10767L27.4835 7.01196L38.4874 18.0159L43.3829 13.1204C45.3077 11.1956 45.3077 8.08423 43.3829 6.15942L39.34 2.10767C37.4152 0.182861 34.3038 0.182861 32.379 2.10767ZM25.3126 8.81372L24.504 9.05981L11.839 12.8567C10.09 13.384 8.7013 14.72 8.12122 16.4602L0.334114 39.6809C0.000129998 40.6741 0.246224 41.7815 0.975716 42.5286L14.4757 29.0373C14.212 28.4836 14.0626 27.8684 14.0626 27.218C14.0626 24.8889 15.9523 22.9993 18.2814 22.9993C20.6105 22.9993 22.5001 24.8889 22.5001 27.218C22.5001 29.5471 20.6105 31.4368 18.2814 31.4368C17.631 31.4368 17.0157 31.2873 16.462 31.0237L2.96204 44.5237C3.7179 45.2532 4.81653 45.508 5.8097 45.1653L29.0392 37.3782C30.7706 36.7981 32.1154 35.4094 32.6427 33.6604L36.4396 20.9954L36.6857 20.1868L25.3126 8.81372Z"
                                        fill="#A39CF2"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_217_48382">
                                        <rect width="45" height="45" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="flex-col justify-start items-center flex">
                            <div class="text-white text-base font-semibold leading-9">UI Design</div>
                            <div class="text-white text-sm font-normal leading-tight">for Mobile Dashboard</div>
                        </div>
                    </div>
                    <div class="flex-col justify-start items-center gap-4 flex">
                        <div
                            class="w-[145px] h-[104px] p-[33px] bg-gradient-to-br from-zinc-500 to-slate-700 rounded-full flex-col justify-center items-center gap-2.5 flex"
                        >
                            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_217_48389)">
                                    <path
                                        d="M7.5 11.75H3.75V38C3.75 40.0625 5.4375 41.75 7.5 41.75H33.75V38H7.5V11.75ZM37.5 4.25H15C12.9375 4.25 11.25 5.9375 11.25 8V30.5C11.25 32.5625 12.9375 34.25 15 34.25H37.5C39.5625 34.25 41.25 32.5625 41.25 30.5V8C41.25 5.9375 39.5625 4.25 37.5 4.25ZM35.625 21.125H16.875V17.375H35.625V21.125ZM28.125 28.625H16.875V24.875H28.125V28.625ZM35.625 13.625H16.875V9.875H35.625V13.625Z"
                                        fill="#DEBEF4"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_217_48389">
                                        <rect width="45" height="45" fill="white" transform="translate(0 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="flex-col justify-start items-center flex">
                            <div class="text-white text-base font-semibold leading-9">UX Design</div>
                            <div class="text-white text-sm font-normal leading-tight">for Mobile Dashboard</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Challenges -->
        <div class="px-4 py-12 w-full relative">
            <div class="text-white text-[20px] font-semibold leading-[25px]">Challenges</div>
            <img src="@/assets/images/costco-wholesale/mobile/illu.png" alt="" class="mx-auto my-6 w-[213px] h-[220px]" />
            <div class="text-base">
                <span class="text-white font-normal leading-[30px]">In the scenario where</span>
                <span class="text-white font-semibold leading-9">
                    Costco corporate staff or warehouse managers need to access specific information while at the warehouse
                </span>
                <span class="text-white font-normal leading-[30px]">
                    and typically do not carry a laptop, mobile devices become a crucial tool for on-the-go data retrieval.
                </span>
            </div>
        </div>
        <!-- Process -->
        <div class="px-4 py-12 w-full relative bg-[url('@/assets/images/costco-wholesale/mobile/bg-3.png')] bg-[length:100%_auto] bg-repeat-space">
            <div class="mt-12 text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">Report design process</div>
            <div class="mt-6 flex flex-col gap-6">
                <div class="p-4 grid bg-white bg-opacity-5 rounded-xl border border-white backdrop-blur-sm">
                    <div
                        class="w-full flex justify-between items-center text-violet-400 text-base font-semibold font-['Poppins'] leading-tight"
                        @click="accordians['1'] = !accordians['1']"
                    >
                        <div>Understanding stage</div>
                        <div
                            class="cursor-pointer w-3 h-3 border-violet-400 border-l-0 border-b-0 border-t-[3px] border-r-[3px] transform transition-[transform]"
                            :class="{
                                'rotate-[-45deg] mt-2': accordians['1'],
                                'rotate-[135deg] mb-1': !accordians['1'],
                            }"
                        ></div>
                    </div>
                    <div
                        class="grid transition-[grid-template-rows] duration-500 ease-out"
                        :class="{ 'grid-rows-[0fr]': !accordians['1'], 'grid-rows-[1fr]': accordians['1'] }"
                    >
                        <div class="flex flex-col gap-4 overflow-hidden">
                            <div class="pt-6 flex-col justify-start items-start gap-2 flex">
                                <div class="text-white text-base font-semibold font-['Poppins'] leading-tight">Define Insights</div>
                                <ul class="pl-8 text-white font-normal list-disc">
                                    <li>Audience</li>
                                    <li>Purpose</li>
                                    <li>6-10 insights / page</li>
                                </ul>
                            </div>
                            <div class="flex-col justify-start items-start gap-2 flex">
                                <div class="text-white text-base font-semibold font-['Poppins'] leading-tight">Choose data sets</div>
                                <ul class="pl-8 text-white font-normal list-disc">
                                    <li>Choose the right data set for each insight</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 grid bg-white bg-opacity-5 rounded-xl border border-white backdrop-blur-sm">
                    <div
                        class="w-full flex justify-between items-center text-violet-400 text-base font-semibold font-['Poppins'] leading-tight"
                        @click="accordians['2'] = !accordians['2']"
                    >
                        <div>Visualizing report stage</div>
                        <div
                            class="cursor-pointer w-3 h-3 border-violet-400 border-l-0 border-b-0 border-t-[3px] border-r-[3px] transform transition-all"
                            :class="{
                                'rotate-[-45deg] mt-2': accordians['2'],
                                'rotate-[135deg] mt-1': !accordians['2'],
                            }"
                        ></div>
                    </div>
                    <div
                        class="grid transition-[grid-template-rows] duration-500 ease-out"
                        :class="{ 'grid-rows-[0fr]': !accordians['2'], 'grid-rows-[1fr]': accordians['2'] }"
                    >
                        <div class="flex flex-col gap-4 overflow-hidden">
                            <div class="pt-6 flex-col justify-start items-start gap-2 flex">
                                <div class="text-white text-base font-semibold font-['Poppins'] leading-tight">Pick visuals</div>
                                <div class="text-white text-base font-normal font-['Poppins'] leading-tight">
                                    Pick correct visual based on the insight
                                </div>
                            </div>
                            <div class="mt-4 flex-col justify-start items-start gap-2 flex">
                                <div class="text-white text-base font-semibold font-['Poppins'] leading-tight">Choose layout</div>
                                <div class="text-white text-base font-normal font-['Poppins'] leading-tight">
                                    Choose correct layout and group relevant metrics
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-4 grid bg-white bg-opacity-5 rounded-xl border border-white backdrop-blur-sm">
                    <div
                        class="w-full flex justify-between items-center text-violet-400 text-base font-semibold font-['Poppins'] leading-tight"
                        @click="accordians['3'] = !accordians['3']"
                    >
                        <div>Acceptance</div>
                        <div
                            class="cursor-pointer w-3 h-3 border-violet-400 border-l-0 border-b-0 border-t-[3px] border-r-[3px] transform transition-all"
                            :class="{
                                'rotate-[-45deg] mt-2': accordians['3'],
                                'rotate-[135deg] mt-1': !accordians['3'],
                            }"
                        ></div>
                    </div>
                    <div
                        class="grid transition-[grid-template-rows] duration-500 ease-out"
                        :class="{ 'grid-rows-[0fr]': !accordians['3'], 'grid-rows-[1fr]': accordians['3'] }"
                    >
                        <div class="text-white text-base font-normal font-['Poppins'] leading-tight overflow-hidden">
                            <div class="mt-6">Walk through the changes<br />Ask for feedback</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Demo -->
        <div class="px-4 py-12">
            <div class="mt-12 text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">Diversity Dashboard Demo in Power BI</div>

            <div class="mt-3 text-white text-base font-normal font-['Poppins'] leading-tight">Diversity Dashboard Demo in Power BI</div>
            <div class="text-white text-base font-normal font-['Poppins'] leading-tight">
                Established a mobile design standard for dashboard navigation, charts/graphs visualization, and overall mobile dashboard design across
                organization
            </div>
            <div class="mt-6">
                <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen-0.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen-1.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen-2.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen-4.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Screen-3.png" alt="" class="w-full"
                    /></swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="px-4 py-12 relative bg-[url('@/assets/images/costco-wholesale/mobile/bg-4.png')] bg-cover">
            <div class="mt-12 text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">Warehouse factsheet wireframe</div>
            <div class="mt-8">
                <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Warehouse-2.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Warehouse-4.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Warehouse-1.png" alt="" class="w-full"
                    /></swiper-slide>
                    <swiper-slide class="w-[80%] bg-black overflow-hidden rounded-[25px]"
                        ><img src="@/assets/images/costco-wholesale/Warehouse-3.png" alt="" class="w-full"
                    /></swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="px-4 py-12">
            <div>
                <div class="mt-12 text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">Desktop report UX Innovation</div>
                <div class="mt-6 text-[#C6EDFF] text-base font-semibold font-['Poppins'] leading-tight">The existing dashboard</div>
                <div class="mt-8 text-white text-base font-normal font-['Poppins'] leading-tight">
                    The dashboard displays data values without providing any meaningful insights to the user.
                </div>
                <img src="@/assets/images/costco-wholesale/innovation-1.png" alt="" class="mt-6" />
            </div>
            <div>
                <div class="mt-12 text-[#C6EDFF] text-[20px] font-semibold leading-[25px]">The proposal dashboard</div>
                <div class="flex flex-col gap-6 mt-2 text-white text-base font-normal font-['Poppins'] leading-tight">
                    <div>The key concept is to shift the focus from data value to data ratio.</div>
                    <div>
                        This approach emphasizes changes over actual values, making it easier for business users to prioritize recruiting specific
                        race, gender, or age groups.
                    </div>
                    <div>
                        By presenting the data this way, the dashboard helps users identify imbalances in the recruitment strategy and allocate
                        resources accordingly.
                    </div>
                </div>

                <img src="@/assets/images/costco-wholesale/innovation-2.png" alt="" class="mt-6" />
            </div>
        </div>
        <div class="px-4 py-12">
            <div
                class="px-4 pt-[88px] pb-20 bg-gradient-to-r from-purple-300 to-sky-300 rounded-[20px] shadow-inner border border-blue-100 border-opacity-50 flex-col justify-center items-center gap-6 inline-flex"
            >
                <div class="flex-col justify-center items-center gap-3 flex">
                    <div class="text-center text-zinc-900 text-sm font-normal font-['Poppins'] leading-[17.50px] tracking-tight">
                        Interested in exploring the depths of Power BI's mobile view?
                    </div>
                    <div class="text-center text-zinc-900 text-xl font-semibold font-['Poppins'] leading-[25px]">
                        Read my article Design Dashboard mobile view in Power BI
                    </div>
                </div>
                <div class="flex-col justify-start items-start gap-2.5 flex">
                    <div class="px-4 py-2.5 bg-gray-900 rounded-xl border-2 border-blue-800 justify-center items-center gap-4 inline-flex">
                        <div class="text-center text-neutral-200 text-xl font-semibold font-['Poppins'] leading-[25px]">Dive in Now</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable vue/no-unused-components */
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FigmaIcon, Web3Icon, PowerBI } from '@/components/icons';
export default {
    name: 'AuraScanProject',
    components: {
        Swiper,
        SwiperSlide,
        FigmaIcon,
        Web3Icon,
        PowerBI,
    },
    data: () => ({
        accordians: {
            1: false,
            2: false,
            3: false,
        },
    }),
};
</script>
