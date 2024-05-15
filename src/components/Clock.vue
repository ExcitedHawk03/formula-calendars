<template>
  <div class="clock-container">
    <p id="clock"></p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Clock',
  created() {
    window.setInterval(() => {
      document.getElementById('clock').innerHTML = moment().format('dddd MM/DD/y H:mm:ss')
    }, 1000)
  }
}
</script>

<style scoped>
.clock-container {
  background-color: greenyellow;
  color: white;
  font-weight: bold;
  font-size: larger;
}
</style>
