<script setup>
import { ref, onMounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import Item from "@/components/Item.vue";
import axios from "axios";

const listArticle = ref([]);
const getAllArticle = () => {
  axios
    .get(import.meta.env.VITE_BASE_API + "/s-blog")
    .then((respone) => {
      console.log(respone.data);
      listArticle.value = respone.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  getAllArticle();
});
</script>

<template>
  <div class="content container">
    <div class="search-article">
      <input type="text" placeholder="Type something…" />
      <img src="../assets/icons/search.svg" />
    </div>
    <span class="label">ALL POST</span>
    <div class="article-list">
      <!-- Lặp qua listArticle để hiển thị từng bài viết -->
      <Item
        v-for="(article, index) in listArticle"
        :key="index"
        :id="article.id"
        :title="article.title"
        :desc="article.desc"
        :image="article.image"
      ></Item>
    </div>
    <div class="load-more">
      <Button type="button" class="btn-load-more">Load more</Button>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
}
.search-article {
  position: relative;
  display: flex;
  margin: 40px 0;
}

.search-article input {
  height: 83px;
  padding: 32px 44px;
  flex: 1;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000015;
}

.search-article img {
  position: absolute;
  right: 25px;
  top: 34px;
  cursor: pointer;
}

.label {
  font-size: 1.2rem;
  font-weight: 400;
  color: #9b9b9b;
  margin-bottom: 17px;
}

.article-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 24px;
  margin-bottom: 180px;
}

.load-more {
  margin: 0 auto;
}

.btn-load-more {
  color: var(--Load-more);
  background: transparent;
  width: 240px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  border: solid;
  outline: none;
  font-weight: 600;
  font-size: 2.4rem;
  margin-bottom: 155px;
}
.btn-load-more:hover {
  cursor: pointer;
}

@media (max-width: 768px) {
  .article-item {
    width: 100%; /* Chiếm toàn bộ chiều rộng khi màn hình nhỏ */
  }
}
</style>
