<template>
    <div class='container-fluid'>
        <div class='row'>
          <router-link :to="{name: 'home'}" class="btn btn-sm btn-default">Return</router-link>
          <a href='' class="btn btn-sm btn-danger" v-if="is_mine" @click.prevent="deleteShop">Delete</a>
        </div>
        <div class='row'>
          <div class="panel panel-default">
              <div class="panel-heading">
                  <div class='row'>
                  <div class='col-sm-6'>
                    <h3><span>Shop: {{ shop.title }} Owner: {{ owner.username }}</span></h3>
                  </div>
                </div>
            </div>
            <div class="panel-body">
                <day-schedule v-for="schedule in shop.schedules" :key="schedule.id" :daySchedule="schedule" ></day-schedule>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import ShopService from "./ShopService";
import DaySchedule from "./DaySchedule";

export default {
  components: {
    "day-schedule": DaySchedule
  },
  data() {
    return {};
  },
  computed: {
    shop() {
      return ShopService.selectedShop;
    },
    owner() {
      return ShopService.selectedShopOwner;
    },
    is_mine() {
      return ShopService.user.id === ShopService.selectedShopOwner.id;
    }
  },
  mounted() {
    ShopService.viewDetails(this.$route.params.id);
  },
  methods: {
    deleteShop() {
      console.log("deleteShop");
      ShopService.deleteShop(this.shop.id);
    }
  },
  watch: {
    "$route.params.id"(id) {
      ShopService.viewDetails(id);
    },
  }
};
</script>
<style scoped>
.row {
  padding-bottom: 5px;
}
.col {
  padding: 0px;
}
/* .panel-body {
  padding: 0px;
} */

</style>
