<!-- 
    学习心得：
        今天动手尝试了一下element plus这个组件库，
        没想到一开始就踩坑了，按照官网的完整引入，
        在引入main.js文件里边的组件库样式文件import 'element-plus/dist/index.css'的时候就出问题了，
        一开始就可以定位到这里来，注释掉这句话就不会报错，
        当时搜索了很久都找不到答案，后来搜索 webpack+这句话就可以了，
        原来是webpack.config.js文件里边没有给css做配置，
        以后搜索答案一定要什么内容出错就搜索什么内容。

        还有一个就是，table表格原先使用了stripe这个属性使表格出现了斑马条纹，
        然后又是研究带状态表格，结果原先的斑马条纹的样式覆盖了状态样式，
        又因为没有使用::v-deep这个类名前缀，导致当前组件的样式无法作用到子组件。

        以后上班的时候遇到棘手的问题就要马上搭建一个项目研究一下，这样可以快速搞清楚问题的缘由。
        每天下班以后也要至少花一个小时来实现一些功能，这样才能快速成长，
        开发能力是靠写代码写出来的，不是靠看理论看出来的。切记！！！

        
-->


<template>
    <h1>el-table学习</h1>
    <h2>带状态的表格</h2>
    <el-table
        :data="tableData1" 
        style="width: 100%" 
        border 
        :row-class-name="tableRowClassName"
    >
      <!-- label就是列的名字 -->
      <!-- prop对应某一列的数据 -->
      <el-table-column prop="date" label="Date" width="280" />
      <el-table-column prop="name" label="Name" width="880" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <br>

    <h2>显示溢出工具提示的表格</h2>
    <!-- 加上height属性就可以实现表头固定 -->
    <el-table :data="tableData2" style="width: 100%" height="100px">
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column
        property="address"
        label="use show-overflow-tooltip"
        width="240"
        show-overflow-tooltip
        />
        <el-table-column property="address" label="address" />
    </el-table>
    <br>

    <h2>固定列的实现</h2>
    <el-table :data="tableData3" style="width: 50%">
        <el-table-column fixed prop="date" label="Date" width="150" />
        <el-table-column prop="name" label="Name" width="120" />
        <el-table-column prop="state" label="State" width="120" />
        <el-table-column prop="city" label="City" width="120" />
        <el-table-column prop="address" label="Address" width="600" />
        <el-table-column prop="zip" label="Zip" width="120" />
        <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default>
            <el-button link type="primary" size="small" @click="handleClick">
            Detail
            </el-button>
            <el-button link type="primary" size="small">Edit</el-button>
        </template>
        </el-table-column>
    </el-table>
    <br>

    <h2>流体高度</h2>
    <el-table :data="tableData4" style="width: 100%" max-height="250">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="address" label="Address" width="600" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button
          link
          type="primary"
          size="small"
          @click.prevent="deleteRow(scope.$index)"
        >
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">
    Add Item
  </el-button>
  <br>

</template>
  
<script lang="js" setup>
    import { ref } from 'vue'
    import dayjs from 'dayjs'
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
    
    const tableRowClassName = ( { row, rowIndex } ) => {
        console.log(rowIndex)
        if (rowIndex === 1) {
            return 'warning-row'
        } else if (rowIndex === 3) {
            return 'success-row'
        }
        return ''
    }

    const tableData2 = [
        {
            date: '2016-05-04',
            name: 'Aleyna Kutzner',
            address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
        },
        {
            date: '2016-05-03',
            name: 'Helen Jacobi',
            address: '760 A Street, South Frankfield, Illinois',
        },
        {
            date: '2016-05-02',
            name: 'Brandon Deckert',
            address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
        },
        {
            date: '2016-05-01',
            name: 'Margie Smith',
            address: '23618 Windsor Drive, West Ricardoview, Idaho',
        },
    ]

    const handleClick = () => {
        console.log('click')
    }
    const tableData3 = [
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Home',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
            tag: 'Office',
        },
    ]


    const now = new Date()
    const deleteRow = (index) => {
        tableData4.value.splice(index, 1)
    }
    const onAddItem = () => {
        console.log(22222)
        now.setDate(now.getDate() + 1)
        tableData4.value.push({
            date: dayjs(now).format('YYYY-MM-DD'),
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        })
    }
    const tableData4 = ref([
        {
            date: '2016-05-01',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
        {
            date: '2016-05-03',
            name: 'Tom',
            state: 'California',
            city: 'Los Angeles',
            address: 'No. 189, Grove St, Los Angeles',
            zip: 'CA 90036',
        },
    ])


</script>

<style lang="css" scoped>
/* 
    ::v-deep如果之前样式没有生效就可以试一下这个符号，是一个用于穿透作用域样式的特殊选择器。
*/
    ::v-deep.el-table .warning-row {
        --el-table-tr-bg-color: var(--el-color-warning-light-9) !important;
    }
    ::v-deep.el-table .success-row {
        --el-table-tr-bg-color: var(--el-color-success-light-9) !important;
    }
</style>