<template>
<div class="panel panel-default">
    <div class="panel-heading">
        <span>{{daySchedule.day_of_week }}</span>
        <span v-if="daySchedule.time_ranges.length === 0" class="label label-danger">Closed</span>
    </div>
    <div class="panel-body">
        <time-range v-for="timeRange in daySchedule.time_ranges" :key="timeRange.id" :timeRange="timeRange"></time-range>
    </div>
</div>
</template>
<script>
import TimeRange from './TimeRange.vue'

export default {
    components: {
        "time-range": TimeRange
    },
    props: {
        daySchedule: {
            type: Object,
            required: true
        }
    },
}
</script>
<style scoped>
</style>
