<template>
    <div :class="{ [`col-${span}`]: span ? true : false}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        span: {
            type: String
        }
    }
}
</script>
<style lang="sass" scoped>
    @for $i from 1 through 24 
        .col-#{$i} 
            width: ($i / 24) * 100%
    


</style>