<script setup>
const props = defineProps({
  id: String,
  title: String,
  desc: String,
  image: String,
});
</script>
<template>
  <div class="article-item">
    <router-link :to="`/article/${id}`">
      <img :src="image" alt="item" class="thumb" />
    </router-link>

    <div class="info">
      <div class="author">
        <span class="grey">BY</span>
        TOMAS LAURINAVICIUS
        <span class="grey"> IN</span>
        DESIGN PROCESS
      </div>
      <router-link to="/article"
        ><h3 class="title">{{ title }}</h3></router-link
      >
      <p class="desc">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.article-item {
  width: calc(50% - 12px);
  border-radius: 12px;
}
.author {
  font-weight: 400;
  margin-top: 20px;
}

.author .grey {
  color: gray;
}

.title {
  margin-top: 20px;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 46px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.desc {
  margin-top: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: #9b9b9b;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.thumb {
  width: 100%;
  height: 358px;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .article-item {
    width: 100%; /* Chiếm toàn bộ chiều rộng khi màn hình nhỏ */
  }

  .thumb {
    aspect-ratio: 4 / 3; /* Thay đổi tỷ lệ cho mobile */
    height: auto; /* Chiều cao tự động thay đổi theo tỷ lệ */
  }
  .author,
  .title,
  .desc {
    margin-top: 10px;
  }
  .desc {
    -webkit-line-clamp: 2;
  }
}
</style>
