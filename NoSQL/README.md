<div align="center">

# 🍃 NoSQL — MongoDB

**Documents, not rows: MongoDB from the shell and from Python.**

[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![Python](https://img.shields.io/badge/Python-3.7%2B_pymongo-3776AB?style=flat-square&logo=python&logoColor=white)](https://pymongo.readthedocs.io)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

This project switches paradigms — no tables, no joins, just **documents**
that look like JSON. The first half is the mongo shell: listing databases,
inserting, querying with `find` / `count`, updating and deleting.

The second half drives the same cluster from **Python with `pymongo`** —
building helper functions for a school collection (`insert_school`,
`schools_by_topic`) and finishing with `log_stats` — an aggregation that
counts documents, sums sizes and lists the top IPs of a logs collection.

## 🎯 Concepts covered

- Documents, collections, and the BSON bridge
- `mongosh`: `show dbs`, `use`, `insertOne`, `find`, `count`
- Query operators: `$and`, `$regex`, projections
- `updateOne` with `$set`, and deletes
- `pymongo` — MongoClient, insert, find, update
- Aggregation pipelines (`$group`) for log stats

## 📂 Files

| File | What it does |
|---|---|
| [`0-list_databases`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/0-list_databases) | Shell: lists every database and its documents |
| [`1-use_or_create_database`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/1-use_or_create_database) | Shell: `use` — creating a database by name |
| [`10-update_topics.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/10-update_topics.py) | Python: sets topics by school name |
| [`100-find`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/100-find) | Shell: projection — only name & score fields |
| [`101-students.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/101-students.py) | Python: filters students by score & topic |
| [`102-log_stats.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/102-log_stats.py) | Python: aggregation — logs count, sizes, top IPs |
| [`11-schools_by_topic.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/11-schools_by_topic.py) | Python: queries schools by topic |
| [`12-log_stats.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/12-log_stats.py) | Python: log stats including the top HTTP methods |
| [`2-insert`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/2-insert) | Shell: inserts a document into a school collection |
| [`3-all`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/3-all) | Shell: all documents in the collection |
| [`4-match`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/4-match) | Shell: matching documents by field |
| [`5-count`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/5-count) | Shell: counting matched documents |
| [`6-update`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/6-update) | Shell: updating a topic list |
| [`7-delete`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/7-delete) | Shell: removing a school |
| [`8-all.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/8-all.py) | Python: lists all documents via pymongo |
| [`9-insert_school.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/NoSQL/9-insert_school.py) | Python: `insert_school` returning the new `_id` |

## ⚙️ Requirements

- 🐧 Ubuntu 20.04 LTS · MongoDB 4.4 (`mongosh` / `mongo`)
- 🐍 Python 3 with `pymongo` 3.10
- 📄 Shell scripts run from the project's `mongosh` with the test cluster running

## 🚀 Try it yourself

```bash
mongosh < 4-match   # filtered queries in the shell
python3 12-log_stats.py    # aggregation: counts, sizes, top IPs
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
