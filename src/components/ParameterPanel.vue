<template>
  <el-card class="parameter-panel">
    <el-form label-width="120px">
      <el-form-item label="目标格式">
        <el-select v-model="params.target">
          <el-option
            v-for="t in supportedTargets"
            :key="t.value"
            :label="t.label"
            :value="t.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="自定义配置">
        <el-input
          v-model="params.config"
          placeholder="输入配置URL或本地路径"
        />
      </el-form-item>
      <el-checkbox-group v-model="params.options">
        <el-checkbox label="add_emoji">添加地区旗帜</el-checkbox>
        <el-checkbox label="remove_old_emoji">移除旧旗帜</el-checkbox>
      </el-checkbox-group>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      supportedTargets: [
        { value: 'clash', label: 'Clash' },
        { value: 'surge', label: 'Surge' }
      ],
      params: {
        target: 'clash',
        config: '',
        options: []
      }
    }
  }
}
</script>