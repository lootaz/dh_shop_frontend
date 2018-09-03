<template>
<form class="navbar-form navbar-right"
      action="#"
      method="post">
    <div class="form-group">
        <input type="text"
               name="username"
               id="username"
               placeholder="username"
               class="form-control"
               v-model='username'/>
    </div>
    <div class="form-group">
        <input type="password"
               name="password"
               id="password"
               placeholder="password"
               class="form-control"
               v-model='password'/>
    </div>
    <button type="submit"
            @click.prevent='executeLogin'
            class="btn btn-success btn-sm">Login
    </button>
    <button type="submit"
            @click.prevent="executeSignup"
            class="btn btn-default btn-sm">Signup
    </button>
</form>
</template>
<script>
import ShopService from './ShopService'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        executeLogin() {
            ShopService.login(this.username, this.password);
        },
        executeSignup() {
            ShopService.signup(this.username, this.password);
        }
    }
}
</script>
<style>

</style>
