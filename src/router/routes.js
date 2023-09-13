import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../App.vue"
import Details from '../components/pokemonDetails.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: '/',
        component: Home
    },{
        path: '/details',
        name: 'pokemonDetails',
        component: Details
    }]
})