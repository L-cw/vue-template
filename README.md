# vue-template
这是一个基于 VueCli3 和 elementUI 的模版，集成了普通项目开发需要用到的基本配置，便于快速搭建前端项目。

## 项目简介
```md
├── public
|  ├── favicon.ico                       # 页签 icon
|  └── index.html
├── src
|  ├── api                               # api 接口统一管理
|  ├── assets                            # 资源
|  |  ├── images                         # 图片资源
|  |  └── styles                         # 样式文件
|  |     ├── common.scss                 # 公共样式
|  |     ├── element-ui-reset.scss       # 重置 Element UI 样式文件
|  |     ├── reset.scss                  # 重置浏览器默认样式文件
|  |     └── variables.scss              # 变量配置文件
|  ├── main.js
|  ├── router
|  |  └── index.js
|  ├── store
|  |  └── index.js
|  ├── utils
|  |  ├── codeConfig.js                  # 枚举配置文件
|  |  ├── filters.js                      # 全局过滤器
|  |  ├── request.js                     # axios 封装
|  |  └── tools.js                       # 工具类
|  └── views
|     ├── 404.vue                        # 404 页面
|     └── index.vue
└── vue.config.js
```

 - 项目基于 `vue-cli v4` ，在 `vue` 默认文件目录的基础上做了一些项目基础的配置，如无特殊情况，开箱即可使用；
 - 项目中样式默认使用 `scss` 并全局注入变量文件，在 `assets/styles/variables.scss` 文件中的变量可以在组件中直接使用，无需单独引入；
 - `codeConfig` 文件中使用 `export` 导出
 - `filters` 中放置全局常用过滤器
 - 注意命名的规范，命名的规范有助于开发风格的统一，便于其他同事的协作开发

## 开发规范

 - `api` 文件夹中，`api` 的命名需以 `Api` 结尾，例： `getListApi` 。目的是为了在业务中醒目标识此函数为 `API` 函数
 - `utils/filters/fmtEnum` 文件中，过滤器的命名需以 `fmtEnum` 开头；并且该文件中只放置和枚举相关的过滤器。
 - 公共组件放在 `src/components` 文件夹中，每个组件单独文件夹，命名以 `Comp` 结尾。
 - 当页面层级过多时，应建立文件夹分隔页面，注意尽量只将 `index`, `404` 这样的顶级页面放在 `views` 根目录下。
 - 页面单文件组件采用小驼峰命名，页面组件的组件采用大驼峰命名，并且放置在当前页面下的 `components` 文件夹中。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
