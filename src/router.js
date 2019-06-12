import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

var router = new Router({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/login",
      component: Login
    }
  ]
});

//路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  var token = window.sessionStorage.getItem("token");

  if (token === null && to.path !== "/login") {
    return next("/login");
  }

  next();
});
export default router;
