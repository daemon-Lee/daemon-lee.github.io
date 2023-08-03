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

> Trong đó tags `v2.2.1` là version của `docker-compose`. Khi sử dụng bạn nên sửa lại version tại [releases page](https://github.com/docker/compose/releases/) cho phù hợp với nhu cầu.

## Docker no Sudo
To create the `docker` group and add your user:
1. Create the `docker` group.
```bash
sudo groupadd docker
```
2. Add your user to the docker group.
```bash
sudo usermod -aG docker $USER
```

## Configure Docker to start on boot with systemd
Many modern Linux distributions use `systemd` to manage which services start when the system boots. On Debian and Ubuntu, the Docker service starts on boot by default. To automatically start Docker and containerd on boot for other Linux distributions using systemd, run the following commands:
```
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

To stop this behavior, use `disable` instead.

```
sudo systemctl disable docker.service
sudo systemctl disable containerd.service
```