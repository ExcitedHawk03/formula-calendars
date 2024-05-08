<script>
import moment from 'moment'

export default {
  name: 'Card',
  props: {
    circuit: Object,
    racingClass: String
  },
  methods: {
    goToWebsite() {
      switch (this.racingClass) {
        case 'Formula 1':
          window.open(`https://www.formula1.com/en/racing/2024/${this.circuit.link}.html`)
          break
        case 'Formula 2':
          window.open(`https://www.fiaformula2.com/Results?raceid=${this.circuit.link}`)
          break
        case 'Formula 3':
          window.open(`https://www.fiaformula3.com/Results?raceid=${this.circuit.link}`)
          break
        default:
          console.log(`Sorry, we have no ${this.racingClass}.`)
      }
    }
  },
  computed: {
    cardClass() {
      const dateNow = moment().format('DD/MM/YYYY')
      const currentDate = moment(dateNow, 'DD/MM/YYYY')
      const grandPrixDate = moment(this.circuit.date, 'DD/MM/YYYY')
      return currentDate.isBefore(grandPrixDate) ? 'green-card' : 'red-card'
    }
  }
}
</script>

<template>
  <div :class="cardClass">
    <img :src="circuit.image" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ circuit.name }}</h5>
      <div class="card-text">
        <p>{{ circuit.date }}</p>
      </div>
      <div class="button-container">
        <button class="information-button" @click="goToWebsite">Lees meer</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.green-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15rem;
  margin: 15px;
  background-color: green;
}

.red-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15rem;
  margin: 15px;
  background-color: red;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
  height: 150px;
}

.container {
  padding: 2px 16px;
  font-size: small;
}

.button-container {
  display: flex;
  justify-content: end;
  padding: 10px;
}

.information-button {
  background-color: blue;
  color: white;
  border-radius: 12px;
  border-style: none;
  padding: 6px;
  font-weight: bold;
}
</style>
