<script setup>
import { ref, onMounted } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import axios from "axios";

const listArticles = ref([]);

const getAllArticle = () => {
  axios
    .get(import.meta.env.VITE_BASE_API + "/s-blog")
    .then((response) => {
      listArticles.value = response.data.map((article) => ({
        ...article,
        desc:
          article.desc.length > 100
            ? article.desc.slice(0, 300) + "..."
            : article.desc, // Cắt chuỗi nếu dài hơn 100 ký tự
      }));
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
  <div class="container">
    <h1 class="page-title">Quản lý bài viết</h1>
    <div v-if="listArticles.length" class="articles-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Tiêu đề</th>
            <th>Mô tả</th>
            <th>Ngày tạo</th>
            <th>Lượt xem</th>
            <th>Status</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in listArticles" :key="article.id">
            <td>{{ index + 1 }}</td>
            <td>
              <img :src="article.image" alt="Thumbnail" class="thumbnail" />
            </td>
            <td>{{ article.title }}</td>
            <td>{{ article.desc }}</td>
            <td>{{ new Date(article.createdAt).toLocaleDateString() }}</td>
            <td>1</td>
            <td>1</td>
            <td>
              <BaseButton title="Chỉnh sửa" class="btn-edit" />
              <!-- @click="$router.push(`/edit-article/${article.id}`)" -->
              <BaseButton title="Xóa" class="btn-delete" />
              <!-- @click="deleteArticle(article.id)" -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="no-data">Không có bài viết nào!</p>
  </div>
</template>

<style scoped>
.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}
.articles-table table {
  width: 100%;
  border: 1px solid #ddd;
}
.articles-table th,
.articles-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.articles-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}
.btn-edit {
  margin-right: 10px;
  background-color: #4caf50;
  color: white;
}

.btn-delete {
  background-color: #f44336;
  color: white;
}

.no-data {
  text-align: center;
  color: #777;
  margin-top: 20px;
}

.thumbnail {
  width: 240px;
  height: 160px;
}
</style>
