<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

// Lấy ID từ route
const route = useRoute();
const articleId = ref(route.params.id);

// Biến lưu nội dung bài viết
const article = ref("");
const error = ref("");

// Hàm gọi API để lấy dữ liệu bài viết
const fetchArticle = async () => {
  try {
    const response = await axios.get(
      import.meta.env.VITE_BASE_API + "/s-blog/" + `${articleId.value}` // Thay URL API của bạn
    );
    article.value = response.data;
    // console.log(response.data);
  } catch (err) {
    error.value = "Không thể tải bài viết. Vui lòng thử lại sau!";
    console.error(err);
  }
};

// Gọi hàm fetchArticle khi component được mount
onMounted(() => {
  fetchArticle();
});
</script>
<template>
  <div class="article">
    <div class="article-top">
      <div class="container">
        <h2 class="title">
          {{ article.title }}
        </h2>
        <p class="desc">
          {{ article.desc }}
        </p>
      </div>
    </div>
    <div class="article-bot container">
      <div class="article-label">
        <span
          >Home — 10 Reasons to Build Your Website with WP Page Builder</span
        >
      </div>
      <div class="article-main">
        <div class="article-social">
          <a href="#!">
            <img src="../assets/icons/Facebook.svg" alt="Facebook" />
          </a>
          <a href="#!">
            <img src="../assets/icons/Twitter.svg" alt="Twitter" />
          </a>
          <a href="#!">
            <img src="../assets/icons/Instagram.svg" alt="Instagram" />
          </a>
          <a href="#!">
            <img src="../assets/icons/Pinterest.svg" alt="Pinterest" />
          </a>
        </div>
        <div class="article-body">
          <img :src="article.image" alt="" />
        </div>
        <div class="article-count">
          <div class="article-count_tym">
            <img src="../assets/icons/tym.svg" alt="" />
            <span class="tym">12K</span>
          </div>
          <div class="article-count_view">
            <img src="../assets/icons/view.svg" alt="" />
            <span class="view">25K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-top {
  background: var(--White);
  padding: 30px 0 117px;
}

.article-top .title {
  font-size: 36px;
  font-weight: 700;
}

.article-top .desc {
  margin-top: 30px;
  font-size: 18px;
  font-weight: 600;
}

.article-main {
  display: flex;
  justify-content: space-between;
}

.article-count_view .view,
.article-count_tym .tym {
  margin-top: 10 px;
  font-size: 18px;
  font-weight: 600;
}
.article-count_view,
.article-count_tym,
.article-social {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}
.article-social a {
  display: block;
  margin-bottom: 10px;
}
.article-label {
  font-size: 12px;
  font-weight: 400;
  color: #9b9b9b;
  margin: 40px 0 20px;
}
.article-body img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .article-top {
    padding: 10px 0 20px;
  }
  .article-top .title {
    font-size: 24px;
    font-weight: 700;
  }
  .article-top .desc {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 600;
  }
  .article-label {
    font-size: 12px;
    font-weight: 400;
    color: #9b9b9b;
    margin: 20px 0 10px;
  }
  .article-main {
    display: grid;
  }
  .article-social {
    grid-column: 1;
    grid-row: 1;
    flex-direction: row;
    gap: 5px;
  }
  .article-body {
    grid-column: 1 / span 2;
    grid-row: 2;
  }
  .article-count {
    grid-column: 1 / span 2;
    grid-row: 1;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
  }
  .article-count_tym,
  .article-count_view {
    display: flex;
    align-items: center;
  }

  .article-count_tym img,
  .article-count_view img {
    width: 20px;
    height: 20px;
  }
  .article-count_tym .tym,
  .article-count_view .view {
    font-size: 14px;
    font-weight: 600;
  }

  .article-body img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
}
</style>
