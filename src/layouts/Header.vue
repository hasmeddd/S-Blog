<script setup>
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
  <div class="heading">
    <div class="heading-menu container">
      <!-- Logo -->
      <router-link to="/"
        ><img src="../assets/images/logo.svg" alt="" class="logo"
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
          ><BaseButton title="Create"></BaseButton
        ></router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.heading {
  background: var(--White);
}
.heading-menu {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
}
.nav {
  display: flex;
  align-items: center;
}

.nav li a {
  color: var(--Word-color);
  padding: 0 75px;
  font-weight: 600;
  size: 1.6rem;
}
.nav li a:hover {
  color: #ff5480;
}
</style>
