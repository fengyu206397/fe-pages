(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1383:function(e,a,t){"use strict";t.r(a);var s=t(10),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"一、初识graphviz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、初识graphviz"}},[e._v("#")]),e._v(" 一、初识Graphviz")]),e._v(" "),t("h3",{attrs:{id:"_1-1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-简介"}},[e._v("#")]),e._v(" 1.1 简介")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("GraphViz")]),e._v("是一个开源的图像可视化的软件，是贝尔实验室开发的一个开源的工具包，它使用一个特定的"),t("code",[e._v("DSL")]),e._v("(领域特定语言): "),t("code",[e._v("dot")]),e._v("作为脚本语言，然后使用布局引擎来解析此脚本，并完成自动布局。"),t("code",[e._v("graphviz")]),e._v("提供丰富的导出格式，如常用的图片格式，"),t("code",[e._v("SVG")]),e._v("，"),t("code",[e._v("PDF")]),e._v("格式等")])]),e._v(" "),t("h3",{attrs:{id:"_1-2-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-环境搭建"}},[e._v("#")]),e._v(" 1.2 环境搭建")]),e._v(" "),t("p",[t("strong",[e._v("结合sublime Text插件实时编译预览")])]),e._v(" "),t("blockquote",[t("p",[e._v("使用"),t("code",[e._v("shift+command+p")]),e._v("，输入搜索选中"),t("code",[e._v("Package Control: Install Package")]),e._v(",然后输入"),t("code",[e._v("GraphViz")]),e._v(",然后安装"),t("code",[e._v("GraphVizPreview")]),e._v("即可，安装完成后，只要全选中代码，然后按"),t("code",[e._v("shift+command+g")]),e._v("就可以预览了。")])]),e._v(" "),t("ul",[t("li",[e._v("其实也可以直接用"),t("code",[e._v("brew")]),e._v("安装"),t("code",[e._v("GraphViz")]),e._v(",但是每次要敲命令行，太麻烦了")])]),e._v(" "),t("p",[t("strong",[t("code",[e._v("mac")]),e._v("下执行")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("brew install graphviz\n")])])]),t("blockquote",[t("p",[e._v("终端编译代码 "),t("code",[e._v("dot test.dot -T png -o test.png")])])]),e._v(" "),t("h2",{attrs:{id:"二、使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、使用"}},[e._v("#")]),e._v(" 二、使用")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Graphviz")]),e._v(" 支持两类图：无向图（"),t("code",[e._v("graph")]),e._v(",用“ "),t("code",[e._v("- -")]),e._v(" ”表示节点之间）和 有向图（"),t("code",[e._v("digraph")]),e._v(",用“ "),t("code",[e._v("->")]),e._v("” 表示节点之间）。graphviz包含3中元素，图，顶点和边。"),t("strong",[e._v("每个元素都可以具有各自的属性，用来定义字体，样式，颜色，形状等")])])]),e._v(" "),t("p",[t("strong",[t("code",[e._v("GraphViz")]),e._v("中包含多种布局")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("dot")]),e._v(" 默认布局，用于有向图")]),e._v(" "),t("li",[t("code",[e._v("neato")]),e._v(" 基于"),t("code",[e._v("spring-model")]),e._v("算法("),t("code",[e._v("force-based")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("twopo")]),e._v(" 径向布局")]),e._v(" "),t("li",[t("code",[e._v("circo")]),e._v(" 圆形布局")]),e._v(" "),t("li",[t("code",[e._v("fdp")]),e._v(" 用于无向图")])]),e._v(" "),t("h3",{attrs:{id:"_2-1-第一个graphviz图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-第一个graphviz图"}},[e._v("#")]),e._v(" 2.1 第一个graphviz图")]),e._v(" "),t("blockquote",[t("p",[e._v("语法介绍 http://graphs.grevian.org/reference")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("digraph abc{\n  a;\n  b;\n  c;\n  d;\n \n  a -> b;\n  b -> d;\n  c -> d;\n}\n")])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/208.png",alt:""}})]),e._v(" "),t("p",[t("strong",[e._v("定义顶点和边的样式")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph abc{\n  node [shape="record"];\n  edge [style="dashed"];\n  a;\n  b;\n  c;\n  d;\n \n  a -> b;\n  b -> d;\n  c -> d;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/1124873-67688cd634d43522.png",alt:""}})]),e._v(" "),t("blockquote",[t("p",[e._v("进一步修改顶点和边样式,将顶点"),t("code",[e._v("a")]),e._v("的颜色改为淡绿色，并将"),t("code",[e._v("c")]),e._v("到"),t("code",[e._v("d")]),e._v("的边改为红色")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph abc{\n  node [shape="record"];\n  edge [style="dashed"];\n \n  a [style="filled", color="black", fillcolor="chartreuse"];\n  b;\n  c;\n  d;\n \n  a -> b;\n  b -> d;\n  c -> d [color="red"];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/209.png",alt:""}})]),e._v(" "),t("p",[e._v("其他例子")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph demo{\n  label="儿茶酚胺合成代谢路径";\n\n  酪氨酸 -> L多巴 -> 多巴胺 -> 去甲肾上腺素 -> 肾上腺素;\n\n  下丘脑 -> 多巴胺;\n  交感神经元 -> 去甲肾上腺素;\n  肾上腺髓质 -> 去甲肾上腺素,肾上腺素;\n\n  酪氨酸 [label="酪氨酸",color=green];\n  多巴胺 [label="多巴胺", color=red];\n  肾上腺素 [label="肾上腺素", color=red];\n\n  下丘脑 [shape=box];\n  交感神经元 [shape=box];\n  肾上腺髓质 [shape=box];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/210.png",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-2-带标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-带标签"}},[e._v("#")]),e._v(" 2.2 带标签")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph {\n\n    player[label = "player", color = Blue, fontcolor = Red, fontsize = 24, shape = box];\n    game[label = "game", color = Red, fontcolor = Blue, fontsize = 24, shape = ellipse];\n\n    player -> game[label = "play"]\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/211.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-3-子视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-子视图"}},[e._v("#")]),e._v(" 2.3 子视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph {\n\n    label = visitNet\n\n    rankdir = LR\n\n    node[color = Red, fontsize = 24, shape = box]\n    edge[color = Blue, style = "dashed"]\n\n    user[style = "filled", color = "yellow", fillcolor = "chartreuse"]\n    subgraph cluster_cd{\n        label = "server and browser"\n        bgcolor = green;\n\n        browser -> server\n    }\n\n    user -> computer;\n    computer -> browser;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/212.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-4-结构视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-结构视图"}},[e._v("#")]),e._v(" 2.4 结构视图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph {\n\n    node[shape = record];\n    struct1[label = "<f0> left|<f1> mid&#92; dle|<f2> right"];\n    struct2[label = "<f0> one|<f1> two"];\n    struct3[label = "hello&#92;nworld | {b|{c|<here> d|e}|f}|g|h"];\n    struct1:f1 -> struct2:f0;\n    struct1:f2 -> struct3:here;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/213.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-5-树形结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-树形结构"}},[e._v("#")]),e._v(" 2.5 树形结构")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph tree {\n  \n  fontname = "PingFang-SC-Light"\n  fontsize = 24\n\n  node[shape = "plaintext"]\n\n  1 -> 2;\n  1 -> 3;\n  2 -> 4;\n  2 -> 5;\n  3 -> 6;\n  3 -> 7;\n  4 -> 8;\n  4 -> 9;\n  5 -> 10;\n  5 -> 11;\n  6 -> 12;\n  6 -> 13;\n  7 -> 14;\n  7 -> 15;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/214.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-6-时序图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-时序图"}},[e._v("#")]),e._v(" 2.6 时序图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph time {\n\n    rankdir = "LR";\n    node[shape = "point", width = 0, height = 0];\n    edge[arrowhead = "none", style = "dashed"];\n\n    {\n        rank = "same"\n        edge[style = "solided"];\n        APP[shape = "plaintext"];\n        APP -> step00 -> step01 -> step02 -> step03 -> step04 -> step05;\n    }\n    \n    {\n        rank="same";\n        edge[style="solided"];\n        SDK[shape="plaintext"];\n        SDK -> step10 -> step11 -> step12 -> step13 -> step14 -> step15;\n    }\n    {\n        rank="same";\n        edge[style="solided"];\n        AliPay[shape="plaintext"];\n        AliPay -> step20 -> step21 -> step22 -> step23 -> step24 -> step25;\n    }\n    {\n        rank="same";\n        edge[style="solided"];\n        Server[shape="plaintext"];\n        Server -> step30 -> step31 -> step32 -> step33 -> step34 -> step35;\n    }\n\n    step00 -> step10 [label="sends order info", arrowhead="normal"];\n    step11 -> step21 [label="open AliPay", arrowhead="normal"];\n    step22 -> step12 [label="pay success", arrowhead="normal"];\n    step13 -> step03 [label="pay success", arrowhead="normal"];\n    step24 -> step34 [label="pay success", arrowhead="normal"];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/215.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-7-一个hash表的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-一个hash表的数据结构"}},[e._v("#")]),e._v(" 2.7 一个hash表的数据结构")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("hash")]),e._v("表内容")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("struct st_hash_type {\n    int (*compare) ();\n    int (*hash) ();\n};\n \nstruct st_table_entry {\n    unsigned int hash;\n    char *key;\n    char *record;\n    st_table_entry *next;\n};\n \nstruct st_table {\n    struct st_hash_type *type;\n    int num_bins;\n/* slot count */\n    int num_entries;\n/* total number of entries */\n    struct st_table_entry **bins;\n/* slot */\n};\n")])])]),t("p",[e._v("脚本如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph st2{\n  fontname = "Verdana";\n  fontsize = 10;\n  rankdir=TB;\n \n  node [fontname = "Verdana", fontsize = 10, color="skyblue", shape="record"];\n \n  edge [fontname = "Verdana", fontsize = 10, color="crimson", style="solid"];\n \n  st_hash_type [label="{<head>st_hash_type|(*compare)|(*hash)}"];\n  st_table_entry [label="{<head>st_table_entry|hash|key|record|<next>next}"];\n  st_table [label="{st_table|<type>type|num_bins|num_entries|<bins>bins}"];\n \n  st_table:bins -> st_table_entry:head;\n  st_table:type -> st_hash_type:head;\n  st_table_entry:next -> st_table_entry:head [style="dashed", color="forestgreen"];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/216.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-8-模块的生命周期图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-模块的生命周期图"}},[e._v("#")]),e._v(" 2.8 模块的生命周期图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph module_lc{\n  rankdir=TB;\n  fontname = "Microsoft YaHei";\n  fontsize = 12;\n \n  node [fontname = "Microsoft YaHei", fontsize = 12, shape = "Mrecord", color="skyblue", style="filled"];\n  edge [fontname = "Microsoft YaHei", fontsize = 12, color="darkgreen" ];\n \n  installed [label="已安装状态"];\n  resolved [label="已就绪状态"];\n  uninstalled [label="已卸载状态"];\n  starting [label="正在启动"];\n  active [label="已激活(运行)状态"];\n  stopping [label="正在停止"];\n  start [label="", shape="circle", width=0.5, fixedsize=true, style="filled", color="black"];\n \n  start -> installed [label="安装"];\n  installed -> uninstalled [label="卸载"];\n  installed -> resolved [label="准备"];\n  installed -> installed [label="更新"];\n  resolved -> installed [label="更新"];\n  resolved -> uninstalled [label="卸载"];\n  resolved -> starting [label="启动"];\n  starting -> active [label=""];\n  active -> stopping [label="停止"];\n  stopping -> resolved [label=""];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/217.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-9-简单的uml类图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-9-简单的uml类图"}},[e._v("#")]),e._v(" 2.9 简单的UML类图")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph G{\n \n  fontname = "Courier New"\n  fontsize = 10\n \n  node [ fontname = "Courier New", fontsize = 10, shape = "record" ];\n  edge [ fontname = "Courier New", fontsize = 10 ];\n \n  Animal [ label = "{Animal |+ name : String\\\\l+ age : int\\\\l|+ die() : void\\\\l}" ];\n \n      subgraph clusterAnimalImpl{\n          bgcolor="yellow"\n          Dog [ label = "{Dog||+ bark() : void\\\\l}" ];\n          Cat [ label = "{Cat||+ meow() : void\\\\l}" ];\n      };\n \n  edge [ arrowhead = "empty" ];\n \n  Dog->Animal;\n  Cat->Animal;\n  Dog->Cat [arrowhead="none", label="0..*"];\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/218.jpg",alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_2-10-有限状态机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-10-有限状态机"}},[e._v("#")]),e._v(" 2.10 有限状态机")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph finite_state_machine {\n    rankdir=LR;\n    size="8,5"\n    node [shape = circle];\n    S0 -> S1 [ label = "Lift Nozzle" ]\n    S1 -> S0 [ label = "Replace Nozzle" ]\n    S1 -> S2 [ label = "Authorize Pump" ]\n    S2 -> S0 [ label = "Replace Nozzle" ]\n    S2 -> S3 [ label = "Pull Trigger" ]\n    S3 -> S2 [ label = "Release Trigger" ]\n}\n\n')])])]),t("p",[t("img",{attrs:{src:"http://img2.tuicool.com/yEze6z.png%21web",alt:""}})]),e._v(" "),t("h2",{attrs:{id:"三、语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、语法"}},[e._v("#")]),e._v(" 三、语法")]),e._v(" "),t("blockquote",[t("p",[e._v("完整列表 http://graphviz.org/doc/info/attrs.html")])]),e._v(" "),t("h3",{attrs:{id:"_3-1-图像属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-图像属性"}},[e._v("#")]),e._v(" 3.1 图像属性")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('label="My Graph";')]),e._v("       给图像设置标签")]),e._v(" "),t("li",[t("code",[e._v("rankdir=LR")]),e._v(";             将图片由原来的从上到下布局变成从左到右布局")]),e._v(" "),t("li",[t("code",[e._v("{rank=same; a, b, c }")]),e._v("   将一组元素放到同一个"),t("code",[e._v("level")])]),e._v(" "),t("li",[t("code",[e._v('splines="line"')]),e._v(";         让边框变为直线，没有曲线和锐角")]),e._v(" "),t("li",[t("code",[e._v("K=0.6")]),e._v(";      用来在布局中影响"),t("code",[e._v("spring")]),e._v("属性，"),t("code",[e._v("spring")]),e._v("属性可以用于将节点往外推，这个在"),t("code",[e._v("twopi")]),e._v("和"),t("code",[e._v("sfdp")]),e._v("布局中很有用。")])]),e._v(" "),t("h3",{attrs:{id:"_3-2-交点属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-交点属性"}},[e._v("#")]),e._v(" 3.2 交点属性")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('[label="Some Label"]')]),e._v("    给交点打标签")]),e._v(" "),t("li",[t("code",[e._v('[color="red"]')]),e._v("         给交点上色")]),e._v(" "),t("li",[t("code",[e._v('[fillcolor="blue"]')]),e._v("      设置交点的填充色")])]),e._v(" "),t("h3",{attrs:{id:"_3-3-边的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-边的属性"}},[e._v("#")]),e._v(" 3.3 边的属性")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('[label="Some Label"]')]),e._v("    给边设置标签 (设置路径权重的时候很有用)")]),e._v(" "),t("li",[t("code",[e._v('[color="red"]')]),e._v("          # 给交点上色 (标示路径的时候很有用)")]),e._v(" "),t("li",[t("code",[e._v("[penwidth=2.0]")]),e._v("          # 给边适配厚度，标示路径的时候很有用。")])]),e._v(" "),t("h3",{attrs:{id:"_3-4-尺寸-背景颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-尺寸-背景颜色"}},[e._v("#")]),e._v(" 3.4 尺寸, 背景颜色")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("fixedsize=true")]),e._v(";")]),e._v(" "),t("li",[t("code",[e._v('size="1,1"')]),e._v(";")]),e._v(" "),t("li",[t("code",[e._v("resolution=72")]),e._v(";")]),e._v(" "),t("li",[t("code",[e._v('bgcolor="#C6CFD532"')]),e._v(";")])]),e._v(" "),t("h2",{attrs:{id:"四、一些技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、一些技巧"}},[e._v("#")]),e._v(" 四、一些技巧")]),e._v(" "),t("h3",{attrs:{id:"_4-1-插入图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-插入图片"}},[e._v("#")]),e._v(" 4.1 插入图片")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph {\n\n    c[shape = none, image = "./pic.png"]\n    a -> b -> c;\n    c -> d;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/219.jpg",alt:""}})]),e._v(" "),t("blockquote",[t("p",[e._v("注：需要用命令行"),t("code",[e._v("dot test.dot -T png -o test.png")]),e._v("生成，前提是用"),t("code",[e._v("brew")]),e._v("安装了"),t("code",[e._v("GraphViz")])])]),e._v(" "),t("h3",{attrs:{id:"_4-2-统一节点和连线"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-统一节点和连线"}},[e._v("#")]),e._v(" 4.2 统一节点和连线")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('digraph {\n\n    node[color = Red, fontsize = 24, shape = box]\n    edge[color = Blue, style = "dashed"]\n\n    c[shape = none, image = "./pic.png"]\n    a -> b -> c;\n    c -> d;\n}\n')])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2019/10/220.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=n.exports}}]);