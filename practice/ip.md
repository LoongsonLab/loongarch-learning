---
title: LA 相关 IP
outline: deep
---

# LoongArch相关IP

## LoongArch64相关的处理器核

### **1. OpenC910-LoongArch64**

该处理器的概述：       
玄铁 C910 是面向嵌入式系统和 SoC 应用领域的 64 位超高性能嵌入式多处理器核，具有出色的性能表       
现。 C910 采用了 RISCV 64GC 基本指令集，和平头哥性能增强指令集，主要面向对性能要求严格的高端嵌       
入式应用，如人工智能、自动驾驶、移动智能终端、高性能通信、信息安全等等。       

C910MP 采用同构多核架构，支持 2 个 C910 核心。每个 C910 核心采用自主设计的体系结构和微体系       
结构，并重点针对性能进行优化，引入 3 发射 8 执行的超标量架构、多通道的数据预取等高性能技术。        
C910支持实时检测并关断内部空闲功能模块，进一步降低处理器动态功耗。


OpenC910是3译码、4发射、具有先进的12级流水线，乱序执行的超标量处理器。   

**此版本是龙芯实验室将LoongArch64指令集在OpenC910上实现**。


|  Features |  Status  | Notes |
|---|---|---|
| 基础整型指令集   | :white_check_mark:​  |暂时不支持LoongArchV1.1|
| 基础浮点指令集   | :white_check_mark:​  |暂时不支持LoongArchV1.1|
| CSR指令        | :white_check_mark:​  | 部分CSR寄存器不支持                  |
| IOCSR指令      | :white_check_mark:​  | 用于多核之间的支持 |
| CACOP指令      | :x:​  | 仅支持写回和无效L1Cache、L2Cache |
| TLB维护指令     | :white_check_mark:​  | 仅支持invtlb指令，其他的视为空操作 |
| 软件页表遍历指令  | :x:​  | 目前版本只支持硬件PTW操作 |
| DBCL指令        | :x:​  | 目前版本暂时不支持 |
| LSX            | :x:​  |     🚧   计划支持中  |   
| LASX           | :x:​  |     🚧   计划支持中  |
| LVZ            |  :x:​ |     🚧   计划支持中  |
| LBT            |  :x:​ |     🚧   计划支持中  |
| TLB            | :white_check_mark:​  | 虚拟48位，物理40位，三级页表 |
| 页面大小        | :white_check_mark:​  | 目前只支持4KB，2MB，1GB页   |
| 多核支持        | :white_check_mark:​  | 目前配置最大支持4个核心      |


仓库在[这里](https://github.com/LoongsonLab/OpenC910-LoongArch64)

这是[相关的SDK](https://github.com/LoongsonLab/OpenC910-LoongArch64-Linux-Config)
包括Linux kernel的配置，boot以及rootfs等内容。


### **2. LabCore-164**

Lab-Core-164(单发射，支持LoongArch64)源自于OpenC906，**五级流水线，支持浮点**。
目前已经完成了基本指令集的移植。

项目代码结构如下：

- **design**: 包含基本的设计Verilog文件.
- **design/sys**: 用于CPU核的Verilog文件.
- **design/sim**: 用于仿真的Verilog文件.
- **doc**: 基本文档目录，包括OpenC910的原始设计文档.
- **ext**: 包含一些C源码，比如测试样例，还有一些自动生成的Verilog文件.
- **ip**: AMD Xilinx 的IP文件，包括Block Design的TCL脚本文件.
- **impl/constraints**: 存放所支持开发版的Vivado约束文件. 
- **impl/work-xlnx**: Vivado工作目录，会在此目录下生成所需文件，包括bitstream文件. 
- **scripts**: 项目使用的脚本.
- **verif/vcs**: Synopsys VCS 仿真环境目录.
- **verif/verilator**: Verilator仿真环境目录.
- **files.lst**: 项目使用的verilog文件列表.
- **Makefile**: make 脚本.
- **README.md**: 说明文件.

仓库在[这里](https://github.com/LoongsonLab/lab-core-164)


## LoonArch32相关的处理器核

### **1. ChipLab平台**
	
Chiplab项目致力于构建基于LoongArch32 Reduced的soc敏捷开发平台。五级流水，32位CPU。

但是已经流片。

此项目实现的loongarch32r指令集，未实现浮点指令。

仓库在[这里](https://gitee.com/loongson-edu/chiplab)


### **2. OpenLA500**
	
openLA500是一款实现了龙芯架构32位精简版指令集（loongarch32r）的处理器核。         
其结构为单发射五级流水，分为取指、译码、执行、访存、写回五个流水级。         
并且含有两路组相连结构的指令和数据cache；32项tlb；以及简易的分支预测器。         
此外，处理器核对外为AXI接口，容易集成。         

OpenLA500已经过流片验证，.13工艺下频率为100M，dhrystone，coremark分数分别         
为0.78 DMIPS/MHz(指令数有点高)，2.75 coremark/Mhz。软件方面，uboot、linux-5.14、         
ucore、rt-thread等常用工具及内核已完成对openLA500的适配。         


仓库在[这里](https://gitee.com/loongson-edu/open-la500)


### **3. “争流”处理器**

“争流”处理器是一款基于LoongArch指令集32位精简版的乱序超标量通用中央处理器核。

流水线分为8个流水级: 三个取指级，译码级，重命名级，发射级，寄存器级和执行级。

使用Spinal HDL开发。

仓库在[这里](https://gitee.com/liangliang678/ZhengLiu)

### **4. “流云”处理器**

流云”处理器是是一款基于LoongArch指令集的单发射7级流水通用中央处理器核。

本处理器追求高FPGA综合主频和低面积低功耗， 由Spinal HDL提供了高效的描述方式，      
既是对简单流水线CPU的探索和回顾， 也是对探索方式的尝试。

使用Spinal HDL开发。

仓库在[这里](https://gitee.com/UCAS-Muradil/LiuYun)

### **5. OpenLA1000**

一个实验性处理器核。

使用Spinal HDL开发。

仓库在[这里](https://gitee.com/loongson-edu/open-la1000)



