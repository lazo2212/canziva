<script setup>
import { Head } from "@inertiajs/vue3";
import Layout from "@/Layouts/Layout.vue";
</script>

<template>
    <Layout>
        <Head title="Kontakti" />

        <div class="w-full text-center">
            <div>
                <h1 class="text-3xl font-semibold">Kontaktirajte nas</h1>

                <p class="mt-2">
                    Ako imate bilo kakva pitanja ili trebate pomoć, slobodno nas
                    kontaktirajte putem dolje navedenih informacija.
                </p>

                <div class="mt-4">
                    <p class="font-bold mt-2">
                        <a href="mailto:canziva@gmail.com">canziva@gmail.hr</a>
                    </p>
                    <p class="font-bold mt-2">
                        <a href="tel:+385992002123">+385 99 200 2123</a>
                    </p>
                    <p class="font-bold mt-2">
                        Vranduk 39, 34 000 Požega, Hrvatska
                    </p>
                </div>

                <div class="mt-20">
                    <h2 class="text-3xl font-semibold">Društvene mreže</h2>

                    <p class="mt-2">
                        Pratite nas na društvenim mrežama kako biste bili u toku
                        s našim najnovijim vijestima i ponudama.
                    </p>

                    <div class="flex justify-center py-8 gap-10">
                        <a
                            href="https://www.instagram.com/canziva/"
                            target="_blank"
                            class="mx-2"
                        >
                            <img
                                src="/images/instagram.svg"
                                alt="Instagram"
                                class="h-[80px] opacity-60 hover:opacity-100 transition duration-300"
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
                                class="h-[80px] opacity-60 hover:opacity-100 transition duration-300"
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
                                class="h-[80px] opacity-60 hover:opacity-100 transition duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <h2 class="text-3xl font-semibold">Naša lokacija</h2>

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
            </div>
        </div>
    </Layout>
</template>
