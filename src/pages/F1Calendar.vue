<script>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { circuits } from '@/data/f1'

export default {
  name: 'F1 Calendar',
  data() {
    return {
      circuits
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
    <Header title="F1 Kalender" />
    <main>
      <div class="calendar-container">
        <Card
          v-for="(circuit, index) in circuits"
          :key="index"
          :circuit="circuit"
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
