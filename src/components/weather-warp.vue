<template>
      <div class="weather-wrap" v-if="typeof this.$store.state.weather.main != 'undefined'">
        <div class="location-box">
          <div class="location"> {{ this.$store.state.weather.name }}, {{ this.$store.state.weather.sys.country }} </div>
          <div class="date"> {{ dateBuilder() }} </div>
        </div>
        <weather-box></weather-box>
      </div>
</template>

<script>

import WeatherBox from './weather-box.vue';

export default {
    components: {WeatherBox},
    name: 'weather-warp',
    data() {
        return {
        weather: {}
        }
    },
    methods: {
        dateBuilder() {
            let date = new Date();
            let months = ["January", "February", "March", "April", "June", "July", "August", "September",
            "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];

            let day = days[date.getDay()];
            let d = date.getDate();
            let month = months[date.getMonth()];
            let year = date.getFullYear();

            return `${day} ${d} ${month} ${year}`;
        }
    }
}

</script>

<style>

.location-box .location {
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box {
  text-align: center;
}

</style>