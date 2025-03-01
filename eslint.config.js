// 导入 ESLint 基础配置
import js from '@eslint/js'
// 导入 Vue 插件
import vue from 'eslint-plugin-vue'
// 导入 Prettier 插件
import prettier from 'eslint-plugin-prettier'
// 导入 Prettier 配置（用于解决与 ESLint 的冲突）
import eslintConfigPrettier from 'eslint-config-prettier'
import * as vueParser from 'vue-eslint-parser'

export default [
  // 使用 ESLint 推荐的基础规则配置
  js.configs.recommended,
  // 使用 Prettier 配置（避免与 ESLint 规则冲突）
  eslintConfigPrettier,
  {
    // 指定需要检查的文件类型
    files: ['**/*.vue', '**/*.js'],
    // 语言选项配置
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: 'espree',
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        reactive: 'readonly',
        onMounted: 'readonly'
      }
    },
    // 启用的插件
    plugins: {
      vue // Vue.js 规则插件
      // 采用建议的第一种方案，具体见下方
      // prettier // Prettier 格式化插件
    },
    // ESLint 规则配置
    rules: {
      // 生产环境警告 console，开发环境允许使用
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // 生产环境警告 debugger，开发环境允许使用
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // 关闭组件名必须多个单词的限制
      'vue/multi-word-component-names': 'off',
      // 关闭 props 必须有默认值的限制
      'vue/require-default-prop': 'off',
      // 允许使用 v-html 指令（注意 XSS 风险）
      'vue/no-v-html': 'off',
      // 启用 Prettier 格式化规则
      // 'prettier/prettier': 'error',
      // 未使用的变量显示警告
      'no-unused-vars': 'warn',
      // 未定义的变量显示警告
      'no-undef': 'warn',
      // 继承 Vue 推荐的规则配置
      ...vue.configs.recommended.rules
    },
    ignores: ['node_modules/**', 'dist/**', 'public/**']
  }
]
// 1. 仅使用 eslint-config-prettier（推荐）:
// 轻量级，只禁用冲突的 ESLint 规则
// ESLint 和 Prettier 分别运行，责任分明
// 需要单独运行 Prettier 命令格式化代码

// 2. 使用 eslint-plugin-prettier:
// 将 Prettier 作为 ESLint 规则运行
// 可能导致 ESLint 运行速度变慢
// 可以一次性运行 ESLint 并应用 Prettier 格式化

// 大多数项目现在推荐第一种方法，保持工具的职责分离，同时获得更好的性能。这种方式下，
// 你使用 npm run lint 检查代码问题，使用 npm run format 格式化代码。
