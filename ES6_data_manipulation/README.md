<div align="center">

# 🔧 ES6 — data manipulation

**map, filter, reduce — and Set, Map, TypedArrays beyond the loop.**

[![Node.js](https://img.shields.io/badge/Node.js-14%2B-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)
[![Style](https://img.shields.io/badge/style-semistandard-F7DF1E?style=flat-square)](https://github.com/standard/semistandard)

</div>

---

## 📖 About this project

The functional toolbox for data: `map` to transform, `filter` to select,
`reduce` to fold, `sort` with comparators — applied to a list of students
with ids, locations and grades.

Then the exotic containers: **TypedArrays** for binary-ish data, **Set** for
uniqueness (`hasValues`, `cleanSet`), `Map` for grocery lists, and a
`WeakRef` finale — references that don't prevent garbage collection.

## 🎯 Concepts covered

- `map` / `filter` / `reduce` / `sort` on object arrays
- `forEach` vs the three above
- TypedArrays — `new Int8Array(buffer)`
- `Set` and `Map` — the ES6 collections
- `WeakRef` — holding without keeping alive

## 📂 Files

| File | What it does |
|---|---|
| [`0-get_list_students.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/0-get_list_students.js) | The student dataset used across the tasks |
| [`1-get_list_student_ids.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/1-get_list_student_ids.js) | `map` — just the ids |
| [`10-update_uniq_items.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/10-update_uniq_items.js) | Map iteration — updating unique items |
| [`100-weak.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/100-weak.js) | `WeakRef` — watching an object disappear |
| [`2-get_students_by_loc.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/2-get_students_by_loc.js) | `filter` — students in a given city |
| [`3-get_ids_sum.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/3-get_ids_sum.js) | `reduce` — the sum of all ids |
| [`4-update_grade_by_city.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/4-update_grade_by_city.js) | map + filter: grades updated per city |
| [`5-typed_arrays.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/5-typed_arrays.js) | TypedArray from an ArrayBuffer |
| [`6-set.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/6-set.js) | A Set — uniqueness for free |
| [`7-has_array_values.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/7-has_array_values.js) | Checks whether every value exists in a Set |
| [`8-clean_set.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/8-clean_set.js) | Renders a Set's values ending at a given one |
| [`9-groceries_list.js`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/ES6_data_manipulation/9-groceries_list.js) | A `Map` of groceries with quantities |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Node.js 12.x
- 🧹 semistandard

## 🚀 Try it yourself

```bash
node 4-update_grade_by_city.js   # map + filter composed
node 8-clean_set.js               # a Set rendered as a string
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
