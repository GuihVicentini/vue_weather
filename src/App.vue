<template>
  <div id="app" 
  :class="typeof this.$store.state.weather.main != 'undefined' && 
  this.$store.state.weather.main.temp > 16 ? 'warm' : '' ">
    <main>
      <div class="search-box">
        <input
          type="text"
          class="search-bar" 
          placeholder="Search Location"
          v-model="query"
          @keypress="fetchWeather"
          />
      </div>
      <weather-warp></weather-warp>
    </main>
  </div>
</template>

<script>
import WeatherWarp from './components/weather-warp.vue';

export default {
  components: {WeatherWarp},
  name: 'App',
  data() {
    return {
      api_key: process.env.VUE_APP_WEATHER_API_KEY,
      url_base:'https://api.openweathermap.org/data/2.5/',
      query: '',
    }
  },
  methods: {
    fetchWeather (e) {
      if(e.key == "Enter"){
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}`)
        .then (res => {
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults (results) {
      this.$store.commit('setWeather', results);
    }

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpeg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpeg');
}

main {
  min-height: 100vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));

}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: inline;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;

}

</style>
