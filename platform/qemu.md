---
title: LoongArch模拟器使用说明
outline: deep
---

# LoongArch架构模拟器使用说明

## LA_EMU

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

## LoongArch-QEMU

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

## LA32R-NEMU

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

## LA32R-QEMU

仓库发行版中已提供x86_64和aarch64两种架构的qemu，下载解压缩后，无需编译，可直接运行。

也可以下载源码，使用以下命令，自主编译运行。
``` bash
mkdir build
cd build
../configure \
    --target-list=loongarch32-linux-user \
    --disable-werror --enable-debug
make
```