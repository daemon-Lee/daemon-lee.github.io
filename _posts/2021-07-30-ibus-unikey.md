---
title: "Cài đặt bộ gõ ibus-bamboo"
categories:
  - ubuntu-setup
tags:
  - ibus-bamboo
  - bash
  - curl
  - shell-script
---

1. Cài đặt ibus-bamboo

Mở Terminal, thực hiện command sau để cài đặt ibus-bamboo

```bash
sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
sudo apt-get update
sudo apt-get install ibus ibus-bamboo --install-recommends
```

2. Khởi động lại phần mềm ibus

Để khởi động lại ibus, các bạn dùng command sau:

```bash
ibus restart
```

3. Thiết lập gõ tiếng việt cho ibus trên `Ubuntu 18.04`

- Bước 1: Tìm kiếm chức năng quản lý [ `Settings` ]
- Bước 2: Ở cửa sổ [ `Settings` ] -> [ `Region  & Language` ] -> [`Input Sources` ] -> Bấm [ `+` ] để thêm 1 input source
- Bước 3: Ở cửa sổ [ `Add an Inpupt Source` ] -> Tìm kiếm ngôn ngữ là “`Vietnamese (Bamboo)`” -> Bấm `“Add”`
- Bước 4: Sau đó restart lại Ubuntu và xác nhận Ibus-bamboo đã có 2 ngôn ngữ là tiếng Anh và tiếng Việt

Bạn có thể chuyển đổi qua lại giữa 2 ngôn ngữ bằng phìm tắt là “`Windows` + `Space`”

4. Đặt `ibus-bamboo` làm bộ gõ mặc định thông qua lệnh

```bash
env DCONF_PROFILE=ibus dconf write /desktop/ibus/general/preload-engines "['BambooUs', 'Bamboo']" && gsettings set org.gnome.desktop.input-sources sources "[('xkb', 'us'), ('ibus', 'Bamboo')]"
```

## Tham khảo chi tiết:
- [ibus-bamboo](https://github.com/BambooEngine/ibus-bamboo)