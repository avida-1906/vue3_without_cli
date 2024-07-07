<template>
    <div>
        <h1>骨架屏的学习</h1>
        <br />
        
        <template v-if="tableData">
            <el-table
                :data="tableData" 
                style="width: 100%" 
                border 
            >
            <!-- label就是列的名字 -->
            <!-- prop对应某一列的数据 -->
            <el-table-column prop="date" label="Date" width="280" />
            <el-table-column prop="name" label="Name" width="880" />
            <el-table-column prop="address" label="Address" />
            </el-table>
        </template>
        <template v-else>
            <el-skeleton :rows="5" animated />
        </template>
    </div>
</template>
    
<script setup lang='js'>
    import { ref } from 'vue'
    
    const tableData = ref(null)
    const timer = setTimeout(() => {
        tableData.value = tableData1
    }, 2000);


    const tableData1 = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]
</script>
    
<style scoped lang='css'>
    
</style>
