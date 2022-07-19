---
title: "Pandas convert a column of list to dummies"
categories:
  - NLP
tags:
  - nlp
  - Pandas
toc: true
---

Give a sample like:
```python
index groups  
0     ['a','b','c']
1     ['c']
2     ['b','c','e']
3     ['a','c']
4     ['b','e']
```

And create a series of dummy columns to identify which groups each user belongs to in order to run some analyses.

```python
index  a   b   c   d   e
0      1   1   1   0   0
1      0   0   1   0   0
2      0   1   1   0   1
3      1   0   1   0   0
4      0   1   0   0   0
```

Solution is use `str.join` to join all elements in list present in series into string and then use `str.get_dummies`:
```python
df.join(df['groups'].str.join('|').str.get_dummies())
```
