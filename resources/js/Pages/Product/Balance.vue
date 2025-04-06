<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.utils.toArray(".parallax-section").forEach((section, index) => {
        gsap.fromTo(
            section,
            { y: 100, opacity: 0, scale: 1.4 },
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
        <Head>
            <title>BALANCE full spectrum pasta</title>
            <meta
                name="description"
                content="Naša BALANCE pasta je kombinacija extrakata kanabidiola (CBG) i (CBD) sa punim spektrom ostalih kanabinoida i terpena sa manje od 2% THC-a. Saznaj više o našoj BALANCE pasti i njenim prednostima."
            />
            <meta
                name="keywords"
                content="BALANCE, CBD, CBG, BALANCE pasta, CBD smola, CBG smola, cbd, cbg, health, full spectrum, puni spektar, tepeni, kanabinoidi"
            />
            <meta name="author" content="Benjamin Lazić" />
        </Head>

        <div class="w-full">
            <section
                class="mb-12 shadow-md shadow-gray-400 bg-purple-50 rounded-lg p-8 parallax-section"
            >
                <div class="flex justify-center items-center">
                    <div class="w-1/2">
                        <h1 class="text-4xl font-bold font-monserat mb-2">
                            Balance full spectrum pasta – 5ml
                        </h1>
                        <p
                            class="text-3xl text-gray-500 font-semibold font-monserat mb-4"
                        >
                            Cijena: 100€
                        </p>
                        <p class="mb-1">
                            <img
                                src="/images/cannabis.svg"
                                alt="cannabis image"
                                class="w-5 h-5 inline-block"
                            />
                            Pasta od Cannabis Sativa L konoplje – idealna
                            sinergija CBD-a i CBG-a
                        </p>

                        <p class="mb-1">
                            ✨ Puna, zlatna smola – bez klorofila, blaga za
                            želudac, moćna za um
                        </p>
                        <p class="mb-4">
                            🔬 1:1 omjer CBD i CBG kanabinoida za optimalnu
                            ravnotežu tijela i uma
                        </p>
                        <ul class="mb-4">
                            <li class="ms-10 font-semibold">
                                ✔ alkoholna ekstrakcija
                            </li>
                            <li class="ms-10 font-semibold">
                                ✔ puni spektar kanabinoida, flavonoida i terpena
                            </li>
                            <li class="ms-10 font-semibold">
                                ✔ laboratorijski ispitano
                            </li>
                            <li class="ms-10 font-semibold">
                                ✔ organski uzgoj
                            </li>
                            <li class="ms-10 font-semibold">
                                ✔ bez dodanih kemikalija
                            </li>
                            <li class="ms-10 font-semibold">
                                ✔ veganski i bez glutena
                            </li>
                        </ul>
                        <p class="text-gray-500">
                            Dodatak prehrani - nije nadomjestak uravnoteženoj
                            prehrani.
                        </p>
                    </div>

                    <div>
                        <img
                            src="/images/cbd-pasta.jpg"
                            alt="CBD pasta"
                            class="rounded-md"
                        />
                    </div>
                </div>
            </section>

            <article
                class="mb-4 shadow-md shadow-gray-400 bg-purple-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Zašto kombinirati CBD i CBG?
                </h2>
                <p>
                    CBD je poznat po svom učinku na opuštanje, san i ublažavanje
                    boli, dok CBG djeluje više fokusirano, protuupalno i
                    neuroprotektivno.
                </p>
                <p>
                    Zajedno, djeluju sinergijski – pojačavaju međusobno
                    djelovanje kroz entourage efekt.
                </p>
                <p>Primjena Balance paste je korisna kod:</p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">
                        stanja stresa i tjeskobe uz zadržavanje fokusa
                    </li>
                    <li class="ms-6">kroničnih upala i bolova</li>
                    <li class="ms-6">nesanice bez osjećaja “težine” ujutro</li>
                    <li class="ms-6">podrške probavnom i živčanom sustavu</li>
                </ul>
            </article>

            <article
                class="mb-4 shadow-md shadow-gray-400 bg-purple-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Kako koristiti Balance pastu?
                </h2>
                <p>
                    Kao i kod drugih smola, preporučuje se početna doza veličine
                    zrna riže. Zbog uravnoteženog sastava, možete ju koristiti i
                    ujutro i navečer – ovisno o cilju.
                </p>
                <p>Načini primjene:</p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">
                        <b>oralno</b> - možete ju razrijediti u tekućini ili
                        umiješati u hranu
                    </li>
                    <li class="ms-6">
                        <b>sublingvalno</b> - stavljanjem paste pod jezik
                        postiže se maksimalna bioraspoloživost
                    </li>
                    <li class="ms-6">
                        <b>topikalno</b> - možete je nanijeti izravno na kožu i
                        umasirati
                    </li>
                </ul>
            </article>

            <article
                class="shadow-md shadow-gray-400 bg-purple-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Moguće nuspojave prilikom korištenja BALANCE smole
                </h2>
                <p>
                    CBG se generalno dobro podnosi, ali kod većih doza moguća
                    su:
                </p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">
                        blaga pospanost kod osjetljivijih korisnika
                    </li>
                    <li class="ms-6">suha usta</li>
                    <li class="ms-6">promjene apetita</li>
                </ul>
            </article>
        </div>
    </Layout>
</template>
