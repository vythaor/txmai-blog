<script>
import feather from 'feather-icons';
// import FooterCopyright from './FooterCopyright.vue';
import { socialLinks } from '../../data/socialLinks';

export default {
    // components: { FooterCopyright },
    data() {
        return {
            socials: socialLinks,
        };
    },
    mounted() {
        feather.replace();
    },
    updated() {
        feather.replace();
    },
};
</script> 

<template>
    <div class="container mx-auto mb-12 sm:mb-12">
        <div class="flex flex-row justify-between pt-6 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light border-dashed dark:border-secondary-dark">
            <div class="flex flex-col">
                <router-link to="/"
                    ><img v-if="theme === 'light'" src="@/assets/images/logo.svg" class="w-16" alt="Dark Logo" />
                    <img v-else src="@/assets/images/logo.svg" class="w-16" alt="Light Logo" />
                </router-link>
                <!-- Footer social links -->
                <div class="flex mt-6 items-center">
                    <div class="font-normal text-base sm:text-base text-primary-dark dark:text-primary-light">My socials</div>
                    <ul class="ml-8 flex gap-4 sm:gap-8 ml-16 text-xl text-white">
                        <a
                            v-for="social in socials"
                            :key="social.id"
                            :href="social.url"
                            target="__blank"
                            class="text-white hover:text-brand dark:hover:text-brand cursor-pointer rounded-lg duration-500 italic underline"
                        >
                            {{ social.name }}
                        </a>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col text-left bg-neutral-800 font-general-normal p-5 rounded-xl">
                <div class="flex items-center mb-4">
                    <img src="@/assets/icons/phone.svg" class="w-12" alt="Phone icon" />
                    <div class="ml-4 text-2xl text-brand">(+84) 78 444 3157</div>
                </div>
                <div class="flex items-center">
                    <img src="@/assets/icons/mail.svg" class="w-12" alt="Mail icon" />
                    <div class="ml-4 text-2xl text-brand font-general-normal">xuanmai1308@gmail.com</div>
                </div>
            </div>

            <!-- Footer copyright -->
            <!-- <FooterCopyright /> -->
        </div>
    </div>
</template>

<style scoped></style>
