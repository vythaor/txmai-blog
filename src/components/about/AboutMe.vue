<script>
import { Tabs, Tab } from 'vue3-tabs-component';

export default {
    name: 'About',
    components: {
        Tab,
        Tabs,
    },
};
</script>

<template>
    <div class="container mx-auto p-4">
        <div class="sm:gap-10 text-ternary-dark dark:text-ternary-light mb-12">
            <Tabs wrapper-class="-mb-px text-base text-center text-gray-500">
                <Tab name="About me">
                    <div class="flex flex-col md:flex-row">
                        <!-- First Column -->
                        <div class="md:w-2/3 mr-8">
                            <div class="h-48 flex-col justify-start items-start flex">
                                <div class="text-brand text-2xl font-normal mb-6">about me</div>
                                <div class="text-white text-5xl font-semibold md:w-2/3 text-left leading-relaxed">Fulfilling & diverse lifestyle</div>
                            </div>
                            <div class="text-white text-xl font-normal leading-relaxed text-left mt-12">
                                Running provides me with physical and mental well-being, while graphic design lets me explore your artistic side, and
                                product design allows me to apply my skills in a meaningful and professional context.
                                <br />Together, these pursuits contribute to a fulfilling and diverse lifestyle.
                            </div>
                        </div>
                        <div class="md:w-1/3">
                            <div class="flex-col justify-start items-start gap-4 inline-flex">
                                <div class="text-white text-base font-normal leading-tight">By balancing personal interests in</div>
                                <div class="h-96 flex-col justify-start items-start gap-2 flex">
                                    <div class="justify-start items-start gap-6 inline-flex">
                                        <div
                                            class="w-52 h-48 p-6 bg-neutral-800 rounded-2xl flex-col justify-between items-start inline-flex text-left"
                                        >
                                            <div class="w-10 h-10 px-1.5 py-1 flex-col justify-center items-center flex">
                                                <img src="@/assets/icons/running.svg" class="w-10" alt="Running icon" />
                                            </div>
                                            <div>
                                                <span class="text-brand text-xl font-semibold">Running </span> <br />
                                                <span class="text-brand text-xl font-normal leading-loose text-left">for Fun</span>
                                            </div>
                                        </div>
                                        <div
                                            class="w-52 h-48 p-6 bg-neutral-800 rounded-2xl flex-col justify-between items-start inline-flex text-left"
                                        >
                                            <div class="w-8 h-8 p-0.5 justify-center items-center inline-flex">
                                                <img src="@/assets/icons/pen.svg" class="w-10" alt="Pen icon" />
                                            </div>
                                            <div>
                                                <span class="text-brand text-xl font-semibold leading-normal">Graphic Design </span
                                                ><span class="text-brand text-xl font-normal leading-loose">for Fun</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-white text-base font-normal leading-tight">with professional role in</div>
                                    <div class="self-stretch h-36 p-6 bg-neutral-800 rounded-2xl flex-col justify-between items-start flex">
                                        <div class="w-8 h-8 px-0.5 pt-1 pb-0.5 justify-center items-center inline-flex">
                                            <img src="@/assets/icons/design.svg" class="w-10" alt="Design icon" />
                                        </div>
                                        <div>
                                            <span class="text-brand text-xl font-semibold leading-normal">Product design </span
                                            ><span class="text-brand text-xl font-normal leading-loose">for a Living</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex-col justify-start items-start gap-6 inline-flex mt-12">
                        <div class="w-1/2 self-stretch justify-between items-center inline-flex">
                            <div class="text-white text-3xl font-semibold leading-10">Work experience</div>
                            <div class="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div class="h-10 px-4 py-2.5 rounded-lg justify-center items-center gap-4 inline-flex">
                                    <div class="text-center text-white italic text-2xl font-normal underline leading-loose">Download CV</div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-1/2 h-72 p-6 bg-neutral-900 rounded-2xl flex-col justify-start items-start gap-4 flex text-ternary-dark dark:text-primary-light"
                        >
                            <div class="self-stretch h-56 flex-col justify-start items-start flex">
                                <div class="self-stretch py-4 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/fpt.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-950 text-base font-normal leading-tight">FPT Design</div>
                                            <div class="text-neutral-500 text-base font-normal leading-tight">10/2022 - Current</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-950 text-base font-normal leading-tight">Product designer</div>
                                </div>
                                <div class="self-stretch py-4 border-t border-dashed border-neutral-500 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/aperia.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-950 text-base font-normal leading-tight">Aperia</div>
                                            <div class="text-neutral-500 text-base font-normal leading-tight">09/2021 - 09/2022</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-950 text-base font-normal leading-tight">Product designer</div>
                                </div>
                                <div class="self-stretch py-4 border-t border-dashed border-neutral-500 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/nashtech.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-950 text-base font-normal leading-tight">NashTech Global</div>
                                            <div class="text-neutral-500 text-base font-normal leading-tight">2018 - 08/2021</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-950 text-base font-normal leading-tight">Senior multimedia designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab name="Design process">
                    <div class="md:w-2/3 mr-8">
                        <div class="h-48 flex-col justify-start items-start flex">
                            <div class="text-brand text-2xl font-normal mb-6">about me</div>
                            <div class="text-white text-5xl font-semibold md:w-2/3 text-left leading-relaxed">Design process</div>
                        </div>
                    </div>
                </Tab>
                <Tab name="What I do when I'm not working">
                    <div class="md:w-2/3 mr-8">
                        <div class="h-48 flex-col justify-start items-start flex">
                            <div class="text-brand text-2xl font-normal mb-6">about me</div>
                            <div class="text-white text-5xl font-semibold md:w-2/3 text-left leading-relaxed">What I do when I'm not working</div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>
