<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>The OD Blog</h1>
    </router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    display: flex;
    background: #ff8800;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 2px 16px #dfdfdf !important;;
  }
  header h1 {
    color: #dfdfdf;
    font-size: 48px;
  }
  header a {
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>
