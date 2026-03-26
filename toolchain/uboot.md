---
title: LoongArch Uboot
outline: deep
---


# Uboot


U-Boot（全称“Universal Boot Loader”）是**开源的嵌入式系统引导加载程序**，是嵌入式设备启动过程中连接硬件与操作系统的关键环节。它负责初始化硬件、加载操作系统内核及根文件系统，支持多种处理器架构与操作系统，广泛应用于智能设备、工业控制、物联网（IoT）等资源受限场景。


## **一、U-Boot的核心定位**  
U-Boot的本质是**“嵌入式系统的启动管家”**，其设计目标是：  
- **硬件抽象**：通过设备驱动程序（如串口、以太网、FLASH）抽象硬件细节，为操作系统提供统一的访问接口；  
- **系统引导**：加载操作系统内核（如Linux、Android）及根文件系统（如EXT4、NFS），并传递启动参数（如内存地址、控制台设备）；  
- **灵活配置**：通过环境变量（如`bootcmd`、`bootargs`）控制启动流程，支持自定义命令与扩展功能。  


## **二、U-Boot的关键功能**  
U-Boot的功能覆盖**硬件初始化**、**系统引导**、**设备管理与调试**三大类，具体包括：  
1. **硬件初始化**：  
   - 初始化CPU（如设置时钟频率、中断控制器）、内存控制器（如SDRAM、DDR）、存储设备（如NAND FLASH、SD卡）；  
   - 支持**SPL（Secondary Program Loader）**机制：当U-Boot体积过大时，先加载小体积的SPL（次级程序加载器），由SPL完成初步硬件配置（如DRAM初始化），再加载完整U-Boot。

2. **系统引导**：  
   - 支持多种启动源（如SD卡、SATA、NOR FLASH、NAND FLASH、网络（TFTP/NFS））；  
   - 兼容多种操作系统（如Linux、Android、NetBSD、VxWorks），可传递内核参数（如`root=/dev/mmcblk0p2`、`console=ttyS0,115200`）；  
   - 支持**UEFI规范**（部分实现）：可引导UEFI二进制文件（如GRUB、Linux内核），符合Embedded Base Boot Requirements（EBBR）标准。

3. **设备管理与调试**：  
   - 提供**命令行接口（CLI）**：通过串口或网络（如Telnet）输入命令，实现设备信息查询（如`bdinfo`）、FLASH读写（如`flinfo`、`erase`）、网络下载（如`tftp`、`dhcp`）；  
   - 环境变量管理：环境变量（如`bootdelay`（启动超时时间）、`ethaddr`（MAC地址））存储在持久化存储（如FLASH、EEPROM）中，控制U-Boot行为；  
   - 调试支持：通过`printenv`（打印环境变量）、`setenv`（设置环境变量）、`saveenv`（保存环境变量）等命令，方便开发与故障排查。  


## **三、U-Boot的最新进展（2025-2026年）**  
2025-2026年，U-Boot的开发重点围绕**硬件支持扩展**、**功能增强**与**生态完善**展开，主要更新包括：  
1. **版本迭代**：  
   - **U-Boot v2026.01**（2026年1月5日发布）：新增**TI AM6x系列处理器支持**（如AM62x、AM64x、AM65x），优化了板卡检测逻辑（如EEPROM读取、序列号转换）；  
   - 改进**Android启动标准**：支持`bootargs`环境变量，将启动参数与内核命令行拼接，保持与Android生态的兼容性。

2. **功能增强**：  
   - **ext4l文件系统支持**：移植Linux内核的EXT4文件系统代码，支持元数据校验和、快速提交等新特性，提升文件系统可靠性；  
   - **U-Boot Library（ulib）**：将U-Boot构建为可重用库，支持外部程序链接，方便嵌入式系统集成。

