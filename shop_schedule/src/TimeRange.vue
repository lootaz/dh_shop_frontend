<template>
    <div>
        <span>{{timeRange.from_t}}</span>
        <span> - </span>
        <span>{{timeRange.to_t}}</span>
        <span v-if="timeRange.is_open" class="label label-success">Open</span>
        <span v-else><span class="label label-danger">Closed</span> [{{timeRange.reason}}]</span>
    </div>    
</template>
<script>
export default {
    props: {
        timeRange: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
</style>
