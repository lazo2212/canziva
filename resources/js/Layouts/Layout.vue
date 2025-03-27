<script setup>
import Nav from "@/Components/Nav.vue";
</script>
<template>
    <Nav />
    <main class="w-full max-w-2xl lg:max-w-7xl m-auto mt-[116px] py-8">
        <slot></slot>
    </main>
</template>
