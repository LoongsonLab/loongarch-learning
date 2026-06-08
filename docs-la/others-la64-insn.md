---
title: LoongArch模拟器简介
outline: deep
---

# LoongArch模拟器

## **LA_EMU模拟器**

  LoongArch64模拟器，支持整型，浮点，向量指令集。能够启动Linux。

支持的指令集如下所示：

|支持的特性（Features）|目前状态（Status）|
|-|-|
|Loongarch64 base           |	✓|
|Loongarch64 privilege      |	✓|
|FP	                        |   ✓|
|LSX                        |	✓|
|LASX                       |	✓|
|Timer                      |	✓|
|Serial Port                |	✓|
|Gdb Server	                |   ✓|
|Determined events          |	✓|
|All SPEC CPU               |	✓|
|Dynamic ELF                |	✗|
|Multithread                |	✗|
|Signal                     |	✗|
|Block Device               |	✗|

指令的实现基本都在这里：[interpreter.c](https://github.com/LoongsonLab/LA_EMU/blob/master/loongarch64/interpreter.c)

[仓库地址](https://github.com/LoongsonLab/LA_EMU)

###  安装与使用

可使用以下命令进行安装:
``` bash
#  克隆官方仓库
git clone https://github.com/Open-ChipHub/LA_EMU.git
#  编译
make
```
编译完成后，在 `build/`目录下，生成两个可执行程序：`la_emu_kernel`与`la_emu_user`，分别支持系统模式仿真和用户模式仿真。

LA_EMU 启动运行时，支持的参数选项包括:
``` bash
la_emu_kernel -m n[G] -k kernel
-m Memory size(kernel mode)
-k Kernel vmlinux or checkpoint directory(kernel mode)
-d Log info, support: exec,cpu,fpu,int
-D Log file
-c Check item, support: tlb_mhit
-z Determined events
-g Enable gdbserver
-w Force enable hardware page table walker
```

系统模式下，LA_EMU 常用运行命令如下:
``` bash
./build/la_emu_kernel -w -z -n -m 8 -k ~/linux/vmlinux
```
该命令可在 LA_EMU 系统模式下，启动 Linux kernel。

## QEMU-LoongArch

QEMU-LoongArch 是 QEMU 开源模拟器对龙芯自主指令集架构 LoongArch 的完整支持实现，为开发者提供了一个无需物理龙芯硬件即可体验和开发 LoongArch 生态的强大工具。

QEMU-LoongArch 支持User mode和System mode，支持启动 LoongArch 版 Linux 发行版（如 ArchLinux、UOS、Loongnix 等），模拟包括CPU、内存、存储、网络在内的全套硬件环境。

[仓库地址](https://github.com/qemu/qemu.git)

###   安装与使用

1. 可使用以下命令，安装社区或发行版维护的预编译版本:
``` shell
#  在 Ubuntu/Deepin 系统系统上通过 apt 进行安装
sudo apt update
sudo apt install qemu-system-loongarch64 qemu-utils
```
使用这种方式安装预编译版本，可开箱即用，但 QEMU 版本可能较为落后。

2. 可使用源码编译方式，进行安装:

``` shell
#  安装依赖
sudo apt-get install libglib2.0-0 libglib2.0-dev
sudo apt install libpixman-1-0 libpixman-1-dev
sudo apt install flex
sudo apt install bison ninja-build
sudo apt install gcc g++
#  克隆官方仓库
git clone https://github.com/qemu/qemu.git
#  开始安装
cd qemu/
mkdir build
cd build
../configure --target-list=loongarch64-softmmu --enable-kvm --disable-werror --enable-vnc --enable-debug --enable-gdb
#  如果有需求，请添加 sudo 权限
make
make install
```
即可成功安装 QEMU 。

QEMU 启动运行时，支持的参数选项包括:
``` shell
qemu-system-loongarch64 \
  -m 8G \      #  指定分配内存大小
  -cpu la464-loongarch-cpu \     #  指定模拟 CPU 型号
  -machine virt \       #  指定模拟硬件凭条
  -smp 4 \        #  指定 CPU 核心数
  -bios ./QEMU_EFI.fd \       #  指定 BIOS 用于启动时加载和执行
  -device virtio-gpu-pci \       #  指定 GPU 设备
  -hda ./Loongnix-20.5.loongarch64.qcow2     #  指定虚拟机的硬盘镜像
```

## LoongArch32R-NEMU

基于NEMU实现的LoongArch32-Reduced模拟器

本项目基于南京大学的 NEMU 项目，向其中移植了龙芯架构32位精简版的支持，即 LoongArch32-Reduced(以下简称为 LA32R)。

为了向 LA32R 的开发者、学习者、爱好者以及“龙芯杯”大赛提供一个类似于一生一芯项目中的 difftest 环境，基于 NEMU 项目，移植了LA32R指令集。

该模拟器是一个轻量级的指令集模拟器，运行效果相当于一个单周期CPU。项目按照《龙芯架构32位精简版参考手册》实现，目前已经实现了：

- 除浮点指令之外的全部指令
- 除时钟中断、硬件中断、浮点例外之外的全部中断例外支持
- 全部的 CSR 寄存器
- 项数可配置的 TLB MMU
- 向 difftest 框架提供的各 API

目前尚未实现、无法实现以及不打算实现的内容：

- Cache：不打算实现
- 计时器和定时器：NEMU 无法模拟时钟周期，故无法实现
- 各种外设（包括串口）：尚未实现。本项目的最终目的是为了实现 difftest ，故外设支持的优先级靠后
- 配套的 AM （裸机运行时环境）：尚未实现。理由同上

[仓库地址](https://gitee.com/loongsonlab/la32r-nemu)

### 安装与使用

1. 安装依赖。在编译的过程中手动安装可能缺失的库（如libreadline，sdl2等）。

2. 下载源码，进行安装。
``` bash
#  克隆官方仓库
git clone https://gitee.com/wwt_panache/la32r-nemu.git
```
3. 设置环境变量：export NEMU_HOME=...，设置为 la32r-numu 主目录。

4. 编译安装。
``` bash
make la32-reduced-ref_defconfig
make
```

生成的动态链接库文件 la32r-nemu-interpreter-so ，与可执行文件 la32r-nemu-interpreter，都在 ./build 之中了。

运行时，可使用以下命令。
``` bash
./la32r-nemu-interpreter ../../../coremark.bin
```
其中，coremark.bin可换成加载程序的.bin文件。

也可通过加载Docker镜像的方式，直接使用。具体操作请查看QEMU_LA32R章节。

## QEMU-LA32R

基于开源LoongArch-QEMU构建的支持LoongArch32精简指令集的QEMU。

通过qemu（Quick Emulator），可以在宿主机上模拟运行编写的LA32R汇编程序。另外，QEMU的两种运行模式：User mode 和 System mode，LA32R-QEMU均可运行。

[仓库地址](https://gitee.com/loongson-edu/la32r-QEMU)

### 安装与使用

1.  仓库发行版中已提供x86_64和aarch64两种架构的qemu，下载解压缩后，无需编译，可直接运行。

也可以下载源码，使用以下命令，自主编译运行。
``` bash
mkdir build
cd build
../configure \
    --target-list=loongarch32-linux-user \
    --disable-werror --enable-debug
make
```

运行教程与QEMU-LoongArch基本相同。

2.  通过Docker镜像，加载运行环境。

可通过Dockerfile文件，创建运行环境。

在相应目录创建名为Dockerfile的文件，编辑以下内容。
``` shell
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /home/
RUN   sed -i 's|http://archive.ubuntu.com|http://mirrors.aliyun.com|g' /etc/apt/sources.list
RUN   sed -i 's|http://security.ubuntu.com|http://mirrors.aliyun.com|g' /etc/apt/sources.list
RUN apt-get update && apt-get install -y \
  build-essential   \
  make      \
  vim       \
  g++     \
  wget      \
  git     \
  libsnappy-dev   \
  libpixman-1-dev   \
  libepoxy-dev    \
  liblzo2-dev   \
  libcapstone-dev   \
  libspice-server-dev \
  libsdl2-2.0-0   \
  libsdl2-image-dev \
  libpmem-dev   \
  libfdt-dev    \
  libnuma-dev   \
  librdmacm-dev   \
  libslirp-dev    \
  libvdeplug-dev    \
  libdaxctl-dev   \
  libaio-dev    \
  libgtk-3-dev    \
  libvte-2.91-dev   \
  libbrlapi-dev   \
  libiscsi-dev    \
  libcurl4-gnutls-dev \
  libnfs-dev    \
  librbd-dev    \
  flex bison    \
  libreadline-dev   \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN wget https://gitee.com/loongson-edu/la32r-toolchains/releases/download/v0.0.3/loongson-gnu-toolchain-8.3-x86_64-loongarch32r-linux-gnusf-v2.0.tar.xz  \
  && tar xvf ./loongson-gnu-toolchain-8.3-x86_64-loongarch32r-linux-gnusf-v2.0.tar.xz \
  && rm ./loongson-gnu-toolchain-8.3-x86_64-loongarch32r-linux-gnusf-v2.0.tar.xz  

RUN wget https://gitee.com/loongson-edu/la32r-QEMU/releases/download/v0.0.2/la32r-QEMU-x86_64-ubuntu-22.04.tar  \
  && tar xvf ./la32r-QEMU-x86_64-ubuntu-22.04.tar   \
  && rm ./la32r-QEMU-x86_64-ubuntu-22.04.tar

RUN git clone https://gitee.com/loongsonlab/la32r-nemu.git    \
  && export NEMU_HOME=/home/la32r-nemu/NEMU/  \
  && cd la32r-nemu/NEMU/            \
  && sed -i '94s|https://github.com/ucb-bar|https://gitee.com/ourbmc|' Makefile           \
  && make la32-reduced_defconfig          \
  && make                   

COPY . .

ENV PATH="$PATH:/usr/local/bin"
```
在终端运行如下命令：
``` shell
# need sudo
docker build -t la32r .
docker run -it la32r:latest /bin/bash
```
运行成功后，可在当前路径下，查看和使用qemu-la32r,cross-toolchains-la32r与la32r-nemu等工具。

也可以下载docker镜像，直接加载。

请[点击下载:提取码: e8dc](https://pan.baidu.com/s/1pjKc22GUxnVHV8Kp23cYlQ)。

使用以下命令，加载和使用镜像：
``` shell
# need sudo
docker load -i la32r.tar
docker images # check load successful
docker run -it la32r:latest /bin/bash 
```
运行成功。