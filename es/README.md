# es学习总结

## 基础入门
### 基本概念
**node**
一个es集群中，可以有多个node。client发送请求到es时，并不知道请求发送到了哪一个node，但是接收到该请求的node称为协调节点，协调节点负责将client的搜索请求分发到其他node上，并整合其他node返回的搜索结果，将结果返回给client。

**shard**
一个index在es集群中是存储在分片上的，每一个分片上存储了一个index的一部分。
一个shard可以多有0个或多个replica，replica上有shard上的所有数据。所以replica是shard的一个备份，写入操作只能在shard上执行，读操作可以在shard和replica上执行，在硬件性能足够的情况下，增加replica的数量可以提升es的性能。
*注意：shard与它的replica不能放在同一个node上，否则当该node丢失时，shard与它的replica均无法访问*

例子：设置一个es集群，有3个node，每一个node有一个replica
`{
   "settings" : {
      "number_of_shards" : 3,
      "number_of_replicas" : 1
   }
}`

当client往一个index中添加docement时，es会通过一个公式确定该document应该放在哪一个node上：

shard = hash(routing) % number_of_primary_shards

其中routing默认为文档的_id，number_of_primary_shards为主分片的数量，这也是为什么要在创建索引的时候就要确定好分片数量。并且创建完index之后不能修改shards的数量，否则es就不知道一个document存在于哪一个shard上了。

**index**
做名词时，类似于关系型数据库中的数据库，是一个存储关系型文档的地方。  
做动词时，类似于insert语句，就是存储一个document到一个index中。  
倒排索引，关系型数据库通过增加一个 索引 比如一个 B树（B-tree）索引 到指定的列上，以便提升数据检索速度。Elasticsearch 和 Lucene 使用了一个叫做 倒排索引 的结构来达到相同的目的。  

**文档**
类似mysql中的一个数据表中的一行。
（_type类似于数据库中的数据表）

**倒排索引**
用来做快速的搜索，类似于mysql中索引的b+树。 
例子：   
我们有两个文档，每个文档content字段包含：   
1. The quick brown fox jumped over the lazy dog
2. Quick brown foxes leap over lazy dogs in summer

|Term	|  Doc_1  | Doc_2|
|-------|---------|------|
|Quick	|	      |   X|
|The	|   X     |      |     
|brown	|   X	  |   X|
|dog	|   X     |      |      
|dogs	|	      |   X|
|fox	|   X     |      |     
|foxes	|	      |   X|
|in		|   X     |      |        
|jumped	|         |   X|
|lazy	|   X	  |   X|
|leap	|	      |   X|
|over	|   X	  |   X|
|quick	|   X     |      |    
|summer	|	      |   X|
|the	|   X     |      |  


## 一些小知识点

**相关性**
es的搜索返回结果中，_score表示该结果的相关性有多大。而不是像mysql一样，返回的结果非是既否。

**查询与过滤**
当使用于 过滤情况 时，查询被设置成一个“不评分”或者“过滤”查询。即，这个查询只是简单的问一个问题：“这篇文档是否匹配？”。回答也是非常的简单，yes 或者 no ，二者必居其一。
当使用于 查询情况 时，查询就变成了一个“评分”的查询。和不评分的查询类似，也要去判断这个文档是否匹配，同时它还需要判断这个文档匹配的有 _多好_（匹配程度如何）。
*注意*
过滤查询的结果会缓存到内存中，而评分查询不仅要找出匹配的文档，还要计算相关性，并且查询结果不会缓存。

**文档的更新**
es中的文档是不可变得，一旦创建就不能被修改或者删除。我们可以API对文档进行更新或者删除，但是在es的内部，其实是将就的文档标记为删除，并重建索引。
无论执行任何操作，es返回结果中的version都是递增的。