3. **生态完善**：  
   - **Toradex BSP支持**：Toradex（嵌入式系统厂商）发布的BSP（板级支持包）中，U-Boot版本升级至2024.04（基于NXP、TI的下游版本），支持其最新模块（如Verdin iMX95、Aquila AM69）；  
   - **TI U-Boot仓库更新**：TI（德州仪器）的U-Boot仓库（`ti-u-boot`）新增2026.01版本分支，优化了AM335x、AM6x等处理器的驱动与配置。


## **四、U-Boot的应用场景**  
U-Boot是**嵌入式系统的“标配”**，其应用场景包括：  
1. **智能设备**：如智能手机（如Android手机）、智能手表（如Wear OS设备），U-Boot负责加载Android内核与根文件系统；  
2. **工业控制**：如PLC（可编程逻辑控制器）、工业机器人，U-Boot的**实时性**（通过PREEMPT_RT补丁）与**可靠性**（如 watchdog 支持）满足工业场景需求；  
3. **物联网（IoT）**：如传感器节点、智能网关，U-Boot的小体积（如几百KB）与**低功耗**（如支持睡眠模式）适合资源受限的IoT设备；  
4. **开发板与评估板**：如Raspberry Pi、BeagleBone，U-Boot是默认的引导加载程序，支持快速原型开发。  


## **五、U-Boot与其他引导加载程序的对比**  
与常见的引导加载程序（如GRUB、LILO）相比，U-Boot的**嵌入式特性**是其核心优势：  
| **特性**         | **U-Boot**                              | **GRUB**                              | **LILO**                              |
|-------------------|-----------------------------------------|--------------------------------------|--------------------------------------|
| **目标环境**       | 嵌入式系统（资源受限）                   | 桌面/服务器（x86架构为主）             | 桌面/服务器（x86架构为主）             |
| **硬件支持**       | 多架构（ARM、RISC-V、x86、MIPS）          | 主要支持x86                           | 主要支持x86                           |
| **体积**           | 小（几百KB到几MB）                       | 大（几MB到几十MB）                     | 中（几MB）                             |
| **灵活性**         | 高（支持自定义命令、环境变量）             | 中（依赖配置文件`grub.cfg`）           | 低（依赖配置文件`lilo.conf`）           |
| **操作系统支持**   | 多系统（Linux、Android、VxWorks等）        | 主要支持Linux                         | 主要支持Linux                         |  


## LoongArch 的支持

boot目前正在积极的向主线合并。支持龙芯开发平台，比如2k1000, 2k500的芯片。

其主线的仓库地址为：[https://gitee.com/open-loongarch/u-boot.git](https://gitee.com/open-loongarch/u-boot.git)

- 架构相关的代码在[arch/loongarch](https://gitee.com/open-loongarch/u-boot/tree/master/arch/loongarch)

- 和开发平台相关的代码在[board/loongson](https://gitee.com/open-loongarch/u-boot/tree/master/board/loongson)
   
   支持的平台如下：
   - common
   - ls2k1000
   - ls2k300
   - ls2k500
   - ls2p500

- 2k3000相关的支持，还在补充中。


## **总结**  
U-Boot是嵌入式系统启动的**核心组件**，其**开源、灵活、多架构支持**的特性使其成为嵌入式开发者的“必备工具”。随着2025-2026年的版本迭代（如v2026.01的TI AM6x支持）与功能增强（如ext4l文件系统、ulib库），U-Boot的应用场景将进一步扩大，覆盖更多智能设备与工业控制场景。对于嵌入式开发者而言，掌握U-Boot的**配置与调试**（如环境变量设置、SPL机制）是开发嵌入式系统的关键技能之一。  



参考文档：  
- U-Boot官方网站：https://www.u-boot.org/  
- U-Boot v2026.01发布说明：https://baylibre.com/baylibre-contributions-to-u-boot-v2026-01/  
- Toradex BSP版本矩阵：https://developer-next.toradex.com/software/toradex-embedded-software/embedded-linux-release-matrix


