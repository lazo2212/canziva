<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import HeroSection from "@/Components/HeroSection.vue";

defineOptions({ layout: Layout });
</script>

<template>
    <Head title="Home" />

    <HeroSection />

    <div class="flex justify-between gap-14 py-10 mt-12 border-y-2">
        <span
            class="relative flex justify-center items-center h-36 w-36"
            v-for="i in 5"
            :key="i"
        >
            <svg
                class="absolute w-full h-full"
                width="94"
                height="88"
                viewBox="0 0 94 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M44.5625 88V67.6562C41.625 71.0687 35.75 75.2687 24.1762 78.4187C24.1762 78.4187 27.1138 70.9375 35.3975 65.9062C27.76 67.1312 16.245 66.9563 0.5 61.75C0.5 61.75 15.0112 55.5813 31.52 57.2438C22.1787 53 10.4875 44.6 1.49875 27.2312C1.49875 27.2312 27.9362 32.6125 41.0962 49.2375C29.17 27.8 47.5 0.5 47.5 0.5C61.7763 24.4312 58.7212 40.3125 54.08 49.0625C67.2988 32.5687 93.5013 27.2312 93.5013 27.2312C84.5125 44.6 72.8213 53 63.48 57.2438C79.9888 55.5813 94.5 61.75 94.5 61.75C78.755 66.9563 67.24 67.1312 59.6025 65.9062C67.8863 70.9375 70.8238 78.4187 70.8238 78.4187C59.25 75.2687 53.375 71.0687 50.4375 67.6562V88H44.5625Z"
                    fill="#333333"
                    fill-opacity="0.8"
                />
            </svg>
            <span class="trait absolute font-bold text-white"
                >VANJSKI UZGOJ</span
            >
        </span>
    </div>

    <div class="h-[60vh] flex items-center justify-center p-20">
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2"
        ></div>
        <div class="h-full w-1/2 relative px-20">
            <h1 class="text-4xl font-bold text-center mt-10">CBD PASTA</h1>
            <p class="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptates, quae, quibusdam dolorum quia quos
                exercitationem voluptatem quas quidem nemo. Quisquam, quidem
                voluptates. Quisquam, quidem voluptates.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid.svg"
                alt="canabinoid"
                width="400"
                height="200"
            />
        </div>
    </div>

    <div class="h-[60vh] flex items-center justify-center p-20">
        <div class="h-full w-1/2 relative px-20">
            <h1 class="text-4xl font-bold text-center mt-10">CBD PASTA</h1>
            <p class="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptates, quae, quibusdam dolorum quia quos
                exercitationem voluptatem quas quidem nemo. Quisquam, quidem
                voluptates. Quisquam, quidem voluptates.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid.svg"
                alt="canabinoid"
                width="400"
                height="200"
            />
        </div>
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2"
        ></div>
    </div>

    <div class="h-[60vh] flex items-center justify-center p-20">
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2"
        ></div>
        <div class="h-full w-1/2 relative px-20">
            <h1 class="text-4xl font-bold text-center mt-10">CBD PASTA</h1>
            <p class="text-center mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quod, voluptates, quae, quibusdam dolorum quia quos
                exercitationem voluptatem quas quidem nemo. Quisquam, quidem
                voluptates. Quisquam, quidem voluptates.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid.svg"
                alt="canabinoid"
                width="400"
                height="200"
            />
        </div>
    </div>
</template>

<style scoped>
.trait {
    text-align: center;
    font-size: 1.5rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
</style>
