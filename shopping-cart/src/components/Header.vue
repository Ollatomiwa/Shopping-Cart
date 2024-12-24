<template>
  <nav class="navbar fixed-top bg-dark navbar-expand-lg " data-bs-theme="dark">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">ComputLife Shopping Cart</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              <i class="bi bi-house"></i> Kids
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/ladies">
              <i class="bi bi-house"></i> Ladies
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/men">
               <i class="bi bi-house"></i> Men
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart"> <i class="bi bi-cart-check"></i> Cart (
              {{ data.countCartItems }})
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '../stores/useCartStore';
import { useCartStoreLadies } from '../stores/useCartStoreLadies';
import { useCartStoreMen } from '../stores/useCartStoreMen';


const data = useCartStore();
const datas = useCartStoreLadies();
const dataMen = useCartStoreMen();
</script>

<style scoped></style>