<script setup>
import { Head } from "@inertiajs/vue3";
import Nav from "@/Components/Nav.vue";

const yearNow = new Date().getFullYear();
</script>
<template>
    <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>

    <Nav />

    <main class="w-full lg:max-w-7xl m-auto mt-[100px] py-12 px-5 z-0">
        <slot></slot>
    </main>

    <footer class="relative border-t-2 py-20">
        <div class="flex">
            <div class="w-1/2 m-auto flex flex-col items-center justify-center">
                <img
                    src="/images/logo.svg"
                    alt="CANZIVA logo"
                    class="h-[200px]"
                />
                <div class="flex mt-10">
                    <a
                        href="https://www.instagram.com/canziva/"
                        target="_blank"
                        class="mx-2"
                    >
                        <img
                            src="/images/instagram.svg"
                            alt="Instagram"
                            class="h-[50px] opacity-60 hover:opacity-100 transition duration-300"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/canziva/"
                        target="_blank"
                        class="mx-2"
                    >
                        <img
                            src="/images/facebook.svg"
                            alt="Facebook"
                            class="h-[50px] opacity-60 hover:opacity-100 transition duration-300"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/canziva/"
                        target="_blank"
                        class="mx-2"
                    >
                        <img
                            src="/images/linkedin.svg"
                            alt="LinkedIn"
                            class="h-[50px] opacity-60 hover:opacity-100 transition duration-300"
                        />
                    </a>
                </div>
            </div>
            <div class="w-1/2 flex flex-col justify-between">
                <div>
                    <p class="text-2xl font-bold">Kontaktiraj nas</p>
                    <p class="text-lg">Vranduk 39</p>
                    <p class="text-lg">34 000 Požega</p>
                    <p class="text-lg">Hrvatska</p>
                    <p>
                        <a class="text-lg" href="tel:+385992002123"
                            >Tel: +385 99 200 2123</a
                        >
                    </p>
                    <p>
                        <a class="text-lg" href="mailto:canziva@gmail.com"
                            >Email: canziva@gmail.com</a
                        >
                    </p>
                </div>
                <p class="text-xl font-semibold">
                    &copy; {{ yearNow }} CANZIVA. Sva prava pridržana.
                </p>
            </div>
        </div>
        <img
            src="/images/leaves.jpeg"
            alt="leaves"
            class="absolute bottom-0 right-0 h-[200px] lg:h-[400px] opacity-60"
        />
    </footer>
</template>
