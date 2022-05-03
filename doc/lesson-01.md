# 第一课

> Vite 可能是下一代前端构建工具，通过这个项目研究一下，作为知识储备。

## 从官网开始

官网: https://cn.vitejs.dev

## 为什么选择 Vite？

开发时启动项目更快，这是当前最主要的原因。

## 为什么快？

将资源分为依赖 和 源码两种类型。

依赖: 大多为在开发时不会变动的纯 JavaScript。例如有上百个模块的组件库。

源码: 通常包含一些并非直接是 JavaScript 的文件，例如 JSX、CSS、Vue。

使用了 esbuild 预构建依赖，源码通过 ESM 的形式直接提供给浏览器，借助浏览器能力减少了依赖计算所花的时间。

## 核心结构

esbuild 构建依赖，rollup 打包。

## 怎么上手？

用一个最简单的模板初始化: `yarn create @vitejs/app my-vite-react --template react-ts`。

注意 Node.js 的版本不能小于 12。

社区提供了更丰富的模板: https://github.com/vitejs/awesome-vite#templates

## 参考

npm create 命令:
https://juejin.cn/post/6844903909958352909

