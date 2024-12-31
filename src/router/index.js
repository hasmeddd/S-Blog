import Home from "../pages/Home.vue"; // Đảm bảo đúng đường dẫn
import About from "../pages/About.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CreatePage from "@/pages/CreatePage.vue";
import DetailArticle from "@/pages/DetailArticle.vue";
import ManagerArticle from "@/pages/ManagerArticle.vue";

export const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
      {
        path: "/create-article",
        name: "create article",
        component: CreatePage,
        meta: { headerColor: "var(--Bg-color)", hideFooter: true },
      },
      {
        path: "/article/:id",
        name: "article-details",
        component: DetailArticle,
      },
      {
        path: "/manager-article/",
        name: "manager-article",
        component: ManagerArticle,
        meta: { headerColor: "var(--Bg-color)", hideFooter: true },
      },
    ],
  },
];
