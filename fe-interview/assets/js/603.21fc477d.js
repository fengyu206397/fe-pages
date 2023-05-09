(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1152:function(e,n,s){"use strict";s.r(n);var a=s(10),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"构建基础篇-3：env-文件与环境设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建基础篇-3：env-文件与环境设置"}},[e._v("#")]),e._v(" 构建基础篇 3：env 文件与环境设置")]),e._v(" "),s("p",[e._v("在实际项目的开发中，我们一般会经历项目的开发阶段、测试阶段和最终上线阶段，每一个阶段对于项目代码的要求可能都不尽相同，那么我们如何能够游刃有余的在不同阶段下使我们的项目呈现不同的效果，使用不同的功能呢？这里就需要引入"),s("strong",[e._v("环境")]),e._v("的概念。")]),e._v(" "),s("p",[e._v("一般一个项目都会有以下 3 种环境：")]),e._v(" "),s("ul",[s("li",[e._v("开发环境（开发阶段，本地开发版本，一般会使用一些调试工具或额外的辅助功能）")]),e._v(" "),s("li",[e._v("测试环境（测试阶段，上线前版本，除了一些 bug 的修复，基本不会和上线版本有很大差别）")]),e._v(" "),s("li",[e._v("生产环境（上线阶段，正式对外发布的版本，一般会进行优化，关掉错误报告）")])]),e._v(" "),s("p",[e._v("作为一名开发人员，我们可能需要针对每一种环境编写一些不同的代码并且保证这些代码运行在正确的环境中，那么我们应该如何在代码中判断项目所处的环境同时执行不同的代码呢？这就需要我们进行正确的环境配置和管理。")]),e._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("h3",{attrs:{id:"_1-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件"}},[e._v("#")]),e._v(" 1. 配置文件")]),e._v(" "),s("p",[e._v("正确的配置环境首先需要我们认识不同环境配置之间的关系，如图所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/11.png",alt:""}})]),e._v(" "),s("p",[e._v("我们从上图中可以了解到每一个环境其实有其不同的配置，同时它们也存在着交集部分，交集便是它们都共有的配置项，那么在 Vue 中我们应该如何处理呢？")]),e._v(" "),s("p",[e._v("我们可以在根目录下创建以下形式的文件进行不同环境下变量的配置：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".env                # 在所有的环境中被载入\n.env.local          # 在所有的环境中被载入，但会被 git 忽略\n.env.[mode]         # 只在指定的模式中被载入\n.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略\n\n")])])]),s("p",[e._v("比如我们创建一个名为 .env.stage 的文件，该文件表明其只在 stage 环境下被加载，在这个文件中，我们可以配置如下键值对的变量：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("NODE_ENV=stage\nVUE_APP_TITLE=stage mode\n\n")])])]),s("p",[e._v("这时候我们怎么在 vue.config.js 中访问这些变量呢？很简单，使用 "),s("code",[e._v("process.env.[name]")]),e._v(" 进行访问就可以了，比如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// vue.config.js\n\nconsole.log(process.env.NODE_ENV); // development（在终端输出）\n\n")])])]),s("p",[e._v("当你运行 "),s("code",[e._v("yarn serve")]),e._v(" 命令后会发现输出的是 development，因为 "),s("code",[e._v("vue-cli-service serve")]),e._v(" 命令默认设置的环境是 development，你需要修改 package.json 中的 serve 脚本的命令为：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"scripts": {\n    "serve": "vue-cli-service serve --mode stage",\n}\n\n')])])]),s("p",[s("code",[e._v("--mode stage")]),e._v(" 其实就是修改了 webpack 4 中的 mode 配置项为 stage，同时其会读取对应 .env.[model] 文件下的配置，如果没找到对应配置文件，其会使用默认环境 development，同样 "),s("code",[e._v("vue-cli-service build")]),e._v(" 会使用默认环境 production。")]),e._v(" "),s("p",[e._v("这时候如果你再创建一个 .env 的文件，再次配置重复的变量，但是值不同，如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("NODE_ENV=staging\nVUE_APP_TITLE=staging mode\nVUE_APP_NAME=project\n\n")])])]),s("p",[e._v("因为 .env 文件会被所有环境加载，即公共配置，那么最终我们运行 "),s("code",[e._v("vue-cli-service serve")]),e._v(" 打印出来的是哪个呢？答案是 "),s("strong",[e._v("stage")]),e._v("，但是如果是 .env.stage.local 文件中配置成上方这样，答案便是 "),s("strong",[e._v("staging")]),e._v("，所以 .env.[mode].local 会覆盖 .env.[mode] 下的相同配置。同理 .env.local 会覆盖 .env 下的相同配置。")]),e._v(" "),s("p",[e._v("由此可以得出结论，相同配置项的权重：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".env.[mode].local > .env.[mode] > .env.local > .env \n\n")])])]),s("p",[e._v("但是需要注意的是，除了相同配置项权重大的覆盖小的，不同配置项它们会进行合并操作，类似于 Javascript 中的 Object.assign 的用法。")]),e._v(" "),s("h3",{attrs:{id:"_2-环境注入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-环境注入"}},[e._v("#")]),e._v(" 2. 环境注入")]),e._v(" "),s("p",[e._v("通过上述配置文件的创建，我们成功使用命令行的形式对项目环境进行了设置并可以自由切换，但是需要注意的是我们在 Vue 的前端代码中打印出的 "),s("code",[e._v("process.env")]),e._v(" 与 vue.config.js 中输出的可能是不一样的，这需要普及一个知识点：webpack 通过 DefinePlugin 内置插件将 process.env 注入到客户端代码中。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// webpack 配置\n{\n    ...\n    \n    plugins: [\n        new webpack.DefinePlugin({\n            'process.env': {\n                NODE_ENV: JSON.stringify(process.env.NODE_ENV)\n            }\n        }),\n    ],\n    \n    ...\n}\n\n")])])]),s("p",[e._v("由于 vue-cli 3.x 封装的 webpack 配置中已经帮我们完成了这个功能，所以我们可以直接在客户端代码中打印出 process.env 的值，该对象可以包含多个键值对，也就是说可以注入多个值，但是经过 CLI 封装后仅支持注入环境配置文件中以 "),s("code",[e._v("VUE_APP_")]),e._v(" 开头的变量，而 "),s("code",[e._v("NODE_ENV")]),e._v(" 和 "),s("code",[e._v("BASE_URL")]),e._v(" 这两个特殊变量除外。比如我们在权重最高的 .env.stage.local 文件中写入：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("NODE_ENV=stage2\nVUE_APP_TITLE=stage mode2\nNAME=vue\n\n")])])]),s("p",[e._v("然后我们尝试在 vue.config.js 中打印 "),s("code",[e._v("process.env")]),e._v("，终端输出：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n    ...\n    \n    npm_config_ignore_scripts: '',\n    npm_config_version_git_sign: '',\n    npm_config_ignore_optional: '',\n    npm_config_init_version: '1.0.0',\n    npm_package_dependencies_vue_router: '^3.0.1',\n    npm_config_version_tag_prefix: 'v',\n    npm_node_execpath: '/usr/local/bin/node',\n    NODE_ENV: 'stage2',\n    VUE_APP_TITLE: 'stage mode2',\n    NAME: 'vue',\n    BABEL_ENV: 'development',\n    \n    ...\n}\n\n")])])]),s("p",[e._v("可以看到输出内容除了我们环境配置中的变量外还包含了很多 npm 的信息，但是我们在入口文件 main.js 中打印会发现输出：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "BASE_URL": "/vue/",\n    "NODE_ENV": "stage2",\n    "VUE_APP_TITLE": "stage mode2"\n}\n\n')])])]),s("p",[e._v("可见注入时过滤调了非 "),s("code",[e._v("VUE_APP_")]),e._v(" 开头的变量，其中多出的 "),s("code",[e._v("BASE_URL")]),e._v(" 为你在 vue.config.js 设置的值，默认为 /，其在环境配置文件中设置无效。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/12.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"_3-额外配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-额外配置"}},[e._v("#")]),e._v(" 3. 额外配置")]),e._v(" "),s("p",[e._v("以上我们通过新建配置文件的方式为项目不同环境配置不同的变量值，能够实现项目基本的环境管理，但是 .env 这样的配置文件中的参数目前只支持静态值，无法使用动态参数，在某些情况下无法实现特定需求，这时候我们可以在根目录下新建 config 文件夹用于存放一些额外的配置文件。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* 配置文件 index.js */\n\n// 公共变量\nconst com = {\n    IP: JSON.stringify('xxx')\n};\n\nmodule.exports = {\n\n    // 开发环境变量\n    dev: {\n    \tenv: {\n            TYPE: JSON.stringify('dev'),\n            ...com\n    \t}\n    },\n    \n    // 生产环境变量\n    build: {\n    \tenv: {\n            TYPE: JSON.stringify('prod'),\n            ...com\n    \t}\n    }\n}\n\n")])])]),s("p",[e._v("上方代码我们把环境变量分为了公共变量、开发环境变量和生产环境变量，当然这些变量可能是动态的，比如用户的 ip 等。现在我们要在 vue.config.js 里注入这些变量，我们可以使用 chainWebpack 修改 DefinePlugin 中的值：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* vue.config.js */\nconst configs = require('./config');\n\n// 用于做相应的 merge 处理\nconst merge = require('webpack-merge');\n\n// 根据环境判断使用哪份配置\nconst cfg = process.env.NODE_ENV === 'production' ? configs.build.env : configs.dev.env;\n\nmodule.exports = {\n    ...\n    \n    chainWebpack: config => {\n        config.plugin('define')\n            .tap(args => {\n                let name = 'process.env';\n                \n                // 使用 merge 保证原始值不变\n                args[0][name] = merge(args[0][name], cfg);\n    \n                return args\n            })\n    },\n\t\n    ...\n}\n\n")])])]),s("p",[e._v("最后我们可以在客户端成功打印出包含动态配置的对象：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "NODE_ENV": "stage2",\n    "VUE_APP_TITLE": "stage mode2",\n    "BASE_URL": "/vue/",\n    "TYPE": "dev",\n    "IP": "xxx"\n}\n\n')])])]),s("h3",{attrs:{id:"_4-实际场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-实际场景"}},[e._v("#")]),e._v(" 4. 实际场景")]),e._v(" "),s("p",[e._v("结合以上环境变量的配置，我们项目中一般会遇到一些实际场景： 比如在非线上环境我们可以给自己的移动端项目开启 "),s("a",{attrs:{href:"https://github.com/Tencent/vConsole",target:"_blank",rel:"noopener noreferrer"}},[e._v("vConsole"),s("OutboundLink")],1),e._v(" 调试，但是在线上环境肯定不需要开启这一功能，我们可以在入口文件中进行设置，代码如下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* main.js */\n\nimport Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\n\nVue.config.productionTip = false\n\n// 如果是非线上环境，加载 VConsole\nif (process.env.NODE_ENV !== 'production') {\n    var VConsole = require('vconsole/dist/vconsole.min.js');\n    var vConsole = new VConsole();\n}\n\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n\n\n")])])]),s("p",[e._v("vConsole 是一款用于移动网页的轻量级，可扩展的前端开发工具，可以看作是移动端浏览器的控制台，如图：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/13.png",alt:""}})]),e._v(" "),s("p",[e._v("另外我们还可以使用配置中的 BASE_URL 来设置路由的 base 参数：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* router.js */\n\nimport Vue from 'vue'\nimport Router from 'vue-router'\nimport Home from './views/Home.vue'\nimport About from './views/About.vue'\n\nVue.use(Router)\n\nlet base = `${process.env.BASE_URL}`; // 获取二级目录\n\nexport default new Router({\n    mode: 'history',\n    base: base, // 设置 base 值\n    routes: [\n        {\n            path: '/',\n            name: 'home',\n            component: Home\n        },\n        {\n            path: '/about',\n            name: 'about',\n            component: About\n        }\n    ]\n})\n\n")])])]),s("p",[e._v("每一个环境变量你都可以用于项目的一些地方，它提供给了我们一种全局的可访问形式，也是基于 Node 开发的特性所在。")]),e._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),s("p",[e._v("环境的配置和管理对于项目的构建起到了至关重要的作用，通过给项目配置不同的环境不仅可以增加开发的灵活性、提高程序的拓展性，同时也有助于帮助我们去了解并分析项目在不同环境下的运行机制，建立全局观念。")]),e._v(" "),s("h2",{attrs:{id:"思考-作业"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考-作业"}},[e._v("#")]),e._v(" 思考 & 作业")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("webpack 通过 DefinePlugin 内置插件将 process.env 注入到客户端代码中时，"),s("code",[e._v("process.env.NODE_ENV")]),e._v(" 为什么要进行 JSON.stringify 处理？")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("process.env")]),e._v(" 中如何获取 package.json 中 name 的值？")])]),e._v(" "),s("li",[s("p",[e._v("如何在 package.json 中的 scripts 字段中定义一些自定义脚本来切换不同的环境？")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);