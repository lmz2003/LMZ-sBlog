---
date: 2025-03-23 17:06:36
tags:
  - ECMAScript新特性
---

# 了解哪些ES新特性

## ES新特性对前端开发者的好处

### 提高开发效率

- 代码更加简洁：例如 ES 新特性提供了箭头函数、模板字符串、解构赋值等功能

- 功能更加强大：例如可选链（?.）和空值合并操作符（??），简化了对深层对象属性的安全访问，减少冗余代码。

### 提升代码性能

- 例如通过 async/await 解决了异步请求回调地狱的问题

### 解决复杂场景

- 大规模数据处理：Map、Set 和 WeakMap 等数据结构在处理复杂数据时效率更高。
- 高级编程模式：如类的私有字段和方法（#field）、动态导入（import()）、模块化等特性，提升了代码封装性。

### 更好地支持现代浏览器

- 最新浏览器基本上支持 ES 的大多数新特性，无需额外的 polyfill 或转译，提升了代码的兼容性。
- 比如，使用模块化（import/export）可以直接加载模块，无需复杂的脚本管理工具。

### 保持行业竞争力

- 前端技术迭代迅速，熟悉最新 ES 特性能够帮助开发者跟上技术趋势，增强行业竞争力。
- 现代开发框架（如 React、Vue、Svelte）和工具链（如 Webpack、Vite、Babel、ESLint）也高度依赖这些特性。

## 回答思路

对 ES 某些新特性较为熟悉，并在项目开发中或多或少的运用了这些新特性，确实提高了开发效率和代码性能。

### ES2024

在 ES2024 还提供了一个新特性我认为比较方便，就是可以直接使用 import 导入 json 文件，避免了文件的读取逻辑。

```JavaScript
import config from './config.json' assert { type: 'json' };

console.log(config.setting); // 输出 JSON 文件中的指定属性

```

还有为数组排序添加了新方法 tosorted(),该方法将排序后的数组生成新数组返回，之前在项目开发中如果想对排序后的数组进行操作的同时不改变原数组话，还需要提前将数组拷贝一份

```JavaScript
num //原数组
let copynum = [...num]; //浅拷贝一份，如果需要深拷贝则调用内置方法
num.sort((a,b) => a-b) //升序
```

### ES2023

在 ES2023 中的数组新增了两个方法 findLast 和 findLastIndex，这两个方法类似之前的方法 find 和 findIndex，提供了倒序搜索，减少了数组反转这一步骤。

```JavaScript
const isOdd = (number) => number % 2 === 1;
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.findLast(isOdd)); // 5
console.log(numbers.findLastIndex(isOdd)); // 4

```

### ES2022

特性 3: ES2022 的类字段与私有方法
支持类中的私有字段 （#field） 和私有方法，增强了封装性。

```JavaScript
class Counter {
  #count = 0;

  increment() {
    this.#count++;
  }

  #logCount() {
    console.log(this.#count);
  }
}

const counter = new Counter();
counter.increment();
// counter.#logCount(); // 报错，私有方法不可访问

```

### ES2021

逻辑赋值运算符:新增 &&=, ||=, ??=，简化条件赋值逻辑。

```JavaScript
let user = { name: 'Alice', age: null };

user.name ||= 'Default Name'; // 如果 name 为 falsy，则赋值
user.age ??= 18; // 如果 age 为 null 或 undefined，则赋值

console.log(user); // { name: 'Alice', age: 18 }
```

### ES2020

可选链和空值合并操作符
简化深层嵌套对象属性的访问，并安全处理空值。

```JavaScript
const user = {
  profile: {
    details: { name: 'Alice' },
  },
};

const name = user.profile?.details?.name ?? 'Anonymous';
console.log(name); // 输出 'Alice'

const age = user.profile?.age ?? 18;
console.log(age); // 输出 18
```

### ES2019

数组 flat 和 flatMap 方法

```JavaScript
flat 展开多层嵌套数组，flatMap 结合映射与扁平化操作。
const nestedArray = [1, [2, [3, 4]], 5];
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5]

const strings = ['hello', 'world'];
console.log(strings.flatMap(str => str.split('')));
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']


```

## ES新特性汇总

参考其他博主整理
https://juejin.cn/post/7459351912133132351#heading-15
