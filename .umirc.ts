import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    title: 'base',
  },
  // 使用约定路由，以 pages 文件系统目录架构来映射路由表
  // routes: [{ path: '/', component: '@/pages/index' }],
})
