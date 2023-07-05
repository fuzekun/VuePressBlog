(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{725:function(t,s,e){"use strict";e.r(s);var a=e(1),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[t._v("#")]),t._v(" 隔离级别")]),t._v(" "),s("p",[t._v("• 读未提交：脏读：客户B获取的数据是客户A并没有提交的数据")]),t._v(" "),s("p",[t._v("• 读已提交：比如A事务在查询账号之前，查到的是100，但是B事务在A事务查询之后对数据进行了修改，导致值变为200，此时A事务继续进行查询得到的值变为200，而A在第一次拿到100的值进行了一系列的操作，会导致一些问题，与之前查到的值不一致，就是不可重复读问题。")]),t._v(" "),s("p",[t._v("• 可重复读：只有A在提交后，才能看到事务B修改后的值，否则，A查询的值始终是最开始的值。可以解决脏读和不可重复读，但是没法解决幻读。")]),t._v(" "),s("p",[t._v("• 串行化\n脏读、幻读、不可重复读")]),t._v(" "),s("p",[t._v("---查看数据库的默认隔离级别")]),t._v(" "),s("p",[s("code",[t._v("select @@tx_isolation; （可重复读）")])]),t._v(" "),s("p",[t._v("---设置数据库的隔离级别")]),t._v(" "),s("p",[s("code",[t._v("set tx_isolation='read-uncommitted';")])]),t._v(" "),s("h3",{attrs:{id:"innodb的锁机制原理解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb的锁机制原理解析"}},[t._v("#")]),t._v(" InnoDB的锁机制原理解析")]),t._v(" "),s("p",[t._v("• 共享锁")]),t._v(" "),s("p",[t._v("○ S锁、读锁：多个事务对于同一数据可以同时读，但是不能修改\n○ select * from accoun where id = 1 lock in share mode;   //获取共享锁查询\n○ 比如事务A在查询时给数据加上了共享锁，其他事务就无法对该数据进行修改")]),t._v(" "),s("p",[t._v("• 排他锁")]),t._v(" "),s("p",[t._v("○ X锁、写锁：不能与其他事务共用\n○ update account set money = 666 where id = 1 加上了排他锁")]),t._v(" "),s("p",[t._v("• 意向共享锁")]),t._v(" "),s("p",[t._v("• 意向排他锁")]),t._v(" "),s("p",[t._v("• 自增锁")]),t._v(" "),s("p",[t._v("• 临键锁")]),t._v(" "),s("p",[t._v("• 间隙锁")]),t._v(" "),s("p",[t._v("• 记录锁")]),t._v(" "),s("h3",{attrs:{id:"mysql怎么锁住一行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql怎么锁住一行"}},[t._v("#")]),t._v(" MySQL怎么锁住一行？")]),t._v(" "),s("p",[t._v("在SQL语句后面加上for update")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" test_innodb_lock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);