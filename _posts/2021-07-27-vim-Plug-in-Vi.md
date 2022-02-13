---
title: "Vim va Plug-in"
categories:
  - ubuntu-setup
tags:
  - bash
  - vim
  - vim-Plug-in
toc: true
---

Tổ hợp một số cài đặt cho vim mình hay dùng

# Tùy chỉnh Vim cơ bản

Mặc định, file config của vim sẽ nằm ở `~/.vimrc` trong một số trường hợp nó có thể ở `/etc/vim/vimrc` hoặc `/etc/vimrc`.
Hoặc nếu file không tồn tại, bạn hãy tạo file mới bằng lệnh

```bash
$ touch ~/.vimrc
```

sau đó bạn mở file lên theo lệnh
```bash
$ vim ~/.vimrc
```
Chuyển sang **INSERT MODE** và thêm các config như sau:
```bash
" Bật highlight cú pháp cho một loại file (như .py, .cpp, .xml)
syntax enable
syntax on

" Hiện số thứ tự của dòng
set number

" Không hiện số thứ tự của dòng
set nonumber

" Hiện số thứ tự theo cách relative
" Dòng hiện tại đánh số 0, dòng trên và dòng dưới là 1, 
" và cứ thế đối với các dòng khác
set relativenumber

" Hiện số thứ tự theo cách hybrid
" Dòng hiện tại đánh số là số dòng thực tế, 
" dòng trên và dòng dưới là 1, và cứ thế đối với các dòng khác
set number relativenumber

" Chỉnh 4 space mỗi tab
set tabstop=4

" Chỉnh 4 space mỗi indent
set shiftwidth=4

" Sử dụng space character thay tab character khi nhấn Tab
set expandtab

" Tự động indent khi xuống hàng
set autoindent

" Sử dụng clipboard hệ thống thay buffer của vim
set clipboard=unnamedplus

" Chỉnh độ delay (ms) giữa lần chuyển chế độ
set ttimeoutlen=50

" Highlight dòng hiện tại
set cursorline
```

# Cài đặt Plug-in cho Vim

## Cài đặt Plug-in Vim thu cong
Mặc định, thư mục `~/.vim` sẽ không có cấu trúc để lưu trữ Plug-in, chúng ta sẽ tạo các thư mục lưu trữ tên là `my-plugins` hoặc bất kỳ tên nào bạn muốn.
```bash
$ mkdir -p ~/.vim/pack/my-plugins
```
Trong thư mục này, cần thêm một thư mục `start` nữa để giữ các plugin. Vim sẽ chọn bất kỳ gói nào được thêm vào thư mục này và tự động tải các plugin.

Thêm thư mục khác `opt` có thể được tạo để chứa các gói không được tải tự động. Các gói được thêm vào thư mục `opt` có thể được tải bằng cách sử dụng

```bash
:packadd packagename
```
Điều này có thể hữu ích cho việc gỡ lỗi hoặc thêm một plugin đặc biệt.

### Bố cục thư mục

```bash
.vim/pack/my-plugins/start/foobar/plugin/foo.vim    	  " always loaded, defines commands
.vim/pack/my-plugins/start/foobar/plugin/bar.vim    	  " always loaded, defines commands
.vim/pack/my-plugins/start/foobar/autoload/foo.vim  	  " loaded when foo command used
.vim/pack/my-plugins/start/foobar/doc/foo.txt       	  " help for foo.vim
.vim/pack/my-plugins/start/foobar/doc/tags          	  " help tags
.vim/pack/my-plugins/opt/fooextra/plugin/extra.vim  	  " optional plugin, defines commands
.vim/pack/my-plugins/opt/fooextra/autoload/extra.vim      " loaded when extra command used
.vim/pack/my-plugins/opt/fooextra/doc/extra.txt  	  " help for extra.vim
.vim/pack/my-plugins/opt/fooextra/doc/tags  	          " help tags
```
Với `foobar` và `fooextra` là thên các plugins

### Quản lý packages
Chức năng mới trong vim không thêm bất cứ thứ gì để quản lý các plugin; nó chỉ tải chúng. Bạn quản lý plugin như thế nào là tùy thuộc vào bạn.

Ở dạng đơn giản nhất, bạn chỉ có thể di chuyển một plugin vào thư mục `start` và nó sẽ được tải tự động. Bạn quản lý nó như thế nào là tùy thuộc vào bạn.

