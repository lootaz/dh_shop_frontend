import Vue from 'vue'
import $ from 'jquery'
import _ from 'lodash'
import {router} from './router'

export default new Vue({
    router,
    data() {
        return {
            shops: [],
            selectedShop: {},
            selectedShopOwner: {},
            user: {},
            token: '',
            active_nav_link: ''
        }
    },
    methods: {
        viewDetails(id) {
            this.getShop(id);
        },
        getShops() {
            $.get('http://localhost:8000/dh-shop/api/shops/')
                .then((response) => {
                    this.shops = response.results;
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        getShop(id) {
            let selectedShop = {};
            let selectedShopOwner = {};

            $.get('http://localhost:8000/dh-shop/api/shops/'+ id + '/')
                .then((response) => {
                    this.selectedShop = response;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        createShop(shop) {
            let self = this;
            $.ajax({
                url: 'http://localhost:8000/dh-shop/api/shops/',    
                type: 'post',
                headers: {
                    "Authorization": "Token " + self.token
                },
                contentType: "application/json",
                data: JSON.stringify(shop),
                // data: JSON.stringify({"title": "111", "schedules": [{"day_of_week": "Monday", "time_ranges":[{"from": 9, "to":20,"is_open":true, "reason":""}]}]}),
                success: (response) => {
                    self.$router.push({name: 'list'});
                },
                error: (err) => {
                    console.log(err);
                }
            });
        },
        deleteShop(id) {
            let self = this;

            $.ajax({
                url: 'http://localhost:8000/dh-shop/api/shops/' + id + '/',
                type: 'delete',
                headers: {
                    "Authorization": "Token " + self.token
                },
                contentType: "application/json",
                success: (response) => {
                    self.$router.push({name: 'list'});
                },
                error: (err) => {
                    console.log(err);
                }
            })
        },
        signup(name, passwd){
            let data = {
                "username": name,
                "password": passwd
            };
            $.post("http://localhost:8000/dh-shop/api/register/", data)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        login(name, passwd){
            $.ajax({
                url: 'http://localhost:8000/dh-shop/api/login/',
                type: 'post',
                headers: {
                    "Authorization": "Basic " + btoa(name + ':' + passwd)
                },
                success: (response) => {
                    this.token = response.token;
                    this.user = response.user;
                },
                error: (err) => {
                    console.log(err);
                }
            })
        },
        logout() {
            let self = this;
            $.ajax({
                url: 'http://localhost:8000/dh-shop/api/logout/',
                type: 'get',
                headers: {
                    "Authorization": "Token " + self.token
                },
                success: (response) => {
                    self.$router.push({name: 'home'});
                },
                error: (err) => {
                    console.log(err);
                }
            });
            this.reset_data();
        },
        reset_data() {
            this.token = '';
            this.user = {};
        },
        init() {
            this.init_token();
            this.init_user();
            
            this.getShops();
        },
        init_token() {
            if(localStorage.token) {
                this.token = localStorage.token;
            }
        },
        init_user() {
            if(localStorage.user) {
                this.user = JSON.parse(localStorage.user);
            }
        }
    },
    watch: {
        token(newToken) {
            localStorage.token = newToken;
        },
        user(newUser) {
            localStorage.user = JSON.stringify(newUser);
        },
        selectedShop(newShop) {
            let self = this;
            $.get('http://localhost:8000/dh-shop/api/users/' + newShop.owner_id + '/')
            .then((response) => {
                this.selectedShop.owner = response;
                this.selectedShopOwner = response;
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
    computed: {
        is_authenticated(){
            return (this.token.length > 0);
        }
    },
});