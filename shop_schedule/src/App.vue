<template>
<div>
    <shop-schedule-nav></shop-schedule-nav>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import ShopScheduleNav from './ShopScheduleNav.vue'
import ShopService from './ShopService';


export default {
  components: {
    ShopScheduleNav
  },
  data() {
    return {
    }
  },
  mounted() {
    ShopService.init();
  }
}
</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>
