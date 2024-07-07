<template>
    <div>
        <h1>分页组件的学习</h1>
        <br>

        <div class="example-pagination-block">
            <div class="example-demonstration">When you have few pages</div>
            <el-pagination layout="prev, pager, next" :total="50" />
        </div>
        <div class="example-pagination-block">
            <div class="example-demonstration">When you have more than 11 pages</div>
            <el-pagination layout="prev, pager, next" :total="1000" :pager-count="11" />
        </div>
    </div>
</template>
    
<script setup lang='js'>
    import { ref } from 'vue'
    
</script>
    
<style scoped lang='css'>
    .example-pagination-block + .example-pagination-block {
        margin-top: 10px;
    }
    .example-pagination-block .example-demonstration {
        margin-bottom: 16px;
    }
</style>
