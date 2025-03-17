<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import HeroSection from "@/Components/HeroSection.vue";

const traits = [
    "VANJSKI UZGOJ",
    "ORGANSKI UZGOJ",
    "PREMIUM KVALITETA",
    "VISOK SADRŽAJ KANABINOIDA",
    "THC ≤ 0,2%",
];

defineOptions({ layout: Layout });
</script>

<template>
    <Head title="Home" />

    <HeroSection />

    <div class="flex justify-between gap-14 py-10 mt-12 border-y-2">
        <span
            class="relative flex justify-center items-center h-36 w-36"
            v-for="trait in traits"
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
                    fill="#444"
                    fill-opacity="0.6"
                />
            </svg>
            <span class="trait absolute font-bold text-white mt-4">{{
                trait
            }}</span>
        </span>
    </div>

    <div class="h-[60vh] flex items-center justify-center py-20">
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
        <div class="h-full w-1/2 relative ps-24">
            <h2 class="text-3xl font-bold">
                <span class="text-green-700">CBD</span> extrakt punog spektra
            </h2>
            <p class="mt-2">
                Sadrži 5000mg kanabidiola dobivenog iz cvjetova industrijske
                konoplje postupkom ekstrakcije CO₂, kokosovo ulje i pčelinji
                vosak.
            </p>
            <ul class="list-disc ps-10 mt-2">
                <li>99% CBD (5000mg)</li>
                <li>THC ≤ 0,2%</li>
                <li>Sadržaj: 5ml CBD smola</li>
            </ul>
            <p class="mt-2">
                Ekstrakt je konzistencije slične smoli, iznimnih terapeutskih
                svojstava, dobiven iz cvjetova industrijske konoplje kojeg radi
                prevladavajućeg aktivnog sastojka kanabidiola nazivamo i CBD
                pasta.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid-cbd.svg"
                alt="canabinoid"
                width="400"
                height="200"
            />
        </div>
    </div>

    <div class="h-[60vh] flex items-center justify-center py-20">
        <div class="h-full w-1/2 relative ps-24">
            <h2 class="text-3xl font-bold">
                <span class="text-purple-700">BALANCE</span> extrakt punog
                spektra
            </h2>
            <p class="mt-2">
                Sadrži 5000mg kanabidiola dobivenog iz cvjetova industrijske
                konoplje postupkom ekstrakcije CO₂, kokosovo ulje i pčelinji
                vosak.
            </p>
            <ul class="list-disc ps-10 mt-2">
                <li>50% CBD (2500mg) i 50% CBG (2500mg)</li>
                <li>THC ≤ 0,2%</li>
                <li>Sadržaj: 2.5ml CBD i 2.5ml CBG smola</li>
            </ul>
            <p class="mt-2">
                Ekstrakt je konzistencije slične smoli, iznimnih terapeutskih
                svojstava, dobiven iz cvjetova industrijske konoplje kojeg radi
                prevladavajućeg aktivnog sastojka kanabidiola nazivamo i BALANCE
                pasta.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid-balance.svg"
                alt="canabinoid"
                width="400"
                height="200"
            />
        </div>
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
    </div>

    <div class="h-[60vh] flex items-center justify-center py-20">
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
        <div class="h-full w-1/2 relative ps-24">
            <h2 class="text-3xl font-bold">
                <span class="text-orange-700">CBG</span> extrakt punog spektra
            </h2>
            <p class="mt-2">
                Sadrži 5000mg kanabidiola dobivenog iz cvjetova industrijske
                konoplje postupkom ekstrakcije CO₂, kokosovo ulje i pčelinji
                vosak.
            </p>
            <ul class="list-disc ps-10 mt-2">
                <li>99% CBG (5000mg)</li>
                <li>THC ≤ 0,2%</li>
                <li>Sadržaj: 5ml CBG smola</li>
            </ul>
            <p class="mt-2">
                Ekstrakt je konzistencije slične smoli, iznimnih terapeutskih
                svojstava, dobiven iz cvjetova industrijske konoplje kojeg radi
                prevladavajućeg aktivnog sastojka kanabidiola nazivamo i CBG
                pasta.
            </p>

            <img
                class="absolute bottom-0 left-0"
                src="/images/canabinoid-cbg.svg"
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
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}
</style>
