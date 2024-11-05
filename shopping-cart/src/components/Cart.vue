<template>
    <div class="row my-4">
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
                            <td> {{ items.quantity }} </td>
                            <td>   {{ items.price }}</td>
                            <td>    {{ items.price * items.quantity }}</td>
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