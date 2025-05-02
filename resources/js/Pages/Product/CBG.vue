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
        <Head>
            <title>CBG full spectrum pasta</title>
            <meta
                name="description"
                content="Naša CBG pasta je čisti extrakt kanabigerola (CBG) sa punim spektrom ostalih kanabinoida i terpena sa manje od 2% THC-a. Saznaj više o našoj CBG pasti i njenim prednostima."
            />
            <meta
                name="keywords"
                content="CBG, CBG pasta, CBG smola, cbg, health, full spectrum, puni spektar, tepeni, kanabinoidi"
            />
            <meta name="author" content="Benjamin Lazić" />
        </Head>

        <div class="w-full">
            <section
                class="mb-12 shadow-md shadow-gray-400 bg-orange-50 rounded-lg p-8 parallax-section"
            >
                <div class="flex justify-center items-center">
                    <div class="w-1/2">
                        <h1 class="text-3xl font-bold font-monserat mb-2">
                            CBG full spectrum pasta – 5ml
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
                            Pasta od Cannabis Sativa L konoplje
                        </p>

                        <p class="mb-1">
                            ✨ Čista, zlatna smola - bez oporog okusa i
                            klorofila
                        </p>
                        <p class="mb-4">
                            🔬 Visoka koncentracija CBG-a + puni spektar
                            kanabinoida i terpena
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

            <ul>
                <li>
                    <a
                        class="text-blue-500"
                        href="https://vutropedija.com/sto-je-cbg-i-koje-su-koristi-ovog-kanabinoida/"
                        >Što je cbg i koje su koristi ovog kanabinoida?</a
                    >
                </li>
                <li>
                    <a
                        class="text-blue-500"
                        href="https://vutropedija.com/sto-je-i-kako-djeluje-cbg/"
                        >Što je i kako djeluje cbg?</a
                    >
                </li>
                <li>
                    <a
                        class="text-blue-500"
                        href="https://garica.hr/2020/08/27/cbg-majka-svih-kanabinoida/"
                        >Cbg - majka svih kanabinoida</a
                    >
                </li>
            </ul>

            <article
                class="mb-4 shadow-md shadow-gray-400 bg-orange-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Što je CBG i zašto je poseban?
                </h2>
                <p>
                    CBG je jedan od najpotentnijih, ali i najmanje zastupljenih
                    kanabinoida u prirodnoj konoplji. Naziva se "ćelijom majkom"
                    jer svi ostali kanabinoidi (uključujući CBD i THC) potječu
                    iz CBG-a.
                </p>
                <p>
                    Zbog te činjenice, njegova je proizvodnja znatno
                    zahtjevnija, ali istovremeno nudi jedinstvene koristi:
                </p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">Može pomoći kod upalnih stanja crijeva</li>
                    <li class="ms-6">
                        Pokazuje potencijal u borbi protiv glaukoma
                    </li>
                    <li class="ms-6">
                        Djeluje neuroprotektivno, što ga čini zanimljivim za
                        neurološke bolesti
                    </li>
                    <li class="ms-6">
                        Antibakterijska svojstva, pogotovo protiv rezistentnih
                        sojeva poput MRSA
                    </li>
                </ul>
            </article>

            <article
                class="mb-4 shadow-md shadow-gray-400 bg-orange-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Kako koristiti CBG pastu?
                </h2>
                <p>
                    Zbog visoke koncentracije, preporučuje se početna doza
                    veličine zrna riže. Postupno povećavajte dozu ovisno o
                    vlastitoj toleranciji i potrebama.
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
                class="shadow-md shadow-gray-400 bg-orange-50 rounded-lg p-8 parallax-section"
            >
                <h2 class="font-bold text-xl mb-1">
                    Moguće nuspojave prilikom korištenja CBG smole
                </h2>
                <p>
                    CBG se generalno dobro podnosi, ali kod većih doza moguća
                    su:
                </p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">blagi umor</li>
                    <li class="ms-6">suha usta</li>
                    <li class="ms-6">povećan apetit</li>
                </ul>
            </article>
        </div>
    </Layout>
</template>
