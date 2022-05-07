# 第二课、浅用 Vite

> 用一个最简单的项目看看 Vite 提供了哪些基础功能供我们使用。

## 开发服务选项 server

从设计思路上，vite 默认提供了很多功能，而 Webpack 全部功能都是以插件的形式提供。

比如提供 Web 容器服务与热更新这项功能，Vite 提供的是一个[配置](https://cn.vitejs.dev/config/#server-host)方案，而 Webpack 是插件方案，并且有 3 个插件可选。

Webpack 的插件形式提供了更多的选择空间的同时也带来了更高的学习成本，Vite 的唯一性降低了学习成本的同时也关闭了一定的可能性。

*** 常用设置 ***

- host 指定服务器应该监听哪个 IP 地址。 
- port 指定开发服务器端口。
- open 在开发服务器启动时自动在浏览器中打开应用程序，并设置打开的地址。
- proxy 为开发服务器配置自定义代理规则。
- hmr 热更新。

详见 [官网配置文档](https://cn.vitejs.dev/config/#server-host)。

## 构建选项 build

几个常用的搬运在此:

- target 设置最终构建的浏览器兼容目标。
- outDir 指定输出路径。
- assetsDir 指定生成静态资源的存放路径。
- assetsInlineLimit 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。
- rollupOptions 自定义底层的 Rollup 打包配置。

详见 [官网配置文档](https://cn.vitejs.dev/config/#build-target)。

## 参考

[官网配置文档](https://cn.vitejs.dev/config/#server-host)

[Vite + React + TypeScript 构建标准化react应用](https://segmentfault.com/a/1190000040678357)

[vite + react项目搭建](https://zhuanlan.zhihu.com/p/456407867)

[vite构建react项目——与webpack构建进行对比](https://juejin.cn/post/6997061837879525384)

[Vite - 搭建 React 项目](https://juejin.cn/post/6948103204060004359)

[手把手带你搭建一个简单的webpack脚手架（一）](https://codeantenna.com/a/J3dJMzmbZE)
[手把手带你搭建一个简单的webpack脚手架（二）](https://blog.csdn.net/dabai1997/article/details/117437506?spm=1001.2014.3001.5501)

[webpack 的三种热更新方案](https://webpack.js.org/guides/development/#choosing-a-development-tool)
