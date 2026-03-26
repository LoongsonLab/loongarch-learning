---
title: LoongArch 相关的LIBC库
outline: deep
---


# LoongArch 相关的LIBC库


## 1. Glibc库

Glibc（GNU C Library）是GNU项目开发的C标准库，也是Linux系统中最底层的用户空间核心库，       
几乎所有Linux应用程序都直接或间接依赖于它。它不仅是C语言运行时的基础，更是连接用户空间程序       
与Linux内核的关键桥梁，提供了系统调用封装、内存管理、线程支持、I/O操作等核心功能，       
支撑着整个GNU/Linux生态的运行。


### 如何编译

版本： glibc-2.43

下载地址：[https://ftp.gnu.org/gnu/glibc/glibc-2.43.tar.xz](https://ftp.gnu.org/gnu/glibc/glibc-2.43.tar.xz)

```Makefile
GLIBC     := glibc-2.43
glibc:
   cd $(GLIBC) && sed -i "s@5.15.0@4.15.0@g" sysdeps/unix/sysv/linux/loongarch/configure{,.ac}
   cd $(GLIBC) && rm -rf build-64 && mkdir -v build-64
   cd $(GLIBC)/build-64 && BUILD_CC="gcc" CC="${CROSS_TARGET}-gcc ${BUILD64} -mstrict-align" \
        CXX="${CROSS_TARGET}-gcc ${BUILD64} -mstrict-align" \
        AR="${CROSS_TARGET}-ar" RANLIB="${CROSS_TARGET}-ranlib" \
        ../configure --prefix=/usr --host=${CROSS_TARGET} --build=${CROSS_HOST} \
                    --libdir=/usr/lib64 --libexecdir=/usr/lib64/glibc \
                    --with-binutils=${SYSDIR}/$(CROSS_BUILD_DIR)/bin \
                    --with-headers=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/include \
                    --enable-stack-protector=strong \
                    --enable-add-ons \
                    --enable-crypt \
                    --disable-werror libc_cv_slibdir=/usr/lib64 \
                    --enable-kernel=4.15
   cd $(GLIBC)/build-64 && make ${JOBS}
   cd $(GLIBC)/build-64 && make DESTDIR=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot install
   cd $(GLIBC)/build-64 && cp -v ../nscd/nscd.conf ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/etc/nscd.conf
   cd $(GLIBC)/build-64 && mkdir -pv ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/var/cache/nscd
   cd $(GLIBC)/build-64 && install -v -Dm644 ../nscd/nscd.tmpfiles \
                     ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/lib/tmpfiles.d/nscd.conf
   cd $(GLIBC)/build-64 && install -v -Dm644 ../nscd/nscd.service \
                        ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/lib/systemd/system/nscd.service
```


最新的源码仓库[在这里](https://sourceware.org/git/glibc.git)可以看到。


## 2. MUSL 库

MUSL（发音为“muscle”）是一款轻量级、快速、符合标准的C标准库，专为Linux系统设计，      
旨在为嵌入式系统、容器化环境及资源受限场景提供高效、可靠的底层支持。其核心特点是体积小、     
性能优、安全性高，已成为Linux生态中替代Glibc的重要选择，尤其适用于对资源占用敏感的应用场景。    


### 如何编译

版本： musl-1.2.5

下载地址：[https://musl.libc.org/releases/musl-1.2.5.tar.gz](https://musl.libc.org/releases/musl-1.2.5.tar.gz)


```bash
cd musl-1.2.5
./configure --host=loongarch64-linux-musl
```

可以修改可生成的配置文件：``config.mak``



## 3. NewLib 库

Newlib是一款面向嵌入式系统的轻量级C标准库，旨在为资源受限的嵌入式环境（如无操作系统的微控制器、裸机程序）      
提供符合ANSI C/POSIX标准的库功能。其核心设计目标是小体积、高可移植性、可裁剪，是嵌入式开发中替代glibc的主流选择之一。     

Newlib最初由Cygnus Solutions（后被Red Hat收购）开发，是GNU交叉开发工具链的核心组件之一。其诞生是为了解决传统C库       
（如glibc）在嵌入式系统中的“过重”问题——glibc的体积（数MB）和功能冗余（如线程、动态链接）不适合内存以KB计算的微控制器。      
经过多年发展，Newlib已成为嵌入式领域最成熟的C标准库，被ARM、Renesas等主流嵌入式处理器厂商支持，广泛应用于商业（如Sega        Dreamcast游戏开发）和非商业（如Google Native Client）项目。


支持龙架构的源码可以在[这里下载](https://github.com/loongson/newlib.git)



## 4. Picolibc 库

Picolibc是一款专为资源受限嵌入式系统设计的轻量级C标准库，旨在平衡“小体积”与“功能完整性”，是嵌入式开发中        
替代传统C库（如Newlib）的主流选择之一。其核心设计目标是为RAM/ROM有限的微控制器（如Cortex-M、RISC-V）       
提供高效、标准的C运行时支持，同时兼容多架构并保持活跃的社区维护。    


目前主线已经支持龙架构，源代码可以[在这里下载](https://github.com/picolibc/picolibc/)


## 5. LLVM libc库


LLVM libc（LLVM C Library）是LLVM项目开发的轻量级、模块化C标准库，旨在为资源受限环境（如嵌入式系统、容器）        
提供高效、标准的C运行时支持。其核心设计目标是小体积、高性能、多平台兼容，是LLVM工具链的重要组成部分，        
适用于对资源占用敏感的场景。

目前还处于开发中。

### LLVM libc的基本定位

LLVM libc是LLVM项目针对C标准库的实现，聚焦于嵌入式系统、容器化环境等资源受限场景。        
与glibc（GNU C Library）等传统C库相比，其设计更注重轻量级与模块化，通过裁剪冗余功能、优化代码逻辑，        
实现极小的库体积（如嵌入式版本仅数百KB），同时保持对C11、POSIX等标准的兼容。

仓库地址[在这里](https://github.com/llvm/llvm-project/tree/main/libc)
