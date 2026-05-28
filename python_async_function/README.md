<div align="center">

# ⚡ Python — async functions

**asyncio fundamentals: wait_random, wait_n, tasks and concurrency math.**

[![Python](https://img.shields.io/badge/Python-3.7%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![asyncio](https://img.shields.io/badge/stdlib-asyncio-3776AB?style=flat-square)](https://docs.python.org/3/library/asyncio.html)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

The asyncio foundation project. It starts with the atom — `wait_random`,
a coroutine that sleeps a random delay — then builds concurrency out of
it: `wait_n(n, max_delay)` launching n coroutines at once via
`asyncio.gather`, and `measure_runtime` proving they overlap instead of
queueing.

The last step wraps the same logic in **`asyncio.Task`** objects
(`task_wait_n`) — and benchmarking the two against each other shows how
scheduling a thousand tasks compares to gathering them.

## 🎯 Concepts covered

- `async def` coroutines and `await`
- `asyncio.run()` — entering the event loop
- `asyncio.gather` — concurrent execution
- `asyncio.Task` — scheduling work explicitly
- Timing & proving concurrency with `time`

## 📂 Files

| File | What it does |
|---|---|
| [`0-basic_async_syntax.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_function/0-basic_async_syntax.py) | `wait_random` — the atomic coroutine |
| [`1-concurrent_coroutines.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_function/1-concurrent_coroutines.py) | `wait_n` — n coroutines, one gather, sorted delays |
| [`2-measure_runtime.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_function/2-measure_runtime.py) | Times wait_n — the overlap made visible |
| [`3-tasks.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_function/3-tasks.py) | `task_wait_n` — same job, scheduled as Tasks |
| [`4-tasks.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_async_function/4-tasks.py) | Benchmark: tasks vs gather, with documentation |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Python 3.7
- 🧹 pycodestyle (PEP 8)
- 📄 Each file documents its coroutine with a docstring

## 🚀 Try it yourself

```bash
python3 1-concurrent_coroutines.py   # wait_n: 5 delays, sorted
python3 3-tasks.py                   # the Task-based twin
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
