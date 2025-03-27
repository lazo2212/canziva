<script setup>
import { ref, defineProps } from "vue";
import { Link } from "@inertiajs/vue3";
import Submenu from "./Submenu.vue";

const showSubmenu = ref(false);
const showCartMenu = ref(false);
const showUserMenu = ref(false);

const props = defineProps({
    cartItems: Number,
});
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav class="flex justify-between items-center max-w-screen-2xl mx-auto">
            <Link href="/" class="py-2"
                ><img
                    src="/images/logo.svg"
                    alt="CANZIVA logo"
                    class="h-[100px]"
            /></Link>

            <div class="flex gap-12">
                <Link
                    href="/"
                    class="relative h-[100px] flex items-center text-black hover:text-black/70 group"
                    @mouseenter="showSubmenu = true"
                    @mouseleave="showSubmenu = false"
                >
                    <div
                        href="#"
                        class="group flex items-center gap-1 cursor-pointer"
                    >
                        PROIZVODI
                        <svg
                            width="12"
                            height="7"
                            viewBox="0 0 12 7"
                            fill="black"
                            class="group-hover:fill-black/60"
                        >
                            <path
                                d="M1 1L6 6L8.5 3.5L11 1"
                                stroke="white"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>

                    <Submenu :visible="showSubmenu" />
                </Link>

                <Link
                    href="/about"
                    class="relative h-[100px] flex items-center text-black hover:text-black/70"
                >
                    O NAMA
                </Link>
                <Link
                    href="/contact"
                    class="relative h-[100px] flex items-center text-black hover:text-black/70"
                >
                    KONTAKT
                </Link>
            </div>

            <div class="flex gap-2">
                <Link
                    href="#"
                    class="relative px-3 py-2 me-3 transition hover:fill-black/60"
                    @mouseenter="showCartMenu = true"
                    @mouseleave="showCartMenu = false"
                >
                    <svg class="svg-icon h-8" viewBox="0 0 20 20">
                        <path
                            d="M17.638,6.181h-3.844C13.581,4.273,11.963,2.786,10,2.786c-1.962,0-3.581,1.487-3.793,3.395H2.362c-0.233,0-0.424,0.191-0.424,0.424v10.184c0,0.232,0.191,0.424,0.424,0.424h15.276c0.234,0,0.425-0.191,0.425-0.424V6.605C18.062,6.372,17.872,6.181,17.638,6.181 M13.395,9.151c0.234,0,0.425,0.191,0.425,0.424S13.629,10,13.395,10c-0.232,0-0.424-0.191-0.424-0.424S13.162,9.151,13.395,9.151 M10,3.635c1.493,0,2.729,1.109,2.936,2.546H7.064C7.271,4.744,8.506,3.635,10,3.635 M6.605,9.151c0.233,0,0.424,0.191,0.424,0.424S6.838,10,6.605,10c-0.233,0-0.424-0.191-0.424-0.424S6.372,9.151,6.605,9.151 M17.214,16.365H2.786V7.029h3.395v1.347C5.687,8.552,5.332,9.021,5.332,9.575c0,0.703,0.571,1.273,1.273,1.273c0.702,0,1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h5.941v1.347c-0.495,0.176-0.849,0.645-0.849,1.199c0,0.703,0.57,1.273,1.272,1.273s1.273-0.57,1.273-1.273c0-0.554-0.354-1.023-0.849-1.199V7.029h3.395V16.365z"
                        ></path>
                    </svg>
                    <span
                        v-if="cartItems > 0"
                        class="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full"
                        >{{ cartItems }}</span
                    >
                    <div
                        class="absolute p-4 top-[60px] right-0 w-48 bg-white shadow-md transition-all duration-300 ease-in-out z-40 cursor-default select-none flex flex-col"
                        :class="
                            showCartMenu
                                ? 'opacity-100 visible'
                                : 'opacity-0 invisible'
                        "
                    >
                        <div v-if="cartItems > 0" class="flex flex-col gap-2">
                            <!-- treba napravit variablu cart i povezat dodavanje proizvoda sa košaricom-->
                            <p>Proizvodi u košarici:</p>
                            <p>CBD-pasta</p>
                            <p>Cijena: {{ 100 * cartItems }}€</p>
                            <p>Količina: {{ cartItems }}</p>
                            <Link
                                href="/checkout"
                                class="px-3 py-2 text-black hover:text-black/70"
                            >
                                Idi na naplatu
                            </Link>
                        </div>
                        <div v-else>
                            <p>Košarica je prazna!</p>
                        </div>
                    </div>
                </Link>
                <Link
                    href="#"
                    class="relative px-3 py-2 transition hover:fill-black/60"
                    @mouseenter="showUserMenu = true"
                    @mouseleave="showUserMenu = false"
                    ><svg class="svg-icon h-8" viewBox="0 0 20 20">
                        <path
                            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                        ></path>
                    </svg>

                    <div
                        class="absolute p-4 top-[60px] right-0 w-48 bg-white shadow-md transition-all duration-300 ease-in-out z-40 cursor-default select-none flex flex-col"
                        :class="
                            showUserMenu
                                ? 'opacity-100 visible'
                                : 'opacity-0 invisible'
                        "
                    >
                        <Link
                            href="/login"
                            class="px-3 py-2 text-black hover:text-black/70"
                        >
                            Prijava
                        </Link>
                        <Link
                            href="/register"
                            class="px-3 py-2 text-black hover:text-black/70"
                        >
                            Registriracija
                        </Link>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
</template>
