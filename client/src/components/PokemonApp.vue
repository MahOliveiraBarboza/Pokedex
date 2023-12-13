<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="Vue-logo" height="120px">
    <h1>Pokedex VueJS</h1>
  </div>
</template>
  

<script>
export default {
  name: 'AppView',
}
</script>

<style>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo h1 {
  color: white;
  font-size: 55px;
}
</style>