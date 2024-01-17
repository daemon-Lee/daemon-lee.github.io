---
title: "Install python version customs"
categories:
  - ubuntu-setup
tags:
  - Python
toc: true
---

The script install python:
```bash
apt update
apt upgrade -y

apt install -y software-properties-common
add-apt-repository ppa:deadsnakes/ppa

apt update
apt install -y python3.x
apt install python3.x-distutils
```

> Note: `x` is version of python

Install pip
```shell
curl -sS https://bootstrap.pypa.io/get-pip.py | python3
```