<template>
    <div class="row my-4">
        <ProductItem v-for = "product in data.products"
        key="product.id" :product= "product"/>
    </div>
</template>

<script setup>
    import ProductItem from './ProductItem.vue';
    import { useCartStoreLadies } from '../stores/useCartStoreLadies';


    const data = useCartStoreLadies();
</script>

<style>

</style>