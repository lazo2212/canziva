<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const products = ref([
    {
        title: "CBD",
        // benefits : [{title: string, image: string}, ...]
        benefits: [
            "pomaže pri spavanju",
            "djeluje protuupalno",
            "ublažava bol",
            "smanjuje stres i anksioznost",
        ],
        style: {
            color: "text-green-600",
            bg: "bg-green-700",
            border: "border-green-700",
            linearGradient: "from-green-700 to-green-400",
            dropShadow: "drop-shadow-[0_0_80px_rgb(21,128,61)]",
        },
    },
    {
        title: "BALANCE",
        benefits: [
            "ublažava bol",
            "djeluje protuupalno",
            "smanjuje stres i anksioznost",
            "pomaže pri spavanju",
        ],
        style: {
            color: "text-purple-600",
            bg: "bg-purple-700",
            border: "border-purple-700",
            linearGradient: "from-purple-700 to-purple-400",
            dropShadow: "drop-shadow-[0_0_80px_rgb(126,34,206)]",
        },
    },
    {
        title: "CBG",
        benefits: [
            "pomaže pri spavanju",
            "smanjuje stres i anksioznost",
            "djeluje protuupalno",
            "ublažava bol",
        ],
        style: {
            color: "text-orange-600",
            bg: "bg-orange-700",
            border: "border-orange-700",
            linearGradient: "from-orange-700 to-orange-400",
            dropShadow: "drop-shadow-[0_0_80px_rgb(194,65,12)]",
        },
    },
]);

const props = defineProps({
    addToCart: Function,
});

const currentIndex = ref(0);
const currentProduct = ref(products.value[currentIndex.value]);
let interval = null;

const lastChangeTime = ref(Date.now());

const changeProduct = (index) => {
    const now = Date.now();
    if (index === currentIndex.value || now - lastChangeTime.value < 400)
        return;

    lastChangeTime.value = now;

    gsap.to(".product-card", {
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        onComplete: () => {
            currentIndex.value = index;
            currentProduct.value = products.value[index];

            requestAnimationFrame(() => {
                gsap.fromTo(
                    ".product-card",
                    { opacity: 0, scale: 1.1 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
                );
            });
        },
    });
};

const handleVisibilityChange = () => {
    if (document.hidden) {
        stopAutoChange();
    } else {
        lastChangeTime.value = Date.now();

        let nextIndex = (currentIndex.value + 1) % products.value.length;
        if (nextIndex !== currentIndex.value) {
            changeProduct(nextIndex);
        }

        startAutoChange();
    }
};

const startAutoChange = () => {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        let nextIndex = (currentIndex.value + 1) % products.value.length;
        changeProduct(nextIndex);
    }, 7000);
};

const stopAutoChange = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
};

onMounted(() => {
    startAutoChange();
    document.addEventListener("visibilitychange", handleVisibilityChange);
});

onUnmounted(() => {
    clearInterval(interval);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<template>
    <div class="w-full flex justify-center p-24 product-card">
        <div
            class="w-1/2 flex flex-col items-start justify-center product-content"
            @mouseenter="stopAutoChange"
            @mouseleave="startAutoChange"
        >
            <h2 class="text-6xl select-none">
                <span
                    class="font-bold drop-shadow-[0_2px_2px_rgb(0,0,0)]"
                    :class="currentProduct.style.color"
                >
                    {{ currentProduct.title }}
                </span>
                ekstrakt punog spektra
            </h2>
            <ul class="p-10 select-none">
                <li
                    class="mb-4 flex items-center"
                    v-for="(benefit, index) in currentProduct.benefits"
                    :key="index"
                >
                    <span
                        class="bg-[url('/images/hexagon.svg')] bg-contain bg-no-repeat bg-center w-10 h-10 inline-block me-3"
                    ></span
                    >{{ benefit }}
                </li>
            </ul>
            <button
                @click="addToCart"
                class="px-10 py-6 text-4xl bg-gradient-to-br text-white rounded-lg font-bold shadow-md shadow-black transition-all duration-150 active:shadow-none active:translate-y-1 select-none"
                :class="currentProduct.style.linearGradient"
            >
                KUPI {{ currentProduct.title }}
            </button>
        </div>
        <div class="w-1/2">
            <div
                class="product-image w-full h-[55vh] rounded-lg bg-[url('/images/cbd-pasta.svg')] bg-contain bg-no-repeat bg-center filter"
                :class="currentProduct.style.dropShadow"
            ></div>
        </div>
    </div>

    <div class="flex justify-center p-5">
        <div class="button-container px-6" v-for="(product, index) in products">
            <button
                :key="index"
                @click="
                    changeProduct(index);
                    startAutoChange();
                "
                :class="[
                    'px-6 py-4 text-xl font-bold rounded-md transition-all duration-150 select-none border-4 border-y-0',
                    index === currentIndex
                        ? `${product.style.border} ${product.style.color}`
                        : 'border-transparent text-gray-600',
                ]"
            >
                {{ product.title }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.button-container + .button-container {
    border-left: 2px solid #4b5563;
}
</style>
