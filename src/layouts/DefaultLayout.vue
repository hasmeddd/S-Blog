<script setup>
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import BaseButton from "@/components/BaseButton.vue";
import { ref } from "vue";

const isToggle = ref(false);
const handleToggle = () => {
  isToggle.value = !isToggle.value;
};

const closeSlidebar = () => {
  isToggle.value = false;
};

const route = useRoute();
</script>

<template>
  <Header
    :style="{ backgroundColor: route.meta.headerColor || 'var(--White)' }"
  />

  <div class="body">
    <div class="menu-mobile" v-if="isToggle">
      <div class="close-icon" @click="closeSlidebar">
        <img src="../assets/icons/close.svg" alt="" />
      </div>
      <!-- Logo -->
      <router-link to="/"
        ><img
          src="../assets/images/logo.svg"
          alt=""
          class="logo"
          @click="closeSlidebar"
      /></router-link>

      <nav class="nav">
        <ul>
          <li>
            <a href="#!">New</a>
            <a href="#!">Reading list</a>
            <a href="#!">Topics</a>
          </li>
        </ul>
        <router-link to="/create-article"
          ><BaseButton title="Create" @click="closeSlidebar"></BaseButton
        ></router-link>
      </nav>
    </div>

    <div class="icon-menu" @click="handleToggle">
      <img src="../assets/icons/menu.svg" alt="" />
    </div>
    <RouterView />
  </div>

  <Footer v-if="!route.meta.hideFooter" />
</template>

<style scoped>
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.icon-menu {
  width: 40px;
  margin: 16px 8px 0;
  cursor: pointer;
  display: none; /* Ẩn icon menu trên màn hình lớn */
}

.icon-menu img {
  width: 40px;
  height: 40px;
}

.menu-mobile {
  display: none;
}
@media (max-width: 768px) {
  .heading {
    display: none;
  }
  .container {
    padding: 0 10px;
  }
  .icon-menu {
    display: block;
  }

  .menu-mobile {
    display: block;
    flex-direction: column;
    background: var(--Primari);
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    animation: slideIn 0.3s ease;
  }
  .menu-mobile .logo {
    margin: 0 auto;
    padding: 35px 10px;
  }

  .nav {
    display: flex;
    flex-direction: column;
  }

  .nav a {
    display: block;
    padding: 15px;
    font-size: 1.6rem;
    color: var(--White);
    text-align: left;
  }

  .nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--Load-more);
  }
  .close-icon {
    position: absolute;
    cursor: pointer;
    right: 10px;
    top: 5px;
  }
}
</style>
