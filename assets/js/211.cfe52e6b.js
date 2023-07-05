(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{672:function(_,v,t){"use strict";t.r(v);var p=t(1),s=Object(p.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h3",{attrs:{id:"数据链路层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[_._v("#")]),_._v(" 数据链路层")]),_._v(" "),v("p",[_._v("1、数据发送模型-数据链路层的简单模型")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/711a432dfcd04214af0dffd5d4292b5e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_10,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/d39c9fc0213f42f786e4c9b42eea99e8.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("2、数据链路层的信道类型")]),_._v(" "),v("p",[_._v("2.1、数据链路层信道类型")]),_._v(" "),v("p",[_._v("数据链路层使用的信道主要有以下两种类型：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[_._v("* 点对点信道。这种信道使用一对一的点对点通信方式。\n\n* 广播信道。这种信道使用一对多的广播通信方式，因此过程比较复杂。广播信道上连接的主机很多，因此必须使用专用的共享信道协议来协调这些主机的数据发送。\n")])])]),v("p",[_._v("2.2 链路和数据链路")]),_._v(" "),v("p",[_._v("链路（"),v("code",[_._v("link")]),_._v("）是一条点到点的物理线路段，中间没有任何其他的交换节点。")]),_._v(" "),v("ul",[v("li",[_._v("一条链路只是一条通路的一个组成部分。")])]),_._v(" "),v("p",[_._v("数据链路（"),v("code",[_._v("data link")]),_._v("）除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上。就构成了数据链路。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("现在最常用的方法是使用适配器（即网卡）来实现这些协议的硬件和软件。")])]),_._v(" "),v("li",[v("p",[_._v("一般的适配器都包括了数据链路层和物理层这两层的功能。")])])]),_._v(" "),v("p",[_._v("2.3 帧")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/dfc50705ac9c4045a92a1cf059901ce1.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("数据链路层将网络层传入的数据报加上一个头和尾和一个校验值就形成了一个数据帧了。")]),_._v(" "),v("p",[_._v("帧： 帧头  帧尾  物理层地址  校验值")]),_._v(" "),v("p",[_._v("3、数据链路层的三个基本问题")]),_._v(" "),v("p",[_._v("3.1 封装成帧")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("封装成帧(framing)就是在一段数据的前后分别添加首部和尾部，然后就构成了一个帧。确定帧的界限。")])]),_._v(" "),v("li",[v("p",[_._v("首部和尾部的一个重要作用就是进行帧定界。")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/f309c102f86b481bb4b5c252e107e09d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_11,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("举例：用控制字符进行帧定界的方法")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/7f4218485e6d4db688e71de4498ee06e.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.2 透明传输")]),_._v(" "),v("p",[_._v("若传输的数据"),v("code",[_._v("ASCLL")]),_._v("码中出现了数据帧的帧结束符，此时数据传输并未真正结束，但是接收端却会误认为已经到了数据帧的末尾。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/f206eb1cabe344ec88772b76fbe1b5af.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("发送端的数据链路层在数据中出现控制字符“SOH”或“EOT”的前面插入一个转义字符“ESC”(其十六进制编码是 1B)。"),v("code",[_._v("字节填充(byte stuffing)")]),_._v("或"),v("code",[_._v("字符填充(character stuffing)")]),_._v("——接收端的数据链路层在将数据送往网络层之前删除插入的转义字符。")]),_._v(" "),v("p",[_._v("如果转义字符也出现数据当中，那么应在转义字符前插入一个转义字符。当接收端收到连续的两个转义字符时，就删除其中前面的一个。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/b21bbd6c1b134508ab7b407453793cd2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_10,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.3 差错控制")]),_._v(" "),v("p",[_._v("传输过程中可能会产生比特差错（物理层）：1可能会变成0而0也可能变成1.")]),_._v(" "),v("p",[_._v("在一段时间内，传输错误的比特占所有比特总数的比率称为误码率BER(Bit Error Rate)")]),_._v(" "),v("p",[_._v("误码率与信噪比有很大的关系。")]),_._v(" "),v("p",[_._v("为了保证数据传输的可靠性，在计算机网络传输数据时，必须采用差错检测措施。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/fd9d0a614ccc462ba401de8d42890752.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_10,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/2ea6f866b7d94fefbf27165132d263b2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_13,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("在数据后面添加上的冗余码称为帧检验序列 "),v("code",[_._v("FCS")]),_._v(" (Frame Check Sequence)。循环冗余检验"),v("code",[_._v("CRC")]),_._v(" 和帧检验序列 FCS并不等同。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("CRC（Cyclic Redundancy Check） 是一种常用的检错方法，而 FCS 是添加在数据后面的冗余码。")])]),_._v(" "),v("li",[v("p",[_._v("FCS 可以用 CRC 这种方法得出，但 CRC 并非用来获得 FCS 的唯一方法。")])])]),_._v(" "),v("p",[_._v("检验：【接收端对于传来的数据帧（已加上帧检测序列）进行检验】")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("若得出的余数R=0，则判定这个帧没有差错，就接受。")])]),_._v(" "),v("li",[v("p",[_._v("若余数R≠0，则判定该帧出错，就丢弃。")])])]),_._v(" "),v("p",[_._v("特点：【当除数的位数并不很多时，可能会出现错误检测不出来的情况】")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("但这种检测方法并不能确定究竟是哪一个或哪几个比特出现了差错。")])]),_._v(" "),v("li",[v("p",[_._v("只要经过严格的挑选，并使用位数足够多的除数 P，那么出现检测不到的差错的概率就很小很小。")])])]),_._v(" "),v("p",[_._v("3.4 点到点的数据通道【广域网WAN：Wide Area Network】")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/04865c8459524d8ba301d367e65b3236.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("PPP")]),_._v("协议是数据链路层的协议。")]),_._v(" "),v("p",[_._v("现在全世界使用得最多的数据链路层协议是点到点协议"),v("code",[_._v("PPP")]),_._v("(Point-to-Point Protocol)\n用户使用拨号电话接入因特网时，一般都是使用"),v("code",[_._v("PPP")]),_._v("协议。")]),_._v(" "),v("p",[_._v("3.4.1 "),v("code",[_._v("PPP")]),_._v("协议的组成:")]),_._v(" "),v("p",[_._v("PPP协议有三个组成部分：")]),_._v(" "),v("p",[_._v("1）数据链路层协议可以用于异步串行或同步串行介质。")]),_._v(" "),v("p",[_._v("2）它使用"),v("code",[_._v("LCP")]),_._v("（链路控制协议）建立并维护数据链路连接。")]),_._v(" "),v("p",[_._v("3）网络控制协议（NCP）允许在点到点连接上使用多种网络层协议。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/7a7fc946f1c445208f6d1d433b06a21d.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_8,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.4.2 "),v("code",[_._v("PPP")]),_._v("的帧格式")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/b90c1974251f4ded8ce7a6d8ecd65d93.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_14,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("PPP")]),_._v("协议不使用序号和确认机制：【即不给数据进行编号，也不会对数据是否接受做出确认】")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("在数据链路层出现差错的概率不大时，使用比较简单的PPP协议较为合理。")])]),_._v(" "),v("li",[v("p",[_._v("在因特网环境下，PPP的信息字段放入的数据是IP数据报。数据链路层的可靠传输并不能够保证网络层的传输也是可靠的。")])]),_._v(" "),v("li",[v("p",[_._v("帧检验序列FCS字段可保证无差错的接受。"),v("strong",[_._v("【能做到的只是保证数据在数据链路层上传输时，在接收端舍弃错误的数据，不会纠错也不会要求发送端进行重发】")])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/2db18f15ffaf41219619d4b5190b2fc2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_16,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.5  使用广播信道的数据链路层【局域网"),v("code",[_._v("LAN")]),_._v(":Local Area Network】")]),_._v(" "),v("p",[_._v("广域网：就是点到点的连接")]),_._v(" "),v("p",[_._v("局域网：可能一个局域网中连接多台设备")]),_._v(" "),v("p",[_._v("广播信道的数据链路层就是：1）总线型；2）使用集线器连接的。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/3d40ca5045fe4087baafd7b315384a0c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_8,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.5.1 认识以太网")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/0afeafd470504091be4aefeae8bdceae.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_13,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("一般网卡识别到不是给自己的 信息就不会接受，但是黑客可以通过更改设置，实现网络抓包，将不属于自己的数据也捕获。这样导致传输不安全。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/82c59651a7054cd7b4ae946781a09864.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.5.2 载波监听多点接入/碰撞检测 以太网使用CSMA/CD协议")]),_._v(" "),v("p",[v("code",[_._v("CSMA/CD")]),_._v("表示Carrier Sense Multiple Access with Collision Detection")]),_._v(" "),v("p",[_._v("1）“"),v("strong",[_._v("多点接入")]),_._v("”：表示许多台计算机都可以连接在一根总线上。")]),_._v(" "),v("p",[_._v("2）“"),v("strong",[_._v("载波监听")]),_._v("”：是指每一个站在发送数据之前要先检测一下总线上是否有其他计算机在发送数据，如果有，则暂时不发送数据，以免发生碰撞。")]),_._v(" "),v("p",[_._v("3）“"),v("strong",[_._v("碰撞检测")]),_._v("”就是计算机边发送数据边检测信道上的信号电压大小。")]),_._v(" "),v("p",[_._v("当几个站同时在总线上发送数据时，总线上的信号电压摆动值将会增大（互相叠加）。")]),_._v(" "),v("p",[_._v("当一个站检测到的信号电压摆动值超过一定的门限值时，就认为总线上至少有两个站同时在发送数据，表明产生了碰撞。")]),_._v(" "),v("p",[_._v("所谓“碰撞”就是发生了冲突。因此“碰撞检测”也称为“冲突检测”。")]),_._v(" "),v("p",[v("strong",[_._v("检测到碰撞后")])]),_._v(" "),v("p",[_._v("在发生碰撞时，总线上传输的信号产生了严重的失真，无法从中恢复出有用的信息来。\n每一个正在发送数据的站，一旦发现总线上出现了碰撞，就要立即停止发送，免得继续浪费网络资源，然后等待一段随机时间后再次发送。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/c81b43202e6f45cb8c6f2c706275e3b7.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("CSMA/CD")]),_._v("协议的重要特性：")]),_._v(" "),v("p",[_._v("1）使用 "),v("code",[_._v("CSMA/CD")]),_._v(" 协议的以太网不能进行全双工通信而只能进行双向交替通信（半双工通信）。")]),_._v(" "),v("p",[_._v("2）每个站在发送数据之后的一小段时间内，存在着遭遇碰撞的可能性。")]),_._v(" "),v("p",[_._v("3）这种"),v("strong",[_._v("发送的不确定性")]),_._v("使整个以太网的平均通信量远小于以太网的最高数据率。")]),_._v(" "),v("p",[_._v("争用期：")]),_._v(" "),v("p",[v("strong",[_._v("最先发送数据帧的站，在发送数据帧后至多经过时间 2t （两倍的端到端往返时延）就可知道发送的数据帧是否遭受了碰撞")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("经过争用期这段时间还没有检测到碰撞，才能肯定这次发送不会发生碰撞。")])]),_._v(" "),v("p",[_._v("以太网的争用期")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("以太网的端到端往返时延 2t 称为争用期，或碰撞窗口。通常，取 51.2 ms 为争用期的长度。")])]),_._v(" "),v("li",[v("p",[_._v("对于 10 Mb/s 以太网，在争用期内可发送512 bit，即 64 字节。")])]),_._v(" "),v("li",[v("p",[_._v("以太网在发送数据时，若前 64 字节未发生冲突，则后续的数据就不会发生冲突。")])])]),_._v(" "),v("p",[v("strong",[_._v("最短有效帧长")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果发生冲突，就一定是在发送的前 64 字节之内。")])]),_._v(" "),v("li",[v("p",[_._v("由于一检测到冲突就立即中止发送，这时已经发送出去的数据一定小于 64 字节。")])]),_._v(" "),v("li",[v("p",[v("strong",[_._v("以太网规定了最短有效帧长为 64 字节，凡长度小于 64 字节的帧都是由于冲突而异常中止的无效帧")]),_._v("。")])])]),_._v(" "),v("p",[v("strong",[_._v("当帧长小于64字节时，还没有来得及检测是否碰撞，数据帧已经没有了，这时会默认数据是由于冲突而异常终止。")])]),_._v(" "),v("p",[_._v("最短有效帧长与以太网的网速有关：")]),_._v(" "),v("p",[_._v("10Mb/s：在争用期内能发512bit：64字节，所以最小帧长为64字节。")]),_._v(" "),v("p",[_._v("100Mb/s：在争用期内能发5120bit：640字节，所以最小帧长为640字节。")]),_._v(" "),v("p",[_._v("网线越长：2t就越大，此时在争用期内发送的长度就越大，所以规定网线长度不能超过100m，否则最短有效帧长就会过大。")]),_._v(" "),v("p",[_._v("3.6 以太网:")]),_._v(" "),v("p",[_._v("3.6.1 以太网的两个标准")]),_._v(" "),v("p",[_._v("DIX Ethernet V2 是世界上第一个局域网产品（以太网）的规约。")]),_._v(" "),v("p",[_._v("IEEE 的 802.3 标准。")]),_._v(" "),v("p",[_._v("DIX Ethernet V2 标准与 IEEE 的 802.3 标准只有很小的差别，因此可以将 802.3 局域网简称为“以太网”。")]),_._v(" "),v("p",[_._v("严格说来，“以太网”应当是指符合 DIX Ethernet V2 标准的局域网")]),_._v(" "),v("p",[_._v("3.6.2 以太网与数据点的两个子层")]),_._v(" "),v("p",[_._v("为了使数据链路层能更好地适应多种局域网标准，802 委员会就将局域网的数据链路层拆成两个子层：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("逻辑链路控制"),v("code",[_._v("LLC")]),_._v(" (Logical Link Control)子层")])]),_._v(" "),v("li",[v("p",[_._v("媒体接入控制"),v("code",[_._v("MAC")]),_._v(" (Medium Access Control)子层。")])])]),_._v(" "),v("p",[_._v("与接入到传输媒体有关的内容都放在 MAC子层，而 LLC 子层则与传输媒体无关，不管采用何种协议的局域网对 LLC 子层来说都是透明的 。")]),_._v(" "),v("p",[_._v("由于 TCP/IP 体系经常使用的局域网是 DIX Ethernet V2 而不是 802.3 标准中的几种局域网，因此现在 802 委员会制定的逻辑链路控制子层 LLC（即 802.2 标准）的作用已经不大了。")]),_._v(" "),v("p",[_._v("很多厂商生产的适配器上就仅装有 MAC 协议而没有 LLC 协议。")]),_._v(" "),v("p",[_._v("3.6.3 以太网提供的服务")]),_._v(" "),v("p",[_._v("1）以太网提供的服务是不可靠的交付，即尽最大努力的交付。")]),_._v(" "),v("p",[_._v("2）当接收站收到有差错的数据帧时就丢弃此帧，其他什么也不做。差错的纠正由高层来决定。")]),_._v(" "),v("p",[_._v("3）如果高层发现丢失了一些数据而进行重传，但以太网并不知道这是一个重传的帧，而是当做一个新的数据帧来发送。")]),_._v(" "),v("p",[_._v("星型拓扑:")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/c898f94b6a4f48ca85e93dfbb5a47938.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_12,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("集线器工作在物理层，只会收发数据（傻瓜式的），带宽是共享的，不安全的。")]),_._v(" "),v("p",[_._v("3.7 MAC层")]),_._v(" "),v("p",[_._v("3.7.1 MAC层的硬件地址（MAC地址）")]),_._v(" "),v("p",[_._v("在局域网中，"),v("code",[_._v("硬件地址")]),_._v("又称为"),v("code",[_._v("物理地址")]),_._v("，或"),v("code",[_._v("MAC")]),_._v(" 地址。")]),_._v(" "),v("p",[_._v("802 标准所说的“地址”严格地讲应当是每一个站的“"),v("code",[_._v("名字")]),_._v("”或"),v("code",[_._v("标识符")]),_._v("。")]),_._v(" "),v("p",[_._v("但鉴于大家都早已习惯了将这种 48 位的“名字”称为“地址”，所以本书也采用这种习惯用法，尽管这种说法并不太严格。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("IEEE 的注册管理机构 RA 负责向厂家分配地址字段的前三个字节(即高位 24 位)。")])]),_._v(" "),v("li",[v("p",[_._v("地址字段中的后三个字节(即低位 24 位)由厂家自行指派，称为"),v("code",[_._v("扩展标识符")]),_._v("，必须保证生产出的适配器没有重复地址。")])]),_._v(" "),v("li",[v("p",[_._v("一个地址块可以生成2的24次方个不同的地址。这种 48 位地址称为 MAC-48，它的通用名称是EUI-48。")])]),_._v(" "),v("li",[v("p",[_._v("“MAC地址”实际上就是适配器地址或适配器标识符EUI-48。")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/74a505d00706420b930d935afe4be665.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("3.7.2 适配器检查MAC地址")]),_._v(" "),v("p",[_._v("适配器从网络上每收到一个MAC帧就首先用硬件检查MAC帧中的MAC地址。")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("如果是发往本站的帧则收下，然后再进行其他的处理")])]),_._v(" "),v("li",[v("p",[_._v("否则就将此帧丢弃，不再进行其他的处理。")])])]),_._v(" "),v("p",[_._v("“发往本站的帧”包括以下三种帧：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("单播（unicast）帧（一对一）【目标地址就是该站的mac地址】")])]),_._v(" "),v("li",[v("p",[_._v("广播（broadcast）帧（一对全体）【目标MAC地址是全FFFF】")])]),_._v(" "),v("li",[v("p",[_._v("多播（multicast）帧（一对多）")])])]),_._v(" "),v("p",[_._v("3.7.3  MAC帧格式")]),_._v(" "),v("p",[_._v("常用的以太网MAC帧格式有两种标准 ：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("DIX Ethernet V2 标准")])]),_._v(" "),v("li",[v("p",[_._v("IEEE 的 802.3 标准")])])]),_._v(" "),v("p",[_._v("最常用的 MAC 帧是以太网 V2 的格式。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/3bcf59a3a1a54f8e81c5cb7cc5da4998.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_11,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("无效的MAC帧：")]),_._v(" "),v("p",[_._v("1）帧的长度不是整数个字节；")]),_._v(" "),v("p",[_._v("2）用收到的帧检验序列 FCS 查出有差错；")]),_._v(" "),v("p",[_._v("3）数据字段的长度不在 46 ~ 1500 字节之间。")]),_._v(" "),v("p",[_._v("4）有效的 MAC 帧长度为 64 ~ 1518 字节之间。")]),_._v(" "),v("p",[_._v("5）对于检查出的无效 MAC 帧就简单地丢弃。以太网不负责重传丢弃的帧。")]),_._v(" "),v("p",[_._v("帧间最小间隔：")]),_._v(" "),v("p",[_._v("帧间最小间隔为 9.6ms，相当于 96 bit 的发送时间。")]),_._v(" "),v("p",[_._v("一个站在检测到总线开始空闲后，还要等待 9.6 ms 才能再次发送数据。")]),_._v(" "),v("p",[_._v("这样做是为了使刚刚收到数据帧的站的接收缓存来得及清理，做好接收下一帧的准备")]),_._v(" "),v("p",[_._v("3.8 扩展以太网")]),_._v(" "),v("p",[_._v("距离扩展 100M 光纤")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/148bb26802e945c09dcfb944829c215f.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("数量上的扩展：集线器级联 使网络中的计算机数量增加 但是变成了一个更大的冲突域。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/58205c923e15459c9fbcd0980afac01b.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_13,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("优化以太网：")]),_._v(" "),v("p",[_._v("1）网桥：")]),_._v(" "),v("p",[_._v("在数据链路层扩展局域网是使用网桥。")]),_._v(" "),v("p",[_._v("网桥工作在数据链路层，它根据 MAC 帧的目的地址对收到的帧进行转发。")]),_._v(" "),v("p",[_._v("网桥具有过滤帧的功能。当网桥收到一个帧时，并不是向所有的接口转发此帧，而是先检查此帧的目的 MAC 地址，然后再确定将该帧转发到哪一个接口")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/e3c09f3280cf4b54a1d9947327fe07ac.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_10,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[_._v("2）交换机：端口带宽独享 安全 基于MAC地址转发（MAC地址不是提前告知的，而是在数据传输过程中学习的）")]),_._v(" "),v("p",[_._v("通过学习构建mac地址表")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/2c5fe2eb9f2148f796d6a0f7646eafad.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAbGVlZGNvZGVKb2huMDE=,size_15,color_FFFFFF,t_70,g_se,x_16",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/3b71423696b94e2897e3522cc1bf50f2.png",alt:"在这里插入图片描述"}})]),_._v(" "),v("p",[v("code",[_._v("Hub")]),_._v("：集线器")]),_._v(" "),v("p",[v("code",[_._v("Switch")]),_._v("：交换机")])])}),[],!1,null,null,null);v.default=s.exports}}]);