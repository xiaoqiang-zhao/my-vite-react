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

## 代码解析

1. 以 index.html 作为入口。

2. index.html 中以 script 的方式引入了 /src/main.tsx，从这里开始 Vite 开始发挥作用。

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

3. main.tsx 中初始化 React 根组件。

```jsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

你可能注意到了那个叹号，这是TypeScript 非空断言。另外在 React 18 中，`render(<App />, document.body)` 调用方式替换成了 createRoot + render 的链式方式。

React.StrictMode 是严格模式，用于发现潜在问题。不会渲染任何真的 Dom 节点。

4. App 里面就是常规的 React 组件了。

## 添加 Router 特性

这个框架中是没有前端路由的，我们添加一下。

首先添加依赖包 `npm install react-router-dom --save`，当前的最新版是 6.3。

花絮: 写这一部分的时候，开始看的是 React Router 中文文档 https://react-guide.github.io/react-router-cn/index.html，发现好多地方按文档运行不通，对比[英文文档](https://github.com/remix-run/react-router/blob/v3.2.6/docs/API.md)发现这份中文文档居然是 3.0 版本，然后又看到了很多吐槽，比如 “一个 router 库，我真的不明白有什么动机要升那么多次，还一言不合就 breaking change”，还有一问一答式的花式吐槽“问: 为何react不出一个跟vue那样的路由，对象配置，拦截器啥的？答: 那样岂不是降低学习门槛了[飙泪笑]”。

## 参考

[官网配置文档](https://cn.vitejs.dev/config/#server-host)

[Vite + React + TypeScript 构建标准化react应用](https://segmentfault.com/a/1190000040678357)

[vite + react项目搭建](https://zhuanlan.zhihu.com/p/456407867)

[vite构建react项目——与webpack构建进行对比](https://juejin.cn/post/6997061837879525384)

[Vite - 搭建 React 项目](https://juejin.cn/post/6948103204060004359)

[手把手带你搭建一个简单的webpack脚手架（一）](https://codeantenna.com/a/J3dJMzmbZE)
[手把手带你搭建一个简单的webpack脚手架（二）](https://blog.csdn.net/dabai1997/article/details/117437506?spm=1001.2014.3001.5501)

[webpack 的三种热更新方案](https://webpack.js.org/guides/development/#choosing-a-development-tool)

[React Router 5 升 6(含吐槽)](https://zhuanlan.zhihu.com/p/120712831)

[react-router与react-router-dom有什么不同？](https://segmentfault.com/a/1190000022443557)
