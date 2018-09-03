<template>
    <div class="container-fluid">
        <router-link v-if="is_authenticated" :to="{name: 'create'}" class="btn btn-sm btn-success">Create</router-link>
        <div class="row" v-for="shop in shops" :key="shop.id">
            <shop-item  :shop="shop" class='col-sm-6'></shop-item>
        </div>
    </div>
</template>
<script>
    import ShopItem from './ShopItem.vue'
    import ShopService from './ShopService'

    export default {
        components: {
            ShopItem
        },
        data(){
            return {
                
            }
        },
        computed: {
            shops(){
                return ShopService.shops;
            },
            is_authenticated() {
                return ShopService.is_authenticated;
            }
        },
        mounted() {
            ShopService.getShops();
        }
    }
</script>
<style>
</style>