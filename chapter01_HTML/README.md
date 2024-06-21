## p1 - 课程简介

- 软件
  - 客户端：用户通过客户端来使用软件
  - 服务器：服务器负责在远程处理业务逻辑
- 服务器开发语言
  - Java
  - PHP
  - C#
  - Python
  - Node.js
  - ……
- 客户端的形式
  - 文字客户端：古老的方式，通过命令行来使用软件
  - 图形化界面：通过点击拖动等来使用软件
  - 网页：通过访问网页来使用软件。所有的网站都属于这个范畴（B/S架构）
- 网页的特点
  - 相较于传统的图形化界面，网页具有如下的优点：
    - 无需安装
    - 无需更新
    - 跨平台
  - 网页中使用的语言：
    - HTML、CSS、JavaScript

## p2 - 网页简史

- 蒂姆·伯纳斯·李 爵士，万维网的发明人
- 1991年8月6日，世界上第一个服务器和第一个网站在欧洲核子研究中心上线
- 第一个网站：https://info.cern.ch/hypertext/WWW/TheProject.html
- 浏览器和网页
  - 有了浏览器我们只需要一个网址便可以访问任何网站
  - 而浏览器中所显示的内容正是我们所说的网页
  - 网页原本的样子 -> 渲染
  - 前端工程师负责编写网页的源代码
  - 浏览器负责将网页渲染成我们想要的样子
- 浏览器问题
  - 市面上存在有很多不同的浏览器
  - 在万维网的初期，网页编写并没有标准
  - 同一份网页代码在不同浏览器中显示不同的样子
- W3C 的建立
  - 伯 1994 建立万维网联盟（W3C）
  - 为了制订网页开发标准，以使同一个网页在不同的浏览器中有相同的效果
  - 网页要遵循 W3C 规范
- 网页的结构
  - 根据 w3c 标准，一个网页主要由三部分组成：
    - 结构：HTML，用于描述页面的结构（骨架）
    - 表现：CSS，用于控制页面中元素的样式（皮肤）
    - 行为：JavaScript，用于响应用户操作（动作、交互）

## p3 - HTML 简介

- HTML
  - Hypertext markup language 超文本标记语言
  - 负责网页三要素中的结构
  - 使用标签的形式来标识网页中的不同组成部分
  - 超文本指超链接，让我们从一个网页跳转到另一个网页

- World - 富文本

## p4 - 编写你的第 一个网页

- `index.html`
- html 是根标签，所有内容都是写在它里面
- html 有两个子标签 head 和 body
  - title 是网页的标题，不是在网页内容里，显示在标题栏
  - body 编写网页显示的内容

## p5 - 安装 notepad++

……

## p6 - 自结束标签和注释

- `index2.html`
- 自结束标签
- 注释，不嵌套

## p7 - 标签中的属性

- `index3.html`

## p8 - 文档声明

- `index4.html`
- 网页的基本结构
- 迭代 => 网页的版本
  - HTML4, HTML5, XHTML2.0 ...
- HTML5 文档声明
  - <!doctype html>
  - <!Doctype HTML>
  - 不区分大小写

## p9 - 关于进制

- `index4.html`
- 二进制
  - 8bit = 1byte(字节)
  - 1024byte = 1kb(千字节)
  - 1024kb = 1mb(兆字节)
  - 1024mb = 1gb(吉字节)
  - 1024gb = 1tb(特字节)
  - 1024tp = 1pb
- 八进制（很少用）
- 十进制
- 十六进制（很常用）

- 所有数据在计算机上都以二进制形式保存

## p10 - 字符编码

- `index4.html`
- 二进制存储
- Joe => 编码 => 存储 => 解码 => Joe
- 编码
  - 将字符转换为二进制码的过程称为编码
- 解码
  - 将二进制码转换为字符的过程称为解码
- 字符集（charset）
  - 编码和解码所采用的规则称为字符集
