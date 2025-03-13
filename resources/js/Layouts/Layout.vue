<script setup>
import Nav from "@/Components/Nav.vue";
</script>
<template>
    <Nav />

    <main
        class="relative w-full h-full max-w-2xl px-6 lg:max-w-7xl m-auto mt-[70px]"
    >
        <slot></slot>
    </main>
</template>
