<script setup>
import { Head } from "@inertiajs/vue3";
import Nav from "@/Components/Nav.vue";
</script>
<template>
    <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>
    <Nav />
    <main class="w-full lg:max-w-7xl m-auto mt-[100px] py-12 px-5">
        <slot></slot>
    </main>
    <footer class="border-t-2 py-20">
        <p class="text-lg text-center">
            &copy; 2025 CANZIVA. Sva prava pridržana.
        </p>
    </footer>
</template>
