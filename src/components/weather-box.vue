<template>
    <div class="weather-box" v-if="this.$store" >
          <div class="temperature"> {{ Math.round(temp) }}c </div>
          <div class="weather"> {{ description }} </div>
        </div>
</template>

<script>

export default {
  name: 'weather-box',
  computed: {
    temp() {
      return this.$store.state.weather.main.temp
    },
    description() {
      return this.$store.state.weather.weather[0].main
    }
  }
}

</script>

<style>
.weather-box .temperature {
  display: inline-block;
  padding: 10px 25px;
  color: #FFF;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: #FFF;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
