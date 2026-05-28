<div align="center">

# 🏛️ ES6 — classes

**Car, EVCar, Building, Airport — OOP arrives in JavaScript.**

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)
[![Style](https://img.shields.io/badge/style-semistandard-F7DF1E?style=flat-square)](https://github.com/standard/semistandard)

</div>

---

## 📖 About this project

ES6 classes give JavaScript the `class` keyword it pretended to have for a
decade. This project builds real ones: constructors, prototype methods,
**static methods**, `extends` / `super`, getters and setters — from a simple
`ClassRoom` to a `Currency` / `Pricing` pair, an abstract-style `Building`
that throws on missing implementation, and an `Airport` class.

The bonus: `EVCar` — an electric `Car` subclass whose `cloneCar()` uses
`Symbol.species` to clone as the *right* class.

## 🎯 Concepts covered

- `class` syntax, constructors, instance methods
- Static methods & attributes
- Inheritance: `extends`, `super()`, method overriding
- Getters and setters as the public interface
- Exceptions for broken invariants
- `Symbol.species` — factories that preserve the subclass

## 📂 Files

| File | What it does |
|---|---|
| [`0-classroom.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/0-classroom.js) | `ClassRoom` — constructor + maxStudentsCount getter/setter |
| [`1-make_classrooms.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/1-make_classrooms.js) | Builds ClassRoom instances from an array of sizes |
| [`10-car.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/10-car.js) | `Car` with cloneCar via Symbol.species |
| [`100-evcar.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/100-evcar.js) | `EVCar extends Car` — electric clones only |
| [`2-hbtn_course.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/2-hbtn_course.js) | `Course` with static + instance methods |
| [`3-currency.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/3-currency.js) | `Currency` — code/name with validation |
| [`4-pricing.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/4-pricing.js) | `Pricing` composing an amount + Currency |
| [`5-building.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/5-building.js) | `Building` — the base class with seven expected attrs |
| [`6-sky_high.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/6-sky_high.js) | `SkyHighBuilding` extends Building, overrides evacuationWarning |
| [`7-airport.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/7-airport.js) | `Airport` — code + toString |
| [`8-hbtn_class.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/8-hbtn_class.js) | `HolbertonClass` with year & location switching |
| [`9-hoisting.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_classes/9-hoisting.js) | Function hoisting — behavior, demonstrated |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Node.js 12.x
- 🧹 semistandard
- 📦 `eslint`-clean with the project's `.babelrc` if needed

## 🚀 Try it yourself

```bash
node 9-hbtn_classroom.js 100   # 100 classrooms via a static factory
node 100-evcar.js               # clones stay electric — Symbol.species
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
