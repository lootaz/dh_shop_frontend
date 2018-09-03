<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" class="navbar-brand">Shop Schedule</router-link>
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false"
                    aria-controls="navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li :class='{active: is_active(nav_link.title)}' v-for='nav_link in nav_links' :key='nav_link.title' @click='select_nav_link(nav_link.title)'>
                    <router-link :to="nav_link.params">{{nav_link.title}}</router-link>
                </li>
            </ul>
            <component :is="is_authenticated"></component>
        </div>
    </div>
</nav>
</template>
<script>
import LoginForm from './LoginForm.vue'
import LogoutForm from './LogoutForm.vue'
import ShopService from './ShopService'
import _ from 'lodash'

export default {
    data() {
        return {
            nav_links: [
                {title: 'List', params: {name: 'list'}},
            ]
        }
    },
    components: {
        'login-form': LoginForm,
        'logout-form': LogoutForm
    },
    computed: {
        is_authenticated(){
            return ShopService.is_authenticated ? 'logout-form' : 'login-form';
        },
    },
    methods: {
        is_active(nav_link) {
            return ShopService.active_nav_link === nav_link ? 'active':'';
        },
        select_nav_link(nav_link) {
            ShopService.active_nav_link = nav_link;
        }
    },
};
</script>
<style>
</style>