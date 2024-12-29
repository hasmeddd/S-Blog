<script setup>
import BaseButton from "@/components/BaseButton.vue";
import axios from "axios";
import { handleError, ref, onMounted } from "vue";
import Swal from "sweetalert2";

const titleArticle = ref("");
const descArticle = ref("");
const error = ref(false);
const errorMessage = ref("");

const listArticle = ref([]);
const getAllArticle = () => {
  axios
    .get(import.meta.env.VITE_BASE_API + "/s-blog")
    .then((response) => {
      console.log(response.data);
      listArticle.value = response.data.slice(0, 5);
    })
    .catch((error) => {
      console.log(error);
    });
};
onMounted(() => {
  getAllArticle();
});

const checkLength = () => {
  if (!titleArticle.value.trim()) {
    errorMessage.value = "Tiêu đề không được để trống!";
    error.value = true;
  } else if (titleArticle.value.length < 10) {
    errorMessage.value = "Tiêu đề phải có ít nhất 10 ký tự!";
    error.value = true;
  } else if (titleArticle.value.length > 300) {
    errorMessage.value = "Tiêu đề không được vượt quá 300 ký tự!";
    error.value = true;
    titleArticle.value = titleArticle.value.slice(0, 300);
  } else {
    errorMessage.value = "";
    error.value = false;
  }
};

const handleSubmit = () => {
  checkLength(); // Kiểm tra lỗi trước khi thực hiện

  if (error.value) {
    return; // Dừng lại nếu có lỗi
  }
  Swal.fire({
    title: "Xác nhận tạo bài viết",
    text: "Bạn có chắc chắn muốn tạo bài viết này không?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Đồng ý",
    cancelButtonText: "Hủy",
  }).then((result) => {
    if (result.isConfirmed) {
      const formData = {
        title: titleArticle.value,
        desc: descArticle.value,
      };

      axios
        .post(import.meta.env.VITE_BASE_API + "/s-blog", formData)
        .then((response) => {
          console.log("handleSubmit: " + response);
          Swal.fire("Thành công!", "Bài viết đã được tạo.", "success");
          titleArticle.value = "";
          descArticle.value = "";
        })
        .catch((error) => {
          console.error(error);
          Swal.fire("Lỗi!", "Đã xảy ra lỗi khi tạo bài viết.", "error");
        });
    }
  });
};
</script>

<template>
  <div class="container">
    <div class="create-page">
      <div class="create-post">
        <h2 class="create">Create Post</h2>
        <div class="head">
          <span class="title">Title</span>
          <input
            type="text"
            v-model="titleArticle"
            placeholder="Title..."
            @input="checkLength"
          />
          <span class="quantity">{{ titleArticle.length }}/300</span>
          <p v-if="error" class="error">{{ errorMessage }}</p>
        </div>
        <div class="content">
          <span class="title">Content</span>
          <input type="text" v-model="descArticle" placeholder="Content..." />
        </div>
        <BaseButton
          title="Create Post"
          class="btn-create-post"
          @click="handleSubmit"
        ></BaseButton>
      </div>

      <div class="recent-post">
        <h2 class="head">Recent Post</h2>
        <div class="list-recent-post">
          <div
            class="post"
            v-for="(article, index) in listArticle"
            :key="index"
            :id="article.id"
          >
            <p class="title">{{ article.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-page {
  margin: 40px 0;
  /* height: 100vh; */
  display: flex;
  gap: 15px;
}
.create-post {
  width: 776px;
  height: 390px;
}

.create-post .create {
  font-size: 24px;
  font-weight: 600;
  line-height: 28.8px;
}
.create-post .head,
.create-post .content {
  display: flex;
  flex-direction: column;
}

.btn-create-post {
  width: 128px;
  height: 40px;
  margin-left: auto;
}
.recent-post {
  background: var(--White);
  box-shadow: 0px 0px 8px 0px #00000015;
  width: 378px;
  /* height: 519px; */
  border-radius: 8px;
}

.create-post .head {
  margin: 32px 0;
}
.create-post .head .title,
.create-post .content .title {
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
}
.create-post .head .quantity {
  color: #747c79;
}

.create-post .head input {
  height: 40px;
  padding: 14px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000015;
}

.create-post .content input {
  height: 101px;
  padding: 16px 16px 65px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px #00000015;
}

.create-post .content {
  margin-bottom: 32px;
}

.recent-post .head {
  margin: 20px 130px 20px 130px;
  text-align: center;
  font-family: Open Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 58px;
}

.recent-post .list-recent-post {
  padding: 0 11px 40px 31px;
}
.recent-post .post {
  padding-right: 10px;
  margin-bottom: 20px;
}

.recent-post .post .title {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0 20px;
}

.recent-post .post .title:hover {
  color: var(--Load-more);
  cursor: pointer;
}

.error {
  color: red;
}

@media (max-width: 768px) {
  .recent-post {
    display: none;
  }
}
</style>
