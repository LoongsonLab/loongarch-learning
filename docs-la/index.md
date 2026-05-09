---
title: 官方参考手册
outline: deep
---

# 官方参考手册

本页收录龙芯公开发布的 **LoongArch 官方参考手册** 与相关规范文档。**点击标题**将直接打开该手册，展开后可阅读内容简介与下载开源仓库。

<div class="past-loongson-topics-page docs-la-ref-manuals">

<details>
<summary>
  <a href="https://github.com/loongson/LoongArch-Documentation/releases/latest/download/LoongArch-Vol1-v1.10-CN.pdf"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    龙芯架构参考手册 · 卷一：基础架构
  </a>
</summary>

<p class="past-topic-intro">本卷阐述龙芯架构中的<strong>基础架构</strong>部分，是理解指令系统、特权机制与异常模型的核心文档。</p>

<p class="past-topic-h">主要内容</p>

<ul>
<li>基础整型指令集</li>
<li>基础浮点指令集</li>
<li>特权资源架构</li>
<li>控制与状态寄存器 CSR</li>
<li>存储管理</li>
<li>例外与中断</li>
<li>指令编码</li>
</ul>

::: tip 范围说明
本卷适用于 **LoongArch64** 与 **LoongArch32S**（标准版，Standard）。
:::

</details>

<details>
<summary>
  <a href="https://loongson.cn/uploads/images/2025032109211238668.%E9%BE%99%E6%9E%B6%E6%9E%8432%E4%BD%8D%E7%B2%BE%E7%AE%80%E7%89%88%E5%8F%82%E8%80%83%E6%89%8B%E5%86%8C_r1p04.pdf"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    龙芯架构 32 位精简版参考手册（LoongArch32R）
  </a>
</summary>

<p class="past-topic-intro">本手册在<strong>精简指令集</strong>范围内说明基础架构，约 71 条整型指令、73 条浮点指令，合计 140 余条，面向嵌入式与教学等场景。</p>

<p class="past-topic-h">主要内容</p>

<ul>
<li>基础整型指令集</li>
<li>基础浮点指令集</li>
<li>特权资源架构</li>
<li>控制与状态寄存器 CSR</li>
<li>存储管理</li>
<li>例外与中断</li>
<li>指令编码</li>
</ul>

::: tip 范围说明
**龙芯杯**等赛事采用的 LA32R 即基于该精简架构。
:::

</details>

<details>
<summary>
  <a href="https://github.com/loongson/la-abi-specs/releases/download/v2.50/la-abi-v2.50.pdf"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    LoongArch 应用程序二进制接口（ABI）
  </a>
</summary>

<p class="past-topic-intro">说明应用程序与系统、工具链之间的二进制接口约定，是编写与移植用户态程序的重要规范。</p>

<p class="past-topic-h">主要内容</p>

<ul>
<li>程序调用规约</li>
<li>寄存器使用说明</li>
<li>ELF 相关内容</li>
<li>与龙架构相关的 DWARF</li>
</ul>

<p class="past-topic-h">仓库</p>

<div class="dlmi-actions">
  <a class="dlmi-chip dlmi-chip--repo" href="https://github.com/loongson/la-abi-specs" target="_blank" rel="noopener noreferrer"><span class="dlmi-chip__kind">仓库</span><span class="dlmi-chip__text">la-abi-specs</span></a>
</div>

</details>

<details>
<summary>
  <a href="https://github.com/loongson/la-toolchain-conventions/releases/download/releases%2Fv1.2/la-tc-v1.2.pdf"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    龙架构工具链约定
  </a>
</summary>

<p class="past-topic-intro"><em>《Toolchain Conventions of the LoongArch™ Architecture》</em>：约定编译器、汇编器与链接器应遵循的目标特征与命令行选项等，便于构建可移植的工具链与构建系统。</p>

<p class="past-topic-h">主要内容</p>

<ul>
<li>目标指令架构（Target ISA）</li>
<li>配置目标 ABI</li>
<li>C/C++ 预处理器中与龙架构相关的宏</li>
<li>编译器选项说明</li>
</ul>

<p class="past-topic-h">仓库</p>

<div class="dlmi-actions">
  <a class="dlmi-chip dlmi-chip--repo" href="https://github.com/loongson/la-toolchain-conventions" target="_blank" rel="noopener noreferrer"><span class="dlmi-chip__kind">仓库</span><span class="dlmi-chip__text">la-toolchain-conventions</span></a>
</div>

</details>

<details>
<summary>
  <a href="https://github.com/loongson/la-asm-manual/releases/download/release-1.1/la-asm-manual-v1.1.pdf"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    龙架构汇编语言编程指导
  </a>
</summary>

<p class="past-topic-intro">介绍龙架构汇编语言要素与常用写法，配合工具链进行底层开发与调试。</p>

<p class="past-topic-h">主要内容</p>

<ul>
<li>寄存器的使用</li>
<li>寻址模式</li>
<li>汇编语言指示符</li>
<li>内联汇编</li>
<li>龙架构伪指令（宏指令）</li>
</ul>

<p class="past-topic-h">仓库</p>

<div class="dlmi-actions">
  <a class="dlmi-chip dlmi-chip--repo" href="https://github.com/loongson/la-asm-manual" target="_blank" rel="noopener noreferrer"><span class="dlmi-chip__kind">仓库</span><span class="dlmi-chip__text">la-asm-manual</span></a>
</div>

</details>

</div>
