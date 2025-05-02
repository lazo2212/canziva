<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
import { onMounted } from "vue";
import { useCartStore } from "@/cart";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const cart = useCartStore();
function addItemToCart() {
    cart.addToCart({
        id: 1,
        title: "CBD pasta punog spektra",
        price: 100,
        image: "/images/logo-cbd.svg",
        url: "/product/cbd",
        quantity: 1,
    });
}

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
            <title>CBD full spectrum pasta</title>
            <meta
                name="description"
                content="Naša CBD pasta je čisti extrakt kanabidiola (CBD) sa punim spektrom ostalih kanabinoida i terpena te sa manje od 0,2% THC-a. Saznaj više o našoj CBD pasti i njenim prednostima."
            />
            <meta
                name="keywords"
                content="CBD, CBD pasta, CBD smola, cbd, health, full spectrum, puni spektar, tepeni, kanabinoidi"
            />
            <meta name="author" content="Benjamin Lazić" />
        </Head>

        <div class="w-full mb-10">
            <section
                class="mb-10 shadow-md shadow-gray-400 bg-green-50 rounded-lg px-8 py-16 leading-6 parallax-section border-2 border-green-200"
            >
                <div class="flex justify-center items-center">
                    <div class="w-1/2">
                        <h1 class="text-3xl font-bold font-monserat mb-2">
                            CBD pasta punog spektra - 5ml
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

                        <button
                            @click="addItemToCart"
                            class="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Dodaj u košaricu
                        </button>
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
                class="mb-8 shadow-md shadow-gray-400 bg-green-50 border-2 border-green-200 rounded-lg p-14 leading-7 parallax-section"
            >
                <h2 class="font-bold text-xl mb-2">
                    Što je CBD i za što se koristi?
                </h2>
                <p>
                    CBD (kanabidiol) je jedan od najzastupljenijih kanabinoida i
                    najviše je istražen. Otkriven je 1940. godine i jedan je od
                    113 identificiranih kanabinoida, čineći do 40% ekstrakta
                    biljke.
                </p>
                <p>
                    Za razliku od THC-a, CBD nema psihoaktivno djelovanje, zbog
                    čega se najčešće koristi u medicinske i terapeutske svrhe.
                    Prema dostupnoj literaturi, te istraživanjima CBD se
                    ponajviše povezuje s ublažavanjem boli, anksioznosti,
                    depresije i poremećaja spavanja.
                </p>
                <p>
                    Najčešća primjena CBD-a danas je u kontekstu ublažavanja
                    bolova i poboljšanja mentalnog zdravlja. Trenutna znanstvena
                    istraživanja najviše se fokusiraju na njegov potencijal u
                    liječenju epilepsije i anksioznosti.
                </p>
            </article>

            <article
                class="mb-8 shadow-md shadow-gray-400 bg-green-50 border-2 border-green-200 rounded-lg p-14 leading-7 parallax-section"
            >
                <h2 class="font-bold text-xl mb-2">CBD pasta ili smola</h2>
                <p>
                    CBD smola, poznata i kao CBD pasta, sadrži visoku
                    koncentraciju kanabidiola. Za razliku od CBD ulja, koje se
                    obično miješa s nosačima poput MCT ulja, pasta je gušće
                    konzistencije i može sadržavati i do 80% CBD-a. S obzirom na
                    visoku koncentraciju CBD-a, pasta je pogodna za osobe kojima
                    standardna ulja nisu dovoljna za postizanje željenih
                    učinaka.
                </p>
                <p>
                    Naša CBD pasta izrađuje se bez razrjeđivanja, što znači da
                    zadržava punu snagu i učinkovitost kanabidiola. Time
                    omogućujemo korisnicima proizvod visoke kvalitete koji nudi
                    maksimalne benefite, bez nepotrebnih dodataka i
                    razrjeđivanja.
                </p>
                <p>
                    Ako tražite jači i koncentriraniji oblik CBD-a koji će
                    zadovoljiti vaše potrebe, CBD pasta je idealno rješenje.
                    Bilo da je koristite za podršku mentalnom zdravlju,
                    ublažavanje bolova ili druge potrebe, važno je odabrati
                    visokokvalitetan proizvod koji nudi čistu i prirodnu
                    formulaciju.
                </p>
            </article>

            <article
                class="mb-8 shadow-md shadow-gray-400 bg-green-50 border-2 border-green-200 rounded-lg p-14 leading-7 parallax-section"
            >
                <h2 class="font-bold text-xl mb-2">
                    Pravilno doziranje CBD paste
                </h2>
                <p>
                    Korištenje CBD paste izuzetno je jednostavno. Dovoljno je
                    odvrnuti poklopac i istisnuti željenu količinu proizvoda.
                    Iako postoje razlike u sastavu i jačini, pasta se koristi na
                    sličan način kao i CBD ulje.
                </p>
                <p>
                    Budući da je izrađena od prirodnih sastojaka, može se
                    primjenjivati na više načina:
                </p>
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
                <p>
                    Važno je napomenuti da je CBD pasta znatno potentnija od
                    uobičajenog CBD ulja. Zbog toga se preporučuje započeti s
                    vrlo malim količinama, otprilike veličine zrna riže, i
                    pratiti kako djeluje na organizam. Upute za upotrebu i
                    preporuke za doziranje navedene su na pakiranju proizvoda.
                </p>
                <p>
                    Okus smole može biti vrlo intenzivan. Također, zbog svoje
                    gustoće, može se zalijepiti za zube i desni. Ako vam to
                    predstavlja nelagodu, možete je staviti na komadić kruha ili
                    pomiješati s napitkom i jednostavno progutati.
                </p>
            </article>

            <article
                class="shadow-md shadow-gray-400 bg-green-50 border-2 border-green-200 rounded-lg p-14 leading-7 parallax-section"
            >
                <h2 class="font-bold text-xl mb-2">
                    Moguće nuspojave prilikom korištenja CBD smole
                </h2>
                <p>
                    S obzirom na visoku koncentraciju CBD-a u smoli, u početku
                    se lako može dogoditi da uzmete previše. Iako istraživanja
                    pokazuju da je CBD općenito siguran za konzumaciju, ipak
                    treba imati na umu neke od mogućih nuspojava:
                </p>
                <ul class="list-disc list-inside">
                    <li class="ms-6">umor</li>
                    <li class="ms-6">suha usta</li>
                    <li class="ms-6">promjene apetita</li>
                    <li class="ms-6">probavne smetnje</li>
                </ul>
            </article>
        </div>
    </Layout>
</template>
