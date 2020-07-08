<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/icon-1.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon-1_active.png" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/icon-2.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon-2_active.png" />

      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/icon-3.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon-3_active.png" />

      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="@/assets/img/tabbar/icon-4.png" />
      <img slot="item-icon-active" src="@/assets/img/tabbar/icon-4_active.png" />

      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>