(window.webpackJsonp=window.webpackJsonp||[]).push([[619],{1119:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[t._v("#")]),t._v(" 进程")]),t._v(" "),a("h2",{attrs:{id:"简述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),a("p",[t._v("关于 Process, 我们需要讨论的是两个概念, ①操作系统的进程, ② Node.js 中的 Process 对象. 操作进程对于服务端而言, 好比 html 之于前端一样基础. 想做服务端编程是不可能绕过 Unix/Linux 的. 在 Linux/Unix/Mac 系统中运行 "),a("code",[t._v("ps -ef")]),t._v(" 命令可以看到当前系统中运行的进程. 各个参数如下:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("列名称")]),t._v(" "),a("th",[t._v("意义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("UID")]),t._v(" "),a("td",[t._v("执行该进程的用户ID")])]),t._v(" "),a("tr",[a("td",[t._v("PID")]),t._v(" "),a("td",[t._v("进程编号")])]),t._v(" "),a("tr",[a("td",[t._v("PPID")]),t._v(" "),a("td",[t._v("该进程的父进程编号")])]),t._v(" "),a("tr",[a("td",[t._v("C")]),t._v(" "),a("td",[t._v("该进程所在的CPU利用率")])]),t._v(" "),a("tr",[a("td",[t._v("STIME")]),t._v(" "),a("td",[t._v("进程执行时间")])]),t._v(" "),a("tr",[a("td",[t._v("TTY")]),t._v(" "),a("td",[t._v("进程相关的终端类型")])]),t._v(" "),a("tr",[a("td",[t._v("TIME")]),t._v(" "),a("td",[t._v("进程所占用的CPU时间")])]),t._v(" "),a("tr",[a("td",[t._v("CMD")]),t._v(" "),a("td",[t._v("创建该进程的指令")])])])]),t._v(" "),a("p",[t._v("关于进程以及操作系统一些更深入的细节推荐阅读 APUE, 即《Unix 高级编程》等书籍来了解.")]),t._v(" "),a("h2",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[t._v("#")]),t._v(" Process")]),t._v(" "),a("p",[t._v("这里来讨论 Node.js 中的 "),a("code",[t._v("process")]),t._v(" 对象. 直接在代码中通过 "),a("code",[t._v("console.log(process)")]),t._v(" 即可打印出来. 可以看到 process 对象暴露了非常多有用的属性以及方法, 具体的细节见"),a("a",{attrs:{href:"https://nodejs.org/dist/latest-v6.x/docs/api/process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v(", 已经说的挺详细了. 其中包括但不限于:")]),t._v(" "),a("ul",[a("li",[t._v("进程基础信息")]),t._v(" "),a("li",[t._v("进程 Usage")]),t._v(" "),a("li",[t._v("进程级事件")]),t._v(" "),a("li",[t._v("依赖模块/版本信息")]),t._v(" "),a("li",[t._v("OS 基础信息")]),t._v(" "),a("li",[t._v("账户信息")]),t._v(" "),a("li",[t._v("信号收发")]),t._v(" "),a("li",[t._v("三个标准流")])]),t._v(" "),a("h3",{attrs:{id:"process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick"}},[t._v("#")]),t._v(" process.nextTick")]),t._v(" "),a("p",[t._v("上一节已经提到过 "),a("code",[t._v("process.nextTick")]),t._v(" 了, 这是一个你需要了解的, 重要的, 基础方法.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   ┌───────────────────────┐\n┌─>│        timers         │\n│  └──────────┬────────────┘\n│  ┌──────────┴────────────┐\n│  │     I/O callbacks     │\n│  └──────────┬────────────┘\n│  ┌──────────┴────────────┐\n│  │     idle, prepare     │\n│  └──────────┬────────────┘      ┌───────────────┐\n│  ┌──────────┴────────────┐      │   incoming:   │\n│  │         poll          │<─────┤  connections, │\n│  └──────────┬────────────┘      │   data, etc.  │\n│  ┌──────────┴────────────┐      └───────────────┘\n│  │        check          │\n│  └──────────┬────────────┘\n│  ┌──────────┴────────────┐\n└──┤    close callbacks    │\n   └───────────────────────┘\n")])])]),a("p",[a("code",[t._v("process.nextTick")]),t._v(" 并不属于 Event loop 中的某一个阶段, 而是在 Event loop 的每一个阶段结束后, 直接执行 "),a("code",[t._v("nextTickQueue")]),t._v(' 中插入的 "Tick", 并且直到整个 Queue 处理完. 所以面试时又有可以问的问题了, 递归调用 process.nextTick 会怎么样? (doge')]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这种情况与以下情况, 有什么区别? 为什么?")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("配置是开发部署中一个很常见的问题. 普通的配置有两种方式, 一是定义配置文件, 二是使用环境变量.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://blog-assets.risingstack.com/2016/Sep/node-js-survey/node-js-survey-envvar-config-new.png",alt:"node-configuration"}})]),t._v(" "),a("p",[t._v("你可以通过"),a("a",{attrs:{href:"http://cn.bing.com/search?q=linux+%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置环境变量"),a("OutboundLink")],1),t._v("来指定配置, 然后通过 "),a("code",[t._v("process.env")]),t._v(" 来获取配置项. 另外也可以通过读取定义好的配置文件来获取, 在这方面有很多不错的库例如 "),a("code",[t._v("dotenv")]),t._v(", "),a("code",[t._v("node-config")]),t._v(" 等, 而在使用这些库来加载配置文件的时候, 通常都会碰到一个当前工作目录的问题.")]),t._v(" "),a("blockquote",[a("p",[t._v("进程的当前工作目录是什么? 有什么作用?")])]),t._v(" "),a("p",[t._v("当前进程启动的目录, 通过 process.cwd() 获取当前工作目录 (current working directory), 通常是命令行启动的时候所在的目录 (也可以在启动时指定), 文件操作等使用相对路径的时候会相对当前工作目录来获取文件.")]),t._v(" "),a("p",[t._v("一些获取配置的第三方模块就是通过你的当前目录来找配置文件的. 所以如果你错误的目录启动脚本, 可能没法得到正确的结果. 在程序中可以通过 "),a("code",[t._v("process.chdir()")]),t._v(" 来改变当前的工作目录.")]),t._v(" "),a("h3",{attrs:{id:"标准流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准流"}},[t._v("#")]),t._v(" 标准流")]),t._v(" "),a("p",[t._v("在 process 对象上还暴露了 "),a("code",[t._v("process.stderr")]),t._v(", "),a("code",[t._v("process.stdout")]),t._v(" 以及 "),a("code",[t._v("process.stdin")]),t._v(" 三个标准流, 熟悉 C/C++/Java 的同学应该对此比较熟悉. 关于这几个流, 常见的面试问题是问 "),a("strong",[t._v("console.log 是同步还是异步? 如何实现一个 console.log?")])]),t._v(" "),a("p",[t._v("如果简历中有出现 C/C++ 关键字, 一般都会问到如何实现一个同步的输入 (类似实现C语言的 "),a("code",[t._v("scanf")]),t._v(", C++ 的 "),a("code",[t._v("cin")]),t._v(", Python 的 "),a("code",[t._v("raw_input")]),t._v(" 等).")]),t._v(" "),a("h3",{attrs:{id:"维护方面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#维护方面"}},[t._v("#")]),t._v(" 维护方面")]),t._v(" "),a("p",[t._v("熟悉与进程有关的基础命令, 如 top, ps, pstree 等命令.")]),t._v(" "),a("h2",{attrs:{id:"child-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#child-process"}},[t._v("#")]),t._v(" Child Process")]),t._v(" "),a("p",[t._v("子进程 (Child Process) 是进程中一个重要的概念. 你可以通过 Node.js 的 "),a("code",[t._v("child_process")]),t._v(" 模块来执行可执行文件, 调用命令行命令, 比如其他语言的程序等. 也可以通过该模块来将 .js 代码以子进程的方式启动. 比较有名的网易的分布式架构 "),a("a",{attrs:{href:"https://github.com/NetEase/pomelo",target:"_blank",rel:"noopener noreferrer"}},[t._v("pomelo"),a("OutboundLink")],1),t._v(" 就是基于该模块 (而不是 "),a("code",[t._v("cluster")]),t._v(") 来实现多进程分布式架构的.")]),t._v(" "),a("blockquote",[a("p",[t._v("child_process.fork 与 POSIX 的 fork 有什么区别?")])]),t._v(" "),a("p",[t._v("Node.js 的 "),a("code",[t._v("child_process.fork()")]),t._v(" 在 Unix 上的实现最终调用了 POSIX "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man2/fork.2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork(2)"),a("OutboundLink")],1),t._v(", 而 POSIX 的 fork 需要手动管理子进程的资源释放 (waitpid), child_process.fork 则不用关心这个问题, Node.js 会自动释放, 并且可以在 option 中选择父进程死后是否允许子进程存活.")]),t._v(" "),a("ul",[a("li",[t._v("spawn() 启动一个子进程来执行命令\n"),a("ul",[a("li",[t._v("options.detached 父进程死后是否允许子进程存活")]),t._v(" "),a("li",[t._v("options.stdio 指定子进程的三个标准流")])])]),t._v(" "),a("li",[t._v("spawnSync() 同步版的 spawn, 可指定超时, 返回的对象可获得子进程的情况")]),t._v(" "),a("li",[t._v("exec() 启动一个子进程来执行命令, 带回调参数获知子进程的情况, 可指定进程运行的超时时间")]),t._v(" "),a("li",[t._v("execSync() 同步版的 exec(), 可指定超时, 返回子进程的输出 (stdout)")]),t._v(" "),a("li",[t._v("execFile() 启动一个子进程来执行一个可执行文件, 可指定进程运行的超时时间")]),t._v(" "),a("li",[t._v("execFileSync() 同步版的 execFile(), 返回子进程的输出, 如何超时或者 exit code 不为 0, 会直接 throw Error")]),t._v(" "),a("li",[t._v("fork() 加强版的 spawn(), 返回值是 ChildProcess 对象可以与子进程交互")])]),t._v(" "),a("p",[t._v("其中 exec/execSync 方法会直接调用 bash 来解释命令, 所以如果有命令有外部参数, 则需要注意被注入的情况.")]),t._v(" "),a("h3",{attrs:{id:"child-kill-与-child-send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#child-kill-与-child-send"}},[t._v("#")]),t._v(" child.kill 与 child.send")]),t._v(" "),a("p",[t._v("常见会问的面试题, 如 "),a("code",[t._v("child.kill")]),t._v(" 与 "),a("code",[t._v("child.send")]),t._v(" 的区别. 二者一个是基于信号系统, 一个是基于 IPC.")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{name:"q-child"}}),t._v(" 父进程或子进程的死亡是否会影响对方? 什么是孤儿进程?")])]),t._v(" "),a("p",[t._v("子进程死亡不会影响父进程, 不过子进程死亡时（线程组的最后一个线程，通常是“领头”线程死亡时），会向它的父进程发送死亡信号. 反之父进程死亡, 一般情况下子进程也会随之死亡, 但如果此时子进程处于可运行态、僵死状态等等的话, 子进程将被"),a("code",[t._v("进程1")]),t._v("（init 进程）收养，从而成为孤儿进程. 另外, 子进程死亡的时候（处于“终止状态”），父进程没有及时调用 "),a("code",[t._v("wait()")]),t._v(" 或 "),a("code",[t._v("waitpid()")]),t._v(" 来返回死亡进程的相关信息，此时子进程还有一个 "),a("code",[t._v("PCB")]),t._v(" 残留在进程表中，被称作僵尸进程.")]),t._v(" "),a("h2",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[t._v("#")]),t._v(" Cluster")]),t._v(" "),a("p",[t._v("Cluster 是常见的 Node.js 利用多核的办法. 它是基于 "),a("code",[t._v("child_process.fork()")]),t._v(" 实现的, 所以 cluster 产生的进程之间是通过 IPC 来通信的, 并且它也没有拷贝父进程的空间, 而是通过加入 cluster.isMaster 这个标识, 来区分父进程以及子进程, 达到类似 POSIX 的 "),a("a",{attrs:{href:"http://man7.org/linux/man-pages/man2/fork.2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork"),a("OutboundLink")],1),t._v(" 的效果.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cluster "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | | ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | | ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" numCPUs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |    都执行了")]),t._v("\n                                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | | ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMaster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-|-----------------")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fork workers.                             //   | ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" numCPUs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | ")]),t._v("\n    cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | 仅父进程执行 (a.js)")]),t._v("\n  cluster"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | ")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("worker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(" died")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   | ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   |")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-------------------")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Workers can share any TCP connection      // | ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In this case it is an HTTP server         // | ")]),t._v("\n  http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | ")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |   仅子进程执行 (b.js)")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// |-------------------")]),t._v("\n                                               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// | |    都执行了")]),t._v("\n")])])]),a("p",[t._v("在上述代码中 numCPUs 虽然是全局变量但是, 在父进程中修改它, 子进程中并不会改变, 因为父进程与子进程是完全独立的两个空间. 他们所谓的共有仅仅只是都执行了, 并不是同一份.")]),t._v(" "),a("p",[t._v("你可以把父进程执行的部分当做 "),a("code",[t._v("a.js")]),t._v(", 子进程执行的部分当做 "),a("code",[t._v("b.js")]),t._v(", 你可以把他们想象成是先执行了 "),a("code",[t._v("node a.js")]),t._v(" 然后 cluster.fork 了几次, 就执行了几次 "),a("code",[t._v("node b.js")]),t._v(". 而 cluster 模块则是二者之间的一个桥梁, 你可以通过 cluster 提供的方法, 让其二者之间进行沟通交流.")]),t._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[t._v("#")]),t._v(" How It Works")]),t._v(" "),a("p",[t._v("worker 进程是由 child_process.fork() 方法创建的, 所以可以通过 IPC 在主进程和子进程之间相互传递服务器句柄.")]),t._v(" "),a("p",[t._v("cluster 模块提供了两种分发连接的方式.")]),t._v(" "),a("p",[t._v("第一种方式 (默认方式, 不适用于 windows), 通过时间片轮转法（round-robin）分发连接. 主进程监听端口, 接收到新连接之后, 通过时间片轮转法来决定将接收到的客户端的 socket 句柄传递给指定的 worker 处理. 至于每个连接由哪个 worker 来处理, 完全由内置的循环算法决定.")]),t._v(" "),a("p",[t._v("第二种方式是由主进程创建 socket 监听端口后, 将 socket 句柄直接分发给相应的 worker, 然后当连接进来时, 就直接由相应的 worker 来接收连接并处理.")]),t._v(" "),a("p",[t._v("使用第二种方式时理论上性能应该较高, 然后时间上存在负载不均衡的问题, 比如通常 70% 的连接仅被 8 个进程中的 2 个处理, 而其他进程比较清闲.")]),t._v(" "),a("h2",{attrs:{id:"进程间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信"}},[t._v("#")]),t._v(" 进程间通信")]),t._v(" "),a("p",[t._v("IPC (Inter-process communication) 进程间通信技术. 常见的进程间通信技术列表如下:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("无连接")]),t._v(" "),a("th",[t._v("可靠")]),t._v(" "),a("th",[t._v("流控制")]),t._v(" "),a("th",[t._v("优先级")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("普通PIPE")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("命名PIPE")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("消息队列")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("信号量")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")])]),t._v(" "),a("tr",[a("td",[t._v("共享存储")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")])]),t._v(" "),a("tr",[a("td",[t._v("UNIX流SOCKET")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("N")])]),t._v(" "),a("tr",[a("td",[t._v("UNIX数据包SOCKET")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("Y")]),t._v(" "),a("td",[t._v("N")]),t._v(" "),a("td",[t._v("N")])])])]),t._v(" "),a("p",[t._v("Node.js 中的 IPC 通信是由 libuv 通过管道技术实现的,  在 windows 下由命名管道（named pipe）实现也就是上表中的最后第二个,  *nix 系统则采用 UDS (Unix Domain Socket) 实现.")]),t._v(" "),a("p",[t._v("普通的 socket 是为网络通讯设计的, 而网络本身是不可靠的, 而为 IPC 设计的 socket 则不然, 因为默认本地的网络环境是可靠的, 所以可以简化大量不必要的 encode/decode 以及计算校验等, 得到效率更高的 UDS 通信.")]),t._v(" "),a("p",[t._v("如果了解 Node.js 的 IPC 的话, 可以问个比较有意思的问题")]),t._v(" "),a("blockquote",[a("p",[t._v("在 IPC 通道建立之前, 父进程与子进程是怎么通信的? 如果没有通信, 那 IPC 是怎么建立的?")])]),t._v(" "),a("p",[t._v("这个问题也挺简单, 只是个思路的问题. 在通过 child_process 建立子进程的时候, 是可以指定子进程的 env (环境变量) 的. 所以 Node.js 在启动子进程的时候, 主进程先建立 IPC 频道, 然后将 IPC 频道的 fd (文件描述符) 通过环境变量 ("),a("code",[t._v("NODE_CHANNEL_FD")]),t._v(") 的方式传递给子进程, 然后子进程通过 fd 连上 IPC 与父进程建立连接.")]),t._v(" "),a("p",[t._v("最后于进程间通信 (IPC) 的问题, 一般不会直接问 IPC 的实现, 而是会问什么情况下需要 IPC, 以及使用 IPC 处理过什么业务场景等.")]),t._v(" "),a("h2",{attrs:{id:"守护进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#守护进程"}},[t._v("#")]),t._v(" 守护进程")]),t._v(" "),a("p",[t._v("最后的守护进程, 是服务端方面一个很基础的概念了. 很多人可能只知道通过 pm2 之类的工具可以将进程以守护进程的方式启动, 却不了解什么是守护进程, 为什么要用守护进程. 对于水平好的同学, 我们是希望能了解守护进程的实现的.")]),t._v(" "),a("p",[t._v("普通的进程, 在用户退出终端之后就会直接关闭. 通过 "),a("code",[t._v("&")]),t._v(" 启动到后台的进程, 之后会由于会话（session组）被回收而终止进程. 守护进程是不依赖终端（tty）的进程, 不会因为用户退出终端而停止运行的进程.")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 守护进程实现 (C语言版本)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init_daemon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pid_t pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fork error !\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父进程退出")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setsid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子进程开启新会话, 并成为会话首进程和组长进程")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fork error !\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束第一子进程, 第二子进程不再是会话首进程")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 避免当前会话组重新与tty连接")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chdir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/tmp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 改变工作目录")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("umask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重设文件掩码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getdtablesize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭打开的文件描述符")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://cnodejs.org/topic/57adfadf476898b472247eac",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 编写守护进程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);