- 乱码问题：
  - 如果编码和解码所采用的字符集不同就会出现乱码问题
- 常见的字符集：
  - ASCII
  - ISO88591
  - GB2312 - China
  - GBK - GB2312 扩展
  - UTF-8，在开发时我们使用的字符集都是UTF-8
- <meta charset="utf-8">

## p11 - 文档的使用

- `index5.html`
- 标签就是元素，元素就是标签
- !doctype => 文档声明 => 声明当前网页的版本
- html => html 的根标签（元素）
  - head 网页头部 => 浏览器、搜索引擎
    - meta => 网页元数据，描述数据的数据，比如字符集
    - title => 网页标题，搜索引擎会根据它来判断网页的主要内容，SEO
  - body => html 的子元素，网页中的所有可见内容
    - h1 => 一级标题
- zeal => 文档查看器

## p12 - VSCode 的安装

- `01.测试编辑器.html`
- 插件安装、中文、主题 ayu
- html lang="en" => "zh"

## p13 - 配置 liveServer

- `01.测试编辑器.html`
- 安装 Live Server 插件 => 实时预览

## p14 - 实体

- `02.实体.html`
- 实体（转义字符）
- 实体的语法 => `&实体的名字;`
  - `&nbsp;` => 空格
  - `&gt;` => 大于号
  - `&lt;` => 小于号
  - `&copy;` => 版权符号

## p15 - meta 标签

- `03.meta.html`
- MDN => Mozilla Developer Network
- meta => 设置元数据
  - 属性 => charset、name、content ...
    - name => 数据名称 => keyword => 网站关键字
    - content => 指定内容 => 逗号分隔
- `<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">`
  - 将页面重定向到另一个网站
- meta => 移动端设置视口大小

## p16 - 语义化标签（1）

- `04.语义化标签.html`
- 结构、表现、行为
- html 标签 => 关注语义而非样式
- 标题标签，h1 ~ h6 共六级
- Ctrl-Enter => 换行
- 重要性 => title > h1 (SEO 角度)
- 一般一个页面只有一个 h1
- 常用 => h1~h3
- 块元素（block element） => 独占一行 => h、p、hgroup 标签
  - `<hgroup>` => 标题分组（header group）
  - `<blockquote>` => 长引用 => 缩进
- 行内元素（inline element）
  - `<em>` => 语义强调、明显、斜体
  - `<strong>` => 显示强调、加粗
  - `<q>` 短引用 => 加引号
  - `<br>` => 换行

## p17 - 块和行内

- `05.语义化标签.html`
- 块元素（block element） => 布局
- 行内元素（inline element） => 包裹文字
- 块元素基本上什么都能放
- p 元素是块元素，但不能放任何块元素
- 浏览器解析网页 => 自动修正 => 不修改源码 => 在内存中纠正
  - 检查（F2）& 查看网页源代码 => Chrome
  - 检查 => 查看网页在内存中的结构

## p18 - 语义化标签（2）

- `06.语义化标签.html`
- `<header>` => 网页的头部
- `<main>` => 网页主体 => 一个网页只有一个
- `footer` => 底部
- `nav` => 导航
- `aside` 和主体相关的其他内容（侧边栏）
- `article` => 一个独立的文章
- `section` => 表示一个独立的区块，上边的标签都不能表示时使用 section
- 使用较多的元素（主要）
  - `div` => 没有语义，就用来表示一个区块，目前来讲 div 还是我们主要的布局元素
  - `span` => 行内元素，没有任何的语义，一般用于在网页中选中文字

## p19 - 列表

- `07.列表.html`
- 列表 => 有序、无序、定义 => 可互相嵌套
  - ul => 无序 => unorder list => 相对用得多
    - li => 列表项 => list-item
  - ol => 有序 => order list
  - dl => 定义 => denifined list
    - dt => 定义内容
    - dd => 解释内容（一个 dt 可以有多个 dd）
    - 可以搞下拉菜单
