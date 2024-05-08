<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    title: String
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
  background-color: blue;
  color: white;
}

header h1 {
  padding: 15px;
}
</style>
