<template>
    <div class="user-setting">
        <template v-for="(item, index) in settingsMenuData">
            <!-- 除下面两种以外 -->
            <div  class="user-setting-item" v-if="item.title!=='语言选择'&&item.title!=='其他'">
                <p class="title">{{ item.title }}</p>
                <div>
                    <span v-for="(item2, index) in item.contents" :key="index"><input type="radio" name="only">&nbsp&nbsp{{ item2.radioInputText }}</span>
                </div>
            </div>
            <!-- 如果是其他 -->
            <div v-else-if="item.title==='其他'" class="user-setting-item">
                <p class="title">{{ item.title }}</p>
                <div class="other" v-for="(item2, index) in item.contents" :key="index">
                    <div>
                        {{ item2.radioInputText }}
                    </div>
                    <div>
                        <svg t="1719301090684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16810" width="20"><path d="M666.253935 518.249249 273.260633 911.242552C248.123793 936.379347 248.127889 977.193761 273.303953 1002.369825 298.655566 1027.721439 339.279115 1027.565301 364.431226 1002.41319L802.13691 564.707506C827.273706 539.57071 827.269654 498.756296 802.093546 473.580232 800.919062 472.405749 799.711811 471.285983 798.474774 470.220934 796.02127 466.397184 793.123039 462.777077 789.780168 459.434251L352.074529 21.728568C326.922374-3.423544 286.298824-3.579681 260.947256 21.771932 235.771147 46.947996 235.767096 87.76241 260.903891 112.899206L666.253935 518.249249Z" fill="#cdcdcd" p-id="16811"></path></svg>
                    </div>
                </div>
            </div>
            <!-- 如果是语言选择 -->
            <div @click="chooseLanguage" v-else class="user-setting-item">
                <p class="title">
                    <div>
                        {{ item.title }}
                    </div>
                    <div>
                        <svg t="1719295213435" class="countryFlag icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8359" width="20"><path d="M63.3 514.4c0 247.4 200.6 448 448 448s448-200.6 448-448-200.6-448-448-448-448 200.5-448 448z" fill="#EFEFEF" p-id="8360"></path><path d="M155.9 241.6c-35.2 45.8-61.7 98.6-77.2 155.9h233.1L155.9 241.6z m788 155.9c-15.5-57.3-42-110.1-77.2-155.9L710.8 397.5h233.1zM78.8 631.2c15.5 57.3 42 110.1 77.2 155.9l155.9-155.9H78.8zM784.1 159c-45.8-35.2-98.6-61.7-155.9-77.2v233.1L784.1 159zM238.6 869.7c45.8 35.2 98.6 61.7 155.9 77.2v-233L238.6 869.7zM394.5 81.8c-57.3 15.5-110.1 42-155.9 77.2l155.9 155.9V81.8z m233.7 865.1c57.3-15.5 110.1-42 155.9-77.2L628.2 713.9v233z m82.6-315.7l155.9 155.9c35.2-45.8 61.7-98.6 77.2-155.9H710.8z" fill="#0050B1" p-id="8361"></path><path d="M955.5 455.9H569.8V70.1c-19.4-2.5-38.9-3.8-58.4-3.8s-39.1 1.3-58.4 3.8v385.8H67.1c-2.5 19.4-3.8 38.9-3.8 58.4 0 19.8 1.3 39.3 3.8 58.4h385.8v385.8c38.8 5.1 78.1 5.1 116.9 0V572.8h385.8c2.5-19.4 3.8-38.9 3.8-58.4-0.1-19.8-1.4-39.4-3.9-58.5z" fill="#D60026" p-id="8362"></path><path d="M628.2 631.2l199.9 199.9c9.2-9.2 18-18.8 26.3-28.8L683.3 631.2h-55.1z m-233.7 0l-200 199.9c9.2 9.2 18.8 18 28.8 26.3l171.2-171.2v-55z m0-233.7l-200-199.9c-9.2 9.2-18 18.8-26.3 28.8l171.2 171.2h55.1v-0.1z m233.7 0l199.9-199.9c-9.2-9.2-18.8-18-28.8-26.3L628.2 342.4v55.1z" fill="#D60026" p-id="8363"></path></svg>
                        <span>简体中文</span>
                        <span>
                            <svg v-if="!showLanguageList" t="1719298921795" class="icon" viewBox="0 0 1868 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12814" width="20"><path d="M1823.789011 994.742857c-39.009524 39.009524-97.52381 39.009524-136.533333 0l-760.685715-760.685714-760.685714 760.685714c-39.009524 39.009524-97.52381 39.009524-136.533333 0s-39.009524-97.52381 0-136.533333l819.2-819.2c39.009524-39.009524 97.52381-39.009524 136.533333 0l819.2 819.2c58.514286 39.009524 58.514286 97.52381 19.504762 136.533333z" fill="#cdcdcd" p-id="12815"></path></svg>
                            <svg v-else t="1719299559623" class="icon" viewBox="0 0 1862 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13823" width="20"><path d="M1687.255678 39.009524l-760.685715 760.685714-760.685714-760.685714c-39.009524-39.009524-97.52381-39.009524-136.533333 0s-39.009524 97.52381 0 136.533333l819.2 819.2c39.009524 39.009524 97.52381 39.009524 136.533333 0l819.2-819.2c39.009524-39.009524 39.009524-97.52381 0-136.533333 0-39.009524-78.019048-39.009524-117.028571 0z" fill="#cdcdcd" p-id="13824"></path></svg>
                        </span>
                    </div>
                </p>
                <template v-for="(item3, index) in item.contents" :key="index">
                    <p class="language-item" v-if="showLanguageList">
                        {{ item3 }}
                    </p>
                </template>
            </div>
        </template>
    </div>
</template>
    
<script setup lang='js'>
    import { ref } from 'vue'
    const props = defineProps({
        settingsMenuData: Object
    })

    const showLanguageList =ref(false)
    const chooseLanguage = ()=> {
        showLanguageList.value = showLanguageList.value ? false : true;
    }

</script>
    
<style scoped lang='less'>
    //左侧边栏内容区域的背景颜色
    @bg-color: #f4f4f4;
    @base-font-size: 14px;

    .user-setting {  //左侧边栏第二层容器
        width: 70%;
        height: 100%;
        background: @bg-color;
    }
    .user-setting-item {  //设置的每一块
        border: 1px solid red;
        margin-bottom: 2%;
        background: white;

        .title {  //每一块的标题---加粗字体
            border-left: 5px solid blue;
            font-weight: 700;
        }
        .countryFlag {  //语言选择按钮的国旗图标
            margin-bottom: -5%;
        }
        div {
            span {  //每一块里边的单选按钮以及文本或其他
                min-width: 50%;
                padding: 2% 0;
            }
            .other {  //《其他》这一块里边的跳转按钮列表
                min-width: 100%;
                padding: 2% 0;
                display: flex;
                justify-content: space-between;
            }
        }
        .language-item {  //语言选择这一块里边的可选语言列表
            font-size: 14px;
            min-width: 100%;
            padding: 3% 0;
            border-bottom: 2px solid #edf2f7;
        }
    }
    
    .user-setting-item >* {   //每一块里边的子元素---弹性布局
        font-size: @base-font-size;
        padding: 2% 2%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    
</style>
