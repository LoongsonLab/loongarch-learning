---
title: LoongArch支持的OS kernel
outline: deep
---

# LoongArch开源kernel

支持LoongArch架构的开源操作系统，汇总如下：

|  名称  | 特性 | 链接 |
|  :---: | :---: | :---: |
| Arceos| Rust语言开发；单内核 |[仓库地址](https://github.com/Starry-OS/arceos.git)|
| StarryOS| Rust语言开发；兼容Linux系统调用 |[仓库地址](https://github.com/Starry-OS/StarryOS.git)|
| asterinas| Rust语言开发；高安全性 |[仓库地址](https://github.com/asterinas/asterinas)|
| DragonOS| 面向云计算轻量化 |[仓库地址](https://github.com/DragonOS-Community/DragonOS.git)|
| RT-Thread| 物联网领域专用 |[仓库地址](https://github.com/LoongsonLab/rt-thread.git)|
| NXOS| 跨平台、高性能|[仓库地址](https://gitee.com/BookOS/nxos.git)|
| ByteOS| Rust语言开发；小型OS|[仓库地址](https://github.com/Byte-OS/ByteOS.git)|

##	清华大学 Arceos
使用Rust开发的kernel, 单内核操作系统。将进程和应用APP编译到一个文件中，共用地址空间。

仓库[在此](https://github.com/Starry-OS/arceos.git)


## 	清华大学 StarryOS
使用Rust开发的kernel，兼容Linux系统调用（部分还在完善中），复用了ArceOS代码。

仓库[在此](https://github.com/Starry-OS/StarryOS.git)

##	asterinas(星绽)

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

## 	DragonOS

DragonOS龙操作系统是一个面向云计算轻量化场景的，完全自主内核的，提供Linux二进制兼容性的64位操作系统，旨在为容器化工作负载提供轻量级、高性能的解决方案。它使用Rust语言进行开发，以提供更好的可靠性。

DragonOS开源社区成立于2022年7月，完全商业中立。我们热烈欢迎感兴趣的开发者和爱好者加入我们！

DragonOS具有优秀的、完善的架构设计。相比于同体量的其他系统，DragonOS支持eBPF、虚拟化。当前正在大力推进容器支持、云平台支持、riscv支持等工作，以及编译器、应用软件的移植。力求在5年内实现生产环境大规模应用。

DragonOS目前在社区驱动下正在快速发展中，目前DragonOS已经实现了约1/4的Linux接口，在未来我们将提供对Linux的100%兼容性，并且提供新特性。

支持***LoongArch***架构。

仓库[在此](https://github.com/DragonOS-Community/DragonOS.git)


## RT-Thread
RT-Thread诞生于2006年，是一款以开源、中立、社区化发展起来的物联网操作系统。 RT-Thread主要采用 C 语言编写，浅显易懂，且具有方便移植的特性（可快速移植到多种主流 MCU 及模组芯片上）。RT-Thread把面向对象的设计方法应用到实时系统设计中，使得代码风格优雅、架构清晰、系统模块化并且可裁剪性非常好。

RT-Thread有完整版和Nano版，对于资源受限的微控制器（MCU）系统，可通过简单易用的工具，裁剪出仅需要 3KB Flash、1.2KB RAM 内存资源的 NANO 内核版本；而相对资源丰富的物联网设备，可使用RT-Thread完整版，通过在线的软件包管理工具，配合系统配置工具实现直观快速的模块化裁剪，并且可以无缝地导入丰富的软件功能包，实现类似 Android 的图形界面及触摸滑动效果、智能语音交互效果等复杂功能。

仓库[在此](https://github.com/RT-Thread/rt-thread.git)

***LoongArch*** 支持的版本[仓库地址](https://github.com/LoongsonLab/rt-thread.git)


## NXOS
NXOS是Next XBook Operating System的意思，是一个跨平台的简洁、高性能、高稳定性的支持多核的操作系统内核，它将应用于桌面操作系统领域，服务器操作系统领域以及移动终端操作系统领域。

我们以简洁、高效、稳定为核心，用比较简洁且高效的方式去实现一些功能，去掉一些复杂，冗杂的功能，化繁为简。

我们的目标是针对不同的应用场景，可以做不同的裁剪，来实现性能最优化。 例如对于桌面操作系统，我们允许适当提高交互线程的优先级，运行时长等，来提升交互效果。 在服务器操作系统中，我们将做开启磁盘在内存中的缓存，使得再次加载程序时可以直接从内存中加载， 来减少网络服务程序的加载时间，提升服务器的性能。 在移动端操作系统中，我们将更多考虑到设备资源的使用优化，减少功耗，提高待机时长等。

***LoongArch***架构正在支持中...

仓库[在此](https://gitee.com/BookOS/nxos.git)


## ByteOS

使用Rust开发的小型操作系统，支持***LoongArch***架构。

仓库[在此](https://github.com/Byte-OS/ByteOS.git)

