<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";

import { onMounted } from "vue";
import { gsap } from "gsap";

onMounted(() => {
    gsap.utils.toArray(".h-screen").forEach((section, i) => {
        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true,
                },
            }
        );
    });
});
</script>

<template>
    <Layout>
        <Head title="O nama" />

        složit paralax da kad skrolaš te uvede u priču o nama, kako smo krenuli,
        na šta se bazira naš uzgoj, koji nam je cilj i td.

        <div class="h-screen w-full relative overflow-hidden">
            <div
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style="background-image: url('/images/o-nama-bg.jpg')"
            ></div>
            <div
                class="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50"
            >
                <h1 class="text-6xl font-bold mb-4">O nama</h1>
                <p class="text-xl max-w-3xl text-center">
                    Dobrodošli na našu stranicu! Krenuli smo s idejom da spojimo
                    tradiciju i inovaciju u uzgoju. Naša priča temelji se na
                    ljubavi prema prirodi i želji da pružimo najbolje.
                </p>
            </div>
        </div>

        <div
            class="h-screen w-full flex items-center justify-center bg-gray-100"
        >
            <div class="max-w-4xl text-center">
                <h2 class="text-4xl font-bold mb-6">Naša misija</h2>
                <p class="text-lg">
                    Naš uzgoj bazira se na održivosti i kvaliteti. Cilj nam je
                    ponuditi proizvode koji su prirodni, zdravi i proizvedeni s
                    ljubavlju. Svaki korak u našem procesu pažljivo je osmišljen
                    kako bismo očuvali okoliš i pružili najbolje našim kupcima.
                </p>
            </div>
        </div>

        <div class="h-screen w-full relative overflow-hidden">
            <div
                class="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style="background-image: url('/images/uzgoj.jpg')"
            ></div>
            <div
                class="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50"
            >
                <h2 class="text-5xl font-bold mb-4">Kako uzgajamo</h2>
                <p class="text-xl max-w-3xl text-center">
                    Naš uzgoj temelji se na prirodnim metodama, bez upotrebe
                    štetnih kemikalija. Svaka biljka raste u idealnim uvjetima,
                    uz puno pažnje i brige.
                </p>
            </div>
        </div>

        <div
            class="h-screen w-full flex items-center justify-center bg-gray-100"
        >
            <div class="max-w-4xl text-center">
                <h2 class="text-4xl font-bold mb-6">Naš cilj</h2>
                <p class="text-lg">
                    Naš cilj je postati sinonim za kvalitetu i održivost. Želimo
                    inspirirati druge da se okrenu prirodi i zdravijem načinu
                    života.
                </p>
            </div>
        </div>
    </Layout>
</template>
