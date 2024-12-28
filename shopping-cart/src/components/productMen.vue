<template>
    
    <div class="col-md-4 mb-2">
        <div class="card" style="width:'18rem'">
            <img :src="product.image" class="card-img-top" 
            height="300" >
            <div class="card-body">
          M      <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, autem?</p>
                <p class="badge bg-danger mx-4">
                    $ {{ product.price }}
                </p>
                <button 
                    @click="dataMen.addToCart(product)"
                    class="btn btn-primary">
                    <i class="bi bi-cart-check"></i>
                    Add to cart
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>

import { useCartStoreLadies } from '../stores/useCartStore';


const data = useCartStoreLadies();


const props = defineProps({
    product: {
        type: Object,
        required: true,
    }
});

</script>