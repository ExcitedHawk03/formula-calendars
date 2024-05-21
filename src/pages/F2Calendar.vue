<script>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Clock from '@/components/Clock.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { grandPrixs } from '@/data/f2'

export default {
  name: 'F2 Calendar',
  data() {
    return {
      grandPrixs
    }
  },
  components: {
    Header,
    Footer,
    Card,
    Button,
    Clock
  }
}
</script>

<template>
  <div>
    <Header title="F2 Kalender" />
    <main>
      <div class="clock-container">
        <Clock />
      </div>
      <div class="calendar-container">
        <Card v-for="(grandPrix, index) in grandPrixs" :key="index" :grandPrix="grandPrix" />
      </div>
      <div class="home-navigation-section">
        <Button title="Back to home" to="/" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.clock-container,
.calendar-container {
  flex-wrap: wrap;
  padding: 15px;
}

.clock-container,
.calendar-container,
.home-navigation-section {
  display: flex;
  justify-content: center;
}

@media only screen and (min-width: 400px) {
  Footer {
    position: relative;
  }
}
</style>
