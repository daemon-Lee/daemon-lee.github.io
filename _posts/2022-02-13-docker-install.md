---
title: "Install docker and docker compose"
categories:
  - ubuntu-setup
tags:
  - docker
  - docker-compose
  - bash
  - shell-script
---
Script để cài đặt docker và docker compose:
{% gist a695d58363592645e32e78eee1c065f1 %}

> Trong đó tags `v2.2.1` là version của `docker-compose`. Khi sử dụng bạn nên sửa lại version tại [releases page](https://github.com/docker/compose/releases/) cho phù hợp với nhu cầu
Để sử dụng bạn chạy command bên dưới để tải `script` và tiến hành cài đặt

```bash
curl -L https://gist.githubusercontent.com/daemon-Lee/a695d58363592645e32e78eee1c065f1/raw/522aa9e3590cc126764550dee05243332b594765/docker.sh | bash -s
```