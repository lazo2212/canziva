import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        showCart: false,
        cartItems: [],
        totalPrice: 0,
        totalQuantity: 0,
    }),
    persist: true,
    actions: {
        closeCart() {
            this.showCart = false;
        },
        openCart() {
            this.showCart = true;
        },
        addToCart(product) {
            const existingProduct = this.cartItems.find(
                (item) => item.id === product.id
            );
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                this.cartItems.push({ ...product, quantity: 1 });
            }
            this.calculateTotal();
        },
        removeFomCartOne(productId) {
            const existingProduct = this.cartItems.find(
                (item) => item.id === productId
            );
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity--;
            } else {
                this.removeFromCart(productId);
            }
            this.calculateTotal();
        },
        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(
                (item) => item.id !== productId
            );
            this.calculateTotal();
        },
        calculateTotal() {
            this.totalPrice = this.cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
            );
            this.totalQuantity = this.cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            );
        },
    },
});
