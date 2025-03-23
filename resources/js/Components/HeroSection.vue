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
            background: "bg-green-50",
            shadow: "shadow-green",
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
            background: "bg-purple-50",
            shadow: "shadow-purple",
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
            background: "bg-orange-50",
            shadow: "shadow-orange",
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
    <div
        class="w-full flex justify-center mt-24 p-20 product-card rounded-lg shadow-md"
        :class="[currentProduct.style.background, currentProduct.style.shadow]"
    >
        <div
            class="w-3/5 flex flex-col items-start justify-center product-content"
            @mouseenter="stopAutoChange"
            @mouseleave="startAutoChange"
        >
            <h2
                class="text-4xl xl:text-5xl 2xl:text-6xl select-none font-righteous uppercase"
            >
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
                        class="bg-[url('/images/hexagon.svg')] bg-contain bg-no-repeat bg-center w-6 h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 inline-block me-3"
                    ></span
                    >{{ benefit }}
                </li>
            </ul>
            <button
                @click="addToCart"
                class="px-8 py-4 xl:px-9 xl:py-5 2xl:px-10 2xl:py-6 text-md xl:text-2xl 2xl:text-4xl bg-gradient-to-br text-white rounded-lg font-bold shadow-md shadow-black transition-all duration-150 active:shadow-none active:translate-y-1 select-none font-righteous"
                :class="currentProduct.style.linearGradient"
            >
                KUPI {{ currentProduct.title }}
            </button>
        </div>
        <div class="w-2/5">
            <div
                class="product-image w-full h-[40vh] xl:h-[55vh] rounded-lg bg-[url('/images/cbd-pasta.svg')] bg-contain bg-no-repeat bg-center filter"
            ></div>
        </div>
    </div>

    <div class="flex align-center justify-center p-10">
        <div class="button-container px-6" v-for="(product, index) in products">
            <button
                :key="index"
                @click="
                    changeProduct(index);
                    startAutoChange();
                "
                :class="[
                    'px-6 py-4 text-md xl:text-lg 2xl:text-2xl font-bold rounded-md transition-all duration-150 select-none border-4 border-y-0 font-righteous',
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
    border-left: 2px solid #e2e8f0;
}
</style>
