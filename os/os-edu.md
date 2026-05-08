---
title: LoongArch教学OS
outline: deep
---

# LoongArch教学OS

此处收集LoongArch教学OS及其对应课程，信息汇总如下：

|  课程   | 名称  | 链接 |
|  :---:  | :---:  | :---: |
|  操作系统设计与实现：基于MaQue教学操作系统 | MaQue | [仓库地址](https://github.com/LoongsonLab/maqueos/) |
| 操作系统原型-xv6实验与分析  | xv6 | [仓库地址](https://github.com/LoongsonLab/xv6-loongarch-exp) |
| 操作系统实验：基于ucore-loongarch教学操作系统| ucore | [仓库地址](https://github.com/LoongsonLab/ucore-loongarch64) |
| 操作系统实验：基于rcore-loongarch教学操作系统| rcore| [仓库地址](https://github.com/Godones/rCoreloongArch) |
| 操作系统内核构建实践实例NPUcore| NPUcore| [仓库地址](https://github.com/LoongsonLab/npucore-loongarch64) |
| NJUos：计算机操作系统| NJUos | [仓库地址](https://github.com/bzy666-666/NJU-OS-loongarch) |
| MOS：操作系统课程实验| MOS | [仓库地址](https://github.com/chhss17/buaa_mos_la64) |

## 操作系统设计与实现：基于MaQue教学操作系统

1. 课程简介

   `MaQueOS`是一个开源的基于***LoongArch***架构的教学版操作系统。作为一个教学版操作系统，MaQueOS的代码虽然只有1000多行，但是它实现了操作系统最核心的功能子系统：进程管理、内存管理、文件系统、中断管理和外设驱动，并为应用程序提供了16个系统调用接口。
   
   
   详细介绍可查看`maqueos/README.md`。

   点击查看[在线课程](https://www.bilibili.com/video/BV1EH4y1c7WX/?share_source=copy_web)。

   `doc/maqueos`目录下包含相应教材与实验指导书。

2. 使用说明

   运行教程可查看`maqueos/README.md#二、编译运行调试`，或参考实验指导书。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/LoongsonLab/maqueos/)


## 操作系统原型-xv6实验与分析

1. 课程简介

   `xv6`是麻省理工的一个教学操作系统，是 Dennis Ritchie 和 Ken Thompson 的 Unix 的重新实现版本 6 (v6)。 被广泛应用于操作系统教学课程。

   本项目本项目将`xv6`移植到***LoongArch***架构上。

   详细介绍可查看`xv6-loongarch-exp/README.md`。

   `doc/xv6-loongarch-exp`目录下包含相应实验指导书。

2. 使用说明

   运行可查看`xv6-loongarch-exp/README.md#更新`，或查看实验指导书。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/LoongsonLab/xv6-loongarch-exp)


## 操作系统实验ucore

1. 课程简介

   本课程为重庆大学操作系统实验，其基于`ucore-thumips`，移植到***Loongarch***上。

   详细介绍可查看`ucore-loongarch64/README.md`。

   点击查看[在线课程](https://space.bilibili.com/12553542/lists)。

   本课程提供在线指导手册，请[点击查看](https://cyyself.github.io/ucore_la32_docs/).

2. 使用说明

   运行教程可查看`ucore-loongarch64/README.md#使用教程`。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/LoongsonLab/ucore-loongarch64)


## 操作系统内核构建实践实例NPUcore

1. 课程简介

   `NPUcore`是**西北工业大学**的操作系统内核构建实践型教学操作系统。目前`NPUcore`具有内存管理、进程管理、文件系统、网络核心功能，支持龙芯国产自主***LoongArch***架构。

   详细介绍可查看`npucore-loongarch64/README.md`。


2. 使用说明

   运行教程可查看`npucore-loongarch64/README.md#环境配置`。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/LoongsonLab/npucore-loongarch64)

## 操作系统实验：基于rcore-loongarch教学操作系统

1. 课程简介

   rCore为清华大学操作系统课程使用的教学系统，是基于ucore系统，使用rust语言重新实现的版本。

2. 使用说明

   运行教程可查看`rcore-loongarch64/README.md`。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/Godones/rCoreloongArch)

## NPUcore-rust：操作系统内核构建实践实例

1. 课程简介

   `NPUcore`是西北工业大学的操作系统内核构建实践型教学操作系统。目前`NPUcore`具有内存管理、进程管理、文件系统、网络核心功能，支持龙芯国产自主***LoongArch***架构。该版本为使用rust语言重新实现版本。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段。

## MOS：操作系统课程实验

1. 课程简介

   `MOS`为北京航空航天大学计算机学院《操作系统》课程实验成果，为基于***Loongarch***架构的简易操作系统实现，包含内存管理、进程调度、文件系统、进程间通信等核心功能。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段。

   仓库地址[在这里](https://github.com/chhss17/buaa_mos_la64)


## NJUos：计算机操作系统

1. 课程简介

   `NJUos`为南京大学操作系统实验。实验要求深入理解操作系统概念、原理及实践操作。实验中探索操作系统的核心功能，包括进程管理、内存管理、文件系统和I/O设备控制等。具体实验内容涵盖了进程创建、撤销、调度、同步与通信、内存分配与回收、文件系统设计、I/O设备的驱动编写和中断处理等。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段

   仓库地址[在这里](https://github.com/bzy666-666/NJU-OS-loongarch)