---
title: "Get disk used"
categories:
  - ubuntu-setup
tags:
  - bash
toc: true
---

# ncdu

Works well from the command line. It's ncurses-based and interactive.
You can install it with `sudo apt-get install ncdu`.

## Alternatives
```bash
$ du -shx * | sort -rh | head -10
```

# See disk used
By using the `df` command.
```shell
$ df
Filesystem           1K-blocks      Used Available Use% Mounted on
/dev/sda1            303537496  27537816 260580948  10% /
none                    950788       252    950536   1% /dev
none                    959516       232    959284   1% /dev/shm
none                    959516       388    959128   1% /var/run
none                    959516         0    959516   0% /var/lock
```

>`df -m` will show things in megabytes, `df -h` will show you in the largest possible unit.