<template>
    <div>
        <div class="relative bg-[url('@/assets/images/hmi/section-1.png')] bg-cover h-0 pb-[calc(858/1440*100%)]">
            <div class="absolute inset-0 h-full">
                <div class="max-w-[calc(1001/1440*100vw)] h-full px-[168px] pb-[168px] flex flex-col justify-end gap-[50px]">
                    <div class="text-[#E6F4F2] text-[56px] font-semiboldleading-[70px]">Medical device User Experience Design</div>
                    <div>
                        <span class="text-white text-lg font-normal">
                            My approach for bidding on a design project is centered around utilizing the
                        </span>
                        <span class="text-[#6EC1C4] text-lg font-normal">User-Centered Design</span>
                        <span class="text-white text-lg font-normal">
                            (UCD) methodology to create designs that are focused on the needs and preferences of the users.
                        </span>
                    </div>
                    <div class="text-white flex items-center">
                        <div class="text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Stake</div>
                        <div class="ml-2 p-1 rounded border border-neutral-500 justify-start items-start gap-2.5 inline-flex">
                            <div class="text-sm font-semibold font-['Poppins'] leading-[17.50px]">HMI System</div>
                        </div>
                        <div class="ml-4">
                            <PowerBI />
                        </div>
                        <div class="h-[27px] border border-[#6D6D6D] mx-6"></div>
                        <div class="items-center gap-2 inline-flex">
                            <div class="text-xs font-semibold font-['Inter'] uppercase leading-[15px]">Client</div>
                            <div class="text-xs font-semibold font-['Poppins'] leading-[15px]">
                                a global leader in biomedical technology, US based
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-[url('@/assets/images/hmi/section-2.png')] bg-cover h-0 pb-[calc(1121/1440*100%)]">
            <div class="absolute inset-0 h-full">
                
            </div>
        </div>
    </div>
</template>
<script>
import { PowerBI } from '@/components/icons';

export default {
    name: 'HMISystem',
    components: {
        PowerBI,
    },
};
</script>
