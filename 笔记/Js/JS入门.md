## js 发展

### 浏览器发展史

第一个图形浏览器是 Mosaic, 1993 年问世,由马克.安德森和伊利诺伊大学合作完成。

1994 年，马克.安德森和 Silicon Graphics （SGI 硅图）创始人吉姆.克拉克合作创立 Mosaic Communication Corporation .

Mosaic 公司成立后，由于伊利诺伊大学拥有 Mosaic 浏览器的商标权，并且将技术转让给 Spy Glass 公司。所以 马克.安德森以及他的研发团队就重新写了一个新的浏览器 Netscape Navigator ,1994 年 11 月 公司也改名叫 Netscape Communication Corporation ,中文翻译 “网景”。

微软的 Internet Explorer（IE）以及 Mozilla Firefox 等，早期的版本都是以 Mosaic 为基础开发的。

微软随后买下了 Spy Glass 公司的技术开发出了 Internet Explorer。而 Mozilla Firefox 则是网景开放源代码后所衍生的版本。

### JavaScript 起源

1996 年，JavaScript 作为 Netscape Navigator 浏览器的一部分出现。最初的设计木匾是为了改善网页的用户体验。 作者：Brendan Eich

早期 JavaScript 命名为 LiveScript。

网景公司和 Sun 公司合作推广，Sun 公司有一门语言叫 Java，所以改名 JavaScript。后来 Sun 公司被 Oracle 公司收购，JavaScript 版权归 Oracle 公司所有。

### 浏览器

浏览器分为 shell 和内核

内核：

1. 渲染引擎
2. js 引擎
3. 其他模块

### js 引擎

2001 年微软推出了 ie6，首次实现对 js 引擎的优化和分离。在此之前 js 并没有单独的与浏览器分离

2008 Google 发布最新浏览器 Chrome ，采用了 Google 开发的 V8 引擎。V8 引擎能够把 js 代码直接转为机械码来执行。

后来 Firefox 也推出了强大的 js 引擎

#### 主流浏览器及内核

市场份额在 3%以上，拥有自己的浏览器内核。

1. IE trident
2. Chrome webkit/blink（2013）
3. firefox Gecko
4. Opera presto/blink（2013）
5. Safari webkit

webkit 是一个开源的浏览器内核，由于源代码结构清晰，易于维护被 Apple 公司采用，在 Safari 上使用。Google 也在 Chrome 上使用 webkit。

2013 年，Google 根据 webkit 研发了自己的 blink 引擎，Opera 随之也使用了 blink。

至此，现代浏览器主要内核就只剩四个：WebKit、Blink、Trident 和 Gecko

#### ECMA 标准

为了取得技术优势，微软推出了 JScript，CEnvi 推出了 ScriptEase，与 JavaScript 同样可以在浏览器上运行。为了统一规格 JavaScript 兼容于 ECMA（European Computer Manufacturers Association 欧洲计算机制造联合会） 标准，因此也成为 ECMAScript

ES5 、 ES6 、ES6+

## JS 入门

js 是解释性语言，单线程。

### js 引用方式

```javascript
<script type="text/javascript">console.log("hello world!")</script>

<script src="./index.js"></script>
```

如果在外部引入 js 标签里写 js 代码，不会生效。

### 变量（variable）

```js
// 变量声明
var a; // 向系统申请一个内存空间
// 变量赋值
a = 100; // 赋值

// 简写
var b = 100;
var c = 200;

// 多变量声明
var b = 100,
  c = 200;
```

变量命名规则：

1. 变量名必须以英文字母、下划线\_、\$开头
2. 变量名可以包含英文字母、下划线\_、\$、数字
3. 不可用系统关键字、保留字作为变量名

变量名一定要好理解
大驼峰、小驼峰命名

### 数据类型

```javascript
// 1. 原始值  stack
//   Number、Boolean、String、undefined、null
// Number 默认为浮点型
var a = 1;
var b = 1.0;

// Boolean 只有两个值，true false
var flag = true;

// String 字符
var str = "JS入门";

// 只声明未赋值的变量，值就是undefined   define 定义
var c;
var d = undefined;

// null 一般来说是用来占位用的，代表 空
var e = null;

// 2. 引用值 heap
// Array Object function Date RegExp
var arr = [];
arr = [0, 1, 2];
arr = [0, 1, 2, "string"];

var obj = {};
obj = {
  name: "朱明宇"
};
obj.address = "马涧";

var test = function() {};

var date = new Date();

var reg = new RegExp();
```

### 语法

1. 以“;”结束
2. 任何符号左右都有空格

### 浏览器控制台的讲解
