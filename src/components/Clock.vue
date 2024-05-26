<template>
  <div class="clock-container">
    <img src="../assets/images/other/clock.png" alt="clock" />
    <p id="clock"></p>
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/nl'

export default {
  name: 'Clock',
  created() {
    window.setInterval(() => {
      document.getElementById('clock').innerHTML = moment().format('dddd DD/MM/y H:mm:ss')
    }, 1000)
  }
}
</script>

<style scoped>
.clock-container {
  display: flex;
  align-items: center;
  background-color: blue;
  color: white;
  font-weight: bold;
  font-size: larger;
  gap: 15px;
  border-radius: 25px;
  border: 1px solid black;
  width: 50%;
}

img {
  width: 35px;
  height: 35px;
  object-fit: fill;
}
</style>
