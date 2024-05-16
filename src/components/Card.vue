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
    <img :src="grandPrix.image" alt="flag" />
    <div class="card-body">
      <h4 class="card-title">{{ grandPrix.name }}</h4>
      <p>{{ grandPrix.dates.beginDate }} t/m {{ grandPrix.dates.endDate }}</p>
      <p>{{ differenceInDays }}</p>
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

.card-body {
  margin: 0px 0px 0px 15px;
}

.card-body h4 {
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
</style>
