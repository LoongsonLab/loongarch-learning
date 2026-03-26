---
title: LoongArch支持的OS kernel
outline: deep
---


# LoongArch架构操作系统(OS)类课程


## 课程一、操作系统设计与实现：基于MaQue教学操作系统

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


## 课程二、操作系统原型-xv6实验与分析

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


## 课程三、操作系统实验ucore

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


## 课程四、操作系统内核构建实践实例NPUcore

1. 课程简介

   `NPUcore`是**西北工业大学**的操作系统内核构建实践型教学操作系统。目前`NPUcore`具有内存管理、进程管理、文件系统、网络核心功能，支持龙芯国产自主***LoongArch***架构。

   详细介绍可查看`npucore-loongarch64/README.md`。


2. 使用说明

   运行教程可查看`npucore-loongarch64/README.md#环境配置`。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/LoongsonLab/npucore-loongarch64)

## 课程五、操作系统实验：基于rcore-loongarch教学操作系统

1. 课程简介

   rCore为清华大学操作系统课程使用的教学系统，是基于ucore系统，使用rust语言重新实现的版本。

2. 使用说明

   运行教程可查看`rcore-loongarch64/README.md`。

3. 更新说明

   **该版本目前支持qemu-9.2及以上版本运行**。

   仓库地址[在这里](https://github.com/Godones/rCoreloongArch)

## 课程六、NPUcore-rust：操作系统内核构建实践实例

1. 课程简介

   `NPUcore`是西北工业大学的操作系统内核构建实践型教学操作系统。目前`NPUcore`具有内存管理、进程管理、文件系统、网络核心功能，支持龙芯国产自主***LoongArch***架构。该版本为使用rust语言重新实现版本。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段。

## 课程七、MOS：操作系统课程实验

1. 课程简介

   `MOS`为北京航空航天大学计算机学院《操作系统》课程实验成果，为基于***Loongarch***架构的简易操作系统实现，包含内存管理、进程调度、文件系统、进程间通信等核心功能。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段。

   仓库地址[在这里](https://github.com/chhss17/buaa_mos_la64)


## 课程八、NJUos：计算机操作系统

1. 课程简介

   `NJUos`为南京大学操作系统实验。实验要求深入理解操作系统概念、原理及实践操作。实验中探索操作系统的核心功能，包括进程管理、内存管理、文件系统和I/O设备控制等。具体实验内容涵盖了进程创建、撤销、调度、同步与通信、内存分配与回收、文件系统设计、I/O设备的驱动编写和中断处理等。

2. 使用说明

   暂无。

3. 更新说明

   处于调试阶段

   仓库地址[在这里](https://github.com/bzy666-666/NJU-OS-loongarch)


# LoongArch支持的OS kernel


## 1. 清华大学 Arceos
使用Rust开发的kernel, 单内核操作系统。将进程和应用APP编译到一个文件中，共用地址空间。

仓库[在此](https://github.com/Starry-OS/arceos.git)


## 2. 清华大学 StarryOS
使用Rust开发的kernel，兼容Linux系统调用（部分还在完善中），复用了ArceOS代码。

仓库[在此](https://github.com/Starry-OS/StarryOS.git)


## 3. 西北工业大学NPUCore
更多的资料可以访问[仓库](https://github.com/Starry-OS/StarryOS.git)


## 4. 杭州电子科技大学NoAxiom-OS
NoAxiom 操作系统是由杭州电子科技大学NoAxiom团队开发的一款基于 Rust 的宏内核操作系统，能够在 RISC-V64 和 ***LoongArch64*** 两种架构上运行。系统采用 Rust 的无栈协程与异步语法实现了异步调度，在 I/O 方面具备优秀性能。

仓库[在此](https://gitlab.eduxiji.net/educg-group-32146-2710490/T202510336995214-3416.git)


## 5. 哈尔滨工业大学(深圳)Chronix
Chronix 是一个使用 Rust 实现、支持 RISCV-64 和 ***Loongarch-64*** 硬件平台的多核宏内核操作系统。
“Chron” 源自希腊语 “χρόνος”（chronos），意为 “时间”。代表了我们的 OS 具有优异的实时性、强悍的性能。
后缀“-ix”致敬类 Unix 系统，代表了我们的 OS 具有兼容性以及开源属性。

仓库[在此](https://gitlab.eduxiji.net/educg-group-32146-2710490/T202518123995568-2656.git)


## 6.哈尔滨工业大学(深圳)Nighthawk OS 
Nighthawk OS 是使用 Rust 编写，支持 RISC-V 和 ***LoongArch*** 指令集架构，采用异步无栈协程架构的操作系统。

仓库[在此](https://gitlab.eduxiji.net/educg-group-32146-2710490/T202518123995755-1211.git)


## 7.哈尔滨工业大学RocketOS 
RocketOS 是一款采用 Rust 语言开发的现代化宏内核操作系统，支持 RISC-V 和 ***LoongArch*** 架构。该系统从最小内核开始开发，采用同步栈式设计架构，集成了完整的中断处理机制、进程管理系统、内存管理模块、文件系统以及网络协议栈等核心组件，通过系统调用接口为用户程序提供高效可靠的服务支持

仓库[在此](https://gitlab.eduxiji.net/educg-group-32146-2710490/T202510213995926-3349.git)


## 8.哈尔滨工业大学(深圳)Del0n1x
Del0n1x 是一个使用 Rust 语言编写的同时适配 RISC-V64 和 ***LoongArch64*** 的跨平台操作系统，目标是实现一个 Linux 兼容的多核操作系统，支持进程调度、文件系统、网络等功能。

仓库[在此](https://gitlab.eduxiji.net/educg-group-32146-2710490/T202518123995600-3446.git)


# 其他操作系统

## 1. asterinas(星绽)

星绽（英文名：Asterinas）是一个*安全*、*快速*、*通用*的操作系统内核。
它提供于Linux相同的ABI，可无缝运行Linux应用，
但比Linux更加*内存安全*和*开发者友好*。

支持***LoongArch***架构。

* 星绽在内存安全性方面远胜Linux。
它使用Rust作为唯一的编程语言，
并将*unsafe Rust*的使用限制在一个明确定义且最小的可信计算基础（TCB）上。
这种新颖的方法，
被称为[框内核架构](https://asterinas.github.io/book/kernel/the-framekernel-architecture.html)，
使星绽成为一个更安全、更可靠的内核选择。

* 星绽在开发者友好性方面优于Linux。
它赋能内核开发者们
（1）使用生产力更高的Rust编程语言，
（2）利用一个专为内核开发者设计的工具包（称为[OSDK](https://asterinas.github.io/book/osdk/guide/index.html)）来简化他们的工作流程，
（3）享受[MPL](#License)所带来的灵活性，
可自由选择开源或闭源他们为星绽所开发的内核模块或驱动。

仓库[在此](https://github.com/asterinas/asterinas)

## 2. DragonOS

DragonOS龙操作系统是一个面向云计算轻量化场景的，完全自主内核的，提供Linux二进制兼容性的64位操作系统，旨在为容器化工作负载提供轻量级、高性能的解决方案。它使用Rust语言进行开发，以提供更好的可靠性。

DragonOS开源社区成立于2022年7月，完全商业中立。我们热烈欢迎感兴趣的开发者和爱好者加入我们！

DragonOS具有优秀的、完善的架构设计。相比于同体量的其他系统，DragonOS支持eBPF、虚拟化。当前正在大力推进容器支持、云平台支持、riscv支持等工作，以及编译器、应用软件的移植。力求在5年内实现生产环境大规模应用。

DragonOS目前在社区驱动下正在快速发展中，目前DragonOS已经实现了约1/4的Linux接口，在未来我们将提供对Linux的100%兼容性，并且提供新特性。

支持***LoongArch***架构。

仓库[在此](https://github.com/DragonOS-Community/DragonOS.git)


## 3. RT-Thread
RT-Thread诞生于2006年，是一款以开源、中立、社区化发展起来的物联网操作系统。 RT-Thread主要采用 C 语言编写，浅显易懂，且具有方便移植的特性（可快速移植到多种主流 MCU 及模组芯片上）。RT-Thread把面向对象的设计方法应用到实时系统设计中，使得代码风格优雅、架构清晰、系统模块化并且可裁剪性非常好。

RT-Thread有完整版和Nano版，对于资源受限的微控制器（MCU）系统，可通过简单易用的工具，裁剪出仅需要 3KB Flash、1.2KB RAM 内存资源的 NANO 内核版本；而相对资源丰富的物联网设备，可使用RT-Thread完整版，通过在线的软件包管理工具，配合系统配置工具实现直观快速的模块化裁剪，并且可以无缝地导入丰富的软件功能包，实现类似 Android 的图形界面及触摸滑动效果、智能语音交互效果等复杂功能。

仓库[在此](https://github.com/RT-Thread/rt-thread.git)

***LoongArch*** 支持的版本[仓库地址](https://github.com/LoongsonLab/rt-thread.git)


## 4. NXOS
NXOS是Next XBook Operating System的意思，是一个跨平台的简洁、高性能、高稳定性的支持多核的操作系统内核，它将应用于桌面操作系统领域，服务器操作系统领域以及移动终端操作系统领域。

我们以简洁、高效、稳定为核心，用比较简洁且高效的方式去实现一些功能，去掉一些复杂，冗杂的功能，化繁为简。

我们的目标是针对不同的应用场景，可以做不同的裁剪，来实现性能最优化。 例如对于桌面操作系统，我们允许适当提高交互线程的优先级，运行时长等，来提升交互效果。 在服务器操作系统中，我们将做开启磁盘在内存中的缓存，使得再次加载程序时可以直接从内存中加载， 来减少网络服务程序的加载时间，提升服务器的性能。 在移动端操作系统中，我们将更多考虑到设备资源的使用优化，减少功耗，提高待机时长等。

***LoongArch***架构正在支持中...

仓库[在此](https://gitee.com/BookOS/nxos.git)


## 5. ByteOS

使用Rust开发的小型操作系统，支持***LoongArch***架构。

仓库[在此](https://github.com/Byte-OS/ByteOS.git)

