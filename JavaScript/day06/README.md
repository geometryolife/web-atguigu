## p7 - 字符串

- `day06/01.数据类型.html`
- 数据类型：指字面量的类型
- JS 中一共有 6 种数据类型
  - String 字符串
  - Number 数值
  - Boolean 布尔值
  - Null 空值
  - Undefined 未定义
  - Object 对象
- String、Number、Boolean、Null、Undefined 属于基本数据类型，Object 属于引用数据类型
- String 字符串
  - 在 JS 中使用字符串需要使用引号引起来
  - 单引号或双引号都可以
  - 引号不能嵌套，双引号内不能放双引号，单引号内不能放单引号
  - 在字符串中我们可以使用 `\` 作为转义字符，当表示一些特殊符号时可以使用 `\` 进行转义

## p8 - Number

- `day06/02.Number.html`
- JS 中所有的数值都是 Number 类型，包括整数和浮点数（小数）
- 可以使用 `typeof` 运算符来检查一个变量的类型
  - `typeof a` => 检查变量 a 的类型
- JS 中可以表示的数字的最大值 `Number.MAX_VALUE`
- 如果使用 Number 表示的数字超过了最大值，则会返回一个 `Infinity` => 正无穷
  - `-Infinity` => 负无穷
  - `var a = Infinity; console.log(typeof(a))` => number
- `NaN` 是一个特殊的数字，表示 Not a Number
  - `var a = NaN; console.log(typeof a);` => number
  - `"NaN"` => string
- JS 中可以表示的数字的最小值 `Number.MIN_VALUE` => 不是负数，零以上的最小值
- JS 中，整数的运算基本可以保证精确
- 如果使用 JS 进行浮点数运算，可能得到一个不精确的结果
- 所以千万不要使用 JS 进行精确度要求比较高的运算

## p9 - 布尔值

- `day06/03.Boolean.html`
- Boolean 布尔值
  - 只有两个 => `true` or `false`
  - 主要用于逻辑判断

## p10 - Null 和 Undefined

- `day06/04.Null和Undefined.html`
- `Null` 类型的值值只有一个，即 `null`
  - 空置
  - null 这个值专门用来表示一个为空的对象
  - `var a = null; console.log(typeof a);` => object
- `Undefined` 类型的值只有一个，即 `undefined`
  - 未定义
  - 当声明一个变量，但是并不给变量赋值时，它的值就是 `undefined`
  - `var b;` 等价于 `var b = undefined;`
  - 使用 typeof 检查一个 `undefined` 时，也会返回 `undefined`

## p11 - 强制类型转换-String

- `day06/05.强制类型转换.html`
- 强制类型转换：将一个数据类型强制转换为其他的数据类型
- 类型转换主要指，将其他的数据类型，转换为 String、Number、Boolean（注意：转成 undefined 和 null 没意义）
- 转成 String
  - 方式一：调用被转换数据类型的 `toString()` 方法
    - 该方法不会影响到原变量，它会将转换的结果返回
    - `var a = 123;`
    - `var b = a.toString();`
    - `a = a.toString();` => 覆写
    - 注意：null 和 undefined 这两个值没有 `troString()` 方法，如果他们调用这个方法会报错
  - 方式二：调用 `String()` 函数，并将被转换的数据作为参数传递给函数
    - `a = String(a);`
    - 使用 `String()` 函数做强制类型转换时，对 Number 和 Boolean 类型转换，实际上就是调用 `toString()` 方法
    - 但是对于 `null` 和 `undefined` 就不会调用 `toString()` 方法，它会将 null 直接转换为 "null"，将 undefined 直接转换为 "undefined"

## p12 - 强制类型转换-Number

- `day06/06.转换为Number.html`
- 方式一：
  - 使用 `Number()` 函数
    - `var a = "abc"`
    - `a = Number(a);` => `NaN`
    - `var a = ""; a = Number(a);` => `0`
    - 如果是纯数字的字符串，则直接将其转换为数字
    - 如果字符串中有非数字的内容，则转换为 `NaN`
    - 如果字符串是一个空串，则转换为 `0`
    - 布尔转数字，true -> 1，false -> `0`
    - `null` 转数字 => `0`
    - `undefined` 转数字 => `NaN`
- 方式二：
  - 这种方式专门用来对付字符串
  - `parseInt()` 把一个字符串转换为一个整数
    - `a = "123a567px"; a = parseInt(a);` => `123`
    - `b = "b123a567px"; b = parseInt(a);` => `NaN`
    - 可以将一个字符串中有效的整数内容取出来，然后转换为 Number
    - 遇到小数，也只会取整数部分
    - 可以用来对小数取整
  - `parseFloat()` 把一个字符串转换为一个浮点数
    - 它可以获得有效的小数
    - `a = "123.456.789px"; a = parseFloat(a);` => `123.456`
    - `a = true; a = parseFloat(a);` => `NaN`
    - 如果对非 String 使用 `parseInt()` 或 `parseFloat()` 它会将转换为 String，然后再操作

## p13 - 其他进制的数字

- `day06/07.其他的进制的数字.html`
- 如果需要表示十六进制的数字，则需要以 `0x` 开头
  - `a = 0x10; console.log(a);` => `16`
  - `a = 0xff; console.log(a);` => `255`
  - `a = 0xCafe; console.log(a);` => `51966`
- 如果需要表示八进制的数字，则需要以 `0` 开头
  - `a = 070; console.log(a);` => `56`
- 如果需要表示二进制的数字，则需要以 `0b` 开头，但是不是所有浏览器都支持
  - `a = 0b10; console.log(a);` => `2`
- 像 `"070"` 这种字符串，有些浏览器会当成 8 进制解析，有些会当成十进制解析
  - `a = "070"; a = parseInt(a);` => `70` 或 `56`
  - 可以在 `parseInt()` 中传递一个第二个参数，来指定数字的进制
  - `a = "070"; a = parseInt(a, 10);` => `70`
  - `a = "070"; a = parseInt(a, 8);` => `56`

## p14 - 转换为 Boolean

- `day06/08.转换为Boolean.html`
- 使用 `Boolean()` 函数
- 数字 -> Boolean
  - `var a = 123;`
  - `a = Boolean(a);` => `true`
  - `a = 0;` => `false`
  - `a = Infinity;` => `true`
  - `a = NaN;` => `false`
  - 除了 `0` 和 `NaN` 其余的都是 `true`
- 字符串 -> Boolean
  - `a = "hello"` => `true`
  - `a = ""` => `false`
  - `a = null;` => `false`
  - `a = undefined;` => `false`
  -  除了空串，其余都是 `true`
- `null` 和 `undefined` 都会转换为 `false`
- 对象也会转换为 `true`

## p15 - 算术运算符

- `day06/09.运算符.html`
- 运算符也叫做操作符
  - 通过运算符可以对一个或多个值进行运算，并获取运算结果
  - 比如：`typeof` 就是运算符，可以来获得一个值的类型，它会将该值的类型以字符串的形式返回
  - number、string、boolean、undefined、object
  - `var a = 123; var result = typeof a;` => number
  - `var a = 123; var result = typeof a; console.log(typeof result);` => string
- 算术运算符：`+` `-` `*` `/` `%`
  - `result = true + 1;` => 2
  - `result = ture + false;` => 1
  - 当对非 Number 类型的值进行运算时，会将这些值转换为 Number 然后再运算
  - `result = 2 + null;` => 2
  - `result = 2 + NaN;` => NaN
  - 任何值和 `NaN` 做运算都得 `NaN`
  - `result = "123" + "456";` => `123456`
  - 两个字符串相加，则会做拼串处理，会将其拼成一个字符串并返回
  - 多行字符串时，可以借助 `+` 更好地格式化
  - 任何的值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串处理
  - `result = 123 + "1"` => "1231"
  - `result = true + "hello"` => "truehello"
  - `var c = 123; c = c + "";` => "123"
    - 可以利用这一个特点，来将一个任何的数据类型转换为 String，这是一种隐式的类型转换，由浏览器完成，实际上它也是调用 String() 函数
  - `result = 1 + 2 + "3";` => "33"
  - `result = "1" + 2 + 3;` => "123"
  - 任何数值做 `-`，运算时都会自动转换为 Number
  - `result = 100 - true;` => 99
  - `result = 100 - "1";` => 99 => 1 被转换成 Number
  - `var d = "123"; d = d - 0;` => 123
  - `result = 2 * "8";` => 16
  - `result = 2 * undefined;` => NaN
  - `result = 2 * null;` => 0
    - 我们可以利用这一个特点做隐式的类型转换，可以将一个值 `-0` `*1` `/1` 来将其转换为 Number，原理和 Number() 函数一样，使用起来更加简单

## p16 - 一元运算符

- `day06/10.一元运算符.html`
- 一元运算符只需要一个操作数
- `+`：正号不会对数字产生任何影响
- `-`：负号可以对数字进行取反
- 对于非 Number 类型的值，它会先转换为 Number，然后再运算
- `a = "18"; a = -a;` => -18
- 可以对一个其他的数据类型使用 `+`，来将其转换为 number，它的原理和 `Number()` 函数一样
- `var result = 1 + "2" + 3;` => 123
- `var result = 1 + +"2" + 3;` => 6

## p17 - 自增和自减

- `day06/17.自增和自减.html`
- 自增：`++`
  - `var a = 1; a++;` => 2
  - `var a = 1; ++a;` => 2
  - 对一个变量自增以后，原变量的值会立即自增 1
- 自减：`--`
  - 对一个变量自减以后，原变量的值会在自身的基础上减 1

## p18 - 自增练习

- `day06/12.自增自减练习.html`
