<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar{
        display: flex;  /*弹性布局*/
        background-color: #f6f6f6;

        position: fixed;  /*放到下面*/
        left: 0;
        right: 0;
        bottom: 0;

        box-shadow: 0 -1px 1px rgba(100,100,100,0.1);/*设置过渡阴影*/
    }
</style>
