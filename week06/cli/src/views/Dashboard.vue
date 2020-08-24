<template>
  <div>
    <h2>後臺管理</h2>
    <div id="nav">
      <router-link to="/admin">
        後台首頁
      </router-link> |
      <router-link to="/admin/products">
        產品列表
      </router-link> |
      <router-link to="/admin/coupons">
        庫碰券
      </router-link> |
      <router-link to="/">
        返回前台
      </router-link>
    </div>
    <router-view />
  </div>
</template>
