<template>
    <div class="row" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter / 2 + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        gutter: {
            type: [String, Number]
        }
    },
    created() {
        console.log('row created')
        console.log(this.$children)
    },
    mounted() {
        console.log('row mounted')
        // 获取子组件
        this.$children.forEach((vm) => {
            // 更新子组件data属性
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang="sass" scoped>
    .row
        display: flex
</style>