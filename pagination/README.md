<div align="center">

# 📄 Pagination

**Hypermedia pagination that survives deleted rows.**

[![Python](https://img.shields.io/badge/Python-3.7%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![typing](https://img.shields.io/badge/stdlib-typing-3776AB?style=flat-square)](https://docs.python.org/3/library/typing.html)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

Every list API needs pagination; this project builds it three times, each
time harder. First the plain helper: `index_range(page, page_size)` turning
page numbers into `(start, end)` slices. Then **hypermedia pagination** — a
Popular-Csv dataset of baby names served with `next`/`prev` links and
metadata (`total_pages`, `page_size`).

The final level is the clever one: **deletion-resilient pagination**. Users
delete rows while others paginate; the class keeps the page stable by
anchoring to the dataset's current state — the right page even after
arbitrary deletions.

## 🎯 Concepts covered

- Offset pagination math — `(page - 1) * page_size`
- Hypermedia as the engine of application state (HATEOAS)
- Metadata blocks: page, page_size, total, total_pages
- Deletion-resilient indexing
- CSV-driven datasets in a server context

## 📂 Files

| File | What it does |
|---|---|
| [`0-simple_helper_function.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/pagination/0-simple_helper_function.py) | `index_range(page, page_size)` → (start, end) tuple |
| [`1-simple_pagination.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/pagination/1-simple_pagination.py) | A `Server` class with get_page — safe slicing |
| [`2-hypermedia_pagination.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/pagination/2-hypermedia_pagination.py) | get_hyper — pages + metadata + next/prev links |
| [`3-hypermedia_del_pagination.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/pagination/3-hypermedia_del_pagination.py) | Deletion-resilient pagination anchored by index |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Python 3.7
- 🧹 pycodestyle (PEP 8)
- 📄 Files execute as `python3 <file>` with the bundled dataset

## 🚀 Try it yourself

```bash
python3 3-hypermedia_del_pagination.py
# Server class: get_hyper_index / get_hypermedia_index after deletions
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
