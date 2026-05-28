<div align="center">

# 🌀 Python — async comprehensions

**Comprehensions that await: async generators on the event loop.**

[![Python](https://img.shields.io/badge/Python-3.7%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![asyncio](https://img.shields.io/badge/stdlib-asyncio-3776AB?style=flat-square)](https://docs.python.org/3/library/asyncio.html)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

You know list comprehensions; you know `async def`. This tiny project
welds them together: an **async generator** that yields ten random numbers
with a half-second pause between each, an **async comprehension** consuming
it without a single callback, and a `measure_runtime` that proves the whole
pipeline runs concurrently — ~0.5 s total, not 10 × 0.5 s.

## 🎯 Concepts covered

- `async def` generators with `yield`
- `async for` — iterating asynchronously
- `[x async for x in …]` — async comprehensions
- `asyncio.run()` and measuring concurrent runtime

## 📂 Files

| File | What it does |
|---|---|
| [`0-async_generator.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_comprehension/0-async_generator.py) | `async_generator` — 10 random floats, one async nap apart |
| [`1-async_comprehension.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_comprehension/1-async_comprehension.py) | Collects them with an async comprehension |
| [`2-measure_runtime.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_comprehension/2-measure_runtime.py) | Times both running concurrently — ~0.5 seconds |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Python 3.7 (async/await syntax)
- 🧹 pycodestyle (PEP 8)

## 🚀 Try it yourself

```bash
python3 1-async_comprehension.py   # gathers 10 numbers concurrently
python3 2-measure_runtime.py       # ≈ 0.5s — the proof
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
