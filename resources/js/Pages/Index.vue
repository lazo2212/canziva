<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import Nav from "@/Components/Nav.vue";
import HeroSection from "@/Components/HeroSection.vue";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
    "VANJSKI UZGOJ",
    "ORGANSKI UZGOJ",
    "PREMIUM KVALITETA",
    "VISOK SADRŽAJ KANABINOIDA",
    "THC ≤ 0,2%",
];

const cartItems = ref(0);

const addToCart = () => {
    cartItems.value++;
};

onMounted(() => {
    gsap.utils.toArray(".parallax-section").forEach((section, index) => {
        gsap.fromTo(
            section,
            { y: 150, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 100%",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play none none none",
                },
            }
        );
    });
});

defineOptions({ layout: Layout });
</script>

<template>
    <Head title="Home" />

    <Nav :cart-items="cartItems" />

    <HeroSection :add-to-cart="addToCart" />

    <!-- TRAITS RAZDVAJAČ -->
    <div
        class="parallax-section flex justify-between gap-14 py-12 mt-12 border-y-2"
    >
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
                    fill="#16a34a"
                    fill-opacity="0.6"
                />
            </svg>
            <span class="trait absolute font-bold text-white mt-4">{{
                trait
            }}</span>
        </span>
    </div>
    <!-- CBD SEKCIJA -->
    <section
        class="parallax-section h-[60vh] flex items-center justify-center bg-green-50 shadow-md shadow-green rounded-lg my-16"
    >
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
        <div class="h-full w-1/2 relative p-10 ps-24">
            <h2 class="text-3xl font-bold mb-4">
                <span class="text-green-700">CBD</span> pasta
            </h2>
            <p class="mt-2">
                CBD (kanabidiol) pasta je prirodni proizvod dobiven iz
                industrijske konoplje koji nudi brojne potencijalne zdravstvene
                prednosti. Bogata je kanabinoidima, terpenima i drugim korisnim
                spojevima koji podržavaju opće blagostanje organizma.
            </p>
            <p class="font-bold mt-2">Prednosti:</p>
            <ul class="list-disc ps-10 mb-6">
                <li>Pomaže u smanjenju stresa i anksioznosti</li>
                <li>Podržava zdrav san i opuštanje</li>
                <li>Može ublažiti bolove i upale</li>
                <li>Doprinosi općem zdravlju imunološkog sustava</li>
            </ul>
            <a href="#">Preuzmi certifikat</a>
            <img
                class="absolute bottom-5 left-5 opacity-50"
                src="/images/canabinoid-cbd.svg"
                alt="canabinoid"
                width="350"
                height="150"
            />
            <Link
                href="/product/cbd"
                class="absolute bottom-10 right-10 text-green-700 text-lg font-bold hover:underline"
                >Saznaj više</Link
            >
        </div>
    </section>
    <!-- BALANCE SEKCIJA -->
    <section
        class="parallax-section h-[60vh] flex items-center justify-center bg-purple-50 shadow-md shadow-purple rounded-lg my-16"
    >
        <div class="h-full w-1/2 relative p-10 ps-24">
            <h2 class="text-3xl font-bold mb-4">
                <span class="text-purple-700">BALANCE</span> pasta (CBD/CBG)
            </h2>
            <p class="mt-2">
                Balance pasta je jedinstveni proizvod koji sadrži uravnoteženu
                kombinaciju CBD-a i CBG-a u omjeru 1:1. Ova sinergija dvaju
                kanabinoida omogućuje učinkovitiji učinak zahvaljujući tzv.
                "entourage efektu".
            </p>
            <p class="font-bold mt-2">Prednosti:</p>
            <ul class="list-disc ps-10 mb-6">
                <li>Pruža uravnotežen učinak opuštanja i fokusa</li>
                <li>Pomaže u smanjenju stresa i anksioznosti</li>
                <li>Podržava zdravlje mišića i zglobova</li>
                <li>Može poboljšati kvalitetu sna</li>
            </ul>
            <a href="#">Preuzmi certifikat</a>
            <img
                class="absolute bottom-5 left-5 opacity-50"
                src="/images/canabinoid-balance.svg"
                alt="canabinoid"
                width="350"
                height="150"
            />
            <Link
                href="/product/balance"
                class="absolute bottom-10 right-10 text-purple-700 text-lg font-bold hover:underline"
                >Saznaj više</Link
            >
        </div>
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
    </section>
    <!-- CBG SEKCIJA -->
    <section
        class="parallax-section h-[60vh] flex items-center justify-center bg-orange-50 shadow-md shadow-orange rounded-lg my-16"
    >
        <div
            class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-lg"
        ></div>
        <div class="h-full w-1/2 relative p-10 ps-24">
            <h2 class="text-3xl font-bold mb-4">
                <span class="text-orange-700">CBG</span> pasta
            </h2>
            <p class="mt-2">
                CBG (kanabigerol) pasta poznata je kao "majka svih kanabinoida"
                jer se iz nje tijekom sazrijevanja biljke stvaraju ostali
                kanabinoidi. Ova pasta pruža specifične koristi koje se
                razlikuju od CBD-a.
            </p>
            <p class="font-bold mt-2">Prednosti:</p>
            <ul class="list-disc ps-10 mb-6">
                <li>Potiče fokus i mentalnu jasnoću</li>
                <li>Može smanjiti upale i ublažiti bol</li>
                <li>Podržava zdravlje probavnog sustava</li>
                <li>Pomaže u regulaciji raspoloženja</li>
            </ul>
            <a href="#">Preuzmi certifikat</a>
            <img
                class="absolute bottom-5 left-5 opacity-50"
                src="/images/canabinoid-cbg.svg"
                alt="canabinoid"
                width="350"
                height="150"
            />
            <Link
                href="/product/cbg"
                class="absolute bottom-10 right-10 text-orange-700 text-lg font-bold hover:underline"
                >Saznaj više</Link
            >
        </div>
    </section>
</template>

<style scoped>
.trait {
    text-align: center;
    font-size: 1.2rem;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8),
        -0.5px -0.5px rgba(0, 0, 0, 0.8);
}
</style>
