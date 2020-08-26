<template>
  <div class="home">
    <h2>這是前台</h2>
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/products">
        產品列表
      </router-link> |
      <router-link to="/cart">
        購物車列表
      </router-link> |
      <router-link to="/login">
        後台登入頁面
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>
