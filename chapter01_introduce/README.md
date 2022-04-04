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
- !doctype => 文档声明
- html => html 的根标签（元素）
  - head 网页头部 => 浏览器、搜索引擎
    - meta => 描述数据的数据
    - title => 网页标题
  - body => html 的子元素
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
- Ctrl-Enter => 换行
- 重要性 => title > h1
- 一般一个页面只有一个 h1
- 常用 => h1~h3
- 块元素（block element） => 独占一行 => h、p、hgroup 标签
  - `<hgroup>` => 标题分组
  - `<blockquote>` => 长引用 => 缩进
- 行内元素（inline element）
  - `<em>` => 语义强调、明显、斜体
  - `<strong>` => 显示强调、加粗
  - `<q>` 短引用 => 加引号
  - `<br>` => 换行

## p17 - 块和行内

- `05.语义化标签.html`
- 块元素 => 布局
- 行内元素 => 包裹文字
- p 元素不能放块元素
- 浏览器解析网页 => 自动修正 => 不修改源码 => 在内存中纠正
  - 检查（F2）& 查看网页源代码 => Chrome
  - 检查 => 查看网页在内存中的结构
