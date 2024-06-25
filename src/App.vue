<template>
    <router-view></router-view>
</template>

<!-- 
    这里如果你填写ts会报错：
    ERROR in ./src/App.vue?vue&type=script&setup=true&lang=ts (./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/App.vue?vue&type=script&setup=true&lang=ts) 12:12
    Module parse failed: Unexpected token (12:12)
    File was processed with these loaders:
    * ./node_modules/vue-loader/dist/index.js
    You may need an additional loader to handle the result of these loaders.
    所以，还是要注意对应的脚本语言。
-->
<script setup lang='js'>
   import { ref } from 'vue'
    
</script>
    
<style scoped lang='less'>
    
</style>
