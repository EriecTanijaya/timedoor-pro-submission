import HomePage from "./components/pages/HomePage.vue";
import SignupPage from "./components/pages/SignupPage.vue";

export const routes = [
  {path: "/", name: 'homePage', component: HomePage},
  {path: "/signup", name: 'signup', component: SignupPage}
]