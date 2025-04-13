<script setup>
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { useCartStore } from "@/cart";
import Submenu from "./Submenu.vue";

const showSubmenu = ref(false);
const showCart = ref(false);
const showUserMenu = ref(false);

const cart = useCartStore();
</script>

<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
        <nav class="flex justify-between items-center max-w-screen-2xl mx-auto">
            <!-- LOGO -->
            <Link href="/"
                ><img
                    src="/images/logo.svg"
                    alt="CANZIVA logo"
                    class="h-[90px]"
            /></Link>

            <div class="lg:flex hidden">
                <!-- SUBMENU -->
                <div
                    class="relative h-[100px] flex items-center px-10 text-black font-bold font-monserat hover:text-black/70 group border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out cursor-pointer"
                    @mouseenter="showSubmenu = true"
                    @mouseleave="showSubmenu = false"
                >
                    <div class="flex items-center gap-1 text-shadow-lg">
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
                </div>
                <!-- O NAMA -->
                <Link
                    href="/about"
                    class="relative h-[100px] flex items-center px-10 text-black font-bold font-monserat hover:text-black/70 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out"
                >
                    O NAMA
                </Link>
                <!-- KONTAKT -->
                <Link
                    href="/contact"
                    class="relative h-[100px] flex items-center px-10 text-black font-bold font-monserat hover:text-black/70 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out"
                >
                    KONTAKT
                </Link>
            </div>

            <div class="flex gap-2">
                <!-- KOŠARICA -->
                <div
                    class="relative h-[100px] flex items-center px-10 border-b-2 border-transparent hover:border-black/70 hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
                    @click="showCart = !showCart"
                >
                    <img src="/images/cart.svg" alt="cart" class="h-9 w-9" />
                    <span
                        v-if="cart.totalQuantity > 0"
                        class="absolute top-[30%] right-[30%] w-4 h-4 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full"
                        >{{ cart.totalQuantity }}</span
                    >
                </div>
                <!-- KORISNIK -->
                <div
                    class="relative h-[100px] flex items-center px-4 xl:px-10 border-b-2 border-transparent group hover:border-black/70 hover:opacity-60 transition-all duration-300 ease-in-out cursor-pointer"
                    @click="showUserMenu = !showUserMenu"
                >
                    <img src="/images/user.svg" alt="user" class="h-9 w-9" />
                    <p
                        class="absolute bottom-2 left-0 w-full text-center"
                        v-if="$page.props.auth.user"
                    >
                        {{ $page.props.auth.user.name }}
                    </p>
                </div>
            </div>
        </nav>
        <!-- KOŠARICA -->
        <div class="relative">
            <aside
                class="absolute top-[-100px] right-0 w-full h-screen bg-black/50 cursor-not-allowed flex justify-end transition-all duration-300 ease-in-out"
                :class="showCart ? 'visible' : 'invisible'"
                @click="showCart = false"
            >
                <div
                    class="relative h-full w-[700px] p-10 bg-white cursor-default transform transition-all duration-300 ease-in-out"
                    :class="
                        showCart
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-full'
                    "
                    @click.stop
                >
                    <button
                        class="absolute top-2 right-4 px-4 py-2 fill-black/40 hover:fill-black border border-transparent hover:border-black rounded transition-all duration-300 ease-in-out"
                        @click="showCart = false"
                    >
                        <!-- SVG ICON -->
                        <svg
                            height="20px"
                            width="20px"
                            viewBox="0 0 460.775 460.775"
                        >
                            <path
                                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                            ></path>
                        </svg>
                    </button>
                    <h2 class="text-2xl font-bold mb-10">Košarica</h2>
                    <div
                        v-if="cart.totalQuantity == 0"
                        class="flex flex-col items-center justify-center h-full"
                    >
                        <p class="text-lg text-center">Košarica je prazna</p>
                    </div>
                    <!-- SADRŽAJ KOŠARICE -->
                    <div v-else>
                        <div class="flex flex-col gap-2 mt-5">
                            <ul>
                                <li
                                    v-for="item in cart.cartItems"
                                    :key="item.id"
                                    class="flex items-center justify-between border-b border-gray-200"
                                >
                                    <div class="flex items-center gap-4">
                                        <img
                                            :src="item.image"
                                            alt="product"
                                            class="w-32 h-32 object-cover"
                                        />
                                        <div class="flex flex-col">
                                            <Link
                                                :href="item.url"
                                                class="font-bold text-lg"
                                            >
                                                {{ item.title }}
                                            </Link>
                                            <span
                                                class="text text-gray-500 mb-3"
                                            >
                                                {{ item.price }} €
                                            </span>
                                            <span class="text-sm">
                                                Količina: {{ item.quantity }}
                                            </span>
                                            <div>
                                                <button
                                                    class="py-1 px-2 mx-1 rounded-full bg-green-600 text-white"
                                                    @click="
                                                        cart.addToCart(item)
                                                    "
                                                    title="Dodaj u košaricu"
                                                    aria-label="Dodaj u košaricu"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        width="15px"
                                                        height="15px"
                                                    >
                                                        <path
                                                            d="M4 12H20M12 4V20"
                                                            stroke="#ffffff"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                    </svg></button
                                                ><button
                                                    class="py-1 px-2 mx-1 rounded-full bg-green-600 text-white"
                                                    @click="
                                                        cart.removeFomCartOne(
                                                            item.id
                                                        )
                                                    "
                                                    title="Ukloni iz košarice"
                                                    aria-label="Ukloni iz košarice"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        width="15px"
                                                        height="15px"
                                                    >
                                                        <path
                                                            d="M6 12L18 12"
                                                            stroke="#ffffff"
                                                            stroke-width="4"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        @click="cart.removeFromCart(item.id)"
                                        class="py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 ease-in-out"
                                        title="Ukloni iz košarice"
                                        aria-label="Ukloni iz košarice"
                                    >
                                        Ukloni
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <span class="text-lg font-bold">Ukupno:</span>
                            <span class="text-lg font-bold">
                                {{ cart.totalPrice }} €
                            </span>
                        </div>
                        <Link
                            href="#"
                            class="absolute bottom-4 right-4 flex items-center text-lg text-white font-bold py-2 px-4 bg-gradient-to-br from-green-700 to-green-400 rounded hover:translate-x-1 transition-all duration-300 ease-in-out"
                        >
                            Idi na naplatu
                            <svg
                                height="20px"
                                width="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M5 12H19M19 12L13 6M19 12L13 18"
                                    stroke="#ffffff"
                                    stroke-width="4"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </aside>
            <!-- KORISNIČKI IZBORNIK -->
            <aside
                class="absolute top-[-100px] right-0 w-full h-screen bg-black/50 cursor-not-allowed flex justify-end transition-all duration-300 ease-in-out"
                :class="showUserMenu ? 'visible' : 'invisible'"
                @click="showUserMenu = false"
            >
                <div
                    class="relative h-full w-[400px] p-10 bg-white cursor-default transform transition-all duration-300 ease-in-out"
                    :class="
                        showUserMenu
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-full'
                    "
                    @click.stop
                >
                    <button
                        class="absolute top-2 right-4 px-4 py-2 fill-black/40 hover:fill-black border border-transparent hover:border-black rounded transition-all duration-300 ease-in-out"
                        @click="showUserMenu = false"
                    >
                        <!-- SVG ICON -->
                        <svg
                            height="20px"
                            width="20px"
                            viewBox="0 0 460.775 460.775"
                        >
                            <path
                                d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                            ></path>
                        </svg>
                    </button>
                    <!-- SADRŽAJ KORISNIČKOG IZBORNIKA-->
                    <div class="my-10">
                        <h2
                            class="text-2xl font-bold"
                            v-if="$page.props.auth.user"
                        >
                            Dobro došao, {{ $page.props.auth.user.name }}
                        </h2>
                    </div>

                    <ul
                        v-show="!$page.props.auth.user"
                        class="flex flex-col gap-4"
                    >
                        <Link
                            href="/login"
                            class="w-full py-2 px-1 border border-gray-300 rounded text-center text-black hover:text-black/70"
                        >
                            Prijava
                        </Link>

                        <Link
                            :href="route('register')"
                            class="w-full py-2 px-1 border border-gray-300 rounded text-center text-black hover:text-black/70"
                        >
                            Registriracija
                        </Link>
                    </ul>

                    <ul class="flex flex-col gap-4">
                        <span v-if="$page.props.auth.user">
                            <Link
                                v-if="$page.props.auth.user.role === 'admin'"
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                                class="block w-full py-2 px-1 border border-gray-300 rounded text-center text-black hover:text-black/70"
                            >
                                Admin panel
                            </Link>
                        </span>
                        <Link
                            v-show="$page.props.auth.user"
                            :href="route('logout')"
                            method="post"
                            as="button"
                            class="w-full py-2 px-1 border border-gray-300 rounded text-black hover:text-black/70"
                            @click="showUserMenu = false"
                        >
                            Odjava
                        </Link>
                    </ul>
                </div>
            </aside>
        </div>
    </header>
</template>
