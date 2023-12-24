<script>
import Tabs from '@/components/reusable/Tabs.vue';
import Tab from '@/components/reusable/Tab.vue';

export default {
    name: 'About',
    components: {
        Tab,
        Tabs,
    },
};
</script>

<template>
    <div class="p-[168px]">
        <div class="sm:gap-10 text-ternary-dark dark:text-ternary-light mb-12">
            <Tabs>
                <Tab title="Lifestyle">
                    <div class="flex flex-col md:flex-row">
                        <!-- First Column -->
                        <div class="md:w-2/3 mr-8">
                            <div class="h-48 flex-col justify-start items-start flex">
                                <div class="text-white text-2xl italic font-normal mb-6">about me</div>
                                <div class="text-white text-5xl font-semibold md:w-2/3 text-left leading-relaxed">Fulfilling & diverse lifestyle</div>
                            </div>
                            <div class="text-white text-base font-normal leading-relaxed text-left mt-12">
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
                                    <div class="text-center text-white italic text-xl font-normal underline leading-loose">Download CV</div>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 h-72 p-6 bg-neutral-900 rounded-2xl flex-col justify-start items-start gap-4 flex text-primary-light">
                            <div class="self-stretch h-56 flex-col justify-start items-start flex">
                                <div class="self-stretch py-4 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/fpt.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-200 text-base font-normal leading-tight">FPT Design</div>
                                            <div class="text-neutral-50 text-base font-normal leading-tight">10/2022 - Current</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-200 text-base font-normal leading-tight">Product designer</div>
                                </div>
                                <div class="self-stretch py-4 border-t border-dashed border-neutral-500 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/aperia.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-200 text-base font-normal leading-tight">Aperia</div>
                                            <div class="text-neutral-50 text-base font-normal leading-tight">09/2021 - 09/2022</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-200 text-base font-normal leading-tight">Product designer</div>
                                </div>
                                <div class="self-stretch py-4 border-t border-dashed border-neutral-500 justify-between items-center inline-flex">
                                    <div class="justify-start items-center gap-2 flex">
                                        <div class="w-11 h-11 relative">
                                            <img src="@/assets/images/nashtech.png" />
                                        </div>
                                        <div class="flex-col justify-center items-start gap-1 inline-flex">
                                            <div class="text-neutral-200 text-base font-normal leading-tight">NashTech Global</div>
                                            <div class="text-neutral-50 text-base font-normal leading-tight">2018 - 08/2021</div>
                                        </div>
                                    </div>
                                    <div class="text-neutral-200 text-base font-normal leading-tight">Senior multimedia designer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Design process">
                    <div class="my-12">
                        <div class="flex-col flex text-left">
                            <div class="text-white text-2xl italic font-normal mb-6">about me</div>
                            <div class="text-white text-5xl font-semibold leading-relaxed">My design process</div>
                        </div>
                        <div class="my-12">
                            <div class="flex justify-between">
                                <div class="relative flex w-[50%]">
                                    <div
                                        class="relative z-10 w-[150px] h-[150px] rounded-full border-[11px] border-cyan-700 flex justify-center items-center"
                                    >
                                        <div
                                            class="w-[128px] h-[128px] bg-[#171717] rounded-full border-[6px] border-cyan-200 flex justify-center items-center"
                                        >
                                            <div class="text-neutral-700 text-7xl font-semibold leading-[108px]">01</div>
                                        </div>
                                    </div>
                                    <div
                                        class="ml-[-50px] w-full h-[211px] pl-[90px] pr-6 py-6 bg-[#171717] rounded-2xl flex-col justify-start gap-2 inline-flex"
                                    >
                                        <div class="text-cyan-200 text-xl font-semibold leading-[25px]">Discovery & Research</div>
                                        <div class="text-white text-base font-normal leading-tight">
                                            Understand customers, product, requirement, industry
                                        </div>
                                        <div class="mt-4 text-white text-base font-normal leading-tight">Gather user context</div>
                                        <div class="w-9 h-[18px] absolute right-[-30px] top-[82px] bg-[#171717]"></div>
                                    </div>
                                </div>
                                <div class="relative flex ml-14 w-[50%]">
                                    <div
                                        class="relative z-10 w-[150px] h-[150px] rounded-full border-[11px] border-cyan-400 flex justify-center items-center"
                                    >
                                        <div
                                            class="w-[128px] h-[128px] bg-neutral-900 rounded-full border-[6px] border-cyan-200 flex justify-center items-center"
                                        >
                                            <div class="text-neutral-700 text-7xl font-semibold leading-[108px]">02</div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative w-full ml-[-50px] h-[211px] pl-[90px] pr-6 py-6 bg-[#083344] rounded-2xl flex-col gap-2 inline-flex"
                                    >
                                        <div class="text-cyan-200 text-xl font-semibold leading-[25px]">Design & Testing</div>
                                        <div class="text-white text-base font-normal leading-tight">
                                            Use research outcomes to inform prototyping and design
                                        </div>
                                        <div class="mt-4 text-white text-base font-normal leading-tight">
                                            Test design with real users. stakeholder acceptance, iterate
                                        </div>
                                    </div>
                                    <div class="w-9 h-[18px] absolute left-[-30px] top-[82px] bg-cyan-400"></div>
                                </div>
                            </div>
                            <div class="mt-[92px] flex justify-between">
                                <div class="relative flex w-[50%]">
                                    <div
                                        class="relative z-10 w-[150px] h-[150px] rounded-full border-[11px] border-cyan-400 flex justify-center items-center"
                                    >
                                        <div
                                            class="w-[128px] h-[128px] bg-neutral-900 rounded-full border-[6px] border-cyan-100 flex justify-center items-center"
                                        >
                                            <div class="text-neutral-700 text-7xl font-semibold leading-[108px]">03</div>
                                        </div>
                                    </div>
                                    <div
                                        class="ml-[-50px] w-full h-[211px] pl-[90px] pr-6 py-6 bg-[#083344] rounded-2xl flex-col justify-start gap-2 inline-flex"
                                    >
                                        <div class="text-cyan-200 text-xl font-semibold leading-[25px]">Finalizing & Auditing</div>
                                        <div class="text-white text-base font-normal leading-tight">
                                            Developer hand-off, documentation, design auditing
                                        </div>
                                        <div class="w-9 h-[18px] absolute right-[-30px] top-[82px] bg-[#083344]"></div>
                                        <div class="absolute bg-[#083344] h-[18px] w-[220px] top-[-85px] right-[-172px] rotate-[-50deg]">
                                            <div class="absolute right-0 top-0 w-[55%] h-[18px] bg-cyan-400 z-10"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative flex ml-14 w-[50%]">
                                    <div
                                        class="relative z-10 w-[150px] h-[150px] rounded-full border-[11px] border-cyan-700 flex justify-center items-center"
                                    >
                                        <div
                                            class="w-[128px] h-[128px] bg-neutral-900 rounded-full border-[6px] border-cyan-200 flex justify-center items-center"
                                        >
                                            <div class="text-neutral-700 text-7xl font-semibold leading-[108px]">04</div>
                                        </div>
                                    </div>
                                    <div
                                        class="relative w-full ml-[-50px] h-[211px] pl-[90px] pr-6 py-6 bg-neutral-900 rounded-2xl flex-col gap-2 inline-flex"
                                    >
                                        <div class="text-cyan-200 text-xl font-semibold leading-[25px]">Measure & optimize</div>
                                        <div class="text-white text-base font-normal leading-tight">
                                            Evaluate and refine design based on measurement findings
                                        </div>
                                    </div>
                                    <div class="w-9 h-[18px] absolute left-[-30px] top-[82px] bg-cyan-400"></div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-12 border-dashed border-t border-neutral-500 py-12">
                            <div class="text-left">
                                <div class="text-white text-5xl font-semibold leading-10">1</div>
                                <div class="text-white text-base font-normal leading-tight pt-8 pl-3">
                                    <ul class="list-disc">
                                        <li>Business requirements</li>
                                        <li>Stakeholder sessions</li>
                                        <li>Competitor analysis</li>
                                        <li>Business requirements</li>
                                        <li>Design strategy</li>
                                        <li>Best practice and case studies review</li>
                                        <li>Persona profile</li>
                                        <li>User journey map</li>
                                        <li>Site flow maps</li>
                                        <li>Information Architecture</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="text-white text-5xl font-semibold leading-10">2</div>
                                <div class="text-white text-base font-normal leading-tight pt-8 pl-3">
                                    <ul class="list-disc">
                                        <li>Wireframe</li>
                                        <li>Interactive prototypes</li>
                                        <li>Brand guideline intake</li>
                                        <li>UI styleguides</li>
                                        <li>Design system</li>
                                        <li>High fidelity screens</li>
                                        <li>Acceptance testing</li>
                                        <li>Usability testing</li>
                                        <li>Heuristic evaluation</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="text-white text-5xl font-semibold leading-10">3</div>
                                <div class="text-white text-base font-normal leading-tight pt-8 pl-3">
                                    <ul class="list-disc">
                                        <li>Specification documents</li>
                                        <li>Developer handoff export</li>
                                        <li>Dev walk-throughs</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-left">
                                <div class="text-white text-5xl font-semibold leading-10">4</div>
                                <div class="text-white text-base font-normal leading-tight pt-8 pl-3">
                                    <ul class="list-disc">
                                        <li>User feedback</li>
                                        <li>Site flow analytics</li>
                                        <li>Support channel feedback</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="What I do when I'm not working">
                    <div>
                        <div class="text-left text-white">
                            <div class="text-2xl font-normal italic mb-6">What I do when I'm not working</div>
                            <div class="text-5xl font-semibold text-left leading-relaxed">What I do when I'm not working</div>
                        </div>
                        <div class="flex gap-12 mt-[52px]">
                            <div class="w-1/2 bg-neutral-900 p-6 text-left rounded-2xl relative">
                                <div class="text-white text-2xl font-semibold leading-loose">Tran Mai</div>
                                <div class="flex items-center text-white text-xl font-normal">
                                    Scan to find me on Strava
                                    <img src="@/assets/images/about/strava.svg" />
                                </div>
                                <img src="@/assets/images/about/qr.png" class="mt-4" />
                                <img src="@/assets/images/about/running.png" class="absolute right-0 bottom-0" />
                            </div>
                            <div class="w-1/2 text-white text-xl font-normal leading-loose text-left">
                                If you can't find me at my desk, I'm either running, or just enjoying a cup of tea with my favorite sweet.
                            </div>
                        </div>
                        <div class="relative pt-12">
                            <div class="flex gap-2">
                                <img src="@/assets/images/about/p1.png" />
                                <img src="@/assets/images/about/p2.png" />
                                <img src="@/assets/images/about/p3.png" />
                            </div>
                            <div class="flex gap-2 pt-2 w-full h-auto">
                                <img src="@/assets/images/about/p4.png" />
                                <img src="@/assets/images/about/p5.png" />
                                <img src="@/assets/images/about/p6.png" />
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
</template>
