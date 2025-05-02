<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
</script>

<template>
    <Layout>
        <Head title="Kontakti" />

        <div class="w-full">
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

            <div class="mt-8">
                <h2 class="text-2xl font-semibold">Naša lokacija</h2>
                <p class="mt-4">
                    Naš ured se nalazi u Požegi, Hrvatska. Slobodno nas
                    posjetite!
                </p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.4362750779358!2d17.69821740648373!3d45.3311960368479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475d9b327c67f12f%3A0xef176ffda1aacf0!2sVranduk%20ul.%2039%2C%2034000%2C%20Po%C5%BEega!5e0!3m2!1shr!2shr!4v1746201953295!5m2!1shr!2shr"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="mt-4 w-full h-[500px] rounded-lg"
                    title="Naša lokacija"
                    frameborder="0"
                >
                </iframe>

                <p class="mt-2">
                    Ako imate bilo kakvih pitanja o našoj lokaciji, slobodno nas
                    kontaktirajte.
                </p>
            </div>
        </div>
    </Layout>
</template>
