(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{715:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("**锁是计算机协调多个进程或线程并发访问某一资源的机制。**在数据库中，除传统的 计算资源（如CPU、RAM、I/O等）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。本章我们着重讨论MySQL锁机制的特点，常见的锁问题，以及解决MySQL锁问题的一些方法或建议.")]),s._v(" "),t("p",[t("code",[s._v("Mysql用到了很多这种锁机制，比如行锁，表锁等，读锁，写锁等，都是在做操作之前先上锁。这些锁统称为悲观锁(Pessimistic Lock)。")])]),s._v(" "),t("h3",{attrs:{id:"mysql锁概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁概述"}},[s._v("#")]),s._v(" MySQL锁概述")]),s._v(" "),t("p",[s._v("相对其他数据库而言，MySQL的锁机制比较简单，"),t("code",[s._v("其最显著的特点是不同的存储引擎支持不同的锁机制")]),s._v(".比如，"),t("code",[s._v("MyISAM和MEMORY存储引擎采用的是表级锁（table-level locking）")]),s._v("；BDB存储引擎采用的是页面锁（page-level locking），但也支持表级锁；"),t("code",[s._v("InnoDB存储引擎既支持行级锁（row-level locking），也支持表级锁，但默认情况下是采用行级锁")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("表级锁")]),s._v("：开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高，并发度最低。")]),s._v(" "),t("p",[t("strong",[s._v("行级锁")]),s._v("：开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低，并发度也最高。")]),s._v(" "),t("p",[t("strong",[s._v("页面锁")]),s._v("：开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般")]),s._v(" "),t("p",[s._v("从上述特点可见，很难笼统地说哪种锁更好，只能就具体应用的特点来说哪种锁更合适！仅从锁的角度来说："),t("code",[s._v("表级锁更适合于以查询为主，只有少量按索引条件更新数据的应用，如Web应用；而行级锁则更适合于有大量按索引条件并发更新少量不同数据，同时又有并发查询的应用，如一些在线事务处理（OLTP）系统。")])]),s._v(" "),t("h3",{attrs:{id:"myisam表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam表锁"}},[s._v("#")]),s._v(" MyISAM表锁")]),s._v(" "),t("p",[s._v("MySQL的表级锁有两种模式："),t("code",[s._v("表共享读锁（Table Read Lock）和表独占写锁（Table Write Lock）")])]),s._v(" "),t("p",[s._v("对MyISAM表的读操作，不会阻塞其他用户对同一表的读请求，但会阻塞对同一表的写请求；对 MyISAM表的写操作，则会阻塞其他用户对同一表的读和写操作；MyISAM表的读操作与写操作之间，以及写操作之间是串行的！根据如表20-2所示的 例子可以知道，当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。其他线程的读、写操作都会等待，直到锁被释放为止。")]),s._v(" "),t("p",[s._v("也就是读读可以一起，但是读写、写写都不可。")]),s._v(" "),t("h4",{attrs:{id:"myisam存储引擎的写锁阻塞读例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的写锁阻塞读例子"}},[s._v("#")]),s._v(" MyISAM存储引擎的写锁阻塞读例子：")]),s._v(" "),t("p",[s._v("当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。其他线程的读、写操作都会等待，直到锁被释放为止。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/4055efae723c4ab8b3ade668079c7968.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h4",{attrs:{id:"myisam存储引擎的读锁阻塞写例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的读锁阻塞写例子"}},[s._v("#")]),s._v(" MyISAM存储引擎的读锁阻塞写例子:")]),s._v(" "),t("p",[s._v("一个session使用LOCK TABLE命令给表film_text加了读锁，这个session可以查询锁定表中的记录，但更新或访问其他表都会提示错误；同时，另外一个session可以查询表中的记录，但更新就会出现锁等待。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/cb3698b58333455bb726f0f2a9f1648f.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"如何加表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何加表锁"}},[s._v("#")]),s._v(" 如何加表锁")]),s._v(" "),t("p",[s._v("MyISAM在执行查询语句（SELECT）前，会自动给涉及的所有表加读锁，在执行更新操作 （UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用LOCK TABLE命令给MyISAM表显式加锁。在示例中，显式加锁基本上都是为了演示而已，并非必须如此。")]),s._v(" "),t("p",[s._v("给MyISAM表显示加锁，一般是为了在一定程度模拟事务操作，实现对某一时间点多个表的一致性读取。例如， 有一个订单表orders，其中记录有各订单的总金额total，同时还有一个订单明细表order_detail，其中记录有各订单每一产品的金额小计 subtotal，假设我们需要检查这两个表的金额合计是否相符，可能就需要执行如下两条SQL：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subtotal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_detail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这时，如果不先给两个表加锁，就可能产生错误的结果，因为第一条语句执行过程中，order_detail表可能已经发生了改变。因此，正确的方法应该是：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Lock")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v(" orders "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" order_detail "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("local")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subtotal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" order_detail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Unlock")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("要特别说明以下两点内容：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("上面的例子在LOCK TABLES时加了“local”选项，其作用就是在满足MyISAM表并发插入条件的情况下，允许其他用户在表尾并发插入记录，有关MyISAM表的并发插入问题")]),s._v("，在后面还会进一步介绍。")])]),s._v(" "),t("li",[t("p",[s._v("在用LOCK TABLES给表显式加表锁时，必须同时取得所有涉及到表的锁，并且MySQL不支持锁升级。也就是说，在执行LOCK TABLES后，只能访问显式加锁的这些表，不能访问未加锁的表；同时，如果加的是读锁，那么只能执行查询操作，而不能执行更新操作。其实，在自动加锁的情况下也基本如此，"),t("code",[s._v("MyISAM总是一次获得SQL语句所需要的全部锁。这也正是MyISAM表不会出现死锁（Deadlock Free）的原因")]),s._v("。")])])]),s._v(" "),t("h3",{attrs:{id:"并发插入-concurrent-inserts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发插入-concurrent-inserts"}},[s._v("#")]),s._v(" 并发插入（Concurrent Inserts）")]),s._v(" "),t("p",[s._v("上文提到过MyISAM表的读和写是串行的，但这是就总体而言的。在一定条件下，MyISAM表也支持查询和插入操作的并发进行。")]),s._v(" "),t("p",[t("code",[s._v("MyISAM存储引擎有一个系统变量concurrent_insert")]),s._v("，专门用以控制其并发插入的行为，其值分别可以为0、1或2。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("当concurrent_insert设置为0时，不允许并发插入。")])]),s._v(" "),t("li",[t("p",[s._v("当concurrent_insert设置为1时，如果MyISAM表中没有空洞（即表的中间没有被删除的行），MyISAM允许在一个进程读表的同时，另一个进程从表尾插入记录。这也是MySQL的默认设置。")])]),s._v(" "),t("li",[t("p",[s._v("当concurrent_insert设置为2时，无论MyISAM表中有没有空洞，都允许在表尾并发插入记录。")])])]),s._v(" "),t("p",[s._v("在下面的例子中，session_1获得了一个表的READ LOCAL锁，该线程可以对表进行查询操作，但不能对表进行更新操作；其他的线程（session_2），虽然不能对表进行删除和更新操作，但却可以对该表进行并发插入操作，这里假设该表中间不存在空洞。")]),s._v(" "),t("h4",{attrs:{id:"myisam存储引擎的读写-insert-并发例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的读写-insert-并发例子"}},[s._v("#")]),s._v(" MyISAM存储引擎的读写（INSERT）并发例子：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/9feaa9722d7347219721209074d6c0e5.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("可以利用MyISAM存储引擎的并发插入特性，来解决应用中对同一表查询和插入的锁争用。例如，将concurrent_insert系统变量设为2，总是允许并发插入；同时，通过定期在系统空闲时段执行 OPTIMIZE TABLE语句来整理空间碎片，收回因删除记录而产生的中间空洞。")]),s._v(" "),t("h4",{attrs:{id:"mysiam的锁调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysiam的锁调度"}},[s._v("#")]),s._v(" MYSIAM的锁调度")]),s._v(" "),t("p",[s._v("前面讲过，"),t("code",[s._v("MyISAM存储引擎的读锁和写锁是互斥的，读写操作是串行的。那么，一个进程请求某个 MyISAM表的读锁，同时另一个进程也请求同一表的写锁，MySQL如何处理呢？答案是写进程先获得锁。不仅如此，即使读请求先到锁等待队列，写请求后到，写锁也会插到读锁请求之前！这是因为MySQL认为写请求一般比读请求要重要。这也正是MyISAM表不太适合于有大量更新操作和查询操作应用的原因，因为，大量的更新操作会造成查询操作很难获得读锁，从而可能永远阻塞")]),s._v("。这种情况有时可能会变得非常糟糕！幸好我们可以通过一些设置来调节MyISAM 的调度行为。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("通过指定启动参数low-priority-updates，使MyISAM引擎默认给予读请求以优先的权利。")])]),s._v(" "),t("li",[t("p",[s._v("通过执行命令SET LOW_PRIORITY_UPDATES=1，使该连接发出的更新请求优先级降低。")])]),s._v(" "),t("li",[t("p",[s._v("通过指定INSERT、UPDATE、DELETE语句的LOW_PRIORITY属性，降低该语句的优先级。")])])]),s._v(" "),t("p",[s._v("虽然上面3种方法都是要么更新优先，要么查询优先的方法，但还是可以用其来解决查询相对重要的应用（如用户登录系统）中，读锁等待严重的问题。")]),s._v(" "),t("p",[s._v("另外，MySQL也提供了一种折中的办法来调节读写冲突，即给系统参数max_write_lock_count设置一个合适的值，当一个表的读锁达到这个值后，MySQL就暂时将写请求的优先级降低，给读进程一定获得锁的机会。")]),s._v(" "),t("p",[s._v("上面已经讨论了写优先调度机制带来的问题和解决办法。这 里还要强调一点：一些需要长时间运行的查询操作，也会使写进程“饿死”！因此，"),t("code",[s._v("应用中应尽量避免出现长时间运行的查询操作，不要总想用一条SELECT语 句来解决问题，因为这种看似巧妙的SQL语句，往往比较复杂，执行时间较长，在可能的情况下可以通过使用中间表等措施对SQL语句做一定的“分解”，使每 一步查询都能在较短时间完成，从而减少锁冲突")]),s._v("。如果复杂查询不可避免，应尽量安排在数据库空闲时段执行，比如一些定期统计可以安排在夜间执行。")]),s._v(" "),t("h3",{attrs:{id:"innodb锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb锁"}},[s._v("#")]),s._v(" InnoDB锁")]),s._v(" "),t("p",[s._v("InnoDB与MyISAM的最大不同有两点：一是支持事务（TRANSACTION）；二是采用了行级锁。行级锁与表级锁本来就有许多不同之处，另外，事务的引入也带来了一些新问题。")]),s._v(" "),t("p",[s._v("“脏读”、“不可重复读”和“幻读”，其实都是数据库读一致性问题，必须由数据库提供一定的事务隔离机制来解决。数据库实现事务隔离的方式，基本可以分为以下两种。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("一种是在读取数据前，对其加锁，阻止其他事务对数据进行修改。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("另一种是不用加任何锁，通过一定机制生成一个数据请求时间点的一致性数据快照（Snapshot），并用这个快照来提供一定级别（语句级或事务级）的一致性读取。从用户的角度，好像是数据库可以提供同一数据的多个版本，因此，这种技术叫做数据多版本并发控制（ＭultiVersion Concurrency Control，简称MVCC或MCC），也经常称为多版本数据库")]),s._v("。")])])]),s._v(" "),t("p",[s._v("在MVCC并发控制中，读操作可以分成两类："),t("code",[s._v("快照读")]),s._v(" (snapshot read)与"),t("code",[s._v("当前读")]),s._v(" (current read)。快照读，读取的是记录的可见版本 (有可能是历史版本)，不用加锁。当前读，读取的是记录的最新版本，并且，当前读返回的记录，都会加上锁，保证其他事务不会再并发修改这条记录。")]),s._v(" "),t("p",[s._v("在一个支持MVCC并发控制的系统中，哪些读操作是快照读？哪些操作又是当前读呢？以MySQL InnoDB为例：")]),s._v(" "),t("ul",[t("li",[s._v("快照读：简单的select操作，属于快照读，不加锁。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("当前读：特殊的读操作，插入/更新/删除操作，属于当前读，需要加锁。")])]),s._v(" "),t("p",[s._v("下面语句都属于当前读，读取记录的最新版本。并且，读取之后，还需要保证其他并发事务不能修改当前记录，对读取记录加锁。其中，除了第一条语句，对读取记录加S锁 (共享锁)外，其他的操作，都加的是X锁 (排它锁)。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lock")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("share")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ? "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("数据库的事务隔离越严格，并发副作用越小，但付出的代价也就越大，因为事务隔离实质上就是使事务在一定程度上 “串行化”进行，这显然与“并发”是矛盾的。同时，不同的应用对读一致性和事务隔离程度的要求也是不同的，比如许多应用对“不可重复读”和“幻读”并不敏感，可能更关心数据并发访问的能力。")]),s._v(" "),t("p",[s._v("为了解决“隔离”与“并发”的矛盾，ISO/ANSI SQL92定义了4个事务隔离级别，每个级别的隔离程度不同，允许出现的副作用也不同，应用可以根据自己的业务逻辑要求，通过选择不同的隔离级别来平衡 “隔离”与“并发”的矛盾。下表很好地概括了这4个隔离级别的特性。")]),s._v(" "),t("h3",{attrs:{id:"获取innodb行锁争用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取innodb行锁争用情况"}},[s._v("#")]),s._v(" 获取InnoDB行锁争用情况")]),s._v(" "),t("p",[s._v("可以通过检查InnoDB_row_lock状态变量来分析系统上的行锁的争夺情况：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'innodb_row_lock%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/eb498e1afeec45458494e1edee3dab75.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("如果发现锁争用比较严重，如InnoDB_row_lock_waits和InnoDB_row_lock_time_avg的值比较高，还可以通过设置InnoDB Monitors来进一步观察发生锁冲突的表、数据行等，并分析锁争用的原因。")]),s._v(" "),t("h3",{attrs:{id:"innodb的行锁模式及加锁方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb的行锁模式及加锁方式"}},[s._v("#")]),s._v(" InnoDB的行锁模式及加锁方式")]),s._v(" "),t("p",[s._v("InnoDB实现了以下两种类型的行锁：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("共享锁（s）：又称读锁")]),s._v("。允许一个事务去读一行，阻止其他事务获得相同数据集的排他锁。若事务T对数据对象A加上S锁，则事务T可以读A但不能修改A，其他事务只能再对A加S锁，而不能加X锁，直到T释放A上的S锁。这保证了其他事务可以读A，但在T释放A上的S锁之前不能对A做任何修改。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("排他锁（Ｘ）：又称写锁")]),s._v("。允许获取排他锁的事务更新数据，阻止其他事务取得相同的数据集共享读锁和排他写锁。若事务T对数据对象A加上X锁，事务T可以读A也可以修改A，其他事务不能再对A加任何锁，直到T释放A上的锁。")])])]),s._v(" "),t("p",[s._v("对于共享锁大家可能很好理解，就是多个事务只能读数据不能改数据。")]),s._v(" "),t("p",[s._v("对于排他锁大家的理解可能就有些差别，我当初就犯了一个错误，以为排他锁锁住一行数据后，其他事务就不能读取和修改该行数据，其实不是这样的。排他锁指的是一个事务在一行数据加上排他锁后，其他事务不能再在其上加其他的锁。"),t("code",[s._v("mysql InnoDB引擎默认的修改数据语句：update,delete,insert都会自动给涉及到的数据加上排他锁，select语句默认不会加任何锁类型")]),s._v(",如果加排他锁可以使用select …for update语句，加共享锁可以使用select … lock in share mode语句。"),t("code",[s._v("所以加过排他锁的数据行在其他事务种是不能修改数据的，也不能通过for update和lock in share mode锁的方式查询数据，但可以直接通过select …from…查询数据，因为普通查询没有任何锁机制。")])]),s._v(" "),t("p",[s._v("另外，为了允许行锁和表锁共存，实现多粒度锁机制，InnoDB还有两种内部使用的"),t("code",[s._v("意向锁（Intention Locks）")]),s._v("，这两种意向锁都是表锁。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("意向共享锁（IS）：事务打算给数据行共享锁，事务在给一个数据行加共享锁前必须先取得该表的IS锁。")])]),s._v(" "),t("li",[t("p",[s._v("意向排他锁（IX）：事务打算给数据行加排他锁，事务在给一个数据行加排他锁前必须先取得该表的IX锁。")])])]),s._v(" "),t("p",[t("strong",[s._v("InnoDB行锁模式兼容性列表：")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/ea0b4162e8ff4daabfae948d9eeb6c39.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("如果一个事务请求的锁模式与当前的锁兼容，InnoDB就请求的锁授予该事务；反之，如果两者不兼容，该事务就要等待锁释放。")]),s._v(" "),t("p",[s._v("意向锁是InnoDB自动加的，不需用户干预。对于UPDATE、DELETE和INSERT语句，InnoDB会自动给涉及数据集加排他锁（X)；对于普通SELECT语句，InnoDB不会加任何锁。")]),s._v(" "),t("p",[s._v("事务可以通过以下语句显式给记录集加共享锁或排他锁：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("共享锁（S）：SELECT * FROM table_name WHERE ... LOCK IN SHARE MODE。")])]),s._v(" "),t("li",[t("p",[s._v("排他锁（X）：SELECT * FROM table_name WHERE ... FOR UPDATE。")])])]),s._v(" "),t("p",[s._v("用SELECT ... IN SHARE MODE获得共享锁，主要用在需要数据依存关系时来确认某行记录是否存在，并确保没有人对这个记录进行UPDATE或者DELETE操作。"),t("strong",[s._v("但是如果当前事务也需要对该记录进行更新操作，则很有可能造成死锁，对于锁定行记录后需要进行更新操作的应用，应该使用SELECT… FOR UPDATE方式获得排他锁。")])]),s._v(" "),t("h3",{attrs:{id:"innodb行锁实现方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb行锁实现方式"}},[s._v("#")]),s._v(" InnoDB行锁实现方式")]),s._v(" "),t("p",[s._v("InnoDB行锁是通过给索引上的索引项加锁来实现的，这一点MySQL与Oracle不同，后者是通过在数据块中对相应数据行加锁来实现的。InnoDB这种行锁实现特点意味着："),t("code",[s._v("只有通过索引条件检索数据，InnoDB才使用行级锁，否则，InnoDB将使用表锁！")]),s._v("\n在实际应用中，要特别注意InnoDB行锁的这一特性，不然的话，可能导致大量的锁冲突，从而影响并发性能。下面通过一些实际例子来加以说明。")]),s._v(" "),t("p",[s._v("（1）在不通过索引条件查询的时候，InnoDB确实使用的是表锁，而不是行锁。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/a8dcc34243e84e4899f7f29a60abdbc0.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("在上面的例子中，看起来session_1只给一行加了排他锁，但session_2在请求其他行的排他锁时，却出现了锁等待！"),t("code",[s._v("原因就是在没有索引的情况下，InnoDB只能使用表锁")]),s._v("。当我们给其增加一个索引后，InnoDB就只锁定了符合条件的行，如下例所示：\n创建tab_with_index表，id字段有普通索引：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" tab_with_index"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("engine")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("innodb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \nmysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("alter")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" tab_with_index "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/6eeedeefd8cb49cb8b0be43640b3b17b.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("（2）由于MySQL的行锁是针对索引加的锁，不是针对记录加的锁，所以虽然是访问不同行的记录，但是如果是使用相同的索引键，是会出现锁冲突的。应用设计的时候要注意这一点。")]),s._v(" "),t("p",[s._v("在下面的例子中，表tab_with_index的id字段有索引，name字段没有索引：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/69777a3c229a4b739f7eda875d7cbace.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("（3）当表有多个索引的时候，不同的事务可以使用不同的索引锁定不同的行，另外，不论是使用主键索引、唯一索引或普通索引，InnoDB都会使用行锁来对数据加锁。")]),s._v(" "),t("p",[s._v("在下面的例子中，表tab_with_index的id字段有主键索引，name字段有普通索引：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/d7d219c1a85d4e318e36357103885233.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("p",[s._v("（4）即便在条件中使用了索引字段，但是否使用索引来检索数据是由MySQL通过判断不同执行计划的代价来决 定的，如果MySQL认为全表扫描效率更高，比如对一些很小的表，它就不会使用索引，这种情况下InnoDB将使用表锁，而不是行锁。因此，在分析锁冲突 时，别忘了检查SQL的执行计划，以确认是否真正使用了索引。")]),s._v(" "),t("p",[s._v("比如，在tab_with_index表里的name字段有索引，但是name字段是varchar类型的，检索值的数据类型与索引字段不同，虽然MySQL能够进行数据类型转换，但却不会使用索引，从而导致InnoDB使用表锁。通过用explain检查两条SQL的执行计划，我们可以清楚地看到了这一点。")]),s._v(" "),t("h3",{attrs:{id:"间隙锁-next-key锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#间隙锁-next-key锁"}},[s._v("#")]),s._v(" 间隙锁（Next-Key锁）")]),s._v(" "),t("p",[s._v("当我们用范围条件而不是相等条件检索数据，并请求共享或排他锁时，InnoDB会给符合条件的已有数据记录的索引项加锁；"),t("strong",[s._v("对于键值在条件范围内但并不存在的记录，叫做“间隙（GAP)”，InnoDB也会对这个“间隙”加锁，这种锁机制就是所谓的间隙锁 （Next-Key锁）。")])]),s._v(" "),t("p",[s._v("举例来说，假如emp表中只有101条记录，其empid的值分别是 1,2,…,100,101，下面的SQL：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" empid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("是一个范围条件的检索，InnoDB不仅会对符合条件的empid值为101的记录加锁，也会对empid大于101（这些记录并不存在）的“间隙”加锁。")])]),s._v(" "),t("p",[t("code",[s._v("InnoDB使用间隙锁的目的，一方面是为了防止幻读，以满足相关隔离级别的要求")]),s._v(",对于上面的例子，要是不使用间隙锁，如果其他事务插入了empid大于100的任何记录，那么本事务如果再次执行上述语句，就会发生幻读；另外一方面，是为了满足其恢复和复制的需 要。有关其恢复和复制对锁机制的影响，以及不同隔离级别下InnoDB使用间隙锁的情况，在后续的章节中会做进一步介绍。")]),s._v(" "),t("p",[s._v("很显然，在使用范围条件检索并锁定记录时，InnoDB这种加锁机制会阻塞符合条件范围内键值的并发插入，这往往会造成严重的锁等待."),t("code",[s._v("因此，在实际应用开发中，尤其是并发插入比较多的应用，我们要尽量优化业务逻辑，尽量使用相等条件来访问更新数据，避免使用范围条件。")])]),s._v(" "),t("p",[t("code",[s._v("还要特别说明的是，InnoDB除了通过范围条件加锁时使用间隙锁外，如果使用相等条件请求给一个不存在的记录加锁，InnoDB也会使用间隙锁！")])]),s._v(" "),t("p",[s._v("下面这个例子假设emp表中只有101条记录，其empid的值分别是1,2,……,100,101。 InnoDB存储引擎的间隙锁阻塞例子")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/69719385ba2548dd825ecb20cf1347f7.png",alt:"在这里插入图片描述"}})]),s._v(" "),t("h3",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("本文重点介绍了MySQL中MyISAM表级锁和InnoDB行级锁的实现特点，并讨论了两种存储引擎经常遇到的锁问题和解决办法。")]),s._v(" "),t("p",[s._v("**对于MyISAM的表锁，主要讨论了以下几点： **")]),s._v(" "),t("p",[s._v("（1）共享读锁（S）之间是兼容的，但共享读锁（S）与排他写锁（X）之间，以及排他写锁（X）之间是互斥的，也就是说读和写是串行的。")]),s._v(" "),t("p",[s._v("（2）在一定条件下，MyISAM允许查询和插入并发执行，我们可以利用这一点来解决应用中对同一表查询和插入的锁争用问题。")]),s._v(" "),t("p",[s._v("（3）MyISAM默认的锁调度机制是写优先，这并不一定适合所有应用，用户可以通过设置LOW_PRIORITY_UPDATES参数，或在INSERT、UPDATE、DELETE语句中指定LOW_PRIORITY选项来调节读写锁的争用。")]),s._v(" "),t("p",[s._v("（4）由于表锁的锁定粒度大，读写之间又是串行的，因此，如果更新操作较多，MyISAM表可能会出现严重的锁等待，可以考虑采用InnoDB表来减少锁冲突。")]),s._v(" "),t("p",[s._v("**对于InnoDB表，本文主要讨论了以下几项内容： **")]),s._v(" "),t("p",[s._v("（1）InnoDB的行锁是基于索引实现的，如果不通过索引访问数据，InnoDB会使用表锁。")]),s._v(" "),t("p",[s._v("（2）介绍了InnoDB间隙锁（Next-key)机制，以及InnoDB使用间隙锁的原因。")]),s._v(" "),t("p",[s._v("在不同的隔离级别下，InnoDB的锁机制和一致性读策略不同。")]),s._v(" "),t("p",[s._v("在了解InnoDB锁特性后，用户可以通过设计和SQL调整等措施减少锁冲突和死锁，包括：")]),s._v(" "),t("p",[s._v("• 尽量使用较低的隔离级别； 精心设计索引，并尽量使用索引访问数据，使加锁更精确，从而减少锁冲突的机会；")]),s._v(" "),t("p",[s._v("• 选择合理的事务大小，小事务发生锁冲突的几率也更小；")]),s._v(" "),t("p",[s._v("• 给记录集显式加锁时，最好一次性请求足够级别的锁。比如要修改数据的话，最好直接申请排他锁，而不是先申请共享锁，修改时再请求排他锁，这样容易产生死锁；")]),s._v(" "),t("p",[s._v("• 不同的程序访问一组表时，应尽量约定以相同的顺序访问各表，对一个表而言，尽可能以固定的顺序存取表中的行。这样可以大大减少死锁的机会；")]),s._v(" "),t("p",[s._v("• 尽量用相等条件访问数据，这样可以避免间隙锁对并发插入的影响； 不要申请超过实际需要的锁级别；除非必须，查询时不要显示加锁；\n对于一些特定的事务，可以使用表锁来提高处理速度或减少死锁的可能。")])])}),[],!1,null,null,null);t.default=n.exports}}]);