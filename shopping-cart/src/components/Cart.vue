<template>
    <div class="row my-5 py-4">
        <div class="col md-12">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="items in data.cartItems" :key="items.id">
                            <td>{{ items.id }}</td>
                            <td>
                                <img :src= "items.image"
                                    width="60"
                                    height="60"
                                    class="img-fluid rounded"
                                alt="">
                            </td>
                            <td>
                                {{ items.name }}
                            </td>
                            <td> 
                                <i class="bi bi-caret-up" @click="data.incrementQ(items)"></i>
                                {{ items.quantity }} 
                                <i class="bi bi-caret-down" @click="data.decrementQ(items)"></i>
                            </td>
                            <td>   {{ items.price }} </td>
                            <td>    {{ items.price * items.quantity }}</td>
                            <td>
                                
                                <i 
                                @click="data.removeItems(items)"
                                class="bi bi-cart-x text-danger fw-bo"></i>
                            </td>
                        </tr>
                        <tr>
                            <th class="text-center" colspan="3">
                                Total
                            </th>
                            <td class="text-center" colspan="3">
                                <span class="badge badge bg-danger rounded-pill">
                                    ${{data.cartItems.reduce((acc, items) => acc+=items.price * items.quantity, 0)}}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../stores/useCartStore';

    const data = useCartStore();
</script>
<style>
    i {
        cursor:pointer;
    }
</style>