<template>
    <div class="container-fluid card">
            <div class='col-sm-6'>{{shop.title}}</div>
            <div class='col-sm-6 text-right'>
                <a href="#" class="btn btn-sm btn-primary" @click.prevent="viewDetailsClicked">Details</a>
            </div>
    </div>
</template>
<script>
    export default {
        props: {
            shop: {
                type: Object,
                required: true
            },
        },
        methods: {
            viewDetailsClicked() {
                this.$router.push({name: "details", params: {id: this.shop.id}});
            }
        }
    }
</script>
<style>
    div.card {
        border-bottom: 1px solid green;
        padding: 10px;
    }
</style>
