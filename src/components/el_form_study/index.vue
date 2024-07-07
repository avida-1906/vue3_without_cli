<template>
    <div>
        <h1>Form表单学习</h1>
        <br>

        <h2>el-form</h2>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <!-- 日期选择器 -->
                    <el-date-picker
                    v-model="form.date1"
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%"
                    />
                </el-col>
                <el-col :span="2" class="text-center">
                    <span class="text-gray-500">-</span>
                </el-col>
                <el-col :span="11">
                    <!-- 时间选择器 -->
                    <el-time-picker
                    v-model="form.date2"
                    placeholder="Pick a time"
                    style="width: 100%"
                    />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox value="Online activities" name="type">
                        Online activities
                    </el-checkbox>
                    <el-checkbox value="Promotion activities" name="type">
                        Promotion activities
                    </el-checkbox>
                    <el-checkbox value="Offline activities" name="type">
                        Offline activities
                    </el-checkbox>
                    <el-checkbox value="Simple brand exposure" name="type">
                        Simple brand exposure
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio value="Sponsor">Sponsor</el-radio>
                    <el-radio value="Venue">Venue</el-radio>
                </el-radio-group>
            </el-form-item>
                <el-form-item label="Activity form">
                    <el-input v-model="form.desc" type="textarea" />
                </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <br>

        <h2>el-checkbox-group</h2>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="Option A" value="Value A" />
            <el-checkbox label="Option B" value="Value B" />
            <el-checkbox label="Option C" value="Value C" />
            <el-checkbox label="disabled" value="Value disabled" disabled />
            <el-checkbox
            label="selected and disabled"
            value="Value selected and disabled"
            disabled
            />
        </el-checkbox-group>
    </div>
</template>
    
<script setup lang='js'>
    import { ref, reactive } from 'vue'
    
    const form = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    })
    const onSubmit = () => {
        console.log('submit!')
    }

    //当勾选了多选框之后会把对应的value值添加到这个数组，反之亦然。
    const checkList = ref(['Value selected and disabled', 'Value A'])
</script>
    
<style scoped lang='less'>
    
</style>
