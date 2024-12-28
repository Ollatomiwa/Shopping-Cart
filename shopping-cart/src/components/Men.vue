<template>
    <div class="row my-4">
        <ProductItem v-for = "product in data.products"
        key="product.id" :product= "product"/>
    </div>
</template>

<script setup>
    import ProductItem from './ProductItem.vue';
    import { useCartStoreMen } from '../stores/useCartStoreMen';


    const data = useCartStoreMen();
</script>

<style>

</style>