<template>
<div class='container-fluid'>
    <div class='form-horizontal'>
        <div class='row'>
          <router-link :to="{name: 'home'}" class="btn btn-sm btn-default">Return</router-link>
          <a href='' class='btn btn-sm btn-success' @click.prevent="create">Save</a>
        </div>
        <div class="form-group">
            <label for="inputTitle" class="col-sm-2 control-label">Title</label>
            <div class="col-sm-10">
                <input id="inputTitle" type='text' class='form-control' placeholder='Title' v-model='shop.title'>
            </div>
        </div>
        <fieldset v-for="schedule in shop.schedules" :key="schedule.day_of_week">
            <legend>{{ schedule.day_of_week }}</legend>
            <div class="form-group">
                <div class="col-sm-12">
                    <div :id="'jsgrid_' + schedule.day_of_week"></div>
                </div>
            </div>
        </fieldset>
    </div>
</div>
</template>

<script>
import ShopService from './ShopService'
import jsGrid from 'jsgrid'
import moment from 'moment'

export default {
    data() {
        return {
            shop: {
                title: '',
                schedules: [
                    {day_of_week: 'Monday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Tuesday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Wednesday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Thursday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Friday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Saturday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                    {day_of_week: 'Sunday', time_ranges: [
                        {from_t: '9:00', to_t: '20:00', is_open: true, reason: ''}
                    ]},
                ]
            }
        }
    },
    methods: {
        create() {
            ShopService.createShop(this.shop);
        }
    },
    mounted() {
        for(let index in this.shop.schedules) {
            let schedule = this.shop.schedules[index];
            let day_of_week = schedule.day_of_week;

            $("#jsgrid_" + day_of_week).jsGrid({
                height: 'auto',
                width: '100%',

                inserting: true,

                editing: true,
                sorting: true,
                confirmDeleting: false,

                paging: false,


                data: schedule.time_ranges,
                fields: [
                    {name: 'from_t', type: 'text', title: "From [HH:MM]"},
                    {name: 'to_t', type: 'text', title: "To [HH:MM]"},
                    {name: 'is_open', type: 'checkbox', title: 'Open',
                        insertTemplate() {
                            let input = this.__proto__.insertTemplate.call(this)[0];
                            input.checked = true;
                            return input;
                        }
                    },
                    {name: 'reason', type: 'text', title: "Reason"},
                    {type: "control" }
                ]
            });

        }
    }
}
</script>

<style>
</style>