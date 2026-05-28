<div align="center">

# 🏷️ Python — variable annotations

**Types in Python: hints, generics and duck typing with a safety net.**

[![Python](https://img.shields.io/badge/Python-3.7%2B-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![typing](https://img.shields.io/badge/stdlib-typing-3776AB?style=flat-square)](https://docs.python.org/3/library/typing.html)
[![Holberton](https://img.shields.io/badge/Holberton-Specialization-E44D26?style=flat-square)](https://www.holbertonschool.com)

</div>

---

## 📖 About this project

Python will never enforce types — but it will *document* them. This project
annotates everything in sight: function signatures with `->`, variables
with `: type`, and generics from the `typing` module — `List`, `Union`,
`Tuple`, `Callable`, `Mapping`, `TypeVar`.

The advanced tasks build a mini type-system toolkit: a `safely_get_value`
with overloads, a `TypeVar`-bound identity, and a `type_checking` exercise
that proves duck typing still rules — annotations are for humans, mypy and
IDEs.

## 🎯 Concepts covered

- Basic annotations: `x: int = 0`, `def f() -> str`
- `typing.List`, `Union`, `Tuple`, `Dict`
- `Callable` and function-typed parameters
- `TypeVar` and generic functions
- `typing.Any` vs `object` — the honest escapes
- Duck typing, with annotations as documentation

## 📂 Files

| File | What it does |
|---|---|
| [`0-add.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/0-add.py) | `add(a: float, b: float) -> float` — the hello-world of typing |
| [`1-concat.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/1-concat.py) | String concatenation, annotated |
| [`100-safe_first_element.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/100-safe_first_element.py) | `Union` for maybe-empty sequences |
| [`101-safely_get_value.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/101-safely_get_value.py) | `TypeVar` and overloads — the generic workhorse |
| [`102-type_checking.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/102-type_checking.py) | Duck typing proven — annotations don't block it |
| [`2-floor.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/2-floor.py) | `floor(n: float) -> int` |
| [`3-to_str.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/3-to_str.py) | `to_str(n: float) -> str` |
| [`4-define_variables.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/4-define_variables.py) | Annotated variables at module level |
| [`5-sum_list.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/5-sum_list.py) | `sum_list(input_list: List[float]) -> float` |
| [`6-sum_mixed_list.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/6-sum_mixed_list.py) | `Union[int, float]` — mixed-type summation |
| [`7-to_kv.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/7-to_kv.py) | `Tuple[str, float]` returns |
| [`8-make_multiplier.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/8-make_multiplier.py) | `Callable` — functions that build functions |
| [`9-element_length.py`](https://github.com/Abdullayews/holbertonschool-web_back_end/tree/main/python_variable_annotations/9-element_length.py) | `Iterable[Sequence]` — nested generics |

## ⚙️ Requirements

- 🐧 Ubuntu 18.04 LTS · Python 3.7
- 🧹 pycodestyle (PEP 8)

## 🚀 Try it yourself

```bash
python3 0-add.py            # annotated addition
python3 101-safely_get_value.py   # TypeVar + default values
```

---

✍️ **Muhəmməd Abdullayev** · [![GitHub](https://img.shields.io/badge/@Abdullayews-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Abdullayews) · one of the projects in **[holbertonschool-web_back_end](../README.md)**
