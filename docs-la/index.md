---
title: LoongArch相关文档
outline: deep
---

# LoongArch官方参考手册


## **1. 龙芯架构参考手册 - 卷一：基础架构**

  该手册介绍了龙芯架构中基础架构部分的内容，包括了
  - 基础整型指令集   
  - 基础浮点指令集
  - 特权资源架构
  - 控制与状态寄存器CSR
  - 存储管理
  - 例外与中断
  - 指令编码


  等上述内容，具体可查看[这里](https://github.com/loongson/LoongArch-Documentation/releases/latest/download/LoongArch-Vol1-v1.10-CN.pdf)。

  注意：上面的指令手册包括LoongArch64架构，LoongArch32S （标准版，Standard）架构！

## **2. 龙芯架构32位精简版参考手册** 
	
  该手册介绍了龙芯架构中基础架构部分的内容，包括了
  - 基础整型指令集
  - 基础浮点指令集
  - 特权资源架构
  - 控制与状态寄存器CSR
  - 存储管理
  - 例外与中断
  - 指令编码
  - 大约71条整形指令，73条浮点指令，共计140多条

  注意：这个指令手册包括的是LoongArch32R （精简版，Reduced）架构！

  我们龙芯杯比赛使用的就是此架构。

  具体可查看[这里](https://loongson.cn/uploads/images/2025032109211238668.%E9%BE%99%E6%9E%B6%E6%9E%8432%E4%BD%8D%E7%B2%BE%E7%AE%80%E7%89%88%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C_r1p04.pdf)


## **3. LoongArch应用程序二进制接口**
 
  该手册介绍了龙架构与应用程序相关的一些规范性内容：
  - 程序调用规约
  - 寄存器使用说明
  - ELF相关内容
  - 与龙架构相关的DWARF
  - 等其他内容

  目前最新的版本是v2.50，在[这里下载](https://github.com/loongson/la-abi-specs/releases/download/v2.50/la-abi-v2.50.pdf)

  整个项目的仓库在[这里](https://github.com/loongson/la-abi-specs)。


## **4. 龙架构工具链约定**

 《Toolchain Conventions of the LoongArch™ Architecture》

  该手册介绍了龙架构工具链相关的一些规范性内容：
  - 目标指令架构Target ISA
  - 配置目标ABI
  - C/C++一些预处理器的宏定义等
  - 编译器的一些选项说明


  目前PDF版本在[这里](https://github.com/loongson/la-toolchain-conventions/releases/download/releases%2Fv1.2/la-tc-v1.2.pdf)下载。

  整个项目的仓库在[这里](https://github.com/loongson/la-toolchain-conventions)。


## **5. 龙架构汇编语言编程指导**

  该手册介绍了龙架构汇编相关的一些内容：
  - 寄存器的使用
  - 寻址模式
  - 汇编语言的指示符
  - 一些内联汇编
  - 龙架构的伪指令（宏指令）
  - 等等内容

  目前PDF版本在[这里](https://github.com/loongson/la-asm-manual/releases/download/release-1.1/la-asm-manual-v1.1.pdf)下载。

  整个项目的仓库在[这里](https://github.com/loongson/la-asm-manual)。
