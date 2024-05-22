<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <Header title="Home Page" />
  <main>
    <div className="home-content">
      <div class="f1-content">
        <img src="../assets/images/other/f1.png" alt="F1 logo" />
        <Button title="F1 Calendar" to="f1-calendar" />
      </div>
      <div class="f2-content">
        <img src="../assets/images/other/f2.png" alt="F2 logo" />
        <Button title="F2 Calendar" to="f2-calendar" />
      </div>
      <div class="f3-content">
        <img src="../assets/images/other/f3.png" alt="F3 logo" />
        <Button title="F3 Calendar" to="f3-calendar" />
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin: 25px 0px 25px 0px;
}

.f1-content,
.f2-content,
.f3-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
}

.f1-content {
  background-color: red;
}

.f2-content {
  background-color: rgb(13, 167, 228);
}

.f3-content {
  background-color: rgb(218, 60, 32);
}

.f1-content img,
.f2-content img,
.f3-content img {
  width: 100%;
  object-fit: fill;
}
</style>
