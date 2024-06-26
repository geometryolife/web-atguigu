# 尚硅谷 JavaScript 基础 & 实战

## p1 - JS 简介

- 什么是语言
  - 计算机是一个由人来控制的机器
  - 要学习的语言就是人和计算机交流的工具，人类通过编程语言来控制、操作计算机 => 指令
  - 编程语言和中文、英文本质上没有区别，只是语法比较特殊
  - 语言的发展
    - 纸带机：机器语言 => `0 & 1`
    - 汇编语言：符号语言
    - 现代语言：高级语言
- 起源
  - JS 诞生于 1995 年，它的出现主要是用于处理网页中的前端验证
  - 前端验证：指检查用户输入的内容是否符合一定的规则。
  - 比如：用户名的长度，密码的长度，邮箱的格式
  - 在客户端验证一些基本逻辑，无误后再提交到服务器，减少网络传输的消耗 => 现阶段的 JS 不局限于验证了，具有更强大的功能
  - LiveScript 是 JS 的前身
  - JScript => 1996 微软开发，IE3 浏览器引入 JavaScript 的实现 JScript => 两个版本的 JS
  - Node.js => 服务器、后端
  - Netscape 航海家，explore 探险家
  - 为了确保不同浏览器上运行的 JavaScript 标准一致，所以几个公司共同制定了 JS 的标准，命名为 ECMAScript
- 实现
  - ECMAScript 是一个标准（文档），这个标准由各个浏览器厂商去实现
    - FireFox => Spider Monkey
    - Internet Explore => JScript/Chakra
    - Safari => JavaScriptCore
    - Chrome => v8
    - Carakan => Carakan
  - JS 含义要比 ECMAScript 大一些：
  - JavaScript 包含 ECMAScript、DOM、BOM
  - DOM：文档对象，用于操作网页
  - BOM：浏览器对象，用于操作浏览器
- JS 特点
  - 解释型语言
  - 类似于 C 和 Java 的语法结构
  - 动态语言
  - 基于原型的面向对象

## p2 - JS 的 HelloWorld

- `day05/06.HelloWorld.html`
- JS 代码需要写到 `script` 标签中 => `type="text/javascript` 默认值，可写可不写
  - 浏览器弹出警告框：`alert()`
  - 在页面输出内容：`document.write()` => 可以向 `body` 中输出一个内容
  - 向控制台输出内容：`console.log()` => 仅开发者工具能看到
- 从上到下执行

## p3 - JS 编写位置

- `day05/JS编写位置.html`
- 可以将 js 代码编写到 `button` 标签的 `onclick` 属性中
- 可以将 js 代码写到超链接的 `href` 属性中，点击超链接，会执行 js 代码
- 虽然可以写在标签的属性中，但是他们属于结构与行为耦合，不方便维护，不推荐使用
- 写到 `script` 标签或引入 `js` 文件
  - `<script type="text/javascript" src="js/script.js"></script>`
  - 写到外部文件中，可以在不同的页面中同时引用，也可以利用到浏览器的缓存机制 => 推荐
  - 注意：`script` 标签一旦引入外部文件，就不能再编写代码了，即使编写了，浏览器也会忽略。
  - 如果需要，则可以再创建一个新的 `script` 标签用于编写内部代码

## p4 - 基本语法

- `day05/基本语法.html`
- 多行注释，单行注释
- `console.log()` 用来在控制台输出一个日志
- JS 严格区分大小写，但是 HTML 不区分大小写
- 每条语句以分号结尾
  - 如果不屑分毫，浏览器会自动添加，但是会消耗一些系统资源
  - 有时候，有些浏览器会加错分号，所以开发中分号必须写
- JS 中会忽略多个空格和换行 => 可以利用空格、换行对代码进行格式化

## p5 - 字面量和变量

- `day05/字面量和变量.html`
- 字面量：一些不可改变的值，字面量都是可以直接使用，但是我们一般都不会直接使用字面量
- 变量：可以用来保存字面量，而且变量的值是可以任意改变的，更加方便使用，所以开发中通常通过变量保存一个字面量，很少直接使用字面量
- 声明变量
  - `var a;`
- 为变量赋值
  - `a = 123;`
  - `a = 456;`
- 声明和赋值同时进行
  - `var b = 789;`

## p7 - 标识符

- `day05/标识符.html`
- 在 JS 中所有的可以由我们自主命名的都可以称为标识符
- 例如：变量名、函数名、属性名
- 标识符的规范：
  - 字母、数字、`_`、`$`
  - 不能以数字开头
  - 不能使用 ES 中的关键字或保留字
  - 标识符一般都采用驼峰命名法
    - 小驼峰：首字母小写，每个单词的开头字母大写，其余字母小写 => `helloWorld`
- JS 底层保存标识符时，实际上是采用 `Unicode` 编码，所以理论上，所有 utf-8 中含有的内容都可以作为标识符
