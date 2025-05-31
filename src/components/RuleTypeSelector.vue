<template>
  <el-select v-model="selectedType">
    <el-option
      v-for="type in ruleTypes"
      :key="type.value"
      :label="type.label"
      :value="type.value"
    />
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      ruleTypes: [
        { value: 'DOMAIN-SUFFIX', label: '域名后缀' },
        { value: 'DOMAIN-KEYWORD', label: '域名关键词' },
        { value: 'IP-CIDR', label: 'IP段' }
      ]
    }
  }
}
</script>