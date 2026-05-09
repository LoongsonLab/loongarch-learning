---
title: LoongArch架构与OS交互
outline: deep
---

# LoongArch 架构与 OS 交互

此文档结合代码例子**详细介绍龙架构底层如何与操作系统内核配合**。读完这个文档，可以**很快地**为操作系统内核增加 **LoongArch** 支持。

<p class="os-interaction-read-wrap">
  <a href="https://github.com/LoongsonLab/OS_kernel_with_loong64_doc" target="_blank" rel="noopener noreferrer" class="os-interaction-read-btn">点击阅读</a>
</p>


## 内容整体概览

本文档是对**LoongArch架构与底层操作系统**的紧密相关文档，类似于对linux内核的目录arch/loongarch下做个说明。整体涵盖方向包括但不限于：

- **特权态指令**的一些说明，结合模拟器做出伪代码的说明
- **DMW**的使用与说明，以及使用的场合说明
- **LA的内存管理系统**，包括TLB相关寄存器的初始化，LA的TLB refill指令，tlb的使用等等（这部分也是难点）
- **LA的中断系统**，如何更加采用一个合理的中断安排
- **LoongArch的新世界与旧世界**，我们为什么要采用新世界，如何使用新世界
- **LoongArch ABI2.0**的介绍与使用，伪代码实例
- 如何**调试一个内核**，以一个内核为例，如何使用上游的qemu以及gdb支持调试操作系统

