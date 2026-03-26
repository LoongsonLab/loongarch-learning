---
title: LoongArch指令C语言实现
outline: deep
---

# LoongArch64指令C语言模拟实现

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


仓库的地址在[这里](https://github.com/LoongsonLab/LA_EMU)


# LoongArch特区态指令的一些说明

主要是针对龙架构特权态的进一步说明，用C语言的模拟方式，解释特权态指令，更加的贴切。

下面是一些内容列表：

- 状态寄存器。介绍了 LoongArch 架构下包含的所有状态寄存器

- 状态寄存器指令。介绍了 LoongArch 架构下针对状态寄存器的特权态指令

- 配置寄存器指令。介绍了 LoongArch 架构下读取 CPU 配置寄存器的特权态指令

- 缓存指令。介绍了 LoongArch 架构下针对 Cache 操作的特权态指令

- TLB 指令。介绍了 LoongArch 架构下针对 TLB 操作的特权态指令

- 页表指令。介绍了 LoongArch 架构下用于页表维护的特权态指令

- 例外与异常指令。介绍了 LoongArch 架构下处理例外和异常状态的特权态指令


1. CSR寄存器             
2. CSR指令             
	2.1. CSRRD指令             
	2.2. CSRWR指令             
	2.3. CSRXCHG指令             
3. IOCSR指令             
	3.1. IOCSRRD指令             
	3.2. IOCSRWR指令             
4. CPUCFG 指令             
5. CACOP 指令             
6. TLB 与页表指令             
	6.1. TLB 相关指令             
	6.2. 页表查找指令             
	6.3. 应用示例             
7. ERTN指令             
8. IDLE指令             
9. SysCALL指令   


文档的说明在[这里](https://os-kernel-with-loong64-doc.readthedocs.io/en/latest/context/privilege_isa/index.html)


# LoongArch32R指令C语言模拟实现


基于NEMU实现的LoongArch32-Reduced模拟器

本项目基于南京大学的 NEMU 项目，向其中移植了龙芯架构32位精简版的支持，即 LoongArch32-Reduced(以下简称为 LA32R)。

为了向 LA32R 的开发者、学习者、爱好者以及“龙芯杯”大赛提供一个类似于一生一芯项目中的 difftest 环境，我产生了向 NEMU 中移植    
LA32R ，之后基于 difftest 框架实现 LA32R difftest 的想法。于是该项目诞生了。

NEMU 模拟器是一个轻量级的指令集模拟器，运行效果相当于一个单周期CPU。


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


仓库地址在[这里](https://gitee.com/loongsonlab/la32r-nemu)

