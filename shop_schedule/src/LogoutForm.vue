<template>
    <form class="navbar-form navbar-right"
        action="{% url 'dh_front:logout' %}"
        method="post">
    <span>{{ user.username }}</span>
    <button type="submit"
            class="btn btn-danger btn-sm"
            @click.prevent="executeLogout">
            Logout
    </button>
</form>
</template>
<script>
import ShopService from './ShopService'

export default {
    computed: {
        user() {
            return ShopService.user;
        }
    },
    methods: {
        executeLogout() {
            ShopService.logout();
        }
    }
}
</script>
<style>

</style>

