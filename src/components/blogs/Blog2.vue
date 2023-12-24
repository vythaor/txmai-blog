<script></script>
<template>
    <div class="px-[170px]">
        <div class="text-white">
            <div class="text-white text-2xl font-semibold leading-9 pb-6">Reasons to build smart components</div>
            <div class="text-white text-base font-normal leading-snug">
                Building smart components in Figma for a design system is important for several reasons:
            </div>
            <div class="w-96 h-16 py-6 justify-between items-start gap-6 inline-flex">
                <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Consistency</div>
                </div>
                <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Reusability</div>
                </div>
                <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Scalability</div>
                </div>
                <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Collaboration</div>
                </div>
                <div class="px-3 py-6 bg-cyan-800 rounded-lg justify-center items-center gap-2.5 flex">
                    <div class="text-white text-base font-normal font-['Poppins'] leading-tight">Maintenance</div>
                </div>
            </div>
        </div>
        <!-- section 2 -->
        <div class="py-16">
            <div class="text-white text-2xl font-semibold leading-9">Key concepts</div>
            <div class="text-white text-base font-normal leading-snug py-6">
                When building smart components in Figma, there are three key concepts to consider: the .base component, component properties, and
                slots.
            </div>
            <div class="text-white text-xl font-semibold leading-normal">.base component</div>
            <div class="text-white text-base font-normal leading-snug py-6">
                The .base components serve as the foundation, providing a centralized source of truth that can be easily modified and updated.
                <br /><br />
                It defines the core structure, styling, and functionality that will be shared across multiple instances.
            </div>
            <div class="flex flex-col items-center py-4">
                <div>
                    <img src="@/assets/images/blog/blog-2/img-1.png" alt="blog" />
                </div>
                <div class="text-white p-2 text-sm font-normal leading-none tracking-tight">
                    Using .base components to create Input, dropdown, search components
                </div>
            </div>
            <div class="py-6 text-white text-xl font-semibold leading-normal">Component Properties</div>
            <ul class="list-disc text-white pl-4">
                <li>Variant property</li>
                <li>Boolean property</li>
                <li>Instance swap</li>
                <li>Text property</li>
                <li>Exposed nested instance</li>
                <li>Preferred values</li>
            </ul>
        </div>
        <div class="flex flex-col items-center py-4">
            <div>
                <video controls class="rounded-md shadow-md">
                    <source src="@/assets/images/blog/blog-2/video-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
            <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight">Expose nested component demo</div>
        </div>
        <div class="flex flex-col items-center py-4">
            <div>
                <video controls class="rounded-md shadow-md">
                    <source src="@/assets/images/blog/blog-2/video-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
            <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight">Preferred value demo</div>
        </div>
        <div class="text-white text-xl font-semibold leading-normal pt-6">Slots</div>
        <div class="text-white text-base font-normal leading-snug py-6">
            Slots are placeholders within a component that allow users to insert or replace specific content. They provide the ability to customize
            the component's content while preserving its overall structure and functionality.
        </div>
        <div class="flex flex-col items-center py-4">
            <div>
                <video controls class="rounded-md shadow-md">
                    <source src="@/assets/images/blog/blog-2/video-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
            <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight">Apply .base components, components properties, slot to build a dynamic cell table</div>
        </div>
        <div class="flex flex-col items-center py-4">
            <div>
                <video controls class="rounded-md shadow-md">
                    <source src="@/assets/images/blog/blog-2/video-4.mp4" type="video/mp4" />
                    Your browser does not support the video tag
                </video>
            </div>
            <div class="text-neutral-200 text-sm font-normal leading-none tracking-tight">Apply components properties, slot to build page template</div>
        </div>
        <div class="py-6 text-white text-xl font-semibold leading-normal">Closing thoughts</div>
            <div class="text-white text-base font-normal leading-snug">
                In conclusion, designing a mobile view for the Power BI Dashboard requires careful consideration of user needs and optimal data
                presentation. Prioritize key insights, ensure readability on smaller screens, and leverage interactive features to empower users on
                the go. With a well-designed mobile view, users can access critical information and make data-driven decisions effortlessly, enhancing
                the overall value of the Power BI Dashboard.
            </div>
    </div>
</template>
