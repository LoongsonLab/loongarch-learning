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

安装、使用与调试方法请查看文档[龙架构开发平台]中[模拟器]部分，或查看[LoongArch架构与OS交互]文档。

## LoongArch-QEMU

LoongArch-QEMU 是 QEMU 开源模拟器对龙芯自主指令集架构 LoongArch 的完整支持实现，为开发者提供了一个无需物理龙芯硬件即可体验和开发 LoongArch 生态的强大工具。

LoongArch-QEMU 支持User mode和System mode，支持启动 LoongArch 版 Linux 发行版（如 ArchLinux、UOS、Loongnix 等），模拟包括CPU、内存、存储、网络在内的全套硬件环境。

[仓库地址](https://github.com/qemu/qemu.git)

安装、使用与调试方法请查看文档[龙架构开发平台]中[模拟器]部分，或查看[LoongArch架构与OS交互]文档。

## LoongArch32R-NEMU

基于NEMU实现的LoongArch32-Reduced模拟器

本项目基于南京大学的 NEMU 项目，向其中移植了龙芯架构32位精简版的支持，即 LoongArch32-Reduced(以下简称为 LA32R)。

为了向 LA32R 的开发者、学习者、爱好者以及“龙芯杯”大赛提供一个类似于一生一芯项目中的 difftest 环境，基于 NEMU 项目，移植了LA32R指令集。

该模拟器是一个轻量级的指令集模拟器，运行效果相当于一个单周期CPU。

## 实现情况

本项目按照《龙芯架构32位精简版参考手册》实现，目前已经实现了：

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

安装、使用与调试方法请查看文档[龙架构开发平台]中[模拟器]部分。

## LA32R-QEMU

基于开源LoongArch-QEMU构建的支持LoongArch32精简指令集的QEMU。

通过qemu（Quick Emulator），可以在宿主机上模拟运行编写的LA32R汇编程序。另外，QEMU的两种运行模式：User mode 和 System mode，LA32R-QEMU均可运行。

[仓库地址](https://gitee.com/loongson-edu/la32r-QEMU)

安装、使用与调试方法请查看文档[龙架构开发平台]中[模拟器]部分。