<script>
import router from '@/router'

export default {
  name: 'Button',
  props: {
    title: String,
    to: String
  },
  methods: {
    goToCalendar() {
      router.push(`${this.to}`)
    }
  }
}
</script>

<template>
  <button @click="goToCalendar">{{ title }}</button>
</template>

<style scoped>
button {
  display: block;
  width: 90%;
  margin: 12px 0px 12px 0px;
  border: 1px solid #24282b;
  border-radius: 3px;
  border-radius: 25px;
  text-align: center;
  color: white;
  background-color: blue;
  padding: 30px;
  cursor: pointer;
}
</style>
