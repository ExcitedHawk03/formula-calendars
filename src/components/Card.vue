<script>
import moment from 'moment'

export default {
  name: 'Card',
  props: {
    grandPrix: Object
  },
  data() {
    return {
      differenceInDays: null
    }
  },
  computed: {
    cardClass() {
      const dateNow = moment().format('DD/MM/YYYY')
      const currentDate = moment(dateNow, 'DD/MM/YYYY')
      const grandPrixDate = moment(this.grandPrix.dates.endDate, 'DD/MM/YYYY')

      const difference = grandPrixDate.diff(currentDate, 'days')

      if (difference < 0) {
        this.differenceInDays = currentDate.diff(grandPrixDate, 'days') + ' days ago'
      } else {
        this.differenceInDays = grandPrixDate.diff(currentDate, 'days') + ' days to go'
      }

      return currentDate.isBefore(grandPrixDate) ? 'green-card' : 'red-card'
    },
    calculateTotalDays() {}
  }
}
</script>

<template>
  <div :class="cardClass">
    <img class="card-image" :src="grandPrix.image" alt="flag" />
    <div class="card-body">
      <h4 class="card-title">{{ grandPrix.name }}</h4>
      <p>{{ grandPrix.dates.beginDate }} / {{ grandPrix.dates.endDate }}</p>
      <p>{{ differenceInDays }}</p>
      <hr class="seperate-line" v-if="grandPrix.winner" />
      <div class="winner-section" v-if="grandPrix.winner">
        <p>Winner:</p>
        <img :src="grandPrix.winnerImage" alt="Race winner" />
        <p>{{ grandPrix.winner }}</p>
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
  border-radius: 15px;
}

.red-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 15rem;
  margin: 15px;
  background-color: red;
  border-radius: 15px;
}

.card-body h4,
.card-body p {
  margin: 0px 0px 0px 15px;
}

.card-body h4 {
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 150px;
}

.seperate-line {
  border: 1px solid black;
}

.winner-section {
  display: flex;
  align-items: center;
}

.winner-section p {
  font-weight: bold;
  font-size: 12px;
}

.winner-section img {
  margin: 10px 0px 10px 7px;
  width: 30%;
  height: 30%;
  object-fit: fill;
  border-radius: 50%;
}
</style>
