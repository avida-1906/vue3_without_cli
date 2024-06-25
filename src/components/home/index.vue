<template>
    <div class="home_container">
        <!-- 公共头部 -->
        <myHeader/>
        <!-- 左侧边栏 -->
        <myAside @sendDataFromAside="getDataFromAside"/>
        <h1>这是首页</h1>
        <div class="container" v-for="( item, index ) in arr" :key="index">
            <p>{{ item.title }}</p>
        </div>
    </div>
</template>
    
<script setup lang='js'>
    import { reactive, ref } from 'vue'
    import '@/assets/style/common.less'
    import myHeader from '@/components/common/myHeader.vue'
    import myAside from '@/components/common/myAside.vue'

    const arr = reactive([])
    const isShow = ref(false)

    for( let i=0; i<99; i++ ) {
        arr[i] = { title: '响应式布局' }
    }

    const getData = (x)=> {
        console.log(x.value)
        isShow.value = x.value
    }

    const getDataFromAside = (x)=> {
        isShow.value = x.value
    }

</script>
    
<style scoped lang='less'>
    @my_color: green;
       
    .home_container {
        overflow-y: scroll;
    }
    
</style>
