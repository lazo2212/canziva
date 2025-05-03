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

    <main class="w-full max-w-7xl mx-auto mt-[100px] py-10 px-5 z-0">
        <slot></slot>
    </main>

    <footer class="relative border-t-2 py-20 bg-white">
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
                    <p class="text-2xl font-bold mb-4">Kontakt:</p>
                    <p class="text-lg">
                        <a href="mailto:canziva@gmail.com"
                            ><b>Email:</b> canziva@gmail.com</a
                        >
                    </p>
                    <p class="text-lg mt-4">
                        <a href="tel:+385992002123"
                            ><b>Tel:</b> +385 99 200 2123</a
                        >
                    </p>
                    <p class="text-lg mt-4">
                        <b>Adresa:</b> Vranduk 39, 34 000 Požega
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
