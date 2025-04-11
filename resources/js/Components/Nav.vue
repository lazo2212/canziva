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
                    class="relative h-[100px] flex items-center px-10 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out cursor-pointer"
                    @click="showCart = !showCart"
                >
                    <img
                        src="/images/cart.svg"
                        alt="cart"
                        class="h-9 w-9 opacity-100 hover:opacity-60"
                    />
                    <span
                        v-if="cart.totalQuantity > 0"
                        class="absolute top-[30%] right-[30%] w-4 h-4 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full"
                        >{{ cart.totalQuantity }}</span
                    >
                </div>
                <!-- KORISNIK -->
                <div
                    class="relative h-[100px] flex items-center px-4 xl:px-10 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out cursor-pointer"
                    @mouseenter="showUserMenu = true"
                    @mouseleave="showUserMenu = false"
                >
                    <img
                        src="/images/user.svg"
                        alt="user"
                        class="h-9 w-9 opacity-100 hover:opacity-60"
                    />

                    <div
                        class="absolute p-4 top-[100px] right-0 w-48 bg-white shadow-md transition-all duration-300 ease-in-out z-40 cursor-default select-none flex flex-col"
                        :class="
                            showUserMenu
                                ? 'opacity-100 visible'
                                : 'opacity-0 invisible'
                        "
                    >
                        <Link
                            v-show="!$page.props.auth.user"
                            href="/login"
                            class="px-3 py-2 text-black hover:text-black/70"
                        >
                            Prijava
                        </Link>
                        <Link
                            v-show="!$page.props.auth.user"
                            :href="route('register')"
                            class="px-3 py-2 text-black hover:text-black/70"
                        >
                            Registriracija
                        </Link>
                        <p
                            class="font-bold text-center mb-3"
                            v-if="$page.props.auth.user"
                        >
                            {{ $page.props.auth.user.name }}
                        </p>
                        <span v-if="$page.props.auth.user" class="text-center">
                            <Link
                                v-if="$page.props.auth.user.role === 'admin'"
                                :href="route('dashboard')"
                                :active="route().current('dashboard')"
                                class="px-3 py-2 text-black hover:text-black/70"
                            >
                                Dashboard
                            </Link>
                        </span>
                        <Link
                            v-show="$page.props.auth.user"
                            :href="route('logout')"
                            method="post"
                            as="button"
                            class="px-3 py-2 text-black hover:text-black/70"
                        >
                            Odjava
                        </Link>
                    </div>
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
                    class="relative h-full w-1/3 p-10 bg-white cursor-default transform transition-all duration-300 ease-in-out"
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
                    <h2 class="text-2xl font-bold mb-5">Košarica</h2>
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
                                    v-for="(item, index) in cart.cartItems"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                    <button @click="cart.removeFromCart(index)">
                                        Ukloni
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <a
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
                        </a>
                    </div>
                </div>
            </aside>
        </div>
    </header>
</template>
