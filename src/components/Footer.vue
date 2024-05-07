<script setup></script>

<template>
  <footer>
    <div>&copy; {{ new Date().getFullYear() }} Copyright: Motorsport Kalender</div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  background-color: blue;
  width: 100%;
}

footer div {
  color: white;
  padding: 15px;
  text-align: center;
  font-size: larger;
}
</style>
