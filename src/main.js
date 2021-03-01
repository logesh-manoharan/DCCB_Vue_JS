import Vue from 'vue'
import App from './App.vue'

import {BootstrapVue, IconsPlugin, LayoutPlugin} from 'bootstrap-vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import VueRouter from 'vue-router';

import VueCollapse from 'vue2-collapse';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import HomeComponent from './components/HomeComponent.vue';
import MenuComponent from './components/MenuComponent.vue';
import AboutComponent from './components/AboutComponent.vue';

import BreakfastComponent from './components/Menucategories/BreakfastComponent.vue';
import LunchComponent from './components/Menucategories/LunchComponent.vue';
import DinnerComponent from './components/Menucategories/DinnerComponent.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);

Vue.use(VueCollapse);


library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);


const routes = [
  {path: '/', component: HomeComponent},
  {path: '/about', component: AboutComponent},
  {path: '/menu', component: MenuComponent},
  {path: '/menu:breakfast',component: BreakfastComponent},
  {path: '/menu:lunch', component: LunchComponent},
  {path: '/menu:dinner', component: DinnerComponent}
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router, 
  render: h => h(App),
}).$mount('#app')
