<template>
    <div>
        <div class="w-full border-b border-dashed border-gray-400 justify-start items-center inline-flex">
            <div
                v-for="(tab, index) in tabs"
                :key="index"
                @click="activateTab(tab)"
                :class="{ 'active border-b-2 border-cyan-600 text-[#0E7490]': tab.isActive }"
                class="cursor-pointer mb-[-1px] px-6 py-4 justify-center items-center gap-2.5 flex"
            >
                <div class="text-base font-semibold">{{ tab.title }}</div>
            </div>
        </div>
        <div class="tab-content mt-12">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    data() {
        return {
            tabs: [],
        };
    },
    methods: {
        registerTab(tab) {
            this.tabs.push(tab);
        },
        activateTab(activeTab) {
            this.tabs.forEach((tab) => {
                tab.unsetActive();
            });
            activeTab.setActive();
        },
    },
    mounted() {
        if (this.tabs.length > 0) {
            this.activateTab(this.tabs[1]);
        }
    },
};
</script>
