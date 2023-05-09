(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1409:function(t,s,n){"use strict";n.r(s);var a=n(10),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[n("code",[t._v("javascript")]),t._v("是一门单线程语言，在最新的"),n("code",[t._v("HTML5")]),t._v("中提出了"),n("code",[t._v("Web-Worker")]),t._v("，但"),n("code",[t._v("javascript")]),t._v("是单线程这一核心仍未改变。所以一切"),n("code",[t._v("javascript")]),t._v('版的"多线程"都是用单线程模拟出来的，一切'),n("code",[t._v("javascript")]),t._v("多线程都是纸老虎")])]),t._v(" "),n("h2",{attrs:{id:"一、javascript事件循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、javascript事件循环"}},[t._v("#")]),t._v(" 一、javascript事件循环")]),t._v(" "),n("blockquote",[n("p",[t._v("既然js是单线程，那就像只有一个窗口的银行，客户需要排队一个一个办理业务，同理js任务也要一个一个顺序执行。如果一个任务耗时过长，那么后一个任务也必须等着。那么问题来了，假如我们想浏览新闻，但是新闻包含的超清图片加载很慢，难道我们的网页要一直卡着直到图片完全显示出来？因此聪明的程序员将任务分为两类")])]),t._v(" "),n("ul",[n("li",[t._v("同步任务")]),t._v(" "),n("li",[t._v("异步任务")])]),t._v(" "),n("blockquote",[n("p",[t._v("当我们打开网站时，网页的渲染过程就是一大堆同步任务，比如页面骨架和页面元素的渲染。而像加载图片音乐之类占用资源大耗时久的任务，就是异步任务。关于这部分有严格的文字定义，但本文的目的是用最小的学习成本彻底弄懂执行机制，所以我们用导图来说明")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/20190922/event-loop-1.png",alt:""}})]),t._v(" "),n("ul",[n("li",[t._v('同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入'),n("code",[t._v("Event Table")]),t._v("并注册函数。")]),t._v(" "),n("li",[t._v("当指定的事情完成时，"),n("code",[t._v("Event Table")]),t._v("会将这个函数移入"),n("code",[t._v("Event Queue")]),t._v("。")]),t._v(" "),n("li",[t._v("主线程内的任务执行完毕为空，会去"),n("code",[t._v("Event Queue")]),t._v("读取对应的函数，进入主线程执行。")]),t._v(" "),n("li",[t._v("上述过程会不断重复，也就是常说的"),n("code",[t._v("Event Loop")]),t._v("(事件循环)")])]),t._v(" "),n("blockquote",[n("p",[t._v("我们不禁要问了，那怎么知道主线程执行栈为空啊？"),n("code",[t._v("js")]),t._v("引擎存在"),n("code",[t._v("monitoring process")]),t._v("进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去"),n("code",[t._v("Event Queue")]),t._v("那里检查是否有等待被调用的函数")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javascript"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发送成功!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'代码执行结束'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("上面是一段简易的ajax请求代码")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("ajax")]),t._v("进入"),n("code",[t._v("Event Table")]),t._v("，注册回调函数success。")]),t._v(" "),n("li",[t._v("执行console.log('代码执行结束')。")]),t._v(" "),n("li",[n("code",[t._v("ajax")]),t._v("事件完成，回调函数"),n("code",[t._v("success")]),t._v("进入"),n("code",[t._v("Event Queue")]),t._v("。")]),t._v(" "),n("li",[t._v("主线程从"),n("code",[t._v("Event Queue")]),t._v("读取回调函数"),n("code",[t._v("success")]),t._v("并执行")])]),t._v(" "),n("h2",{attrs:{id:"二、settimeout和setinterval"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、settimeout和setinterval"}},[t._v("#")]),t._v(" 二、setTimeout和setInterval")]),t._v(" "),n("h3",{attrs:{id:"_2-1-settimeout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-settimeout"}},[t._v("#")]),t._v(" 2.1 setTimeout")]),t._v(" "),n("p",[t._v("大名鼎鼎的"),n("code",[t._v("setTimeout")]),t._v("无需再多言，大家对他的第一印象就是异步可以延时执行，我们经常这么实现延时3秒执行")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'延时3秒'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("渐渐的"),n("code",[t._v("setTimeout")]),t._v("用的地方多了，问题也出现了，有时候明明写的延时3秒，实际却5，6秒才执行函数，这又咋回事啊？")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("task")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行console'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("blockquote",[n("p",[t._v("根据前面我们的结论，"),n("code",[t._v("setTimeout")]),t._v("是异步的，应该先执行"),n("code",[t._v("console.log")]),t._v("这个同步任务，所以我们的结论是：")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//执行console\n//task()\n")])])]),n("p",[t._v("去验证一下，结果正确！\n然后我们修改一下前面的代码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("setTimeout(() => {\n    task()\n},3000)\n\nsleep(10000000)\n")])])]),n("p",[t._v("乍一看其实差不多嘛，但我们把这段代码在chrome执行一下，却发现控制台执行task()需要的时间远远超过3秒，说好的延时三秒，为啥现在需要这么长时间啊？")]),t._v(" "),n("p",[n("strong",[t._v("这时候我们需要重新理解setTimeout的定义。我们先说上述代码是怎么执行的")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("task()")]),t._v("进入"),n("code",[t._v("Event Table")]),t._v("并注册,计时开始。")]),t._v(" "),n("li",[t._v("执行"),n("code",[t._v("sleep")]),t._v("函数，很慢，非常慢，计时仍在继续。")]),t._v(" "),n("li",[t._v("3秒到了，计时事件"),n("code",[t._v("timeout")]),t._v("完成，"),n("code",[t._v("task()")]),t._v("进入"),n("code",[t._v("Event Queue")]),t._v("，但是"),n("code",[t._v("sleep")]),t._v("也太慢了吧，还没执行完，只好等着。")]),t._v(" "),n("li",[n("code",[t._v("sleep")]),t._v("终于执行完了，"),n("code",[t._v("task()")]),t._v("终于从"),n("code",[t._v("Event Queue")]),t._v("进入了主线程执行。")])]),t._v(" "),n("blockquote",[n("p",[t._v("上述的流程走完，我们知道"),n("code",[t._v("setTimeout")]),t._v("这个函数，是经过指定时间后，把要执行的任务(本例中为"),n("code",[t._v("task()")]),t._v(")加入到"),n("code",[t._v("Event Queue")]),t._v("中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间远远大于3秒。")])]),t._v(" "),n("ul",[n("li",[t._v("我们还经常遇到"),n("code",[t._v("setTimeout(fn,0)")]),t._v("这样的代码，0秒后执行又是什么意思呢？是不是可以立即执行呢？")]),t._v(" "),n("li",[t._v("答案是不会的"),n("code",[t._v("，setTimeout(fn,0)")]),t._v("的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。举例说明：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代码1")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'先执行这里'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代码2")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'先执行这里'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'执行啦'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("代码1的输出结果是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//先执行这里\n//执行啦\n")])])]),n("p",[t._v("代码2的输出结果是：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("//先执行这里\n// ... 3s later\n// 执行啦\n")])])]),n("blockquote",[n("p",[t._v("关于"),n("code",[t._v("setTimeout")]),t._v("要补充的是，即便主线程为空，0毫秒实际上也是达不到的。根据HTML的标准，最低是"),n("code",[t._v("4")]),t._v("毫秒。有兴趣的同学可以自行了解")])]),t._v(" "),n("h3",{attrs:{id:"_2-2-setinterval"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-setinterval"}},[t._v("#")]),t._v(" 2.2 setInterval")]),t._v(" "),n("blockquote",[n("p",[t._v("上面说完了"),n("code",[t._v("setTimeout")]),t._v("，当然不能错过它的孪生兄弟"),n("code",[t._v("setInterval")]),t._v("。他俩差不多，只不过后者是循环的执行。对于执行顺序来说，"),n("code",[t._v("setInterval")]),t._v("会每隔指定的时间将注册的函数置入Event Queue，如果前面的任务耗时太久，那么同样需要等待")])]),t._v(" "),n("blockquote",[n("p",[t._v("唯一需要注意的一点是，对于"),n("code",[t._v("setInterval(fn,ms)")]),t._v("来说，我们已经知道不是每过"),n("code",[t._v("ms")]),t._v("秒会执行一次"),n("code",[t._v("fn")]),t._v("，而是每过"),n("code",[t._v("ms")]),t._v("秒，会有"),n("code",[t._v("fn")]),t._v("进入"),n("code",[t._v("Event Queue")]),t._v("。一旦"),n("code",[t._v("setInterval")]),t._v("的回调函数fn执行时间超过了延迟时间ms，那么就完全看不出来有时间间隔了。这句话请读者仔细品味")])]),t._v(" "),n("h2",{attrs:{id:"三、promise与process-nexttick-callback"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、promise与process-nexttick-callback"}},[t._v("#")]),t._v(" 三、Promise与process.nextTick(callback)")]),t._v(" "),n("blockquote",[n("p",[t._v("传统的定时器我们已经研究过了，接着我们探究"),n("code",[t._v("Promise")]),t._v("与"),n("code",[t._v("process.nextTick(callback)")]),t._v("的表现")])]),t._v(" "),n("blockquote",[n("p",[t._v("Promise的定义和功能本文不再赘述，而"),n("code",[t._v("process.nextTick(callback)")]),t._v("类似"),n("code",[t._v("node.js")]),t._v('版的"'),n("code",[t._v("setTimeout")]),t._v('"，在事件循环的下一次循环中调用 callback 回调函数。')])]),t._v(" "),n("p",[t._v("我们进入正题，除了广义的同步任务和异步任务，我们对任务有更精细的定义")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("macro-task")]),t._v("(宏任务)：包括整体代码"),n("code",[t._v("script")]),t._v("，"),n("code",[t._v("setTimeout")]),t._v("，"),n("code",[t._v("setInterval")])]),t._v(" "),n("li",[n("code",[t._v("micro-task")]),t._v("(微任务)："),n("code",[t._v("Promise")]),t._v("，"),n("code",[t._v("process.nextTick")])])]),t._v(" "),n("blockquote",[n("p",[t._v("不同类型的任务会进入对应的"),n("code",[t._v("Event Queue")]),t._v("，比如"),n("code",[t._v("setTimeout")]),t._v("和"),n("code",[t._v("setInterval")]),t._v("会进入相同的"),n("code",[t._v("Event Queue")])])]),t._v(" "),n("blockquote",[n("p",[t._v("事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。听起来有点绕，我们用文章最开始的一段代码说明")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'then'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'console'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("这段代码作为宏任务，进入主线程。")]),t._v(" "),n("li",[t._v("先遇到"),n("code",[t._v("setTimeout")]),t._v("，那么将其回调函数注册后分发到宏任务"),n("code",[t._v("Event Queue")]),t._v("。(注册过程与上同，下文不再描述)")]),t._v(" "),n("li",[t._v("接下来遇到了"),n("code",[t._v("Promise")]),t._v("，"),n("code",[t._v("new Promise")]),t._v("立即执行，"),n("code",[t._v("then")]),t._v("函数分发到微任务"),n("code",[t._v("Event Queue")]),t._v("。")]),t._v(" "),n("li",[t._v("遇到"),n("code",[t._v("console.log()")]),t._v("，立即执行。")]),t._v(" "),n("li",[t._v("好啦，整体代码"),n("code",[t._v("script")]),t._v("作为第一个宏任务执行结束，看看有哪些微任务？我们发现了"),n("code",[t._v("then")]),t._v("在微任务"),n("code",[t._v("Event Queue")]),t._v("里面，执行。")]),t._v(" "),n("li",[t._v("ok，第一轮事件循环结束了，我们开始第二轮循环，当然要从宏任务"),n("code",[t._v("Event Queue")]),t._v("开始。我们发现了宏任务"),n("code",[t._v("Event Queue")]),t._v("中"),n("code",[t._v("setTimeout")]),t._v("对应的回调函数，立即执行。")]),t._v(" "),n("li",[t._v("结束。")])]),t._v(" "),n("blockquote",[n("p",[t._v("事件循环，宏任务，微任务的关系如图所示：")])]),t._v(" "),n("p",[n("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/20190922/event-loop-2.png",alt:""}})]),t._v(" "),n("blockquote",[n("p",[t._v("我们来分析一段较复杂的代码，看看你是否真的掌握了js的执行机制")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nprocess"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'7'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'9'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'11'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("strong",[t._v("第一轮事件循环流程分析如下")])]),t._v(" "),n("ul",[n("li",[t._v("整体"),n("code",[t._v("script")]),t._v("作为第一个宏任务进入主线程，遇到"),n("code",[t._v("console.log")]),t._v("，输出"),n("code",[t._v("1")]),t._v("。")]),t._v(" "),n("li",[t._v("遇到"),n("code",[t._v("setTimeout")]),t._v("，其回调函数被分发到宏任务"),n("code",[t._v("Event Queue")]),t._v("中。我们暂且记为"),n("code",[t._v("setTimeout1")]),t._v("。")]),t._v(" "),n("li",[t._v("遇到"),n("code",[t._v("process.nextTick()")]),t._v("，其回调函数被分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中。我们记为"),n("code",[t._v("process1")]),t._v("。")]),t._v(" "),n("li",[t._v("遇到"),n("code",[t._v("Promise")]),t._v("，"),n("code",[t._v("new Promise")]),t._v("直接执行，输出"),n("code",[t._v("7")]),t._v("。"),n("code",[t._v("then")]),t._v("被分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中。我们记为"),n("code",[t._v("then1")]),t._v("。")]),t._v(" "),n("li",[t._v("又遇到了"),n("code",[t._v("setTimeout")]),t._v("，其回调函数被分发到宏任务"),n("code",[t._v("Event Queue")]),t._v("中，我们记为"),n("code",[t._v("setTimeout2")]),t._v("。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("宏任务Event Queue")]),t._v(" "),n("th",[t._v("微任务Event Queue")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("setTimeout1")])]),t._v(" "),n("td",[n("code",[t._v("process1")])])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("setTimeout2")])]),t._v(" "),n("td",[n("code",[t._v("then1")])])])])]),t._v(" "),n("ul",[n("li",[t._v("上表是第一轮事件循环宏任务结束时各"),n("code",[t._v("Event Queue的")]),t._v("情况，此时已经输出了"),n("code",[t._v("1")]),t._v("和"),n("code",[t._v("7")]),t._v("。")]),t._v(" "),n("li",[t._v("我们发现了"),n("code",[t._v("process1")]),t._v("和"),n("code",[t._v("then1")]),t._v("两个微任务。")]),t._v(" "),n("li",[t._v("执行"),n("code",[t._v("process1")]),t._v(",输出"),n("code",[t._v("6")]),t._v("。")]),t._v(" "),n("li",[t._v("执行"),n("code",[t._v("then1")]),t._v("，输出"),n("code",[t._v("8")]),t._v("。")])]),t._v(" "),n("blockquote",[n("p",[t._v("好了，第一轮事件循环正式结束，这一轮的结果是输出"),n("code",[t._v("1，7，6，8")]),t._v("。那么第二轮时间循环从"),n("code",[t._v("setTimeout1")]),t._v("宏任务开始：")])]),t._v(" "),n("ul",[n("li",[t._v("首先输出"),n("code",[t._v("2")]),t._v("。接下来遇到了"),n("code",[t._v("process.nextTick()")]),t._v("，同样将其分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中，记为"),n("code",[t._v("process2")]),t._v("。"),n("code",[t._v("new Promise")]),t._v("立即执行输出4，then也分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中，记为"),n("code",[t._v("then2")])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("宏任务Event Queue")]),t._v(" "),n("th",[t._v("微任务Event Queue")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("setTimeout2")])]),t._v(" "),n("td",[n("code",[t._v("process2")])])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[n("code",[t._v("then2")])])])])]),t._v(" "),n("ul",[n("li",[t._v("第二轮事件循环宏任务结束，我们发现有"),n("code",[t._v("process2")]),t._v("和"),n("code",[t._v("then2")]),t._v("两个微任务可以执行。")]),t._v(" "),n("li",[t._v("输出3。")]),t._v(" "),n("li",[t._v("输出5。")]),t._v(" "),n("li",[t._v("第二轮事件循环结束，第二轮输出"),n("code",[t._v("2，4，3，5")]),t._v("。")]),t._v(" "),n("li",[t._v("第三轮事件循环开始，此时只剩"),n("code",[t._v("setTimeout2")]),t._v("了，执行。")]),t._v(" "),n("li",[t._v("直接输出9。")]),t._v(" "),n("li",[t._v("将"),n("code",[t._v("process.nextTick()")]),t._v("分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中。记为"),n("code",[t._v("process3")]),t._v("。")]),t._v(" "),n("li",[t._v("直接执行"),n("code",[t._v("new Promise")]),t._v("，输出"),n("code",[t._v("11")]),t._v("。")]),t._v(" "),n("li",[t._v("将"),n("code",[t._v("then")]),t._v("分发到微任务"),n("code",[t._v("Event Queue")]),t._v("中，记为"),n("code",[t._v("then3")]),t._v("。")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("宏任务Event Queue")]),t._v(" "),n("th",[t._v("微任务Event Queue")])])]),t._v(" "),n("tbody",[n("tr",[n("td"),t._v(" "),n("td",[n("code",[t._v("process3")])])]),t._v(" "),n("tr",[n("td"),t._v(" "),n("td",[n("code",[t._v("then3")])])])])]),t._v(" "),n("ul",[n("li",[t._v("第三轮事件循环宏任务执行结束，执行两个微任务"),n("code",[t._v("process3")]),t._v("和"),n("code",[t._v("then3")]),t._v("。")]),t._v(" "),n("li",[t._v("输出10。")]),t._v(" "),n("li",[t._v("输出12。")]),t._v(" "),n("li",[t._v("第三轮事件循环结束，第三轮输出9，11，10，12。")])]),t._v(" "),n("blockquote",[n("p",[t._v("整段代码，共进行了三次事件循环，完整的输出为"),n("code",[t._v("1，7，6，8，2，4，3，5，9，11，10，12")]),t._v("。\n(请注意，node环境下的事件监听依赖libuv与前端环境不完全相同，输出顺序可能会有误差)")])]),t._v(" "),n("h2",{attrs:{id:"四、总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、总结"}},[t._v("#")]),t._v(" 四、总结")]),t._v(" "),n("p",[n("strong",[t._v("js的异步")])]),t._v(" "),n("blockquote",[n("p",[t._v("我们从最开头就说javascript是一门单线程语言，不管是什么新框架新语法糖实现的所谓异步，其实都是用同步的方法去模拟的，牢牢把握住单线程这点非常重要。")])]),t._v(" "),n("p",[n("strong",[t._v("事件循环Event Loop")])]),t._v(" "),n("blockquote",[n("p",[t._v("事件循环是js实现异步的一种方法，也是js的执行机制。")])]),t._v(" "),n("p",[n("strong",[t._v("javascript的执行和运行")])]),t._v(" "),n("blockquote",[n("p",[t._v("执行和运行有很大的区别，javascript在不同的环境下，比如node，浏览器，Ringo等等，执行方式是不同的。而运行大多指javascript解析引擎，是统一的。")])]),t._v(" "),n("p",[n("strong",[t._v("setImmediate")])]),t._v(" "),n("blockquote",[n("p",[t._v("微任务和宏任务还有很多种类，比如setImmediate等等，执行都是有共同点的")])]),t._v(" "),n("p",[n("strong",[t._v("总结")])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("javascript")]),t._v("是一门单线程语言")]),t._v(" "),n("li",[n("code",[t._v("Event Loop")]),t._v("是"),n("code",[t._v("javascript")]),t._v("的执行机制")])])])}),[],!1,null,null,null);s.default=e.exports}}]);