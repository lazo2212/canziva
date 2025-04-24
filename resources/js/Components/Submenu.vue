<script setup>
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    visible: Boolean,
});
</script>

<template>
    <div
        class="fixed left-0 top-[100px] w-screen flex justify-center gap-5 p-8 transition-all duration-300 ease-in-out shadow bg-white z-40 cursor-default select-none"
        :class="visible ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
        <Link
            href="/product/cbd"
            class="relative w-[400px] h-64 rounded-2xl text-white bg-gradient-to-br from-green-800 to-green-400 p-4 hover:shadow-md hover:shadow-black/60 transition duration-300 scale-95 hover:scale-100"
        >
            <span
                class="absolute top-3 left-28 text-green-300 text-3xl font-monserat"
                >ublažava bol</span
            >
            <span
                class="absolute top-12 left-2 text-green-400 text-md font-monserat rotate-[7deg]"
                >poboljšava kvalitetu sna</span
            >
            <span
                class="absolute top-20 right-5 text-green-200 text-3xl font-monserat rotate-[-10deg]"
                >smanjuje anksioznost</span
            >
            <span
                class="absolute top-32 left-0 text-green-300 text-xl font-monserat rotate-[85deg]"
                >smanjuje stres</span
            >
            <span
                class="absolute top-40 left-20 text-green-400 text-2xl font-monserat rotate-6"
                >ublažava upalu</span
            >
            <span
                class="absolute top-52 left-8 text-green-200 text-xl font-monserat"
                >poboljšava raspoloženje</span
            >
            <img
                src="/images/logo-cbd.svg"
                alt="cbd"
                class="absolute bottom-2 right-0 w-36 h-36 card-logo"
            />
        </Link>
        <Link
            href="/product/balance"
            class="relative w-[400px] h-64 rounded-2xl bg-gradient-to-br from-purple-800 to-purple-400 text-white text-3xl p-4 group hover:shadow-md hover:shadow-black/60 transition duration-300 scale-95 hover:scale-100"
        >
            <span
                class="absolute top-3 left-28 text-purple-400 text-2xl font-monserat rotate-3"
                >pruža opuštajuči efekt</span
            >
            <span
                class="absolute top-12 left-2 text-purple-400 text-md font-monserat rotate-[7deg]"
                >poboljšava fokus</span
            >
            <span
                class="absolute top-24 right-5 text-purple-200 text-3xl font-monserat rotate-[-10deg]"
                >smanjuje anksioznost</span
            >
            <span
                class="absolute top-32 left-0 text-purple-300 text-xl font-monserat rotate-[-85deg]"
                >smanjuje stres</span
            >
            <span
                class="absolute top-40 left-20 text-purple-300 text-2xl font-monserat rotate-6"
                >zdravlje mišića</span
            >
            <span
                class="absolute top-52 left-8 text-purple-200 text-xl font-monserat rotate-2"
                >zdravlje zglobova</span
            >
            <img
                src="/images/logo-balance.svg"
                alt="balance"
                class="absolute bottom-2 right-0 w-36 h-36 card-logo"
            />
        </Link>
        <Link
            href="/product/cbg"
            class="relative w-[400px] h-64 rounded-2xl bg-gradient-to-br from-orange-800 to-orange-400 text-white text-3xl p-4 hover:shadow-md hover:shadow-black/60 transition duration-300 scale-95 hover:scale-100"
        >
            <span
                class="absolute top-3 left-16 text-orange-200 text-xl font-monserat"
                >pomaže regulaciji raspoloženja</span
            >
            <span
                class="absolute top-12 left-2 text-orange-300 text-md font-monserat rotate-[7deg]"
                >mentalna jasnoća</span
            >
            <span
                class="absolute top-20 right-5 text-orange-200 text-3xl font-monserat rotate-[-10deg]"
                >ublažava bol</span
            >
            <span
                class="absolute top-32 left-0 text-orange-300 text-xl font-monserat rotate-[85deg]"
                >smanjuje stres</span
            >
            <span
                class="absolute top-36 left-20 text-orange-400 text-2xl font-monserat rotate-6"
                >smanjuje upalu</span
            >
            <span
                class="absolute top-52 left-10 text-orange-200 text-3xl font-monserat rotate-[-5deg]"
                >potiće fokus</span
            >
            <img
                src="/images/logo-cbg.svg"
                alt="cbg"
                class="absolute bottom-2 right-0 w-36 h-36 card-logo"
            />
        </Link>
    </div>
</template>

<style scoped>
.card-logo {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.5));
}
</style>
