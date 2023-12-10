<script>
import { FigmaIcon, Web3Icon } from '@/components/icons';

export default {
    name: 'Fiserv',
    components: {
        FigmaIcon,
        Web3Icon,
    },
};
</script>
<template>
    <!-- Hero banner -->
    <div class="bg-[url('@/assets/images/fiserv/s1-bg.png')] relative pb-[calc(788/1440*100%)]">
        <div class="absolute inset-0">
            <div class="flex flex-col items-start justify-end h-full">
                <div class="pt-0 p-[168px] text-white w-[75%]">
                    <div class="text-white text-6xl font-semibold leading-[70px]">
                        Global fintech products
                        <span class="text-[#ff6600]">for banking</span>
                    </div>
                    <div class="py-12 text-lg">
                        Fiserv, a top-ranked US fintech company, aims to digitize and upgrade their window application for customer satisfaction and
                        future scalability.
                    </div>
                    <div>
                        <div class="flex gap-6">
                            <div class="flex items-center gap-4 pr-6 border-r border-neutral-500">
                                <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Stake</div>
                                <FigmaIcon />
                                <Web3Icon />
                            </div>
                            <div class="flex items-center gap-4">
                                <div class="text-white text-xs font-semibold font-inter uppercase leading-none">Client</div>
                                <img src="@/assets/icons/fiserv.svg" alt="Fiserv" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero banner -->
    <!-- Card Services -->
    <div class="relative bg-gray-50">
        <img src="@/assets/images/fiserv/s2-bg.png" />
        <div class="absolute flex flex-col items-start justify-center h-full top-0 px-[168px]">
            <div class="text-orange-500 text-5xl font-medium font-['Poppins'] leading-10">
                Card
                <span class="text-black text-5xl font-medium leading-10">services</span>
            </div>
            <div class="text-neutral-900 text-lg font-normal py-2">
                Improve cardholder acquisition, retention and loyalty with debit and credit solutions. Below are some products of fiserv solutions I
                worked with
            </div>
            <div class="flex pt-6 w-full justify-start items-start gap-8">
                <div class="flex items-start w-1/2">
                    <img src="@/assets/images/fiserv/security.svg" alt="security" />
                    <div class="ml-6">
                        <div class="text-gray-800 text-3xl font-semibold leading-10">Dispute workstation</div>
                        <div class="text-neutral-900 text-lg font-normal">
                            An online dispute processing tool where facilitates the investigation and tracking of disputed transactions.
                        </div>
                    </div>
                </div>
                <div class="flex items-start w-1/2">
                    <img src="@/assets/images/fiserv/pay.svg" alt="security" />
                    <div class="ml-6">
                        <div class="text-gray-800 text-3xl font-semibold leading-10">Paypoint</div>
                        <div class="text-neutral-900 text-lg font-normal">An online payment gateway management for bank back office.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Card Services -->
    <!-- Responsibilites -->
    <div class="bg-gray-200 flex items-center">
        <img src="@/assets/images/fiserv/s3-shape.png" />
        <div class="flex flex-col justify-center h-full top-0 px-[168px]">
            <div class="text-orange-500 text-5xl font-medium font-['Poppins'] leading-10">
                My
                <span class="text-black text-5xl font-medium leading-10">responsibilities</span>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">User Interface Design</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Created visually appealing and accessible designs that align with the brand identity.
                </div>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">Collaborating with Stakeholders</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Worked closely with US product owner and other cross-functional team members to understand project requirements, provide design
                    recommendations.
                </div>
            </div>
            <div>
                <div class="pt-8 text-black text-lg font-semibold">Design System Development</div>
                <div class="pt-2 text-neutral-900 text-lg font-normal">
                    Contributed to the development and maintenance of a design system, ensuring consistency across different products and improving
                    overall efficiency.
                </div>
            </div>
        </div>
    </div>
    <!-- End Responsibilites -->
    <!-- Outcomes -->
    <div class="bg-black p-[168px]">
        <div class="text-emerald-50 text-6xl font-semibold">Outcomes</div>
        <div class="flex pt-16 gap-6">
            <img src="@/assets/images/fiserv/oc1.png" />
            <img src="@/assets/images/fiserv/oc2.png" />
            <img src="@/assets/images/fiserv/oc3.png" />
        </div>
        <div class="flex gap-10 pt-16">
            <img src="@/assets/images/fiserv/oc4.png" />
            <img src="@/assets/images/fiserv/oc5.png" />
        </div>
    </div>
    <!-- End Outcomes -->
</template>
