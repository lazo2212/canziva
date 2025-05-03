<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import HeroSection from "@/Components/HeroSection.vue";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
    "PREMIUM KVALITETA",
    "ORGANSKI UZGOJ",
    "THC ≤ 0,2%",
    "VANJSKI UZGOJ",
    "VISOK SADRŽAJ KANABINOIDA",
];

onMounted(() => {
    gsap.utils.toArray(".parallax-section").forEach((section, index) => {
        gsap.fromTo(
            section,
            { y: 100, opacity: 0, scale: 1.1 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    end: "top",
                    scrub: true,
                    toggleActions: "play none none none",
                },
            }
        );
    });
});
</script>

<template>
    <Layout>
        <Head title="Home" />

        <HeroSection />

        <!-- TRAITS RAZDVAJAČ -->
        <div
            class="parallax-section flex justify-between py-12 my-10 rounded-lg"
        >
            <span
                class="relative flex justify-center items-center h-40 w-40"
                v-for="trait in traits"
            >
                <svg
                    class="absolute w-full h-full trait-shadow"
                    width="94"
                    height="88"
                    viewBox="0 0 94 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M44.5625 88V67.6562C41.625 71.0687 35.75 75.2687 24.1762 78.4187C24.1762 78.4187 27.1138 70.9375 35.3975 65.9062C27.76 67.1312 16.245 66.9563 0.5 61.75C0.5 61.75 15.0112 55.5813 31.52 57.2438C22.1787 53 10.4875 44.6 1.49875 27.2312C1.49875 27.2312 27.9362 32.6125 41.0962 49.2375C29.17 27.8 47.5 0.5 47.5 0.5C61.7763 24.4312 58.7212 40.3125 54.08 49.0625C67.2988 32.5687 93.5013 27.2312 93.5013 27.2312C84.5125 44.6 72.8213 53 63.48 57.2438C79.9888 55.5813 94.5 61.75 94.5 61.75C78.755 66.9563 67.24 67.1312 59.6025 65.9062C67.8863 70.9375 70.8238 78.4187 70.8238 78.4187C59.25 75.2687 53.375 71.0687 50.4375 67.6562V88H44.5625Z"
                        fill="#16a34a"
                    />
                </svg>
                <span class="trait absolute font-bold text-white mt-6">{{
                    trait
                }}</span>
            </span>
        </div>
        <!-- CBD SEKCIJA -->
        <section
            class="parallax-section xl:h-[550px] h-[600px] flex items-center justify-center bg-green-50 shadow-md shadow-black/60 rounded-lg my-16"
        >
            <div
                class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-tl-lg rounded-bl-lg"
            ></div>
            <div class="h-full w-1/2 relative p-10 ps-24">
                <h2 class="text-3xl font-bold mb-4">
                    <span class="text-green-700">CBD</span> pasta
                </h2>
                <p class="mt-2">
                    CBD (kanabidiol) pasta je prirodni proizvod, dobiven iz
                    industrijske konoplje, koja nudi brojne potencijalne
                    zdravstvene pogodnosti. Bogata je kanabinoidima, terpenima i
                    drugim korisnim spojevima koji podržavaju opće blagostanje
                    organizma.
                </p>
                <p class="font-bold mt-2">Neke od pogodnosti:</p>
                <ul class="list-disc ps-10 mb-6">
                    <li>Pomaže u smanjenju stresa i anksioznosti</li>
                    <li>Podržava miran san i opuštanje</li>
                    <li>Ublažava bolove i upale</li>
                    <li>Doprinosi općem zdravlju imunološkog sustava</li>
                </ul>
                <Link
                    href="#"
                    class="flex items-center w-max font-semibold hover:text-green-600 transition-all duration-150"
                    download
                    >Preuzmi certifikat
                    <img
                        src="/images/certificate.svg"
                        alt="certificate"
                        class="w-10 h-10 ms-2"
                    />
                </Link>
                <img
                    class="absolute bottom-5 left-5 opacity-50"
                    src="/images/canabinoid-cbd.svg"
                    alt="canabinoid"
                    width="350"
                    height="150"
                />
                <Link
                    href="/product/cbd"
                    class="absolute bottom-10 right-10 text-green-700 text-lg font-bold flex items-center border-b-4 border-transparent hover:border-green-700 transition-all duration-150"
                    >Saznaj više
                    <svg
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#15803d"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
        </section>
        <!-- BALANCE SEKCIJA -->
        <section
            class="parallax-section xl:h-[550px] h-[600px] flex items-center justify-center bg-purple-50 shadow-md shadow-black/60 rounded-lg my-16"
        >
            <div class="h-full w-1/2 relative p-10 ps-24">
                <h2 class="text-3xl font-bold mb-4">
                    <span class="text-purple-700">BALANCE</span> pasta (CBD/CBG)
                </h2>
                <p class="mt-2">
                    Balance pasta je jedinstveni prirodni proizvod, dobiven iz
                    industrijske konoplje, koja sadrži uravnoteženu kombinaciju
                    CBD-a i CBG-a. Ova sinergija dvaju kanabinoida omogućuje
                    učinkovitiji učinak zahvaljujući takozvanom "entourage
                    efektu".
                </p>
                <p class="font-bold mt-2">Neke od pogodnosti:</p>
                <ul class="list-disc ps-10 mb-6">
                    <li>Pruža uravnotežen učinak opuštanja i fokusa</li>
                    <li>Pomaže u smanjenju stresa i anksioznosti</li>
                    <li>Podržava zdravlje mišića i zglobova</li>
                    <li>Poboljšava kvalitetu sna</li>
                </ul>
                <Link
                    href="#"
                    class="flex items-center w-max font-semibold hover:text-purple-600 transition-all duration-150"
                    download
                    >Preuzmi certifikat
                    <img
                        src="/images/certificate.svg"
                        alt="certificate"
                        class="w-10 h-10 ms-2"
                    />
                </Link>
                <img
                    class="absolute bottom-5 left-5 opacity-50"
                    src="/images/canabinoid-balance.svg"
                    alt="canabinoid"
                    width="350"
                    height="150"
                />
                <Link
                    href="/product/balance"
                    class="absolute bottom-10 right-10 text-purple-700 text-lg font-bold flex items-center border-b-4 border-transparent hover:border-purple-700 transition-all duration-150"
                    >Saznaj više
                    <svg
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#7e22ce"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div
                class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-tr-lg rounded-br-lg"
            ></div>
        </section>
        <!-- CBG SEKCIJA -->
        <section
            class="parallax-section xl:h-[550px] h-[600px] flex items-center justify-center bg-orange-50 shadow-md shadow-black/60 rounded-lg my-16"
        >
            <div
                class="bg-[url('/images/cbd-pasta.jpg')] bg-cover bg-no-repeat h-full w-1/2 rounded-tl-lg rounded-bl-lg"
            ></div>
            <div class="h-full w-1/2 relative p-10 ps-24">
                <h2 class="text-3xl font-bold mb-4">
                    <span class="text-orange-700">CBG</span> pasta
                </h2>
                <p class="mt-2">
                    CBG (kanabigerol) pasta je prirodni proizvod, dobiven iz
                    industrijske konoplje. Ova pasta pruža specifične koristi
                    koje se razlikuju od CBD-a.
                </p>
                <p class="font-bold mt-2">Neke od pogodnosti:</p>
                <ul class="list-disc ps-10 mb-6">
                    <li>Potiče fokus i mentalnu jasnoću</li>
                    <li>Može smanjiti upale i ublažiti bol</li>
                    <li>Podržava zdravlje probavnog sustava</li>
                    <li>Pomaže u regulaciji raspoloženja</li>
                </ul>
                <Link
                    href="#"
                    class="flex items-center w-max font-semibold hover:text-orange-600 transition-all duration-150"
                    >Preuzmi certifikat
                    <img
                        src="/images/certificate.svg"
                        alt="certificate"
                        class="w-10 h-10 ms-2"
                    />
                </Link>
                <img
                    class="absolute bottom-5 left-5 opacity-50"
                    src="/images/canabinoid-cbg.svg"
                    alt="canabinoid"
                    width="350"
                    height="150"
                />
                <Link
                    href="/product/cbg"
                    class="absolute bottom-10 right-10 text-orange-700 text-lg font-bold flex items-center border-b-4 border-transparent hover:border-orange-700 transition-all duration-150"
                    >Saznaj više
                    <svg
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#c2410c"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
        </section>
        <!-- O NAMA -->
        <section
            class="parallax-section relative h-[800px] flex flex-col items-center justify-center shadow-md shadow-black/60 rounded-lg my-16 overflow-hidden"
        >
            <div
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style="background-image: url('/images/o-nama-bg.jpg')"
            ></div>
            <div
                class="relative z-10 flex flex-col items-center justify-center w-full h-full text-white bg-black bg-opacity-50"
            >
                <h2 class="text-3xl font-bold mb-4">O nama</h2>
                <p class="text-center max-w-2xl">
                    Naša tvrtka se ponosi proizvodnjom visokokvalitetnih
                    kanabinoidnih proizvoda iz industrijske konoplje. Naš cilj
                    je pružiti prirodne i učinkovite proizvode koji podržavaju
                    zdravlje i dobrobit naših kupaca.
                </p>
                <Link
                    href="/about"
                    class="mt-6 text-white text-lg font-bold flex items-center border-b-4 border-transparent hover:border-white transition-all duration-150"
                    >Saznaj više
                    <svg
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="#fff"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Link>
            </div>
        </section>
    </Layout>
</template>

<style scoped>
.trait-shadow {
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.8))
        drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.6))
        drop-shadow(0px 6px 1px rgba(0, 0, 0, 0.4))
        drop-shadow(0px 8px 1px rgba(0, 0, 0, 0.2));
}
.trait {
    text-align: center;
    font-size: 1.2rem;
    text-shadow: 1px 1px rgb(0, 0, 0), 0 2px 1px rgba(0, 0, 0, 0.8),
        0 4px 1px rgba(0, 0, 0, 0.6), 0 6px 1px rgba(0, 0, 0, 0.4),
        -1px 0 rgb(0, 0, 0), -1px -1px rgb(0, 0, 0);
}
</style>
