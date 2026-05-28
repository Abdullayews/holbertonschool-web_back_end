<div align="center">

# ✨ ES6 — basics

**let, const, arrow functions, spread, template literals — JavaScript grows up.**

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)
[![Style](https://img.shields.io/badge/style-semistandard-F7DF1E?style=flat-square)](https://github.com/standard/semistandard)

</div>

---

## 📖 About this project

ES6 (ES2015) is the update that made modern JavaScript *modern*. This project
drills the new syntax hands-on: block-scoped `let` / `const` replacing `var`,
arrow functions with their lexical `this`, default and **rest parameters**,
the **spread operator** for arrays and objects, and **template literals**
with `${interpolation}`.

The finale builds composite data the ES6 way — an employees object and a
report object assembled from parts with shorthand properties.

## 🎯 Concepts covered

- `const` vs `let` vs `var` — block scope and reassignment
- Arrow functions: `() => {}` and lexical `this`
- Default parameters, rest parameters `...args`
- Spread syntax for arrays and objects
- Template literals and `${}` interpolation
- Shorthand properties & methods

## 📂 Files

| File | What it does |
|---|---|
| [`0-constants.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/0-constants.js) | `const` — a binding that refuses reassignment |
| [`1-block-scoped.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/1-block-scoped.js) | `let` — variables that respect their `{ }` block |
| [`10-loops.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/10-loops.js) | `for…of` — iterating values, not indices |
| [`100-createIteratorObject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/100-createIteratorObject.js) | A custom iterator — `Symbol.iterator` in action |
| [`101-iterateThroughObject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/101-iterateThroughObject.js) | `for…of` over an object via its iterator |
| [`11-createEmployeesObject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/11-createEmployeesObject.js) | Building `{ departmentName: [employees] }` from two arrays |
| [`12-createReportObject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/12-createReportObject.js) | A report object with shorthand everything |
| [`2-arrow.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/2-arrow.js) | Arrow functions, rewritten from their ES5 twins |
| [`3-default-parameter.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/3-default-parameter.js) | Parameters with defaults — no more `x = x || 0` |
| [`4-rest-parameter.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/4-rest-parameter.js) | `...args` — variadic functions, cleanly |
| [`5-spread-operator.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/5-spread-operator.js) | Spreading arrays and objects into new ones |
| [`6-string-interpolation.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/6-string-interpolation.js) | Template literals — `${no more concatenation}` |
| [`7-getBudgetObject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/7-getBudgetObject.js) | Shorthand properties building a budget |
| [`8-getBudgetCurrentYear.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/8-getBudgetCurrentYear.js) | Computed property names — keys from expressions |
| [`9-getFullBudget.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_basic/9-getFullBudget.js) | Shorthand methods on the returned object |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Node.js 12.x
- 📄 Every file runs with `node <file>.js`
- 🧹 semistandard (commas as semicolons' forgiving cousin)

## 🚀 Try it yourself

```bash
node 5-spread-operator.js     # arrays and objects, exploded and rebuilt
node 6-string-interpolation.js
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
