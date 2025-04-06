<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const props = defineProps({
    addToCart: Function,
});

const products = ref([
    {
        title: "CBD",
        benefits: [
            "100% CBD ekstrakt",
            "THC ≤ 0,2%",
            "5000mg CBD smola",
            "puni spektar kanabinoida",
        ],
        style: {
            hex: "#38a169",
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
            "50% CBD, 50% CBG ekstrakt",
            "THC ≤ 0,2%",
            "2500mg CBD, 2500mg CBG smola",
            "puni spektar kanabinoida",
        ],
        style: {
            hex: "#6b46c1",
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
            "100% CBG ekstrakt",
            "THC ≤ 0,2%",
            "5000mg CBG smola",
            "puni spektar kanabinoida",
        ],
        style: {
            hex: "#ed8936",
            color: "text-orange-600",
            bg: "bg-orange-700",
            border: "border-orange-700",
            linearGradient: "from-orange-700 to-orange-400",
            background: "bg-orange-50",
            shadow: "shadow-orange",
        },
    },
]);

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
    <!-- HERO SECTION -->
    <section
        class="w-full flex justify-center py-10 px-24 product-card rounded-lg shadow-md shadow-gray-400"
        :class="[currentProduct.style.background, currentProduct.style.shadow]"
    >
        <div
            class="w-3/5 flex flex-col items-start justify-center product-content"
            @mouseenter="stopAutoChange"
            @mouseleave="startAutoChange"
        >
            <h2
                class="text-5xl xl:text-6xl select-none font-monserat uppercase"
            >
                <span
                    class="font-bold drop-shadow-[0_2px_2px_rgb(0,0,0)]"
                    :class="currentProduct.style.color"
                >
                    {{ currentProduct.title }}
                </span>
                pasta punog spektra
            </h2>
            <ul class="p-8 select-none">
                <li
                    class="mb-4 flex items-center text-lg"
                    v-for="(benefit, index) in currentProduct.benefits"
                    :key="index"
                >
                    <span class="w-8 h-8 inline-block me-3">
                        <svg
                            class="w-full h-full"
                            width="94"
                            height="88"
                            viewBox="0 0 94 88"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M44.5625 88V67.6562C41.625 71.0687 35.75 75.2687 24.1762 78.4187C24.1762 78.4187 27.1138 70.9375 35.3975 65.9062C27.76 67.1312 16.245 66.9563 0.5 61.75C0.5 61.75 15.0112 55.5813 31.52 57.2438C22.1787 53 10.4875 44.6 1.49875 27.2312C1.49875 27.2312 27.9362 32.6125 41.0962 49.2375C29.17 27.8 47.5 0.5 47.5 0.5C61.7763 24.4312 58.7212 40.3125 54.08 49.0625C67.2988 32.5687 93.5013 27.2312 93.5013 27.2312C84.5125 44.6 72.8213 53 63.48 57.2438C79.9888 55.5813 94.5 61.75 94.5 61.75C78.755 66.9563 67.24 67.1312 59.6025 65.9062C67.8863 70.9375 70.8238 78.4187 70.8238 78.4187C59.25 75.2687 53.375 71.0687 50.4375 67.6562V88H44.5625Z"
                                :fill="currentProduct.style.hex"
                                fill-opacity="0.6"
                            />
                        </svg> </span
                    >{{ benefit }}
                </li>
            </ul>
            <button
                @click="addToCart"
                class="px-8 py-4 xl:px-10 xl:py-6 text-2xl xl:text-4xl bg-gradient-to-br text-white rounded-lg font-bold shadow-md shadow-black transition-all duration-150 active:shadow-none active:translate-y-1 select-none font-monserat text-shadow"
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
    </section>
    <!-- BUTTONS -->
    <div class="flex align-center justify-center p-10">
        <div class="button-container px-6" v-for="(product, index) in products">
            <button
                :key="index"
                @click="
                    changeProduct(index);
                    startAutoChange();
                "
                :class="[
                    'px-6 py-4 text-lg xl:text-2xl font-bold rounded-md transition-all duration-150 select-none border-4 border-y-0 font-monserat',
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
.text-shadow {
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3),
        -1px -1px 4px rgba(0, 0, 0, 0.3), 1px -1px 4px rgba(0, 0, 0, 0.3),
        -1px 1px 4px rgba(0, 0, 0, 0.3);
}
</style>
