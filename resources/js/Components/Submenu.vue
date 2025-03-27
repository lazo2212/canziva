<script setup>
import { Link } from "@inertiajs/vue3";
import { defineProps } from "vue";

const props = defineProps({
    visible: Boolean,
});
</script>

<template>
    <div
        class="fixed left-0 top-[116px] w-full flex justify-center gap-5 p-8 transition-all duration-300 ease-in-out shadow bg-white z-40 cursor-default select-none"
        :class="visible ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
        <Link
            href="/product/cbd"
            class="relative w-[400px] h-64 rounded-2xl bg-gradient-to-br from-green-800 to-green-400 text-white text-3xl p-4 group hover:shadow-md hover:shadow-black transition duration-300 shadow-none active:shadow-none"
        >
            <span
                class="absolute top-4 left-4 font-bold font-righteous transition duration-300 scale-95 group-hover:scale-100"
                >CBD</span
            >
            <img
                src="/images/logo-cbd.svg"
                alt="cbd"
                class="absolute bottom-2 right-0 w-36 h-36 opacity-70 transition duration-300 scale-95 group-hover:scale-100"
            />
        </Link>
        <Link
            href="/product/balance"
            class="relative w-[400px] h-64 rounded-2xl bg-gradient-to-br from-purple-800 to-purple-400 text-white text-3xl p-4 group hover:shadow-md hover:shadow-black transition duration-300 shadow-none active:shadow-none"
        >
            <span
                class="absolute top-4 left-4 font-bold font-righteous transition duration-300 scale-95 group-hover:scale-100"
                >BALANCE</span
            >
            <img
                src="/images/logo-balance.svg"
                alt="cbd"
                class="absolute bottom-2 right-0 w-36 h-36 opacity-70 transition duration-300 group-hover:scale-105"
            />
        </Link>
        <Link
            href="/product/cbg"
            class="relative w-[400px] h-64 rounded-2xl bg-gradient-to-br from-orange-800 to-orange-400 text-white text-3xl p-4 group hover:shadow-md hover:shadow-black transition duration-300 shadow-none active:shadow-none"
        >
            <span
                class="absolute top-4 left-4 font-bold font-righteous transition duration-300 scale-95 group-hover:scale-100"
                >CBG</span
            >
            <img
                src="/images/logo-cbg.svg"
                alt="cbd"
                class="absolute bottom-2 right-0 w-36 h-36 opacity-70 transition duration-300 group-hover:scale-105"
            />
        </Link>
    </div>
</template>
