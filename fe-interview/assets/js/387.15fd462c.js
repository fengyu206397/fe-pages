(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1342:function(t,s,a){"use strict";a.r(s);var e=a(10),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、小程序直播功能目前有哪些实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、小程序直播功能目前有哪些实现方案"}},[t._v("#")]),t._v(" 一、小程序直播功能目前有哪些实现方案")]),t._v(" "),a("ul",[a("li",[t._v("内嵌腾讯直播H5：腾讯直播已改名NOW直播，小程序接入工具文档无法找到")]),t._v(" "),a("li",[t._v("小程序原生实现：小程序对直播和"),a("code",[t._v("websocket")]),t._v("都进行了比较好的封装，通过"),a("code",[t._v("live-pusher")]),t._v(" "),a("code",[t._v("live-player")]),t._v("组件和"),a("code",[t._v("websocket API")]),t._v("即可实现直播互动功能")]),t._v(" "),a("li",[t._v("接入小程序直播插件实现：小程序直播，是微信提供给小程序开发者的直播组件。")])]),t._v(" "),a("h2",{attrs:{id:"二、小程序原生实现直播功能流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、小程序原生实现直播功能流程"}},[t._v("#")]),t._v(" 二、小程序原生实现直播功能流程")]),t._v(" "),a("blockquote",[a("p",[t._v("微信小程序从"),a("code",[t._v("1.7")]),t._v("开始，为开发者提供了两个新接口，"),a("code",[t._v("<live-pusher>")]),t._v("和"),a("code",[t._v("<live-player>")]),t._v("，可以在小程序上实现单向的直播功能。通过与技术的结合，比如"),a("code",[t._v("WebRTC")]),t._v("，开发者们还可以进一步在小程序直播的基础上实现连麦功能")])]),t._v(" "),a("blockquote",[a("p",[t._v("首先由于微信对小程序直播功能类目有限制，限定了特定类目的小程序使用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/8.webp",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("另外需要注意的两点：")])]),t._v(" "),a("ul",[a("li",[t._v("个人号无法申请使用直播功能；")]),t._v(" "),a("li",[t._v("社交类目开通直播功能需要相关视频许可和文网文资质许可；")]),t._v(" "),a("li",[t._v("所以小程序开通直播的业务，要根据产品的目的和场景去申请对应的类目。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在小程序管理后台，「开发」-「接口设置」中自助开通对应的权限，如下图所示：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/9.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/7.webp",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("微信小程序原生实现直播功能流程如上图所示，录制端小程序通过"),a("code",[t._v("[live-pusher]")]),t._v("组件对手机和麦克风的数据进行采集和编码推流到服务器，服务器端对数据进行加工处理并分发给多个客户端，播放端小程序通过"),a("code",[t._v("[live-player]")]),t._v("组件从云端拉流并进行实时无差异的解码和渲染，从而实现直播小程序完整互动功能")])]),t._v(" "),a("p",[a("strong",[t._v("1. 推流 API 调用流程图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/1.jpg",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("2. 拉流 API 调用流程图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/2.jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、小程序直播实现过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、小程序直播实现过程"}},[t._v("#")]),t._v(" 三、小程序直播实现过程")]),t._v(" "),a("blockquote",[a("p",[t._v("微信小程序中的推拉流功能，需要用到微信提供的 "),a("code",[t._v("live-player")]),t._v(" "),a("code",[t._v("live-pusher")]),t._v(" 标签")])]),t._v(" "),a("h3",{attrs:{id:"_3-1-live-player"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-live-player"}},[t._v("#")]),t._v(" 3.1 live-player")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("live-player")]),t._v(" 是微信提供的支持实时音视频播放的组件，"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方介绍详见组件介绍"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("p",[t._v("创建 live-player 的演示源码如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("player\n    autoplay\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item.playUrl}}"')]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item.streamID}}"')]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RTC"')]),t._v("\n    object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fillCrop"')]),t._v("\n    min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.1"')]),t._v("\n    max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.3"')]),t._v("\n    src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item.playUrl}}"')]),t._v("\n    debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.showLog}}"')]),t._v("\n    bindstatechange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onPlayStateChange"')]),t._v("\n    bindnetstatus"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onPlayNetStateChange"')]),t._v("\n    binderror"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'character'")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'padding: 0 5px;'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("streamID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("player"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("请注意")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("live")]),t._v(" 模式主要用于直播类场景，比如赛事直播、在线教育、远程培训等等。该模式下，小程序内部的模块会优先保证观看体验的流畅，通过调整 "),a("code",[t._v("min-cache")]),t._v(" 和 "),a("code",[t._v("max-cache")]),t._v(" 属性，您可以调节观众(播放)端所感受到的时间延迟的大小，文档下面会详细介绍这两个参数")]),t._v(" "),a("li",[a("code",[t._v("RTC")]),t._v(" 则主要用于双向视频通话或多人视频通话场景，比如金融开会、在线客服、车险定损、培训会议 等等。在此模式下，对 "),a("code",[t._v("min-cache")]),t._v(" 和 "),a("code",[t._v("max-cache")]),t._v(" 的设置不会起作用，因为小程序内部会自动将延迟控制在一个很低的水平("),a("code",[t._v("500ms")]),t._v("左右)。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-live-pusher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-live-pusher"}},[t._v("#")]),t._v(" 3.2 live-pusher")]),t._v(" "),a("blockquote",[a("p",[t._v("live-pusher 是微信提供的支持实时音视频录制的组件，"),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方介绍详见：组件介绍"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("创建 "),a("code",[t._v("live-pusher")]),t._v(" 的演示源码如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pusher\n    wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushUrl}}"')]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video-livePusher"')]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RTC"')]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushUrl}}"')]),t._v("\n    min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.minBitrate}}"')]),t._v("\n    max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.maxBitrate}}"')]),t._v("\n    aspect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.aspect}}"')]),t._v("\n    beauty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.isBeauty}}"')]),t._v("\n    muted"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.isMute}}"')]),t._v("\n    background"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("mute"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n    debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{pushConfig.showLog}}"')]),t._v("\n    bindstatechange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onPushStateChange"')]),t._v("\n    bindnetstatus"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onPushNetStateChange"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'character'")]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'padding: 0 5px;'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("isPublishing "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我("')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" publishStreamID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cover"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pusher"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[a("strong",[t._v("请注意：")])]),t._v(" "),a("ul",[a("li",[t._v("SD、HD 和 FHD 主要用于直播类场景，比如赛事直播、在线教育、远程培训等等。SD、HD 和 FHD 分别对应三种默认的清晰度。该模式下，小程序会更加注重清晰度和观看的流畅性，不会过分强调低延迟，也不会为了延迟牺牲画质和流畅性")]),t._v(" "),a("li",[t._v("RTC 则主要用于双向视频通话或多人视频通话场景，比如金融开会、在线客服、车险定损、培训会议 等等。该模式下，小程序会更加注重降低点到点的时延，也会优先保证声音的质量，在必要的时候会对画面清晰度和画面的流畅性进行一定的缩水")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-服务端的选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-服务端的选择"}},[t._v("#")]),t._v(" 3.3 服务端的选择")]),t._v(" "),a("blockquote",[a("p",[t._v("由于自己搭"),a("code",[t._v("rtmp")]),t._v("（例如"),a("code",[t._v("Nginx rtmp")]),t._v("）成本较高，技术实现难度大，考虑云服务商提供的视频直播服务产品，生成推流地址和播放地址，目前市面上主流的云直播产品有：腾讯云、阿里云、七牛云等。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/10.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("各平台均提供内容接入与分发和分布式实时视频处理技术，每个平台提供的功能大同小异但各有千秋，平均费用大概 20-30元/100G，100G流量可以满足100人同时在线直播4小时")])]),t._v(" "),a("p",[a("strong",[t._v("接下来选择腾讯云直播进行接入体验")])]),t._v(" "),a("ol",[a("li",[t._v("申请腾讯云账号，开通云直播权限，它会赠送20gb流量给你 超出需要自己花钱。开通流程请参考下面的文档：https://cloud.tencent.com/document/product/454/12517")]),t._v(" "),a("li",[t._v("域名管理，在这里面会看到两个域名 一个是推流域名 一个是播放域名，域名可以用自己的 （建议配置自己的域名，2019/2/26上线查看时发现赠送的播放域名已失效）。具体看下面的文档 https://cloud.tencent.com/document/product/267/20381")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/11.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("由于腾讯云不再赠送播放域名，所以需要租用或者使用自己的域名生成播放地址，自己的播放域名不能直接访问，需要完成CNAME配置")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/12.png",alt:""}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("最后，小程序直播组件API接入")])]),t._v(" "),a("blockquote",[a("p",[t._v("第一步："),a("code",[t._v("<live-pusher>")]),t._v("推流（数据包实时上传）示例代码：")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("<live-pusher>")]),t._v("发布流，这里使用的参数 "),a("code",[t._v('min-bitrate="200"')]),t._v(" 最小码率 "),a("code",[t._v('max-bitrate="400"')]),t._v(" 最大码率 "),a("code",[t._v('mode="RTC"')]),t._v(" RTC模式，加入房间之后我们需要调用 "),a("code",[t._v("publish")]),t._v("返回一个 "),a("code",[t._v("rtmp")]),t._v(" 推流地址")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pusher\n  autopush\n  min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"200"')]),t._v("\n  max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bitrate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400"')]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RTC"')]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{publishPath}}"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("pusher"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("先使用 "),a("code",[t._v("wx.createLivePusherContext")]),t._v(" 创建 "),a("code",[t._v("LivePusherContext")]),t._v("，再使用 setData 设置好 publishPath 之后发布")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    publishPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// joinRoom 之后调用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 LivePusherContext")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pushContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLivePusherContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" publishPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      pushContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'推流成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'推流开始失败'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("第二步："),a("code",[t._v("<live-player>")]),t._v("播放（数据包实时下载）示例代码：")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("<live-player>")]),t._v("订阅流，加入房间之后我们可以调用 "),a("code",[t._v("subscribe")]),t._v(" 返回一个 "),a("code",[t._v("rtmp")]),t._v(" 拉流地址。 下面我们使用了 "),a("code",[t._v("wx:for")]),t._v(" 遍历 "),a("code",[t._v("data.subscribeList")]),t._v(" 渲染一个订阅的列表")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("player\n  autoplay\n  wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item.key}}"')]),t._v("\n  wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{subscribeList}}"')]),t._v("\n  min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.2"')]),t._v("\n  max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.8"')]),t._v("\n  src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{item.url}}"')]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RTC"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("player"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-4-直播回放功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-直播回放功能"}},[t._v("#")]),t._v(" 3.4 直播回放功能")]),t._v(" "),a("blockquote",[a("p",[t._v("参考 "),a("a",{attrs:{href:"https://cloud.tencent.com/document/product/454/8681#1.-.E7.9B.B4.E6.92.AD.E5.BD.95.E5.88.B6.E7.9A.84.E5.8E.9F.E7.90.86.E6.98.AF.E4.BB.80.E4.B9.88.EF.BC.9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云"),a("OutboundLink")],1),t._v("接入实现，一般是后台来实现")])]),t._v(" "),a("h2",{attrs:{id:"四、即时通信-im"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、即时通信-im"}},[t._v("#")]),t._v(" 四、即时通信 IM")]),t._v(" "),a("blockquote",[a("p",[t._v("在直播中加入Im功能，参考"),a("a",{attrs:{href:"https://cloud.tencent.com/document/product/269",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云IM"),a("OutboundLink")],1),t._v("接入")])]),t._v(" "),a("ul",[a("li",[t._v("https://github.com/tencentyun/TIMSDK/tree/master/WXMini")]),t._v(" "),a("li",[t._v("https://cloud.tencent.com/document/product/269/37448")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://imsdk-1252463788.file.myqcloud.com/IM_DOC/Web/SDK.html#createTextMessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("IM sdk文档"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"五、完整示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、完整示例"}},[t._v("#")]),t._v(" 五、完整示例")]),t._v(" "),a("blockquote",[a("p",[t._v("实现效果")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/06/13.png",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("部分代码参考 https://github.com/poetries/weapp-live")])])])}),[],!1,null,null,null);s.default=r.exports}}]);