<script>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { grandPrixs } from '@/data/f3'

export default {
  name: 'F3 Calendar',
  data() {
    return {
      grandPrixs
    }
  },
  components: {
    Header,
    Footer,
    Card,
    Button
  }
}
</script>

<template>
  <div>
    <Header title="F3 Kalender" />
    <main>
      <div class="calendar-container">
        <Card
          v-for="(grandPrix, index) in grandPrixs"
          :key="index"
          :grandPrix="grandPrix"
          racingClass="Formula 1"
        />
      </div>
      <div class="home-navigation-section">
        <Button title="Back to home" to="/" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.calendar-container {
  flex-wrap: wrap;
  padding: 15px;
}

.calendar-container,
.home-navigation-section {
  display: flex;
  justify-content: center;
}

Footer {
  position: relative;
}
</style>
