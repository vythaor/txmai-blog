<!-- eslint-disable vue/no-unused-components -->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { PowerBI, HMI } from '@/components/icons';

export default {
    name: 'Fiserv',
    components: {
        Swiper,
        SwiperSlide,
        PowerBI,
        HMI,
    },
};
</script>
<template>
    <div class="h-[5167.95px] relative bg-black">
        <div class="bg-[url('@/assets/images/beckman/mobile/bg-1.png')] bg-cover py-[128px]">
            <div class="px-4 flex-col justify-end items-start gap-12 inline-flex">
                <div class="self-stretch text-emerald-50 text-[32px] font-semibold font-['Poppins'] leading-[48px]">
                    Medical device User Experience Design
                </div>
                <div class="self-stretch">
                    <span class="text-white text-lg font-normal font-['Poppins']"
                        >My approach for bidding on a design project is centered around utilizing the </span
                    ><span class="text-[#6EC1C4] text-lg font-normal font-['Poppins']">User-Centered Design</span
                    ><span class="text-white text-lg font-normal font-['Poppins']">
                        (UCD) methodology to create designs that are focused on the needs and preferences of the users.
                    </span>
                </div>
                <div class="self-stretch flex-col justify-center items-start gap-6 flex">
                    <div class="justify-start items-center gap-2 inline-flex">
                        <div class="text-white text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Stake</div>
                        <div class="text-white justify-start items-center gap-4 flex">
                            <HMI />
                            <PowerBI />
                        </div>
                    </div>
                    <div class="self-stretch justify-start items-center gap-2 inline-flex">
                        <div class="text-white text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Client</div>
                        <div class="grow shrink basis-0 text-white text-xs font-semibold font-['Poppins'] leading-[15px]">
                            a US global leader in biomedical technology
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 py-12 relative bg-white">
            <div class="-mx-4 px-4 py-12 bg-gray-50 flex-col justify-start items-start gap-6 inline-flex">
                <div class="self-stretch text-gray-800 text-2xl font-semibold font-['Poppin s'] leading-9">Main Users</div>
                <div class="self-stretch text-neutral-900 text-base font-normal font-['Poppins'] leading-tight">
                    The "Day in the Life" method is a user research technique that involves observing users in their natural environments to
                    understand their behaviors, needs, and challenges. <br />By immersing myself in their daily routines, I can gather insights that
                    help design interfaces customized to their specific requirements.
                </div>
                <div class="relative">
                    <div class="absolute left-[-90px]">
                        <img src="@/assets/images/beckman/circle.png" alt="pill" class="w-[140px] h-[140px]" />
                    </div>
                    <div class="relative flex items-start mt-8 z-0">
                        <img src="@/assets/images/beckman/pill.svg" alt="pill" class="w-[34px] h-[34px]" />
                        <div class="ml-3 flex-col justify-start items-start gap-4 inline-flex">
                            <div class="text-gray-800 text-xl font-semibold font-['Poppins'] leading-[25px]">Lab Technician/Operator</div>
                            <div class="self-stretch text-neutral-900 text-base font-normal font-['Poppins'] leading-tight">
                                Run Control at the start of their shift, to determine instrument is ready for processing Patient
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="mt-[68px] relative flex items-start">
                        <img src="@/assets/images/beckman/adn.svg" alt="adn" class="w-[26px ]" />
                        <div class="ml-4 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                            <div class="text-gray-800 text-xl font-semibold font-['Poppins'] leading-[25px]">Lab supervisor</div>
                            <div class="self-stretch text-neutral-900 text-base font-normal font-['Poppins'] leading-tight">
                                Review Control File weekly to check wether the Control Runs have been reviewed by the Lab Technician/Operator or not,
                                as well as to access the trending of graphs to evaluate the machine’s health in the past week. Then, mark review file
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-12 relative flex-col justify-start items-start inline-flex">
                <div class="absolute right-[-120px] top-[-50px]">
                    <img src="@/assets/images/beckman/circle-large.png" alt="pill" class="w-[214px] h-[214px]" />
                </div>
                <div class="text-gray-800 text-2xl font-semibold font-['Poppins'] leading-9">The proposal</div>
                <ul class="mt-8 ml-10 list-disc">
                    <li>UX Research & Design</li>
                    <li>UI Design</li>
                    <li>Design guideline/li></li>
                </ul>

                <div class="mt-8 text-neutral-900 text-lg font-normal font-['Poppins']">
                    I followed a structured process that involves extensive user research, market research. This helps me gain deep insights into the
                    users' behaviors, motivations, and pain points, which in turn informs the design decisions I make.
                    <div class="mt-3">Below is a bit of my research</div>
                </div>
            </div>
            <div class="mt-8 text-black text-base font-semibold font-['Poppins'] leading-tight">Large input/text style/touch target size</div>
            <div class="mt-4 relative flex items-center">
                <div class="w-[162px] h-[78px] left-0 top-[1px]">
                    <div class="left-0 top-0 absolute flex-col justify-start items-start gap-2.5 inline-flex">
                        <div class="w-[162px] h-[78px] px-6 py-2.5 bg-[#1E3F43] rounded-2xl justify-center items-center gap-4 inline-flex">
                            <div class="text-center text-white text-2xl font-bold font-['Montserrat'] leading-loose">Button</div>
                        </div>
                    </div>
                    <div class="w-[162px] h-[78px] left-0 top-0 absolute flex-col justify-start items-start flex">
                        <div class="w-[162px] h-[78px] bg-pink-600 bg-opacity-25 border border-pink-600"></div>
                    </div>
                </div>

                <div class="ml-4 w-[15px] h-[78px] relative flex-col justify-start items-start flex">
                    <div class="absolute top-0 w-[15px] h-[1px] translate-x-[-50%] border border-pink-600"></div>
                    <div class="absolute top-0 h-full w-[1px] border border-pink-600"></div>
                    <div class="absolute bottom-0 w-[15px] h-[1px] translate-x-[-50%] border border-pink-600"></div>
                </div>
                <div class="ml-1 text-pink-600 text-sm font-medium font-['Roboto Mono'] leading-none">78px</div>
                <div class="ml-3 w-[53px] left-[234px] top-[18px] text-pink-600 text-sm font-medium font-['Roboto Mono'] leading-none">
                    touch target size
                </div>
            </div>
            <div class="mt-8 grid grid-cols-4">
                <div class="aspect-square p-2.5 bg-[#29656B] justify-center items-center gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M9.25 21.1241V21.111L8.31899 22.6943C7.84526 23.5 7.56865 24.4076 7.51123 25.3458C7.15538 25.4452 6.78229 25.4998 6.4 25.4998C4.04518 25.4998 2.1 23.5035 2.1 20.9998V5.99984V5.49984H1.6C1.01018 5.49984 0.5 4.99834 0.5 4.33317C0.5 3.668 1.01018 3.1665 1.6 3.1665H4.8H8H11.2C11.7898 3.1665 12.3 3.668 12.3 4.33317C12.3 4.99834 11.7898 5.49984 11.2 5.49984H10.7V5.99984V18.6704L9.25 21.1241ZM4.8 5.49984H4.3V5.99984V10.9998V11.4998H4.8H8H8.5V10.9998V5.99984V5.49984H8H4.8ZM25.6 5.49984H25.1V5.99984V13.8592V13.9958L25.1695 14.1135L31.0544 24.0769C31.0544 24.0769 31.0545 24.077 31.0545 24.077C31.3438 24.5673 31.5 25.1357 31.5 25.7186C31.5 27.4567 30.1498 28.8332 28.53 28.8332H13.07C11.4502 28.8332 10.1 27.4567 10.1 25.7186C10.1 25.1419 10.2558 24.5729 10.5461 24.076C10.5463 24.0757 10.5465 24.0754 10.5466 24.0751L16.4305 14.1135L16.5 13.9958V13.8592V5.99984V5.49984H16C15.4102 5.49984 14.9 4.99834 14.9 4.33317C14.9 3.668 15.4102 3.1665 16 3.1665H17.6H24H25.6C26.1898 3.1665 26.7 3.668 26.7 4.33317C26.7 4.99834 26.1898 5.49984 25.6 5.49984ZM19.2 5.49984H18.7V5.99984V14.3332C18.7 14.5532 18.6429 14.7676 18.5339 14.9549C18.5336 14.9553 18.5334 14.9558 18.5331 14.9562L16.0947 19.0786L15.6483 19.8332H16.525H25.075H25.9517L25.5054 19.0786L23.0654 14.9536L23.0647 14.9524C22.9581 14.7735 22.9 14.5605 22.9 14.3332V5.99984V5.49984H22.4H19.2Z"
                            fill="#F4F4F5"
                            stroke="#F4F4F5"
                        />
                    </svg>
                </div>
                <div class="aspect-square p-2.5 bg-[#1E3F43] justify-center items-center gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_406_25164)">
                            <path
                                d="M25.334 10.6668L20.0006 16.0002H24.0006C24.0006 20.4135 20.414 24.0002 16.0007 24.0002C14.654 24.0002 13.374 23.6668 12.2673 23.0668L10.3207 25.0135C11.9607 26.0535 13.9073 26.6668 16.0007 26.6668C21.894 26.6668 26.6673 21.8935 26.6673 16.0002H30.6673L25.334 10.6668ZM8.00065 16.0002C8.00065 11.5868 11.5873 8.00016 16.0007 8.00016C17.3473 8.00016 18.6273 8.3335 19.734 8.9335L21.6807 6.98683C20.0407 5.94683 18.094 5.3335 16.0007 5.3335C10.1073 5.3335 5.33398 10.1068 5.33398 16.0002H1.33398L6.66732 21.3335L12.0007 16.0002H8.00065Z"
                                fill="#F4F4F5"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_406_25164">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="aspect-square p-2.5 bg-[#29656B] justify-center items-center gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M0 4C0 2.89375 0.89375 2 2 2H5.5H8.5H12C13.1063 2 14 2.89375 14 4C14 5.10625 13.1063 6 12 6V25C12 27.7625 9.7625 30 7 30C4.2375 30 2 27.7625 2 25V6C0.89375 6 0 5.10625 0 4ZM8.5 6H5.5V16H8.5V6ZM18 4C18 2.89375 18.8937 2 20 2H23.5H26.5H30C31.1063 2 32 2.89375 32 4C32 5.10625 31.1063 6 30 6V25C30 27.7625 27.7625 30 25 30C22.2375 30 20 27.7625 20 25V6C18.8937 6 18 5.10625 18 4ZM26.5 6H23.5V16H26.5V6Z"
                            fill="#F4F4F5"
                        />
                    </svg>
                </div>
                <div class="aspect-square p-2.5 bg-[#1E3F43] justify-center items-center gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path
                            d="M22.6667 5.3335L28 10.6668L22.6667 16.0002V12.0002H17.3333V9.3335H22.6667V5.3335ZM13.3333 9.3335C12.6 9.3335 12 9.9335 12 10.6668C12 11.4002 12.6 12.0002 13.3333 12.0002C14.0667 12.0002 14.6667 11.4002 14.6667 10.6668C14.6667 9.9335 14.0667 9.3335 13.3333 9.3335ZM8 9.3335C7.26667 9.3335 6.66667 9.9335 6.66667 10.6668C6.66667 11.4002 7.26667 12.0002 8 12.0002C8.73333 12.0002 9.33333 11.4002 9.33333 10.6668C9.33333 9.9335 8.73333 9.3335 8 9.3335ZM9.33333 22.6668H14.6667V20.0002H9.33333V16.0002L4 21.3335L9.33333 26.6668V22.6668ZM18.6667 22.6668C19.4 22.6668 20 22.0668 20 21.3335C20 20.6002 19.4 20.0002 18.6667 20.0002C17.9333 20.0002 17.3333 20.6002 17.3333 21.3335C17.3333 22.0668 17.9333 22.6668 18.6667 22.6668ZM24 22.6668C24.7333 22.6668 25.3333 22.0668 25.3333 21.3335C25.3333 20.6002 24.7333 20.0002 24 20.0002C23.2667 20.0002 22.6667 20.6002 22.6667 21.3335C22.6667 22.0668 23.2667 22.6668 24 22.6668Z"
                            fill="#F4F4F5"
                        />
                    </svg>
                </div>
            </div>
            <div class="mt-8">
                <div class="w-full flex-col justify-start items-start gap-4 inline-flex">
                    <div class="text-black text-base font-semibold font-['Poppins'] leading-tight">Card based selectors</div>
                    <div class="self-stretch px-4 py-2 bg-neutral-800 rounded-lg flex-col justify-start items-start gap-2 flex">
                        <div class="text-zinc-100 text-base font-bold font-['Montserrat'] leading-normal">Select a status</div>
                        <div class="self-stretch h-[184px] flex-col justify-start items-center gap-4 flex">
                            <div
                                class="self-stretch p-4 bg-stone-950 rounded-2xl shadow border-2 border-[#6EC1C4] backdrop-blur-[21px] justify-start items-center gap-4 inline-flex"
                            >
                                <div class="w-6 h-6 p-1.5 bg-teal-600 rounded-full justify-center items-center gap-2.5 flex">
                                    <div class="grow shrink basis-0 self-stretch bg-neutral-900 rounded-full"></div>
                                </div>
                                <div class="flex-col justify-center items-start gap-1 inline-flex">
                                    <div class="text-white text-xl font-medium font-['Montserrat'] leading-loose">Active</div>
                                </div>
                            </div>
                            <div class="self-stretch p-4 rounded-2xl border-2 border-zinc-600 justify-start items-center gap-4 inline-flex">
                                <div class="w-6 h-6 p-2.5 rounded-full border-2 border-zinc-100"></div>
                                <div class="flex-col justify-center items-start gap-1 inline-flex">
                                    <div class="text-white text-xl font-medium font-['Montserrat'] leading-loose">Accumulating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 pt-12 bg-[#DFDFE2]">
            <div class="text-gray-800 text-2xl font-semibold font-['Poppins'] leading-9">Mockups</div>
            <div class="mt-6 flex-col justify-start items-start gap-6 flex">
                <div class="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div class="text-gray-800 text-base font-semibold font-['Poppins'] leading-tight">Option 1</div>
                    <img src="@/assets/images/beckman/mockup-1.png" class="w-full" />
                </div>
                <div class="self-stretch flex-col justify-start items-start gap-4 flex">
                    <div class="text-gray-800 text-base font-semibold font-['Poppins'] leading-tight">Option 2</div>
                    <img src="@/assets/images/beckman/mockup-2.png" class="w-full" />
                </div>
            </div>
        </div>
        <div class="bg-[#0A171A] px-4 pt-12">
            <div class="text-emerald-50 text-2xl font-semibold font-['Poppins'] leading-9">Outcomes</div>
            <div class="rounded-xl flex-col justify-start items-start inline-flex overflow-hidden">
                <div class="self-stretch p-3 bg-[#9EDBDA] justify-start items-start gap-2.5 inline-flex">
                    <div class="grow shrink basis-0 text-black text-sm font-normal font-['Poppins'] leading-[17.50px]">
                        Interfaces and input devices that are designed to meet the specific requirements of users and their environments
                    </div>
                </div>
                <div class="self-stretch p-2.5 bg-[#4B9AA0] justify-start items-start gap-2.5 inline-flex">
                    <div class="grow shrink basis-0 text-black text-sm font-normal font-['Poppins'] leading-[17.50px]">
                        Interfaces that are easy to understand, requiring minimal training.
                    </div>
                </div>
                <div class="self-stretch p-3 bg-[#9EDBDA] justify-start items-start gap-2.5 inline-flex">
                    <div class="grow shrink basis-0 text-black text-sm font-normal font-['Poppins'] leading-[17.50px]">
                        Systems that have the ability to adapt and expand in the future.
                    </div>
                </div>
                <div class="self-stretch p-2.5 bg-[#4B9AA0] justify-start items-start gap-2.5 inline-flex">
                    <div class="grow shrink basis-0 text-black text-sm font-normal font-['Poppins'] leading-[17.50px]">
                        Decrease in user mistakes, resulting in decreased potential legal risks.
                    </div>
                </div>
                <div class="self-stretch p-3 bg-[#9EDBDA] justify-start items-start gap-2.5 inline-flex">
                    <div class="grow shrink basis-0 text-black text-sm font-normal font-['Poppins'] leading-[17.50px]">
                        Design standards that are successful in providing effortless navigation, precision, and minimizing errors in operation.
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#0A171A] px-4 pt-8 pb-12">
            <swiper slidesPerView="auto" :spaceBetween="16" :loop="true">
                <swiper-slide class="w-[80%] bg-black overflow-hidden">
                    <img src="@/assets/images/beckman/mobile/p-1.png" alt="" class="w-full" />
                </swiper-slide>
                <swiper-slide class="w-[80%] bg-black overflow-hidden">
                    <img src="@/assets/images/beckman/mobile/p-2.png" alt="" class="w-full" />
                </swiper-slide>
                <swiper-slide class="w-[80%] bg-black overflow-hidden">
                    <img src="@/assets/images/beckman/mobile/p-3.png" alt="" class="w-full" />
                </swiper-slide>
            </swiper>
            <swiper slidesPerView="auto" :spaceBetween="16" :loop="true" class="mt-8">
                <swiper-slide class="w-[80%] bg-black overflow-hidden">
                    <img src="@/assets/images/beckman/mobile/p-4.png" alt="" class="w-full" />
                </swiper-slide>
                <swiper-slide class="w-[80%] bg-black overflow-hidden">
                    <img src="@/assets/images/beckman/mobile/p-5.png" alt="" class="w-full" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
