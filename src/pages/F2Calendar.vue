<script>
import Button from '@/components/Button.vue'
import Card from '@/components/Card.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { circuits } from '@/data/f2'

export default {
  name: 'F2 Calendar',
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
    <Header title="F2 Kalender" />
    <main>
      <div class="calendar-container">
        <Card
          v-for="(circuit, index) in circuits"
          :key="index"
          :circuit="circuit"
          racingClass="Formula 2"
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
