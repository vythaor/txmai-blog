<script></script>
<template>
    <div class="px-[170px]">
        <div class="text-white">
            <div class="text-white text-2xl font-semibold leading-9 pb-6">Challenges and solutions</div>
            <div class="rounded-xl flex-col justify-start items-start gap-1 inline-flex">
                <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="grow shrink basis-0 self-stretch px-4 py-3 bg-neutral-900 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0">
                            <span style="text-white text-sm font-semibold font-['Poppins'] leading-none tracking-tight"
                                >Limited screen space<br /></span
                            ><span style="text-white text-base font-normal font-['Poppins'] leading-snug"
                                >Mobile devices typically have smaller screens compared to desktop monitors</span
                            >
                        </div>
                    </div>
                    <div class="grow shrink basis-0 h-28 px-4 py-3 bg-neutral-900 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0 text-white text-base font-normal font-['Poppins'] leading-snug">
                            Prioritize and condense the content to fit within the limited screen space while maintaining the key information and
                            functionality.
                        </div>
                    </div>
                </div>
                <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="grow shrink basis-0 self-stretch px-4 py-3 bg-neutral-800 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0">
                            <span style="text-white text-sm font-semibold font-['Poppins'] leading-none tracking-tight"
                                >Data visualization optimization<br /></span
                            ><span style="text-white text-base font-normal font-['Poppins'] leading-snug"
                                >Adapting complex charts and visualizations to smaller screens
                            </span>
                        </div>
                    </div>
                    <div class="grow shrink basis-0 h-28 px-4 py-3 bg-neutral-800 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0 text-white text-base font-normal font-['Poppins'] leading-snug">
                            Simplify or reformat the visualizations, prioritize essential data, and use interactive elements to allow users to explore
                            the data further.
                        </div>
                    </div>
                </div>
                <div class="self-stretch justify-start items-start gap-1 inline-flex">
                    <div class="grow shrink basis-0 self-stretch px-4 py-3 bg-neutral-900 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0">
                            <span style="text-white text-sm font-semibold font-['Poppins'] leading-none tracking-tight"
                                >Navigation and interaction<br /></span
                            ><span style="text-white text-base font-normal font-['Poppins'] leading-snug"
                                >Mobile interfaces require different interaction patterns compared to desktop interfaces.</span
                            >
                        </div>
                    </div>
                    <div class="grow shrink basis-0 self-stretch px-4 py-3 bg-neutral-900 justify-start items-start gap-2.5 flex">
                        <div class="grow shrink basis-0 text-white text-base font-normal font-['Poppins'] leading-snug">
                            Provide a seamless and intuitive user experience for navigation that is clear and easily accessible, taking into account
                            the limited screen space.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- section 2 -->
        <div class="py-8">
            <div class="text-white text-2xl font-semibold leading-9">Navigation Design</div>
            <div class="py-6 text-white text-xl font-semibold leading-normal">Report navigation on Power BI mobile</div>
            <div class="text-white text-base font-normal leading-snug">
                The Power BI reporting tool features a page navigator located at the bottom of the report interface. Nonetheless, users may not
                readily observe the relatively inconspicuous Pages button. To address this issue, the implementation of a hub and spoke pattern, which
                is a type of Information Architecture, can be beneficial.
            </div>
            <div class="flex justify-center py-4">
                <img src="@/assets/images/blog/blog-1/img-1.png" alt="blog" />
            </div>
            <div class="py-6 text-white text-xl font-semibold leading-normal">Hub and Spoke</div>
            <div class="text-white text-base font-normal leading-snug">
                The hub and spoke pattern is a type of Information Architecture that provides a central point of navigation (the hub) with links to
                related content (the spokes).<br /><br />
                Users can’t navigate between spokes but must return to the hub, instead. However this is becoming more prevalent within the mobile
                landscape due to users being focused on one task
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <img src="@/assets/images/blog/blog-1/img-2.png" alt="blog" />
                </div>
                <div class="p-2 text-cyan-200 text-sm font-normal leading-none tracking-tight">
                    <a href="https://flarehub.io" target="_blank"> Hub and Spoke pattern from flarehub.io </a>
                </div>
            </div>
            <div class="py-6 text-white text-xl font-semibold leading-normal">Apply Hub and Spoke to Power BI Mobile Dashboard</div>
            <div class="text-white text-base font-normal leading-snug">
                To create a hub and spoke navigation structure in Power BI, I designed a main hub page that provides an overview of the report's
                content and includes links to the spoke pages. Each spoke page can focus on a specific topic or area of the report, with its own set
                of visuals and analysis. By implementing the hub and spoke pattern in this way, it created a more intuitive and user-friendly
                navigation experience for report users, making it easier for them to explore and analyze the data.
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <img src="@/assets/images/blog/blog-1/img-3.png" alt="blog" />
                </div>
                <div class="text-white p-2 text-sm font-normal leading-none tracking-tight">Design a simple sitemap to see the flow</div>
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <img src="@/assets/images/blog/blog-1/img-4.png" alt="blog" />
                </div>
                <div class="text-white p-2 text-sm font-normal leading-none tracking-tight">Design an Overview page as a main hub page</div>
            </div>
            <div class="py-6 text-white text-xl font-semibold leading-normal">Closing thoughts</div>
            <div class="text-white text-base font-normal leading-snug">
                In conclusion, designing a mobile view for the Power BI Dashboard requires careful consideration of user needs and optimal data
                presentation. Prioritize key insights, ensure readability on smaller screens, and leverage interactive features to empower users on
                the go. With a well-designed mobile view, users can access critical information and make data-driven decisions effortlessly, enhancing
                the overall value of the Power BI Dashboard.
            </div>
        </div>
    </div>
</template>
