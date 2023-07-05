(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{503:function(_,t,s){"use strict";s.r(t);var a=s(1),e=Object(a.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("有一个图非常好的总结微服务架构需要考虑的问题，包括：")]),_._v(" "),t("p",[_._v("1、API Gateway")]),_._v(" "),t("p",[_._v("2、服务间调用")]),_._v(" "),t("p",[_._v("3、服务发现")]),_._v(" "),t("p",[_._v("4、服务容错")]),_._v(" "),t("p",[_._v("5、服务部署")]),_._v(" "),t("p",[_._v("6、数据调用")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/17ecc9db1d1540aa867db9943dbefd98.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("h2",{attrs:{id:"六种常见的微服务架构设计模式-六种常见的微服务架构设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六种常见的微服务架构设计模式-六种常见的微服务架构设计模式"}},[_._v("#")]),_._v(" 六种常见的微服务架构设计模式：六种常见的微服务架构设计模式：")]),_._v(" "),t("h3",{attrs:{id:"_1、聚合器微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、聚合器微服务设计模式"}},[_._v("#")]),_._v(" 1、聚合器微服务设计模式")]),_._v(" "),t("p",[_._v("这是一种最常见也最简单的设计模式：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/12dff7c6b6a64ee79051d26bbbd0b0dc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_19,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("聚合器调用多个服务实现应用程序所需的功能。它可以是一个简单的Web页面，将检索到的数据进行处理展示。它也可以是一个更高层次的组合微服务，对检索到的数据增加业务逻辑后进一步发布成一个新的微服务，这符合DRY原则。另外，每个服务都有自己的缓存和数据库。如果聚合器是一个组合服务，那么它也有自己的缓存和数据库。聚合器可以沿X轴和Z轴独立扩展。")]),_._v(" "),t("h3",{attrs:{id:"_2、代理微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、代理微服务设计模式"}},[_._v("#")]),_._v(" 2、代理微服务设计模式")]),_._v(" "),t("p",[_._v("这是聚合模式的一个变种，如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/fef17ee953d8482a879d5797f415c28e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("在这种情况下，客户端并不聚合数据，但会根据业务需求的差别调用不同的微服务。代理可以仅仅委派请求，也可以进行数据转换工作。")]),_._v(" "),t("h3",{attrs:{id:"_3、链式微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、链式微服务设计模式"}},[_._v("#")]),_._v(" 3、链式微服务设计模式")]),_._v(" "),t("p",[_._v("这种模式在接收到请求后会产生一个经过合并的响应，如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/abdf3e766fd44134b22f0dedd5bb168a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("在这种情况下，服务A接收到请求后会与服务B进行通信，类似地，服务B会同服务C进行通信。所有服务都使用同步消息传递。在整个链式调用完成之前，客户端会一直阻塞。")]),_._v(" "),t("p",[_._v("因此，服务调用链不宜过长，以免客户端长时间等待。")]),_._v(" "),t("h3",{attrs:{id:"_4、分支微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、分支微服务设计模式"}},[_._v("#")]),_._v(" 4、分支微服务设计模式")]),_._v(" "),t("p",[_._v("这种模式是聚合器模式的扩展，允许同时调用两个微服务链，如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/19f192ba96ca4ac188e2f8c0b634d5c7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("h3",{attrs:{id:"_5-数据共享微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据共享微服务设计模式"}},[_._v("#")]),_._v(" 5.数据共享微服务设计模式")]),_._v(" "),t("p",[_._v("自治是微服务的设计原则之一，就是说微服务是全栈式服务。但在重构现有的“单体应用（monolithic application）”时，SQL数据库反规范化可能会导致数据重复和不一致。")]),_._v(" "),t("p",[_._v("因此，在单体应用到微服务架构的过渡阶段，可以使用这种设计模式，如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/d74e2aa3c5f7431089e3375233871c29.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),t("p",[_._v("在这种情况下，部分微服务可能会共享缓存和数据库存储。不过，这只有在两个服务之间存在强耦合关系时才可以。对于基于微服务的新建应用程序而言，这是一种反模式。")]),_._v(" "),t("h3",{attrs:{id:"_6、异步消息传递微服务设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、异步消息传递微服务设计模式"}},[_._v("#")]),_._v(" 6、异步消息传递微服务设计模式")]),_._v(" "),t("p",[_._v("虽然REST设计模式非常流行，但它是同步的，会造成阻塞。因此部分基于微服务的架构可能会选择使用消息队列代替REST请求/响应，如下图所示：")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/25f64c31e96f46ddb7ba394dac97383b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_18,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);