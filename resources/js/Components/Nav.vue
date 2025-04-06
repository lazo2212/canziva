<script setup>
import { ref } from "vue";
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
                    class="relative h-[100px] flex items-center px-10 text-black font-monserat hover:text-black/70 group border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out cursor-pointer"
                    @mouseenter="showSubmenu = true"
                    @mouseleave="showSubmenu = false"
                >
                    <div class="flex items-center gap-1">
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
                    class="relative h-[100px] flex items-center px-10 text-black font-monserat hover:text-black/70 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out"
                >
                    O NAMA
                </Link>
                <!-- KONTAKT -->
                <Link
                    href="/contact"
                    class="relative h-[100px] flex items-center px-10 text-black font-monserat hover:text-black/70 border-b-2 border-transparent hover:border-black/70 transition-all duration-300 ease-in-out"
                >
                    KONTAKT
                </Link>
            </div>

            <div class="flex gap-2">
                <!-- KOŠARICA -->
                <div
                    class="relative h-[100px] flex items-center px-10 transition hover:fill-black/60 cursor-pointer"
                    @mouseenter="showCartMenu = true"
                    @mouseleave="showCartMenu = false"
                >
                    <img src="/images/cart.svg" alt="cart" class="h-9 w-9" />
                    <span
                        v-if="cartItems > 0"
                        class="absolute top-[30%] right-[30%] w-4 h-4 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full"
                        >{{ cartItems }}</span
                    >
                    <div
                        class="absolute p-4 top-[100px] right-0 w-48 bg-white shadow-md transition-all duration-300 ease-in-out z-40 cursor-default select-none flex flex-col"
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
                </div>
                <!-- KORISNIK -->
                <div
                    class="relative h-[100px] flex items-center px-4 xl:px-10 transition hover:fill-black/60 cursor-pointer"
                    @mouseenter="showUserMenu = true"
                    @mouseleave="showUserMenu = false"
                >
                    <img src="/images/user.svg" alt="user" class="h-9 w-9" />

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
    </header>
</template>
