<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
</script>

<template>
    <Layout>
        <Head title="Kontakti" />

        <div class="h-screen w-full">
            <h1 class="text-4xl">Kontakti</h1>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold">Kontaktirajte nas</h2>
                <p class="mt-4">
                    Ako imate bilo kakva pitanja ili trebate pomoć, slobodno nas
                    kontaktirajte putem dolje navedenih informacija.
                </p>

                <div class="mt-6">
                    <p><strong>Telefon:</strong> +385 123 456 789</p>
                    <p><strong>E-mail:</strong> info@canziva.hr</p>
                    <p>
                        <strong>Adresa:</strong> Ulica Slobode 123, Zagreb,
                        Hrvatska
                    </p>
                </div>

                <div class="mt-8">
                    <h3 class="text-xl font-semibold">Društvene mreže</h3>
                    <ul class="mt-4 space-y-2">
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                class="text-blue-500 hover:underline"
                                >Facebook</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                class="text-blue-500 hover:underline"
                                >Twitter</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                class="text-blue-500 hover:underline"
                                >Instagram</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Layout>
</template>
