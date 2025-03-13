<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";

const props = defineProps({
    visible: Boolean,
});
</script>

<template>
    <div
        class="fixed left-0 top-[70px] w-full flex justify-center gap-5 p-8 transition-all duration-300 ease-in-out shadow bg-white z-40"
        :class="visible ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 hover:shadow-md hover:shadow-black transition duration-300 shadow-none"
        >
            <span class="text-green-600 font-bold">CBD</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 hover:shadow-md hover:shadow-black transition duration-300 shadow-none"
        >
            <span class="text-orange-600 font-bold">BALANCE</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 hover:shadow-md hover:shadow-black transition duration-300 shadow-none"
        >
            <span class="text-purple-600 font-bold">CBG</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
    </div>
</template>
