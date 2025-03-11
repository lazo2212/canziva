<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";

const props = defineProps({
    visible: Boolean,
});
</script>

<template>
    <div
        class="fixed top-16 left-0 w-full flex justify-center gap-5 p-8 transition-all duration-300 ease-in-out shadow"
        :class="visible ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 brightness-75 backdrop-blur-lg shadow-md shadow-black transition duration-300 hover:brightness-100 hover:backdrop-blur-0 hover:shadow-none"
        >
            <span class="text-green-600 font-bold">CBD</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 brightness-75 backdrop-blur-lg shadow-md shadow-black transition duration-300 hover:brightness-100 hover:backdrop-blur-0 hover:shadow-none"
        >
            <span class="text-orange-600 font-bold">BALANCE</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
        <Link
            href="#"
            class="w-1/4 h-64 bg-[url('/images/cbd-pasta.jpg')] bg-top rounded-2xl text-white text-2xl p-4 brightness-75 backdrop-blur-lg shadow-md shadow-black transition duration-300 hover:brightness-100 hover:backdrop-blur-0 hover:shadow-none"
        >
            <span class="text-purple-600 font-bold">CBG</span>
            <p class="ms-2 inline">extrakt punog spektra</p>
        </Link>
    </div>
</template>
