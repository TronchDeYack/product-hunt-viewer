<template>
  <div id="app">
    <h1 class="title">ProductHunt</h1>
    <h2 class="subtitle">The best new products, every day</h2>
    <router-view/>
  </div>
</template>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  background: #f3f0f0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;

  .title {
    color: red;
    margin-bottom: 0;
  }

  .subtitle {
    font-size: 12px;
    font-weight: lighter;
    margin-top: 0;
    margin-bottom: 2rem;
  }
}
</style>