![一个局部更新文档的例子](https://www.elastic.co/guide/cn/elasticsearch/guide/current/images/elas_0404.png)
上图是一个局部更新文档的例子：

1. 客户端向 Node 1 发送更新请求。
2. 它将请求转发到主分片所在的 Node 3 。
3. Node 3 从主分片检索文档，修改 _source 字段中的 JSON ，并且尝试重新索引主分片的文档。 如果文档已经被另一个进程修4改，它会重试步骤 3 ，超过 retry_on_conflict 次后放弃。
4. 如果 Node 3 成功地更新文档，它将新版本的文档并行转发到 Node 1 和 Node 2 上的副本分片，重新建立索引。 一旦所有副本分片都返回成功， Node 3 向协调节点也返回成功，协调节点向客户端返回成功。

**冲突处理**
当多个client都要修改文档的时，有可能会发生冲突。
关系型数据库多使用悲观并发控制，就是它假设一旦有写操作，就有可能发生冲突，所以阻塞访问资源以防止冲突。一个典型的例子是读取一行数据之前先将其锁住，确保只有放置锁的线程能够对这行数据进行修改。
而es使用乐观并发控制，就是假设冲突是不可能发生的，所以不会阻塞正在尝试的操作。 然而，如果源数据在读写当中被修改，更新将会失败。应用程序接下来将决定该如何解决冲突。 ？？
Elasticsearch 使用这个 _version 号来确保变更以正确顺序得到执行。如果旧版本的文档在新版本之后到达，它可以被简单的忽略。

**近实时与实时**
搜索是 近 实时的
文档的 CRUD (创建-读取-更新-删除) 操作是 实时 的

https://www.elastic.co/guide/cn/elasticsearch/guide/current/inside-a-shard.html

**分布式搜索的阶段**

* 查询阶段

![](https://www.elastic.co/guide/cn/elasticsearch/guide/current/images/elas_0901.png)

1. 客户端发送一个 search 请求到 Node 3 ， Node 3 会创建一个大小为 from + size 的空优先队列。
2. Node 3 将查询请求转发到索引的每个主分片或副本分片中。每个分片在本地执行查询并添加结果到大小为 from + size 的本地有序优先队列中。
3. 每个分片返回各自优先队列中所有文档的 ID 和排序值给协调节点，也就是 Node 3 ，它合并这些值到自己的优先队列中来产生一个全局排序后的结果列表。

* 取回阶段

![](https://www.elastic.co/guide/cn/elasticsearch/guide/current/images/elas_0902.png)

1. 协调节点辨别出哪些文档需要被取回并向相关的分片提交多个 GET 请求。
2. 每个分片加载并 丰富 文档，如果有需要的话，接着返回文档给协调节点。
3. 一旦所有的文档都被取回了，协调节点返回结果给客户端。

*存在的一个问题*
先查后取的过程支持用 from 和 size 参数分页，但是这是 有限制的 。 要记住需要传递信息给协调节点的每个分片必须先创建一个 from + size 长度的队列，协调节点需要根据 number_of_shards * (from + size) 排序文档，来找到被包含在 size 里的文档。
取决于你的文档的大小，分片的数量和你使用的硬件，给 10,000 到 50,000 的结果文档深分页（ 1,000 到 5,000 页）是完全可行的。但是使用足够大的 from 值，排序过程可能会变得非常沉重，使用大量的CPU、内存和带宽。因为这个原因，我们强烈建议你不要使用深分页。？？？

**游标查询**
`GET /old_index/_search?scroll=1m 
{
    "query": { "match_all": {}},
    "sort" : ["_doc"], 
    "size":  1000
}`

游标查询允许我们 先做查询初始化，然后再批量地拉取结果。 这有点儿像传统数据库中的 cursor 。
游标查询会取某个时间点的快照数据。 查询初始化之后索引上的任何变化会被它忽略。 它通过保存旧的数据文件来实现这个特性，结果就像保留初始化时的索引视图一样。

1. 把游标查询搞清楚、索引视图



