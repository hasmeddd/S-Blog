<script setup></script>

<template>
  <div class="footer-bar">
    <div class="footer container">
      <!-- Logo -->
      <img src="../assets/icons/footer-logo.svg" alt="" class="footer-logo" />
      <div class="footer-socicals">
        <a href="#!">
          <img src="../assets/icons/Vk.svg" alt="Vk" />
        </a>
        <a href="#!">
          <img src="../assets/icons/Pinterest.svg" alt="Pinterest" />
        </a>
        <a href="#!">
          <img src="../assets/icons/Instagram.svg" alt="Instagram" />
        </a>
        <a href="#!">
          <img src="../assets/icons/Twitter.svg" alt="Twitter" />
        </a>
        <a href="#!">
          <img src="../assets/icons/Facebook.svg" alt="Facebook" />
        </a>
      </div>
      <span class="footer-desc">All Rights Reserved</span>
    </div>
  </div>
</template>

<style scoped>
.footer-bar {
  background: var(--White);
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}
.footer-desc {
  font-size: 1.4rem;
  font-weight: 400;
  color: #9b9b9b;
}
.footer-socicals a {
  margin: 10px;
}

@media (max-width: 768px) {
  .footer {
    height: auto;
    justify-content: space-between;
  }
  .footer-logo {
    width: 50px;
    height: 50px;
  }
  .footer-socicals a {
    margin: 3px;
  }
  .footer-desc {
    font-size: 1rem;
  }
}
</style>
