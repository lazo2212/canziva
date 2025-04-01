<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
</script>

<template>
    <Layout>
        <Head>
            <title>CBD full spectrum pasta</title>
            <meta
                name="description"
                content="Naša CBD pasta je čisti extrakt kanabidiola (CBD) sa punim spektrom ostalih kanabinoida i terpena sa manje od 2% THC-a. Saznaj više o našoj CBD pasti i njenim prednostima."
            />
            <meta
                name="keywords"
                content="CBD, CBD pasta, CBD smola, cbd, health, full spectrum, puni spektar, tepeni, kanabinoidi"
            />
            <meta name="author" content="Benjamin Lazić" />
        </Head>

        <div class="w-full">
            <h1 class="text-4xl font-bold text-green-600 font-monserat mb-8">
                CBD pasta punog spektra
            </h1>

            <article class="mb-4">
                <h2 class="font-bold text-xl mb-1">
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

            <article class="mb-4">
                <h2 class="font-bold text-xl mb-1">CBD pasta ili smola</h2>
                <p>
                    CBD smola, poznata i kao CBD pasta, sadrži visoku
                    koncentraciju kanabidiola. Za razliku od CBD ulja, koje se
                    obično miješa s nosačima poput MCT ulja, smola je gušće
                    konzistencije i može sadržavati i do 80% CBD-a. S obzirom na
                    visoku koncentraciju CBD-a, smola je pogodna za osobe kojima
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
                    zadovoljiti vaše potrebe, CBD smola je idealno rješenje.
                    Bilo da je koristite za podršku mentalnom zdravlju,
                    ublažavanje bolova ili druge potrebe, važno je odabrati
                    visokokvalitetan proizvod koji nudi čistu i prirodnu
                    formulaciju.
                </p>
            </article>

            <article>
                <h2 class="font-bold text-xl mb-1">
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