- vscode => f2 => 重命名文件

## p20 - 超链接简介

- `08.超链接`
- 超链接 => 跳转 => 页面、位置
- `<a>` => 行内元素 => 可嵌套除自身外的任何元素
  - 添加属性才能跳转 => `href` => 外部、内部
- vscode => alt+shift+上、下 => 上下行复制粘贴
  - `br*2<Tab>` => 两个换行

## p21 - 相对路径

- `path/09.相对路径.html`
- 当跳转一个服务器内的页面，一般用相对路径
- 相对路径以 `./` `../`，如果不加前缀默认为 `./`
  - `./` 表示当前文件所在的目录
  - `../` 表示当前文件所在目录的上一级目录

## p22 - 超链接的其他用法

- `10.超链接.html`
- target 属性 => 指定超链接打开的位置 => 可选值
  - `_self` 默认值 => 当前页面
  - `_blank` => 新的页面
- `lorem` 生成英文文本
- id 属性 => 唯一不重复
  - 每个标签可拥有一个
  - 元素的唯一标识，同一个页面不能重复出现
  - 字母开头，区分大小写
- 可以跳转到页面的指定位置，只需要将 href 属性设置为 `#目标元素的 id 属性值`
  - `<a href="#">回到顶部</a>`
  - `<a href="#bottom">去底部</a>`
    - `<a id="bottom" href="#">回到顶部</a>`
- 在开发中可以将 `#` 作为超链接的路径的占位符使用
- 可以使用 `javascript:;` 来作为 href 的属性，此时点击这个超链接什么也不会发生

## p23 - 图片标签

- `11.图片标签.html`
- img 自结束标签 => 引入图片 => 替换元素（介于块和行内元素之间）
  - src => 内部或外部
  - alt => 图片描述
  - width => 宽度（像素） => 修改一个等比例缩放
  - height => 高度（通常只指定 width 和 height 其一）
  - 一般情况在pc端，不建议修改图片的大小，需要多大的图片就裁多大但是在移动端，经常需要对图片进行缩放（大图缩小）

## p24 - 图片的格式

- `11.图片标签.html`
- 图片的格式：
  - jpeg(jpg)
    - 支持的颜色比较丰富，不支持透明效果，不支持动图
    - 一般用来显示照片
  - gif
    - 支持的颜色比较少，支持简单透明，支持动图
    - 颜色单一的图片，动图
  - png
    - 支持的颜色丰富，支持复杂透明，不支持动图
    - 颜色丰富，复杂透明图片（专为网页而生）
  - webp
    - 这种格式是谷歌新推出的专门用来表示网页中的图片的一种格式
    - 它具备其他图片格式的所有优点，而且文件还特别的小
    - 缺点：兼容性不好
  - base64
    - 将图片使用base64编码，这样可以将图片转换为字符，通过字符的形式来引入图片
    - 一般都是一些需要和网页一起加载的图片才会使用base64
    - 网上很多图片转换base64的网站
- 使用原则：
  - 效果一样，用小的
  - 效果不一样，用效果好的

## p25 - 内联框架

- `12.内联框架.html`
- `iframe`
- 内联框架 => 用于向当前页面中引入一个其他页面
  - src => 指定要引入的网页的路径
  - frameborder => 指定内联框架的边框(inline)
- 内联框架的网页不会被搜索引擎检索

## p26 - 音视频播放

- `13.音视频.html`
- 引入后，默认不让用户控制
- 使用 `source` 标签比直接在标签后使用 src 更好
- `audio` 标签 => 音频
  - `controls` => 是否允许用户控制 => 无值属性
  - `autoplay` => 自动播放 => 大部分浏览器第一次打开网页不会对音乐自动播放
  - `loop` => 循环
- `embed` 标签 => 兼容老版本浏览器
  - `type` 属性 => `audio/mp3` => 大类型，具体类型
- `video` 标签 => 视频
- `iframe` => 把其它视频网站的链接引入