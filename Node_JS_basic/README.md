<div align="center">

# 🟩 Node.js — basics

**From console.log to a full Express server — JavaScript on the server.**

[![Node.js](https://img.shields.io/badge/Node.js-12%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![Babel](https://img.shields.io/badge/Babel-ES6%2B_in_Node-F9DC3E?style=flat-square&logo=babel&logoColor=black)](https://babeljs.io)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

Node.js takes JavaScript out of the browser and hands it the whole
operating system. The project starts with the basics — `console.log`
counting arguments, reading **stdin** line by line, reading files
synchronously vs asynchronously — then climbs to HTTP: a plain
`http.createServer`, then the same server written with **Express**.

The destination is `full_server/`: a complete Express application with a
router, **controllers** (`AppController`, `StudentsController`), and
utilities that parse a CSV of students — computing counts and stats per
major, served as JSON.

## 🎯 Concepts covered

- `process.stdout` / `process.stdin` — terminal I/O
- `fs.readFileSync` vs `readFile` — blocking vs event loop
- `http.createServer` — the raw way
- Express: routes, middleware, JSON responses
- MVC-lite: routers + controllers + utils
- Parsing CSV and aggregating by field

## 📂 Files

| File | What it does |
|---|---|
| [`.babelrc`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/.babelrc) | .babelrc |
| [`0-console.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/0-console.js) | console.log vs console.error — argument counts included |
| [`1-stdin.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/1-stdin.js) | Reads stdin line by line until 'exit' |
| [`2-read_file.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/2-read_file.js) | Reads a CSV synchronously with `fs` |
| [`3-read_file_async.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/3-read_file_async.js) | Same read, asynchronous — counts students |
| [`4-http.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/4-http.js) | A raw Node HTTP server on two ports |
| [`5-http.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/5-http.js) | Raw HTTP server serving the student counts |
| [`6-http_express.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/6-http_express.js) | The same server, written with Express |
| [`7-http_express.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/7-http_express.js) | Express + full student stats on '/students' |
| [`database.csv`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/database.csv) | The student dataset the servers read |
| [`full_server/controllers/AppController.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/full_server/controllers/AppController.js) | Controller for '/' and '/stats' |
| [`full_server/controllers/StudentsController.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/full_server/controllers/StudentsController.js) | Student stats by major, from CSV |
| [`full_server/routes/index.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/full_server/routes/index.js) | The Express router |
| [`full_server/server.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/full_server/server.js) | App bootstrap + listener |
| [`full_server/utils.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/full_server/utils.js) | CSV reading & field parsing helpers |
| [`package.json`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/package.json) | Package |
| [`tmp_database.csv`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/Node_JS_basic/tmp_database.csv) | Tmp database |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Node.js 12.x
- 🧹 semistandard
- 📦 Task 6+ run with `babel-node` and the provided `.babelrc`

## 🚀 Try it yourself

```bash
./3-read_file_async.js database.csv     # async read, counted lines
npm run dev 6-http_express.js           # Express hello on :1245
# full server:
npm install && npm start                # full_server on :1245
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