### Thêm packages
Dưới đây là một ví dụ về cách thêm một gói bằng cách sử dụng phương pháp tiếp cận của Vim vào các gói và git submodules.
```bash
cd ~/.vim/pack
git init
git submodule init
git submodule add https://github.com/vim-airline/vim-airline.git my-plugins/start/vim-airline
git add .gitmodules my-plugins/start/vim-airline
git commit
```

### Updating packages
Để cập nhật packages có thể dùng git submodules.
```bash
git submodule update --remote --merge
git commit
```

### Xóa packages
Xóa một package chỉ cần xóa git submodules.
```bash
git submodule deinit my-plugins/start/vim-airline
git rm my-plugins/start/vim-airline
rm -Rf .git/modules/my-plugins/start/vim-airline
git commit
```

> Going native and reducing dependencies feels good!

## Cài đặt Vim bằng các gói quản lý Plugin

Có nhiều gói quản lý Plugin như: Bundle, Vim-Plug, Pathogen,... vân vân và mây mây.
- [Vim-Plug](#Vim-Plug)
- [Vundle](#Vundle)

---
### Vim-Plug
Khá nhiều đặc điểm hay
- Cú pháp gọn, dễ nhớ
- Khá nhanh
- Cài đặt cũng dễ

Cách cài đặt:
```bash
  $ curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
Sử dụng:
1. Chúng ta mở `~/.vimrc` lên
2. Kiếm đoạn nào trống trống ấy :))
3. Rồi thêm phần mở đầu `call plug#begin()`
4. Bên dưới ta ghi các Plugin muốn cái theo cú pháp `Plug "xxxx"` (Với xxxx là đuôi của đường dẫn github tới plugin cần cài)
5. Sau khi thêm, ta kết thúc phần cài đặt plugin bằng cách thêm `call plug#end()` vào cuối

Ví dụ:
```bash
" Gọi đầu tiên
call plug#begin('~/.vim/plugged')

" Cài plugin Shorthand notation;  https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

" Hoặc sử dụng đường dẫn trực tiếp luôn
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Cài đặt nhiều Plugin bằng cách sử |
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" Loading sau khi cài Plugin. 
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Cài plugin với branch tùy chọn
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Cài plugin bằng tag released
Plug 'fatih/vim-go', { 'tag': '*' }

" Tùy chọn khi cài plugin
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

" Cài plugin từ bên ngoài ~/.vim/plugged với post-update
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Kết thúc việc cài plugin
call plug#end()
```
Sau đó save và reload bằng lệnh `:source %` hoặc ta thoát mở lại. Sau đó gõ câu lệnh `:PlugInstall` để cài đặc các plugin nhé :D

Ngoài ra còn một số lệnh như:
- PlugUpdate: cập nhật các Plugin đến phiên bản mới nhất
- PlugClean: Xóa các Plugin đã cài nhưng không có trong config
- PlugUpgrade: Tự update chính Vim-Plug
- PlugStatus: Xem trạng thái của các Plugin
- PlugSnapshot: Tạo bản backup phòng trường hợp bị mất

---
### [Vundle](https://github.com/VundleVim/Vundle.vim)
1. Cài đặt Vundle:
```bash
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```
2. Configure Plugins:
Cho phần cài đặt cấu hình vào đầu file `.vimrc` để dùng **Vundle**. Dưới đây mình cùng đến với một ví dụ.

```bash
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
" Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Install L9 and avoid a Naming conflict if you've already installed a
" different version somewhere else.
" Plugin 'ascenator/L9', {'name': 'newL9'}

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
```

3. Cài đặt Plugins:
Để cài đặt, chúng ta khởi chạy `vim` và gõ lệnh `:PluginInstall`

Hoặc cài đặt thông qua command line: `vim +PluginInstall +qall`

# Một số plug-in phổ biến cho vim
- Một số plug-in các bạn có thể tham khảo tại. [Link](https://github.com/daemon-Lee/vim-Plug-in-Vi/tree/main/Plugin_list)

# Nguồn tham khảo
Các bạn có thể tìm đọc một số hướng dẫn dùng vim [cơ bàn](https://viblo.asia/p/vim-editor-RnB5pNOrZPG) và [nâng cao](https://viblo.asia/p/cac-cau-lenh-vim-ma-cac-developer-nen-biet-ByEZkLyglQ0) tại VIBLO trong khi mình đang hoàn thiện repo này

> Cuối cùng mình thấy dùng vscode + vim là ok nhất cho cả trải nghiệm và tốc độ :D
