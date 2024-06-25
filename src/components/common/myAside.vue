<template>
    <div v-if="isShow" class="container" @click.self="closeMenu">
        <Transition name="slide-fade">
            <asideUserSetting :settingsMenuData="settingsData"/>
        </Transition>
    </div>
</template>
    
<script setup lang='js'>
    /* 
        使用vuex的一些步骤：
        1.首先从vue引入toRefs工具
        2.然后从vuex引入useStore工具
        3.调用useStore方法声明一个变量store来保存
        4.调用toRefs方法并且传入store.state参数，解构出store里边state的所有状态
        5.最后就是直接使用state里边的所有的响应式变量了
    */
    import { toRefs, ref, reactive } from 'vue'
    import { useStore } from 'vuex'
    import asideUserSetting from '@/components/common/asideUserSetting.vue'

    const store = useStore();
    const { isShow } = toRefs(store.state)
    const arr = reactive([
        'English',
        '繁体中文',
        '简体中文',
        '简体中文',
    ])
    const isDropDownList = ref(false)
    const settingsData = [
        { 
            title: '盘口设置',
            contents: [
                { radioInputText: '你好张三', },
                { radioInputText: '你好李四', }
            ]
            
            
         },
        { 
            title: '提前结算规则',
            contents: [
                { radioInputText: '接受提前结算估值变化', },
                { radioInputText: '不接受估值变化', }
            ]
            
         },
        { 
            title: '投注规则',
            contents: [
                { radioInputText: '自动接收更好的赔率', },
                { radioInputText: '自动接收任何赔率', },
                { radioInputText: '不接收任何赔率变动', },
            ]
            
         },
        { 
            title: '语言选择',
            contents: arr
            
         },
         { 
            title: '排序规则',
            contents: [
                { radioInputText: '时间顺序', },
                { radioInputText: '联赛顺序', },
            ]
            
         },
         { 
            title: '其他',
            contents: [
                { radioInputText: '投注教程', },
                { radioInputText: '赛果', },
                { radioInputText: '体育规则', },
                { radioInputText: '模拟投注', },
            ]
            
         },
    ]
    const closeMenu = ()=> {
        /* 
            这是使用mutations的方法，第一个参数是mutations里边的函数名，第二个参数是要传的值，
            通过这个东西可以改变store里边的state里边的公共变量
        */
        store.commit('changeIsShow', false)
    }
    
</script>
    
<style scoped lang='less'>
    .container {
        border: 1px solid red;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        // opacity: 0.5;
        background: rgba(0,0,0,0.5)
    }
    /* 
        Transition组件的渐变效果
    */
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
    
</style>
