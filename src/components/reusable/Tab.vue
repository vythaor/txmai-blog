<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isActive: false,
        };
    },
    mounted() {
        this.$parent.registerTab(this);
    },
    methods: {
        setActive() {
            this.isActive = true;
        },
        unsetActive() {
            this.isActive = false;
        },
    },
};
</script>
