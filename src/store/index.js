// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
    weather: {}
 },
 
 getters: {},

 mutations: {
     setWeather(state, weather){
         state.weather = weather;
     }
 },
 actions: {}
});