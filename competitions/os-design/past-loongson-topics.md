---
title: 历年龙芯赛题
outline: deep
---

# 往年龙芯赛题

本页汇总往届大赛中与「龙芯 / LoongArch」相关的**功能挑战等赛道赛题**。


## 2025年

<div class="past-loongson-topics-page">

<!-- 快速入口：先把所有仓库集中列出来，方便直接点 -->
<div class="past-topic-repo">
赛题仓库快速入口：

- [proj297 · 开源操作系统的LoongArch移植-NXOS内核](https://github.com/oscomp/proj297-LoongArch-porting---NXOS-kernel)
- [proj369 · 基于3C6000的hpl性能分析与优化](https://github.com/oscomp/Proj369-3C6000_HPL_LoongArch_Loongson)
- [proj370 · 鸿蒙小型系统在龙芯平台的实现](https://github.com/oscomp/Proj370-OpenHarmony_Lite_LoongArch_Loongson)
- [proj371 · rt-thread在龙芯平台的实现](https://github.com/oscomp/Proj371-RT-Thread_LoongArch_Loongson)
- [proj372 · 基于 LoongArch的OpenHarmony音频子系统移植与实现](https://github.com/oscomp/Proj372-OpenHarmony_ALSA_LoongArch_Loongson)
- [proj373 · QEMU龙芯实体主板模拟器开发](https://github.com/oscomp/Proj373-QEMU_LoongArch_Loongson)
- [proj374 · Sanitizer动态支持LoongArch多种VMA（虚拟内存区域）配置](https://github.com/oscomp/Proj374-Sanitizer_VMA_LoongArch_Loongson)
- [proj375 · RenderDoc性能分析工具LoongArch 移植与优化](https://github.com/oscomp/Proj375-RenderDoc_LoongArch_Loongson)
- [proj393 · 基于loongArch的桌面环境移植与运行时适配](https://github.com/oscomp/Proj393-Desktop_Env_LoongArch_Loongson)
- [proj415 · onnxruntime支持deepseek大模型并进行算子优化](https://github.com/oscomp/proj415-ONNXRuntime_DeepSeek_LoongArch_Loongson)

</div>

</div>



## 2024年

<div class="past-loongson-topics-page">

<details>
<summary>
  <a href="https://github.com/oscomp/proj94-la-zircon"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj94 · 开源操作系统的 LoongArch 移植 — Google Zircon 内核
  </a>
</summary>

<p class="past-topic-intro">Zircon 是谷歌新一代开源操作系统 Fuchsia 的内核。</p>

<p class="past-topic-h">特点</p>

<ul>
<li>微内核设计</li>
<li>安全、通用、高性能</li>
<li>是否替代安卓等生态定位仍在演进中</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li>工具链、GN 构建系统、CIPD 包管理、处理器架构、微内核、启动流程与规范等</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li>剥离可参考的代码：<a href="https://github.com/PanQL/zircon" target="_blank" rel="noopener noreferrer">点击跳转</a></li>
<li>已有初步移植的 LoongArch 版本（可参考本科毕设类工作）</li>
<li>Rust 重写的 Zircon（zCore）：<a href="https://github.com/rcore-os/zCore" target="_blank" rel="noopener noreferrer">点击跳转</a></li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>使用较多现代工具链与构建方式，相对常见 Linux 等宏内核引入不少新概念，代码规模大，上手曲线陡</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj212-la32-yocto"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj212 · 支持 32 位 LoongArch（LA32）的 Yocto 系统
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj212-la32-yocto" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-intro">yocto是嵌入式领域的常用工具：嵌入式发行版“母鸡”。基于Linux和开源软件构建嵌入式小系统常用buildroot或者yocto。</p>


<p class="past-topic-h">涉及知识</p>

<ul>
<li>操作系统发行版从零开始的构建：工具链、构建工具、脚本、开源软件编译、配置、打包等</li>
<li>LoongArch架构及其软件生态</li>

</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li>yocto上游社区已经支持LoongArch64</li>
<li>龙芯杯的LA32r环境： <a href="https://gitee.com/loongson-edu/" target="_blank" rel="noopener noreferrer">点击跳转</a></li>

</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>LA32工具链不完全成熟; yocto新概念和工具较多
</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj241-la-pa"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj241 · 南大 PA 实验的 LoongArch 支持
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj241-la-pa" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h"> 南京大学计算机系统基础课程实验</p>

<ul>
<li>课程地址： <a href="https://nju-projectn.github.io/ics-pa-gitbook/ics2022" target="_blank" rel="noopener noreferrer">点击跳转</a></li>
<li> 从零开始实现一个计算机模拟器，并让它运行仙剑游戏</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li>计算机工作原理、硬件和操作系统、应用之间的互动，计算机层次抽象</li>
<li>各类编程工具和技巧</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li>已经有基础的LoongArch32r支持，难度大幅度下降；可设计新实验</li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li> 软硬协同，需对计算机各个层次有一定理解</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj332-la-Mars"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj332 · LoongArch 汇编教学系统
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj332-la-Mars" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h">知名汇编教学工具</p>

<ul>
<li> Patterson & Henessy大神的计算机组成与设计课程教学工具，国内也有不少高校使用</li>
<li> 不一定照搬，实现类似功能即可</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li> LoongArch指令集、汇编、编译器、Java/Web程序设计</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li> Mars有源代码</li>
<li> 类似的工具还有更新一些的</li>
<li>类似的工具还有更新一些的：  <a href="https://github.com/61c-teach/venus" target="_blank" rel="noopener noreferrer">点击跳转</a></li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>需要对LoongArch指令集和汇编有一定了解</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj333-la-qemu-instrument"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj333 · 基于 QEMU 的龙架构平台高性能插桩工具
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj333-la-qemu-instrument" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h">参考Intel pintool实现丰富的插桩API</p>

<ul>
<li>地址：  <a href="https://www.intel.com/content/www/us/en/developer/overview.html" target="_blank" rel="noopener noreferrer">点击跳转</a></li>
<li>在二进制代码指定位置插入钩子，实现收集信息或者干预执行等目的，比如统计运行的总指令数，某个函数调用次数，打印函数参数等</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li> 二进制翻译器、指令集、插桩工具、性能分析等</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li>已有可工作的基础代码，在此基础上进行API扩展，演示案例添加，性能提升等进一步工作</li>
<li>地址：  <a href=" https://github.com/foxsen/qemu-instrument/tree/instru" target="_blank" rel="noopener noreferrer">点击跳转</a></li>

</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>二进制翻译</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj334-la-llama.cpp"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj334 · llama.cpp 的龙芯平台移植与优化
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj334-la-llama.cpp" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h">在龙芯平台玩AI大模型推理</p>

<ul>
<li>解决可能的移植适配问题</li>
<li>性能优化：利用向量指令优化的blas库等，在龙芯3A6000上尽量优化模型运行速度</li>
<li> 对比评测各类大模型，对其性能表现进行分类，挑出在不同条件下可用的模型（有无加速、有无GPU等）</li>
<li>做一些有趣的展示应用</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li>程序性能分析、优化、AI大模型（推理端）等</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li> 龙芯已经有一些向量优化过的库和运行时可参考，如blas, onnx等</li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>程序优化</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj335-la-Graal"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj335 · 基于 LoongArch 架构的 Graal 编译器移植
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj335-la-Graal" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h">Graal Java虚拟机移植</p>

<ul>
<li> 解决可能的移植适配问题</li>
</ul>

<p class="past-topic-h">涉及知识</p>

<ul>
<li> Java虚拟机、JIT代码生成、LoongArch指令集等</li>
</ul>

<p class="past-topic-h">工作基础</p>

<ul>
<li>龙芯有开源OpenJDK，包括hotspot等多种Java VM</li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>Java虚拟机开发</li>
</ul>

</details>

<details>
<summary>
  <a href="https://github.com/oscomp/proj336-la-IoT-Robot"
     target="_blank" rel="noopener noreferrer"
     onclick="event.stopPropagation();">
    proj336 · 基于 Linux 内核与 2K1000LA 平台的工业物联网机器人框架
  </a>
</summary>

<p>赛题仓库：<a href="https://github.com/oscomp/proj336-la-IoT-Robot" target="_blank" rel="noopener noreferrer">点击跳转</a></p>

<p class="past-topic-h"> 在龙芯平台实现机器人框架</p>

<ul>
<li>机器人移动功能、机械臂正常转动、物品抓取、本地可视化控制、远程控制等功能</li>
</ul>


<p class="past-topic-h">工作基础</p>

<ul>
<li>2k1000板卡支持WIFI，4G模组，LCD屏，PWM，USB 等外设接口</li>
</ul>

<p class="past-topic-h">困难</p>

<ul>
<li>电机控制、远程控制等
</li>
</ul>

</details>

</div>

## 2023年

<div class="past-loongson-topics-page">

第一类：出现在功能赛道的内核赛道题
- [proj210 · 面向龙芯2k500开发板的操作系统内核设计](https://github.com/oscomp/proj210-2k500-kernel)

第二类：小型编译器移植
- [proj216 · TCC编译器LoongArch架构移植](https://github.com/oscomp/proj216-la-tcc)
- [proj217 · libFirm编译器LoongArch架构移植](https://github.com/oscomp/proj217-la-libFirm)

第三类: 小型OS移植
- [proj213 · Redox OS移植](https://github.com/oscomp/proj213-la-redox)
- [proj212 · 支持32位LoongArch(LA32)的yocto系统](https://github.com/oscomp/proj212-la32-yocto)

第四类：向量优化相关
- [proj220 · 基于龙芯3A5000设计实现一个高效的SPMV（稀疏矩阵乘向量）](https://github.com/oscomp/proj220-la-spmv)
- [proj218 · SIMDe项目的LoongArch向量指令支持](https://github.com/oscomp/proj218-la-simde)
- [proj219 · H265视频编码器X265的LoongArch架构优化](https://github.com/oscomp/proj219-la-h265)

第五类：其他OS功能增强
- [proj211 · pcre2函数库的JIT代码生成](https://github.com/oscomp/proj211-la-pcre2)
- [proj215 · radare2增强](https://github.com/oscomp/proj215-la-radare2)
- [proj214 · Lazarus IDE移植](https://github.com/oscomp/proj214-la-lazarus)



</div>

