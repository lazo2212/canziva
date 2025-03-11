<script setup>
import Nav from "@/Components/Nav.vue";
</script>
<template>
    <Nav />

    <main
        class="relative w-full h-full max-w-2xl px-6 lg:max-w-7xl bg-black m-auto"
    >
        <slot></slot>
    </main>
</template>
