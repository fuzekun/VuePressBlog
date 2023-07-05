(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{675:function(s,t,a){"use strict";a.r(t);var r=a(1),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Docker是一个开源的软件项目,让用户程序部署在一个相对隔离的环境运行，借此在Linux操作系统上提供一层额外的抽象，以及操作系统层虚拟化的自动管理机制。需要额外指出的是，Docker并不等于容器（containers），Docker只是容器的一种，其他的种类的容器还有Kata container，Rocket container等等。")]),s._v(" "),t("h3",{attrs:{id:"基本原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[s._v("#")]),s._v(" 基本原理")]),s._v(" "),t("p",[s._v("Docker利用Linux中的核心分离机制，例如Cgroups，以及Linux的核心Namespace（名字空间）来创建独立的容器。一句话概括起来Docker就是利用Namespace做资源隔离，用Cgroup做资源限制，利用Union FS做容器文件系统的轻量级虚拟化技术。Docker容器的本质还是一个直接运行在宿主机上面的特殊进程，看到的文件系统是隔离后的，但是操作系统内核是共享宿主机OS，所以说Docker是轻量级的虚拟化技术。")]),s._v(" "),t("p",[t("code",[s._v("Namespace")])]),s._v(" "),t("p",[s._v("Linux Namespace 是Linux 提供的一种内核级别环境隔离的方法，使其中的进程好像拥有独立的操作系统环境。Linux Namespace 有 Mount Namespace，UTS Namespace, IPC Namespace, PID Namespace, Network Namespace, User Namespace, Cgroup Namespace。详情看下表：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/c12691157742429d857041c0ae23e6d4.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("上述系统调用参数CLONE_NEWNS等主要应用于以下三个系统调用：")]),s._v(" "),t("ul",[t("li",[s._v("clone 创建新进程并设置它的Namespace，类似于fork系统调用，可创建新进程并且指定子进程将要执行的函数，通过上述CLONE_NEWNS等参数使某类资源处于隔离状态。")])]),s._v(" "),t("p",[s._v("函数声明:")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<sched.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("intclone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("fn"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("child_stack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        intflags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("arg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* pid_t *ptid, struct user_desc *tls, pid_t *ctid */")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-c line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" pid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("clone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("call_function"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stack_size"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" CLONE_NEWPID "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SIGCHLD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("会让新创建的该进程执行call_function,例如/bin/bash,且该进程的PID进程编号是隔离状态，也就是新的PID编号，该进程ps将会看到它的PID是1。")]),s._v(" "),t("p",[s._v("如果多次执行上述clone就会创建多个PID Namespace，而每个Namespace里面的应用进程都认为自己是当前容器里的1号进程，它们既看不到宿主机里的真实进程空间，也看不到其他PID Namespace里面的具体情况.")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("int unshare(int flags) 使进程脱离某个Namespace，flags参数和clone的用法一致。")])]),s._v(" "),t("li",[t("p",[s._v("int setns(int fd, int nstype) 使进程进入某个已经存在的Namespace。经常用于从宿主机进入已经启动的容器Network Namespace，然后设置它的网络。")])])]),s._v(" "),t("p",[t("code",[s._v("Cgroup")])]),s._v(" "),t("p",[s._v("上面已经讲过Docker 容器运行起来是一个直接运行在宿主机上面的进程，那么如果限定每个容器最多消耗多少CPU资源呢？如果一个容器疯狂的消耗资源岂不是会影响同一宿主机上面其他的容器？所以Docker就需要一个限制容器能够使用资源上限的机制，那就是Linux Cgroup技术。Linux Cgroup 全称是Linux Control Group。它最主要的作用是限制一个进程组能够使用的资源上限，包括CPU，MEM，DISK，NET等等。")]),s._v(" "),t("p",[s._v("下面我将演示一个利用Cgroup限制进程CPU的例子：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@nginx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgroup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# ll\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clone_children\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("event_control\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("procs\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sane_behavior\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v("cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("usage\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("usage_percpu\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_period_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_quota_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_relax_thresh_sec\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rt_period_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rt_runtime_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shares\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stat\ndrwxr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("617")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(" docker\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" notify_on_release\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" release_agent\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262018")]),s._v(" tasks\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@nginx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgroup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# mkdir mytest #创建mytest目录，系统会自动添加以下文件\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@nginx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgroup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mytest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# ll\ntotal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("clone_children\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("w"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("event_control\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cgroup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("procs\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("usage\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpuacct"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("usage_percpu\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_period_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_quota_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cfs_relax_thresh_sec\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rt_period_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rt_runtime_us\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("shares\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" notify_on_release\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("root root "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1316")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" tasks\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@nginx")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sys"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("fs"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cgroup"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cpu"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mytest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" done"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("  # 运行一个死循环命令\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2459615")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br")])]),t("p",[s._v("top观察会发现该进程CPU跑到了100%，符合预期")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/4a06b1c534ff4eb887e69ad1dfc087fc.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("主要的限制参数来源自文件cpu.cfs_quota_us，默认是-1，不做限制，如果改成20000说明限定20%的CPU上限。因为总量存在于cpu.cfs_period_us，是100000，意思cpu时间总量是100000us，20000/100000=20%。然后将bash命令的PID写到tasks文件中，改完之后的CPU占用是20%，符合预期：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/5d97dc24861949dfa2e22ebe8f6b61d2.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("同理可限制MEM，DISK和NET，需要特殊指出的是MEM是硬限制，当容器的内存使用量超过了Cgroup限定值会被系统OOM。")]),s._v(" "),t("h3",{attrs:{id:"union-fs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#union-fs"}},[s._v("#")]),s._v(" Union FS")]),s._v(" "),t("p",[s._v("每个容器运行起来后都有一个独立的文件系统，例如Ubuntu镜像的容器能够看到Ubuntu的文件系统，Centos能够看到Centos的文件系统， 不是说容器是运行在宿主机上面的进程吗，为什么能够看到和宿主机不一样的文件系统呢？那就要归功于Union FS，全称是Union File System，联合文件系统。将多个不同位置的目录联合挂载到同一个目录，将相同的部分合并。Docker利用这种联合挂载能力，将容器镜像里面的多层内容呈现为统一的rootfs(根文件系统)，即root用户能够看到的根目录底下所有的目录文件。rootfs打包了整个操作系统的文件和目录，是应用运行时所需要的最完整的“依赖库”，也就是我们说的“镜像”。")]),s._v(" "),t("p",[s._v("镜像分为基础镜像只读层，和Init层，和读写层。")]),s._v(" "),t("p",[s._v("Init 层存放的是/etc/hostname,/etc/resolv.conf 等， docker commit的时候不提交。")]),s._v(" "),t("p",[s._v("读写层一开始的时候为空，用户如果修改了文件系统，比如说增删改了文件，docker commit的时候就会提交这一层信息。")]),s._v(" "),t("h3",{attrs:{id:"docker-vs-虚拟机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-vs-虚拟机"}},[s._v("#")]),s._v(" Docker VS 虚拟机")]),s._v(" "),t("p",[s._v("从上面这幅图就可以看出，虚拟机是正儿八经的存在一层硬件虚拟层，模拟出了运行一个操作系统需要的各种硬件，例如CPU，MEM，IO等设备。然后在虚拟的硬件上安装了一个新的操作系统Guest OS。所以在Windows宿主机上面可以跑Linux虚拟机。因为多了一层虚拟，所以虚拟机的性能必然会有所损耗。Docker容器是由Docker Deamon（Docker Deamon是运行在宿主机上面的一个后台进程，负责拉起和设置容器）拉起的一个个进程，通过Docker Deamon设置完Namespace和Cgroup之后，本质上就是一个运行在宿主机上面的进程。因为没有一层虚拟的Guest OS，所以Docker轻量级很多。但是有利就有弊，由于Docker 容器直接运行在宿主机上面，安全性就相对较差些，另外也没有办法在Windows上面运行Linux的容器，如果容器里面的应用对特定系统内核有要求也不能运行在不满足要求的宿主机上面。")]),s._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结:")]),s._v(" "),t("p",[s._v("Docker 容器总结起来就是利用Linux Namespace做资源隔离，Cgroup做资源上限限制，rootfs做文件系统 运行在宿主机上面的一个特殊进程。")])])}),[],!1,null,null,null);t.default=e.exports}}]);