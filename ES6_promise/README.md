<div align="center">

# 🤝 ES6 — promises

**then, catch, all — taming asynchronous JavaScript.**

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)
[![Style](https://img.shields.io/badge/style-semistandard-F7DF1E?style=flat-square)](https://github.com/standard/semistandard)

</div>

---

## 📖 About this project

Callbacks pyramid, meet your replacement. This project covers the full
promise lifecycle: constructing with `new Promise(resolve, reject)`,
chaining with `.then` / `.catch`, aggregating with `Promise.all`, and
finishing with the syntactic sugar that sits on top: **`async` / `await`**.

The scenarios are practical — uploading a photo that resolves by size,
composing a signed-up user from parallel API calls, and a **load balancer**
picking the fastest of two servers.

## 🎯 Concepts covered

- `new Promise` — the executor, resolve, reject
- `.then()` chains and `.catch()` for failures
- `Promise.all` — waiting for everything
- `async` / `await` — promises without the nesting
- Error propagation through the chain

## 📂 Files

| File | What it does |
|---|---|
| [`0-promise.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/0-promise.js) | A promise resolved instantly with setTimeout 0 |
| [`1-promise.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/1-promise.js) | Resolved/rejected by value — boolean switch |
| [`100-await.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/100-await.js) | async/await rewriting of the earlier tasks |
| [`2-then.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/2-then.js) | Handling a resolved promise with `.then` |
| [`3-all.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/3-all.js) | `Promise.all` over two async operations |
| [`4-user-promise.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/4-user-promise.js) | User-promise |
| [`5-photo-reject.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/5-photo-reject.js) | UploadPhoto — resolved by filename, rejected otherwise |
| [`6-final-user.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/6-final-user.js) | Composes a full user from signUpUser + uploadPhoto |
| [`7-load_balancer.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/7-load_balancer.js) | Races two servers — the winner handles the request |
| [`8-try.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/8-try.js) | try/catch around async calls |
| [`9-try.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_promise/9-try.js) | `asyncFunction` awaited inside try/catch |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Node.js 12.x
- 🧹 semistandard
- 📦 Uses the project's `babel`-free plain ES6

## 🚀 Try it yourself

```bash
node 7-load_balancer.js   # the fastest server wins
node 100-await.js         # the same job, the async/await way
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
