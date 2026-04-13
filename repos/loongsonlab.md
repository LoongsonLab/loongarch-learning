---
title: 龙芯实验室开源仓库
outline: deep
---

# LoongsonLab 开源仓库

## 模拟器

### LA_EMU

LA_EMU 是一个 LoongArch64 模拟器，支持整型，浮点，向量指令集。能够启动Linux, 运行大型测试。

仓库链接：https://github.com/Open-ChipHub/LA_EMU.git

### LARS

LARS,龙芯汇编程序运行模拟器（LoongArch Assembler and Runtime Simulator），是支持LoongArch 32精简指令集的汇编程序模拟器。实现汇编程序的编写、编译、运行、调试等功能，并且提供了诸多如数据通路模拟、分支记录等拓展功能，以供LoongArch汇编语言的学习。

仓库链接：https://github.com/LoongsonLab/LARS.git

## 开源异构处理器平台

### 异构多核处理器

LoongChipX是一个开源的异构多核处理器平台。包括多发射乱序高性能处理器LabCore364，五级流水的LabCore164，支持LoongArch32的小核LabCore132，包括后续开发中的六发射高性能处理器。我们旨在构建一个支持多核异构的处理器平台，提供仿真，验证的功能。包括相应的软件支持，如linux内核，gcc和llvm编译器等。

仓库链接：https://github.com/Open-ChipHub/LoongChipX.git

### DV验证工具

LA64是一个LA64架构的随机代码生成器，用于生成随机代码，作为处理器输入，与模拟器运行结果进行对比。

仓库链接：https://github.com/Open-ChipHub/loong64-dv.git

### 调试工具

OpenOCD 是一款上板调试工具，已实现并支持 LoongChipX 平台。

仓库链接：https://github.com/Open-ChipHub/OpenOCD.git

### 软件开发工具包

LoongArch-SDK 提供了 LoongArch 架构下构建系统或软件所需要的开发工具包，包括：交叉编译工具,rootfs, uefi 固件等。

仓库链接：https://github.com/Open-ChipHub/LoongArch-SDK.git

## 开源操作系统

### Starry OS

StarryOS，一个基于ArceOS实现的宏内核。

仓库链接：https://github.com/LoongsonLab/StarryOS-LoongArch.git

### RT-Thread

RT-Thread 是一个开源的物联网端实时操作系统(RTOS)。

仓库链接：https://github.com/LoongsonLab/rt-thread.git

## 开放文档

关于 LoongChipX 平台的开放说明文档，仓库链接：https://github.com/Open-ChipHub/LoongChipX-doc.git

关于 LoongArch 架构与操作系统底层交互的开放文档说明，仓库链接：https://github.com/LoongsonLab/OS_kernel_with_loong64_doc.git