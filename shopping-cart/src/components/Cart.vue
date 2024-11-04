<template>
    <div class="row my-4">
        <div class="col md-12">
            <div class="card-body">
                <div class="table">
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
                                <img :src={{ items.Image }}
                                    width="60"
                                    height=""
                                alt="">
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '../stores/useCartStore';

    const data = useCartStore();
</script>