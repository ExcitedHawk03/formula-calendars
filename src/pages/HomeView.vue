<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <Header title="Home Page" />
  <main>
    <div className="home-content">
      <Button title="F1 Calendar" to="f1-calendar" />
      <Button title="F2 Calendar" to="f2-calendar" />
      <Button title="F3 Calendar" to="f3-calendar" />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 800px;
}
</style>
