(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{569:function(v,_,e){"use strict";e.r(_);var a=e(1),t=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"java集合常见面试题总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java集合常见面试题总结"}},[v._v("#")]),v._v(" Java集合常见面试题总结")]),v._v(" "),_("h3",{attrs:{id:"集合概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合概述"}},[v._v("#")]),v._v(" 集合概述")]),v._v(" "),_("h4",{attrs:{id:"java-集合概览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#java-集合概览"}},[v._v("#")]),v._v(" Java 集合概览")]),v._v(" "),_("p",[v._v("Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 "),_("code",[v._v("Collection")]),v._v(" "),_("code",[v._v("Map")]),v._v(" "),_("code",[v._v("Collection")]),v._v(" "),_("code",[v._v("List")]),v._v(" "),_("code",[v._v("Set")]),v._v(" "),_("code",[v._v("Queue")])]),v._v(" "),_("h4",{attrs:{id:"说说-list-set-queue-map-四者的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说说-list-set-queue-map-四者的区别"}},[v._v("#")]),v._v(" 说说 List, Set, Queue, Map 四者的区别？")]),v._v(" "),_("p",[_("code",[v._v("List")]),v._v("(对付顺序的好帮手): 存储的元素是有序的、可重复的。")]),v._v(" "),_("p",[_("code",[v._v("Set")]),v._v("(注重独一无二的性质): 存储的元素是无序的、不可重复的。")]),v._v(" "),_("p",[_("code",[v._v("Queue")]),v._v("(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。")]),v._v(" "),_("p",[_("code",[v._v("Map")]),v._v('(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，"x" 代表 key，"y" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。')]),v._v(" "),_("h4",{attrs:{id:"集合框架底层数据结构总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集合框架底层数据结构总结"}},[v._v("#")]),v._v(" 集合框架底层数据结构总结")]),v._v(" "),_("p",[v._v("先来看一下 "),_("code",[v._v("Collection")]),v._v(" 接口下面的集合。")]),v._v(" "),_("p",[_("strong",[v._v("List")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ArrayList")]),v._v("： "),_("code",[v._v("Object[]")]),v._v(" 数组")]),v._v(" "),_("li",[_("code",[v._v("Vector")]),v._v("："),_("code",[v._v("Object[]")]),v._v(" 数组")]),v._v(" "),_("li",[_("code",[v._v("LinkedList")]),v._v("： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)")])]),v._v(" "),_("p",[_("strong",[v._v("Set")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("HashSet")]),v._v("(无序，唯一): 基于 "),_("code",[v._v("HashMap")]),v._v(" 实现的，底层采用 "),_("code",[v._v("HashMap")]),v._v(" 来保存元素")]),v._v(" "),_("li",[_("code",[v._v("LinkedHashSet")]),v._v(": "),_("code",[v._v("LinkedHashSet")]),v._v(" 是 "),_("code",[v._v("HashSet")]),v._v(" 的子类，并且其内部是通过 "),_("code",[v._v("LinkedHashMap")]),v._v(" 来实现的。有点类似于我们之前说的 "),_("code",[v._v("LinkedHashMap")]),v._v(" 其内部是基于 "),_("code",[v._v("HashMap")]),v._v(" 实现一样，不过还是有一点点区别的")]),v._v(" "),_("li",[_("code",[v._v("TreeSet")]),v._v("(有序，唯一): 红黑树(自平衡的排序二叉树)")])]),v._v(" "),_("p",[_("strong",[v._v("Queue")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("PriorityQueue")]),v._v(": "),_("code",[v._v("Object[]")]),v._v(" 数组来实现二叉堆")]),v._v(" "),_("li",[_("code",[v._v("ArrayQueue")]),v._v(": "),_("code",[v._v("Object[]")]),v._v(" 数组 + 双指针")])]),v._v(" "),_("p",[v._v("再来看看 "),_("code",[v._v("Map")]),v._v(" 接口下面的集合。")]),v._v(" "),_("p",[_("strong",[v._v("Map")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("HashMap")]),v._v("： JDK1.8 之前 "),_("code",[v._v("HashMap")]),v._v(" 由数组+链表组成的，数组是 "),_("code",[v._v("HashMap")]),v._v(" 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间")]),v._v(" "),_("li",[_("code",[v._v("LinkedHashMap")]),v._v("： "),_("code",[v._v("LinkedHashMap")]),v._v(" 继承自 "),_("code",[v._v("HashMap")]),v._v("，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，"),_("code",[v._v("LinkedHashMap")]),v._v(" 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。")]),v._v(" "),_("li",[_("code",[v._v("Hashtable")]),v._v("： 数组+链表组成的，数组是 "),_("code",[v._v("Hashtable")]),v._v(" 的主体，链表则是主要为了解决哈希冲突而存在的")]),v._v(" "),_("li",[_("code",[v._v("TreeMap")]),v._v("： 红黑树（自平衡的排序二叉树）")])]),v._v(" "),_("h4",{attrs:{id:"如何选用集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何选用集合"}},[v._v("#")]),v._v(" 如何选用集合?")]),v._v(" "),_("p",[v._v("主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 "),_("code",[v._v("Map")]),v._v(" 接口下的集合，需要排序时选择 "),_("code",[v._v("TreeMap")]),v._v(",不需要排序时就选择 "),_("code",[v._v("HashMap")]),v._v(",需要保证线程安全就选用 "),_("code",[v._v("ConcurrentHashMap")]),v._v("。")]),v._v(" "),_("p",[v._v("当我们只需要存放元素值时，就选择实现"),_("code",[v._v("Collection")]),v._v(" 接口的集合，需要保证元素唯一时选择实现 "),_("code",[v._v("Set")]),v._v(" 接口的集合比如 "),_("code",[v._v("TreeSet")]),v._v(" 或 "),_("code",[v._v("HashSet")]),v._v("，不需要就选择实现 "),_("code",[v._v("List")]),v._v(" 接口的比如 "),_("code",[v._v("ArrayList")]),v._v(" 或 "),_("code",[v._v("LinkedList")]),v._v("，然后再根据实现这些接口的集合的特点来选用。")]),v._v(" "),_("h4",{attrs:{id:"为什么要使用集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用集合"}},[v._v("#")]),v._v(" 为什么要使用集合？")]),v._v(" "),_("p",[v._v("当我们需要保存一组类型相同的数据的时候，我们应该是用一个容器来保存，这个容器就是数组，但是，使用数组存储对象具有一定的弊端， 因为我们在实际开发中，存储的数据的类型是多种多样的，于是，就出现了“集合”，集合同样也是用来存储多个数据的。")]),v._v(" "),_("p",[v._v("数组的缺点是一旦声明之后，长度就不可变了；同时，声明数组时的数据类型也决定了该数组存储的数据的类型；而且，数组存储的数据是有序的、可重复的，特点单一。 但是集合提高了数据存储的灵活性，Java 集合不仅可以用来存储不同类型不同数量的对象，还可以保存具有映射关系的数据。")]),v._v(" "),_("h3",{attrs:{id:"collection-子接口之-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#collection-子接口之-list"}},[v._v("#")]),v._v(" Collection 子接口之 List")]),v._v(" "),_("h4",{attrs:{id:"arraylist-和-vector-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-和-vector-的区别"}},[v._v("#")]),v._v(" ArrayList 和 Vector 的区别?")]),v._v(" "),_("p",[_("code",[v._v("ArrayList")]),v._v(" 是 "),_("code",[v._v("List")]),v._v(" 的主要实现类，底层使用 "),_("code",[v._v("Object[]")]),v._v("存储，适用于频繁的查找工作，线程不安全 ；")]),v._v(" "),_("p",[_("code",[v._v("Vector")]),v._v(" 是 "),_("code",[v._v("List")]),v._v(" 的古老实现类，底层使用"),_("code",[v._v("Object[]")]),v._v(" 存储，线程安全的。")]),v._v(" "),_("h4",{attrs:{id:"arraylist-与-linkedlist-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arraylist-与-linkedlist-区别"}},[v._v("#")]),v._v(" ArrayList 与 LinkedList 区别?")]),v._v(" "),_("p",[_("strong",[v._v("是否保证线程安全：")]),v._v(" "),_("code",[v._v("ArrayList")]),v._v(" 和 "),_("code",[v._v("LinkedList")]),v._v(" 都是不同步的，也就是不保证线程安全；")]),v._v(" "),_("p",[_("strong",[v._v("底层数据结构：")]),v._v(" "),_("code",[v._v("ArrayList")]),v._v(" 底层使用的是 "),_("strong",[_("code",[v._v("Object")]),v._v(" 数组")]),v._v("；"),_("code",[v._v("LinkedList")]),v._v(" 底层使用的是 "),_("strong",[v._v("双向链表")]),v._v(" 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）")]),v._v(" "),_("p",[_("strong",[v._v("插入和删除是否受元素位置的影响：")])]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ArrayList")]),v._v(" 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行"),_("code",[v._v("add(E e)")]),v._v("方法的时候， "),_("code",[v._v("ArrayList")]),v._v(" 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（"),_("code",[v._v("add(int index, E element)")]),v._v("）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。")]),v._v(" "),_("li",[_("code",[v._v("LinkedList")]),v._v(" 采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（"),_("code",[v._v("add(E e)")]),v._v("、"),_("code",[v._v("addFirst(E e)")]),v._v("、"),_("code",[v._v("addLast(E e)")]),v._v("、"),_("code",[v._v("removeFirst()")]),v._v(" 、 "),_("code",[v._v("removeLast()")]),v._v("），时间复杂度为 O(1)，如果是要在指定位置 "),_("code",[v._v("i")]),v._v(" 插入和删除元素的话（"),_("code",[v._v("add(int index, E element)")]),v._v("，"),_("code",[v._v("remove(Object o)")]),v._v("）， 时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。")])]),v._v(" "),_("p",[_("strong",[v._v("是否支持快速随机访问：")]),v._v(" "),_("code",[v._v("LinkedList")]),v._v(" 不支持高效的随机元素访问，而 "),_("code",[v._v("ArrayList")]),v._v(" 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于"),_("code",[v._v("get(int index)")]),v._v("方法)。")]),v._v(" "),_("p",[_("strong",[v._v("内存空间占用：")]),v._v(" "),_("code",[v._v("ArrayList")]),v._v(" 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据)")]),v._v(" "),_("h4",{attrs:{id:"补充内容-双向链表和双向循环链表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充内容-双向链表和双向循环链表"}},[v._v("#")]),v._v(" 补充内容:双向链表和双向循环链表")]),v._v(" "),_("p",[_("strong",[v._v("双向链表：")]),v._v(" 包含两个指针，一个 prev 指向前一个节点，一个 next 指向后一个节点。")]),v._v(" "),_("p",[_("strong",[v._v("双向循环链表：")]),v._v(" 最后一个节点的 next 指向 head，而 head 的 prev 指向最后一个节点，构成一个环。")]),v._v(" "),_("h4",{attrs:{id:"补充内容-randomaccess-接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充内容-randomaccess-接口"}},[v._v("#")]),v._v(" 补充内容:RandomAccess 接口")]),v._v(" "),_("p",[v._v("查看源码我们发现实际上 "),_("code",[v._v("RandomAccess")]),v._v(" 接口中什么都没有定义。所以，在我看来 "),_("code",[v._v("RandomAccess")]),v._v(" 接口不过是一个标识罢了。标识什么？ 标识实现这个接口的类具有随机访问功能。")]),v._v(" "),_("p",[v._v("在 "),_("code",[v._v("binarySearch（)")]),v._v(" 方法中，它要判断传入的 list 是否 "),_("code",[v._v("RandomAccess")]),v._v(" 的实例，如果是，调用"),_("code",[v._v("indexedBinarySearch()")]),v._v("方法，如果不是，那么调用"),_("code",[v._v("iteratorBinarySearch()")]),v._v("方法")]),v._v(" "),_("p",[_("code",[v._v("ArrayList")]),v._v(" 实现了  接口， 而  没有实现。为什么呢？我觉得还是和底层数据结构有关！ 底层是数组，而  底层是链表。数组天然支持随机访问，时间复杂度为 O(1)，所以称为快速随机访问。链表需要遍历到特定位置才能访问特定位置的元素，时间复杂度为 O(n)，所以不支持快速随机访问。")]),v._v(" "),_("h4",{attrs:{id:"说一说-arraylist-的扩容机制吧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一说-arraylist-的扩容机制吧"}},[v._v("#")]),v._v(" 说一说 ArrayList 的扩容机制吧")]),v._v(" "),_("h3",{attrs:{id:"collection-子接口之-set"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#collection-子接口之-set"}},[v._v("#")]),v._v(" Collection 子接口之 Set")]),v._v(" "),_("h4",{attrs:{id:"comparable-和-comparator-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#comparable-和-comparator-的区别"}},[v._v("#")]),v._v(" comparable 和 Comparator 的区别")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("comparable")]),v._v(" 接口实际上是出自"),_("code",[v._v("java.lang")]),v._v("包 它有一个 "),_("code",[v._v("compareTo(Object obj)")]),v._v("方法用来排序")]),v._v(" "),_("li",[_("code",[v._v("comparator")]),v._v("接口实际上是出自 java.util 包它有一个"),_("code",[v._v("compare(Object obj1, Object obj2)")]),v._v("方法用来排序")])]),v._v(" "),_("p",[v._v("一般我们需要对一个集合使用自定义排序时，我们就要重写"),_("code",[v._v("compareTo()")]),v._v("方法或"),_("code",[v._v("compare()")]),v._v("方法，当我们需要对某一个集合实现两种排序方式，比如一个 song 对象中的歌名和歌手名分别采用一种排序方法的话，我们可以重写"),_("code",[v._v("compareTo()")]),v._v("方法和使用自制的"),_("code",[v._v("Comparator")]),v._v("方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 "),_("code",[v._v("Collections.sort()")])]),v._v(" "),_("h4",{attrs:{id:"无序性和不可重复性的含义是什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#无序性和不可重复性的含义是什么"}},[v._v("#")]),v._v(" 无序性和不可重复性的含义是什么")]),v._v(" "),_("p",[v._v("无序性不等于随机性 ，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。")]),v._v(" "),_("p",[v._v("不可重复性是指添加的元素按照 "),_("code",[v._v("equals()")]),v._v(" 判断时 ，返回 false，需要同时重写 "),_("code",[v._v("equals()")]),v._v(" 方法和 "),_("code",[v._v("hashCode()")]),v._v(" 方法。")]),v._v(" "),_("h4",{attrs:{id:"比较-hashset、linkedhashset-和-treeset-三者的异同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#比较-hashset、linkedhashset-和-treeset-三者的异同"}},[v._v("#")]),v._v(" 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同")]),v._v(" "),_("ul",[_("li",[_("p",[_("code",[v._v("HashSet")]),v._v("、"),_("code",[v._v("LinkedHashSet")]),v._v(" 和 "),_("code",[v._v("TreeSet")]),v._v(" 都是 "),_("code",[v._v("Set")]),v._v(" 接口的实现类，都能保证元素唯一，并且都不是线程安全的。")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("HashSet")]),v._v("、"),_("code",[v._v("LinkedHashSet")]),v._v(" 和 "),_("code",[v._v("TreeSet")]),v._v(" 的主要区别在于底层数据结构不同。"),_("code",[v._v("HashSet")]),v._v(" 的底层数据结构是哈希表（基于 "),_("code",[v._v("HashMap")]),v._v(" 实现）。"),_("code",[v._v("LinkedHashSet")]),v._v(" 的底层数据结构是链表和哈希表，元素的插入和取出顺序满足 FIFO。"),_("code",[v._v("TreeSet")]),v._v(" 底层数据结构是红黑树，元素是有序的，排序的方式有自然排序和定制排序。")])]),v._v(" "),_("li",[_("p",[v._v("底层数据结构不同又导致这三者的应用场景不同。"),_("code",[v._v("HashSet")]),v._v(" 用于不需要保证元素插入和取出顺序的场景，"),_("code",[v._v("LinkedHashSet")]),v._v(" 用于保证元素的插入和取出顺序满足 FIFO 的场景，"),_("code",[v._v("TreeSet")]),v._v(" 用于支持对元素自定义排序规则的场景")])])]),v._v(" "),_("h3",{attrs:{id:"collection-子接口之-queue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#collection-子接口之-queue"}},[v._v("#")]),v._v(" Collection 子接口之 Queue")]),v._v(" "),_("h4",{attrs:{id:"queue-与-deque-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#queue-与-deque-的区别"}},[v._v("#")]),v._v(" Queue 与 Deque 的区别")]),v._v(" "),_("p",[_("code",[v._v("Queue")]),v._v(" 是单端队列，只能从一端插入元素，另一端删除元素，实现上一般遵循 "),_("strong",[v._v("先进先出（FIFO）")]),v._v(" 规则。")]),v._v(" "),_("p",[_("code",[v._v("Queue")]),v._v(" 扩展了 "),_("code",[v._v("Collection")]),v._v(" 的接口，根据 "),_("strong",[v._v("因为容量问题而导致操作失败后处理方式的不同")]),v._v(" 可以分为两类方法: 一种在操作失败后会抛出异常，另一种则会返回特殊值。")]),v._v(" "),_("p",[_("code",[v._v("Deque")]),v._v(" 是双端队列，在队列的两端均可以插入或删除元素。")]),v._v(" "),_("h4",{attrs:{id:"arraydeque-与-linkedlist-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arraydeque-与-linkedlist-的区别"}},[v._v("#")]),v._v(" ArrayDeque 与 LinkedList 的区别")]),v._v(" "),_("p",[_("code",[v._v("ArrayDeque")]),v._v(" 和 "),_("code",[v._v("LinkedList")]),v._v(" 都实现了 "),_("code",[v._v("Deque")]),v._v(" 接口，两者都具有队列的功能，但两者有什么区别呢？")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("ArrayDeque")]),v._v(" 是基于可变长的数组和双指针来实现，而 "),_("code",[v._v("LinkedList")]),v._v(" 则通过链表来实现。")]),v._v(" "),_("li",[_("code",[v._v("ArrayDeque")]),v._v(" 不支持存储 "),_("code",[v._v("NULL")]),v._v(" 数据，但 "),_("code",[v._v("LinkedList")]),v._v(" 支持。")]),v._v(" "),_("li",[_("code",[v._v("ArrayDeque")]),v._v(" 是在 JDK1.6 才被引入的，而"),_("code",[v._v("LinkedList")]),v._v(" 早在 JDK1.2 时就已经存在。")]),v._v(" "),_("li",[_("code",[v._v("ArrayDeque")]),v._v(" 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 "),_("code",[v._v("LinkedList")]),v._v(" 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。")])]),v._v(" "),_("p",[v._v("从性能的角度上，选用 "),_("code",[v._v("ArrayDeque")]),v._v(" 来实现队列要比 "),_("code",[v._v("LinkedList")]),v._v(" 更好。此外，"),_("code",[v._v("ArrayDeque")]),v._v(" 也可以用于实现栈。")]),v._v(" "),_("h4",{attrs:{id:"说一说-priorityqueue"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一说-priorityqueue"}},[v._v("#")]),v._v(" 说一说 PriorityQueue")]),v._v(" "),_("p",[_("code",[v._v("PriorityQueue")]),v._v(" 是在 JDK1.5 中被引入的, 其与 "),_("code",[v._v("Queue")]),v._v(" 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。")]),v._v(" "),_("p",[v._v("这里列举其相关的一些要点：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("PriorityQueue")]),v._v(" 利用了二叉堆的数据结构来实现的，底层使用可变长的数组来存储数据")]),v._v(" "),_("li",[_("code",[v._v("PriorityQueue")]),v._v(" 通过堆元素的上浮和下沉，实现了在 O(logn) 的时间复杂度内插入元素和删除堆顶元素。")]),v._v(" "),_("li",[_("code",[v._v("PriorityQueue")]),v._v(" 是非线程安全的，且不支持存储 "),_("code",[v._v("NULL")]),v._v(" 和 "),_("code",[v._v("non-comparable")]),v._v(" 的对象。")]),v._v(" "),_("li",[_("code",[v._v("PriorityQueue")]),v._v(" 默认是小顶堆，但可以接收一个 "),_("code",[v._v("Comparator")]),v._v(" 作为构造参数，从而来自定义元素优先级的先后。")])]),v._v(" "),_("p",[_("code",[v._v("PriorityQueue")]),v._v(" 在面试中可能更多的会出现在手撕算法的时候，典型例题包括堆排序、求第K大的数、带权图的遍历等.")]),v._v(" "),_("h3",{attrs:{id:"map-接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-接口"}},[v._v("#")]),v._v(" Map 接口")]),v._v(" "),_("h4",{attrs:{id:"hashmap-和-hashtable-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-hashtable-的区别"}},[v._v("#")]),v._v(" HashMap 和 Hashtable 的区别")]),v._v(" "),_("p",[_("strong",[v._v("线程是否安全：")]),v._v(" "),_("code",[v._v("HashMap")]),v._v(" 是非线程安全的，"),_("code",[v._v("Hashtable")]),v._v(" 是线程安全的,因为 "),_("code",[v._v("Hashtable")]),v._v(" 内部的方法基本都经过"),_("code",[v._v("synchronized")]),v._v(" 修饰。（如果你要保证线程安全的话就使用 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 吧！）；")]),v._v(" "),_("p",[_("strong",[v._v("效率：")]),v._v(" 因为线程安全的问题，"),_("code",[v._v("HashMap")]),v._v(" 要比 "),_("code",[v._v("Hashtable")]),v._v(" 效率高一点。另外，"),_("code",[v._v("Hashtable")]),v._v(" 基本被淘汰，不要在代码中使用它；")]),v._v(" "),_("p",[_("strong",[v._v("对 Null key 和 Null value 的支持：")]),v._v(" "),_("code",[v._v("HashMap")]),v._v(" 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 "),_("code",[v._v("NullPointerException")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("初始容量大小和每次扩充容量大小的不同 ：")]),v._v(" ① 创建时如果不指定容量初始值，"),_("code",[v._v("Hashtable")]),v._v(" 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。"),_("code",[v._v("HashMap")]),v._v(" 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 "),_("code",[v._v("Hashtable")]),v._v(" 会直接使用你给定的大小，而 "),_("code",[v._v("HashMap")]),v._v(" 会将其扩充为 2 的幂次方大小（"),_("code",[v._v("HashMap")]),v._v(" 中的"),_("code",[v._v("tableSizeFor()")]),v._v("方法保证，下面给出了源代码）。也就是说 "),_("code",[v._v("HashMap")]),v._v(" 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。")]),v._v(" "),_("p",[_("strong",[v._v("底层数据结构：")]),v._v(" JDK1.8 以后的 "),_("code",[v._v("HashMap")]),v._v(" 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。"),_("code",[v._v("Hashtable")]),v._v(" 没有这样的机制。")]),v._v(" "),_("h4",{attrs:{id:"hashmap-和-hashset-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-hashset-区别"}},[v._v("#")]),v._v(" HashMap 和 HashSet 区别")]),v._v(" "),_("p",[_("img",{attrs:{src:"C:%5CUsers%5C92965%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1673884756938.png",alt:"1673884756938"}})]),v._v(" "),_("h4",{attrs:{id:"hashmap-和-treemap-区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-和-treemap-区别"}},[v._v("#")]),v._v(" HashMap 和 TreeMap 区别")]),v._v(" "),_("p",[_("code",[v._v("TreeMap")]),v._v(" 和"),_("code",[v._v("HashMap")]),v._v(" 都继承自"),_("code",[v._v("AbstractMap")]),v._v(" ，但是需要注意的是"),_("code",[v._v("TreeMap")]),v._v("它还实现了"),_("code",[v._v("NavigableMap")]),v._v("接口和"),_("code",[v._v("SortedMap")]),v._v(" 接口。")]),v._v(" "),_("p",[v._v("实现 "),_("code",[v._v("NavigableMap")]),v._v(" 接口让 "),_("code",[v._v("TreeMap")]),v._v(" 有了对集合内元素的搜索的能力。")]),v._v(" "),_("p",[v._v("实现"),_("code",[v._v("SortedMap")]),v._v("接口让 "),_("code",[v._v("TreeMap")]),v._v(" 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序.")]),v._v(" "),_("p",[_("strong",[v._v("综上，相比于"),_("code",[v._v("HashMap")]),v._v("来说 "),_("code",[v._v("TreeMap")]),v._v(" 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力。")])]),v._v(" "),_("h4",{attrs:{id:"hashset-如何检查重复"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashset-如何检查重复"}},[v._v("#")]),v._v(" HashSet 如何检查重复?")]),v._v(" "),_("blockquote",[_("p",[v._v("当你把对象加入"),_("code",[v._v("HashSet")]),v._v("时，"),_("code",[v._v("HashSet")]),v._v(" 会先计算对象的"),_("code",[v._v("hashcode")]),v._v("值来判断对象加入的位置，同时也会与其他加入的对象的 "),_("code",[v._v("hashcode")]),v._v(" 值作比较，如果没有相符的 "),_("code",[v._v("hashcode")]),v._v("，"),_("code",[v._v("HashSet")]),v._v(" 会假设对象没有重复出现。但是如果发现有相同 "),_("code",[v._v("hashcode")]),v._v(" 值的对象，这时会调用"),_("code",[v._v("equals()")]),v._v("方法来检查 "),_("code",[v._v("hashcode")]),v._v(" 相等的对象是否真的相同。如果两者相同，"),_("code",[v._v("HashSet")]),v._v(" 就不会让加入操作成功。")])]),v._v(" "),_("p",[v._v("在 JDK1.8 中，"),_("code",[v._v("HashSet")]),v._v("的"),_("code",[v._v("add()")]),v._v("方法只是简单的调用了"),_("code",[v._v("HashMap")]),v._v("的"),_("code",[v._v("put()")]),v._v("方法，并且判断了一下返回值以确保是否有重复元素")]),v._v(" "),_("h4",{attrs:{id:"hashmap-的底层实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的底层实现"}},[v._v("#")]),v._v(" HashMap 的底层实现")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8 之前")]),v._v(" "),_("code",[v._v("HashMap")]),v._v(" 底层是 "),_("strong",[v._v("数组和链表")]),v._v(" 结合在一起使用也就是 "),_("strong",[v._v("链表散列")]),v._v("。HashMap 通过 key 的 "),_("code",[v._v("hashcode")]),v._v(" 经过扰动函数处理过后得到 hash 值，然后通过 "),_("code",[v._v("(n - 1) & hash")]),v._v(" 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。")]),v._v(" "),_("p",[v._v("所谓扰动函数指的就是 HashMap 的 "),_("code",[v._v("hash")]),v._v(" 方法。使用 "),_("code",[v._v("hash")]),v._v(" 方法也就是扰动函数是为了防止一些实现比较差的 "),_("code",[v._v("hashCode()")]),v._v(" 方法 换句话说使用扰动函数之后可以减少碰撞。")]),v._v(" "),_("p",[v._v("相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。")]),v._v(" "),_("p",[v._v("所谓 "),_("strong",[v._v("“拉链法”")]),v._v(" 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8 之后")])]),v._v(" "),_("p",[v._v("相比于之前的版本， JDK1.8 之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。")]),v._v(" "),_("p",[_("strong",[v._v("1、 "),_("code",[v._v("putVal")]),v._v(" 方法中执行链表转红黑树的判断逻辑。")])]),v._v(" "),_("p",[v._v("链表的长度大于 8 的时候，就执行 "),_("code",[v._v("treeifyBin")]),v._v(" （转换红黑树）的逻辑。")]),v._v(" "),_("p",[_("strong",[v._v("2、"),_("code",[v._v("treeifyBin")]),v._v(" 方法中判断是否真的转换为红黑树。")])]),v._v(" "),_("p",[v._v("将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树。")]),v._v(" "),_("h4",{attrs:{id:"hashmap-的长度为什么是-2-的幂次方"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-的长度为什么是-2-的幂次方"}},[v._v("#")]),v._v(" HashMap 的长度为什么是 2 的幂次方")]),v._v(" "),_("p",[v._v("为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648 到 2147483647，前后加起来大概 40 亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个 40 亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“ "),_("code",[v._v("(n - 1) & hash")]),v._v("”。（n 代表数组长度）。这也就解释了 HashMap 的长度为什么是 2 的幂次方。")]),v._v(" "),_("p",[_("strong",[v._v("这个算法应该如何设计呢？")])]),v._v(" "),_("p",[v._v("我们首先可能会想到采用%取余的操作来实现。但是，重点来了："),_("strong",[v._v("“取余(%)操作中如果除数是 2 的幂次则等价于与其除数减一的与(&)操作（也就是说 hash%length==hash&(length-1)的前提是 length 是 2 的 n 次方；）。”")]),v._v(" 并且 "),_("strong",[v._v("采用二进制位操作 &，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是 2 的幂次方。")])]),v._v(" "),_("h4",{attrs:{id:"hashmap-多线程操作导致死循环问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap-多线程操作导致死循环问题"}},[v._v("#")]),v._v(" HashMap 多线程操作导致死循环问题")]),v._v(" "),_("p",[v._v("主要原因在于并发下的 Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap")]),v._v(" "),_("h4",{attrs:{id:"concurrenthashmap-和-hashtable-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-和-hashtable-的区别"}},[v._v("#")]),v._v(" ConcurrentHashMap 和 Hashtable 的区别")]),v._v(" "),_("p",[_("code",[v._v("ConcurrentHashMap")]),v._v(" 和 "),_("code",[v._v("Hashtable")]),v._v(" 的区别主要体现在实现线程安全的方式上不同。")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("底层数据结构：")]),v._v(" JDK1.7 的 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 底层采用 "),_("strong",[v._v("分段的数组+链表")]),v._v(" 实现，JDK1.8 采用的数据结构跟 "),_("code",[v._v("HashMap1.8")]),v._v(" 的结构一样，数组+链表/红黑二叉树。"),_("code",[v._v("Hashtable")]),v._v(" 和 JDK1.8 之前的 "),_("code",[v._v("HashMap")]),v._v(" 的底层数据结构类似都是采用 "),_("strong",[v._v("数组+链表")]),v._v(" 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；")]),v._v(" "),_("li",[v._v("实现线程安全的方式（重要）：\n"),_("ul",[_("li",[v._v("在 JDK1.7 的时候，"),_("code",[v._v("ConcurrentHashMap")]),v._v(" 对整个桶数组进行了分割分段("),_("code",[v._v("Segment")]),v._v("，分段锁)，每一把锁只锁容器其中一部分数据（下面有示意图），多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。")]),v._v(" "),_("li",[v._v("到了 JDK1.8 的时候，"),_("code",[v._v("ConcurrentHashMap")]),v._v(" 已经摒弃了 "),_("code",[v._v("Segment")]),v._v(" 的概念，而是直接用 "),_("code",[v._v("Node")]),v._v(" 数组+链表+红黑树的数据结构来实现，并发控制使用 "),_("code",[v._v("synchronized")]),v._v(" 和 CAS 来操作。（JDK1.6 以后 "),_("code",[v._v("synchronized")]),v._v(" 锁做了很多优化） 整个看起来就像是优化过且线程安全的 "),_("code",[v._v("HashMap")]),v._v("，虽然在 JDK1.8 中还能看到 "),_("code",[v._v("Segment")]),v._v(" 的数据结构，但是已经简化了属性，只是为了兼容旧版本；")]),v._v(" "),_("li",[_("strong",[_("code",[v._v("Hashtable")]),v._v("(同一把锁)")]),v._v(" :使用 "),_("code",[v._v("synchronized")]),v._v(" 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。")])])])]),v._v(" "),_("p",[_("strong",[v._v("JDK1.7 的 ConcurrentHashMap")]),v._v(" ：")]),v._v(" "),_("p",[_("code",[v._v("ConcurrentHashMap")]),v._v(" 是由 "),_("code",[v._v("Segment")]),v._v(" 数组结构和 "),_("code",[v._v("HashEntry")]),v._v(" 数组结构组成。")]),v._v(" "),_("p",[_("code",[v._v("Segment")]),v._v(" 数组中的每个元素包含一个 "),_("code",[v._v("HashEntry")]),v._v(" 数组，每个 "),_("code",[v._v("HashEntry")]),v._v(" 数组属于链表结构。")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8 的 ConcurrentHashMap")]),v._v(" ：")]),v._v(" "),_("p",[v._v("JDK1.8 的 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 不再是 "),_("strong",[v._v("Segment 数组 + HashEntry 数组 + 链表")]),v._v("，而是 "),_("strong",[v._v("Node 数组 + 链表 / 红黑树")]),v._v("。不过，Node 只能用于链表的情况，红黑树的情况需要使用 "),_("strong",[_("code",[v._v("TreeNode")])]),v._v("。当冲突链表达到一定长度时，链表会转换成红黑树。")]),v._v(" "),_("p",[_("code",[v._v("TreeNode")]),v._v("是存储红黑树节点，被"),_("code",[v._v("TreeBin")]),v._v("包装。"),_("code",[v._v("TreeBin")]),v._v("通过"),_("code",[v._v("root")]),v._v("属性维护红黑树的根结点，因为红黑树在旋转的时候，根结点可能会被它原来的子节点替换掉，在这个时间点，如果有其他线程要写这棵红黑树就会发生线程不安全问题，所以在 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 中"),_("code",[v._v("TreeBin")]),v._v("通过"),_("code",[v._v("waiter")]),v._v("属性维护当前使用这棵红黑树的线程，来防止其他线程的进入。")]),v._v(" "),_("h4",{attrs:{id:"concurrenthashmap-线程安全的具体实现方式-底层具体实现"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap-线程安全的具体实现方式-底层具体实现"}},[v._v("#")]),v._v(" ConcurrentHashMap 线程安全的具体实现方式/底层具体实现")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8 之前")])]),v._v(" "),_("p",[v._v("首先将数据分为一段一段（这个“段”就是 "),_("code",[v._v("Segment")]),v._v("）的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。")]),v._v(" "),_("p",[_("strong",[_("code",[v._v("ConcurrentHashMap")]),v._v(" 是由 "),_("code",[v._v("Segment")]),v._v(" 数组结构和 "),_("code",[v._v("HashEntry")]),v._v(" 数组结构组成")]),v._v("。")]),v._v(" "),_("p",[_("code",[v._v("Segment")]),v._v(" 继承了 "),_("code",[v._v("ReentrantLock")]),v._v(",所以 "),_("code",[v._v("Segment")]),v._v(" 是一种可重入锁，扮演锁的角色。"),_("code",[v._v("HashEntry")]),v._v(" 用于存储键值对数据。")]),v._v(" "),_("p",[v._v("一个 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 里包含一个 "),_("code",[v._v("Segment")]),v._v(" 数组，"),_("code",[v._v("Segment")]),v._v(" 的个数一旦"),_("strong",[v._v("初始化就不能改变")]),v._v("。 "),_("code",[v._v("Segment")]),v._v(" 数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。")]),v._v(" "),_("p",[_("code",[v._v("Segment")]),v._v(" 的结构和 "),_("code",[v._v("HashMap")]),v._v(" 类似，是一种数组和链表结构，一个 "),_("code",[v._v("Segment")]),v._v(" 包含一个 "),_("code",[v._v("HashEntry")]),v._v(" 数组，每个 "),_("code",[v._v("HashEntry")]),v._v(" 是一个链表结构的元素，每个 "),_("code",[v._v("Segment")]),v._v(" 守护着一个 "),_("code",[v._v("HashEntry")]),v._v(" 数组里的元素，当对 "),_("code",[v._v("HashEntry")]),v._v(" 数组的数据进行修改时，必须首先获得对应的 "),_("code",[v._v("Segment")]),v._v(" 的锁。也就是说，对同一 "),_("code",[v._v("Segment")]),v._v(" 的并发写入会被阻塞，不同 "),_("code",[v._v("Segment")]),v._v(" 的写入是可以并发执行的。")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8 之后")])]),v._v(" "),_("p",[v._v("Java 8 几乎完全重写了 "),_("code",[v._v("ConcurrentHashMap")]),v._v("，代码量从原来 Java 7 中的 1000 多行，变成了现在的 6000 多行。")]),v._v(" "),_("p",[_("code",[v._v("ConcurrentHashMap")]),v._v(" 取消了 "),_("code",[v._v("Segment")]),v._v(" 分段锁，采用 "),_("code",[v._v("Node + CAS + synchronized")]),v._v(" 来保证并发安全。数据结构跟 "),_("code",[v._v("HashMap")]),v._v(" 1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为 O(N)）转换为红黑树（寻址时间复杂度为 O(log(N))）。")]),v._v(" "),_("p",[v._v("Java 8 中，锁粒度更细，"),_("code",[v._v("synchronized")]),v._v(" 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，就不会影响其他 Node 的读写，效率大幅提升")]),v._v(" "),_("h4",{attrs:{id:"jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同"}},[v._v("#")]),v._v(" JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？")]),v._v(" "),_("p",[_("strong",[v._v("线程安全实现方式")]),v._v(" ：JDK 1.7 采用 "),_("code",[v._v("Segment")]),v._v(" 分段锁来保证安全， "),_("code",[v._v("Segment")]),v._v(" 是继承自 "),_("code",[v._v("ReentrantLock")]),v._v("。JDK1.8 放弃了 "),_("code",[v._v("Segment")]),v._v(" 分段锁的设计，采用 "),_("code",[v._v("Node + CAS + synchronized")]),v._v(" 保证线程安全，锁粒度更细，"),_("code",[v._v("synchronized")]),v._v(" 只锁定当前链表或红黑二叉树的首节点。")]),v._v(" "),_("p",[_("strong",[v._v("Hash 碰撞解决方法")]),v._v(" : JDK 1.7 采用拉链法，JDK1.8 采用拉链法结合红黑树（链表长度超过一定阈值时，将链表转换为红黑树）。")]),v._v(" "),_("p",[_("strong",[v._v("并发度")]),v._v(" ：JDK 1.7 最大并发度是 Segment 的个数，默认是 16。JDK 1.8 最大并发度是 Node 数组的大小，并发度更大")]),v._v(" "),_("h4",{attrs:{id:"arraylist源码分析-hashmap-concurrenthashmap分析-后补"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#arraylist源码分析-hashmap-concurrenthashmap分析-后补"}},[v._v("#")]),v._v(" ArrayList源码分析，HashMap，ConcurrentHashMap分析.(后补)")])])}),[],!1,null,null,null);_.default=t.exports}}]);