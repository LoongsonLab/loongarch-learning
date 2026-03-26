---
title: LoongArch 工具链
outline: deep
---

# LoongArch 工具链

GCC（GNU Compiler Collection）是全球知名的**自由软件编译器套件**，最初为GNU操作系统开发，       
现已成为跨平台软件开发的核心工具之一。其核心功能是支持多种编程语言的编译与优化，广泛应用于操作系统、       
嵌入式系统、高性能计算等领域。


## 一、如何编译交叉编译器GCC

本小节会教大家如何从gcc等源码编译我们使用的交叉编译器。

### 如何编译loongarch64-linux-gnu[sf]

配置说明：

*   - **版本说明**
    - **下载链接**

*   - Linux Kernel头文件版本为6.7
    - [https://mirrors.edge.kernel.org/pub/linux/kernel/v6.x/](https://mirrors.edge.kernel.org/pub/linux/kernel/v6.x/)

*   - BINUTILS版本： binutils-2.45
    - [https://ftp.gnu.org/gnu/binutils/](https://ftp.gnu.org/gnu/binutils/)

*   - GMP版本： gmp-6.3.0
    - [https://ftp.gnu.org/gnu/gmp/](https://ftp.gnu.org/gnu/gmp/)

*   - MPFR版本： mpfr-4.2.2
    - [https://ftp.gnu.org/gnu/mpfr/](https://ftp.gnu.org/gnu/mpfr/)

*   - MPC版本： mpc-1.3.1
    - [https://ftp.gnu.org/gnu/mpc](https://ftp.gnu.org/gnu/mpc/)

*   - GLIBC版本： glibc-2.42
    - [https://ftp.gnu.org/gnu/glibc/](https://ftp.gnu.org/gnu/glibc/)

*   - GLIBC版本： gcc-15.2.0
    - [https://ftp.gnu.org/gnu/gcc/gcc-15.2.0](https://ftp.gnu.org/gnu/gcc/gcc-15.2.0)

*   - GDB版本： gdb-16.3
    - [https://ftp.gnu.org/gnu/gdb/](https://ftp.gnu.org/gnu/gdb/)


下面逐一演示工具链的制作过程。   
首先我们定义几个常用的变量（GCC支持生成浮点指令）, 下面显示的命令规则是在Makefile中：
```Makefile
SYSDIR=$(shell pwd)
CROSS_HOST=$(echo $MACHTYPE | sed "s/$(echo $MACHTYPE | cut -d- -f2)/cross/") #x86_64-cross-linux-gnu
CROSS_TARGET=loongarch64-linux-gnu #表示我们的目标组合
MABI=lp64d
BUILD64=-mabi=lp64d
CROSS_BUILD_DIR=cross-tools-all-202612 #用于安装交叉编译器的目录在：$(SYSDIR)/$(CROSS_BUILD_DIR)
```

#### 1. linux header的安装
``` Makefile
LINUX_DIR := linux-6.7
linux_header:
   cd $(LINUX_DIR) && make mrproper
   cd $(LINUX_DIR) && make ARCH=loongarch INSTALL_HDR_PATH=dest headers_install
   cd $(LINUX_DIR) && find dest/include -name '.*' -delete
   cd $(LINUX_DIR) && mkdir -pv ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/include
   cd $(LINUX_DIR) && cp -rv dest/include/* ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/include
```

编译完成后会在```cross-tools-all-202612/sysroot/usr/include```安装相关的头文件等

#### 2. binutils的编译和安装
``` Makefile
BINUTILS  := binutils-2.45
binutils:
   cd $(BINUTILS) && rm -rf gdb* libdecnumber readline sim
   cd $(BINUTILS) && rm -rf tools-build && mkdir tools-build
   cd $(BINUTILS)/tools-build && CC=gcc AR=ar AS=as \
   ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --build=${CROSS_HOST} --host=${CROSS_HOST} \
                    --target=${CROSS_TARGET} --with-sysroot=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot --disable-nls \
                    --disable-static --enable-64-bit-bfd
   cd $(BINUTILS)/tools-build && make configure-host ${JOBS}
   cd $(BINUTILS)/tools-build && make ${JOBS}
   cd $(BINUTILS)/tools-build && make install-strip
   cd $(BINUTILS)/tools-build && cp -v ../include/libiberty.h ${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot/usr/include

```

#### 3. GMP的编译和安装
```Makefile
GMP     := gmp-6.3.0
gmp:
   cd $(GMP) && rm -rf build && mkdir -p build
   cd $(GMP)/build && ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --enable-cxx --disable-static
   cd $(GMP)/build && make ${JOBS}
   cd $(GMP)/build && make install
```

#### 4. MPFR的编译和安装
```Makefile
MPFR    := mpfr-4.2.2
mpfr:
   cd $(MPFR) && rm -rf build && mkdir -p build
   cd $(MPFR)/build && ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --disable-static --with-gmp=${SYSDIR}/$(CROSS_BUILD_DIR)
   cd $(MPFR)/build && make ${JOBS}
   cd $(MPFR)/build && make install
```

#### 5. MPC的编译和安装
```Makefile
MPC     := mpc-1.3.1
mpc:
   cd $(MPC) && rm -rf build && mkdir -p build
   cd $(MPC)/build && ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --disable-static --with-gmp=${SYSDIR}/$(CROSS_BUILD_DIR)
   cd $(MPC)/build && make ${JOBS}
   cd $(MPC)/build && make install
```

#### 6. 简易版GCC的编译和安装
制作交叉编译器中的GCC，第一次编译交叉工具链的GCC需要采用精简方式进行编译和安装，否则会因为缺少目标系统的C库而导致部分内容编译链接失败
```Makefile
GCC       := gcc-15.2.0
gcc-simp:
   cd $(GCC) && rm -rf tools-build && mkdir tools-build
   cd $(GCC)/tools-build && AR=ar LDFLAGS="-Wl,-rpath,${SYSDIR}/$(CROSS_BUILD_DIR)/lib" \
   ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --build=${CROSS_HOST} --host=${CROSS_HOST} \
      --target=${CROSS_TARGET} --disable-nls \
      --with-mpfr=${SYSDIR}/$(CROSS_BUILD_DIR) --with-gmp=${SYSDIR}/$(CROSS_BUILD_DIR) \
      --with-mpc=${SYSDIR}/$(CROSS_BUILD_DIR) \
      --with-sysroot=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot \
      --disable-decimal-float --disable-libgomp --disable-libitm \
      --disable-libsanitizer --disable-libquadmath --enable-threads=posix \
      --disable-target-zlib --with-system-zlib --enable-checking=release \
      --enable-tls --enable-initfini-array --enable-__cxa_atexit \
      --disable-libgcc \
      --with-simd=none \
      --enable-default-pie \
      --enable-languages=c,c++,fortran,objc,obj-c++,lto
   cd $(GCC)/tools-build && make all-gcc all-target-libgcc ${JOBS}
   cd $(GCC)/tools-build && make install-strip-gcc install-strip-target-libgcc
```

#### 7. GlibC的编译和安装
```Makefile
GLIBC     := glibc-2.42
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

#### 8. 完整版GCC的编译和安装
```Makefile
GCC       := gcc-15.2.0
gcc:
   cd $(GCC) && rm -rf tools-build-all && mkdir tools-build-all
   cd $(GCC)/tools-build-all && AR=ar LDFLAGS="-Wl,-rpath,${SYSDIR}/$(CROSS_BUILD_DIR)/lib" \
      ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) --build=${CROSS_HOST} \
                   --host=${CROSS_HOST} --target=${CROSS_TARGET} \
                   --with-sysroot=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot --with-mpfr=${SYSDIR}/$(CROSS_BUILD_DIR) \
                   --with-gmp=${SYSDIR}/$(CROSS_BUILD_DIR) --with-mpc=${SYSDIR}/$(CROSS_BUILD_DIR) \
                   --enable-__cxa_atexit --enable-threads=posix --with-system-zlib \
                   --enable-libstdcxx-time --enable-checking=release \
                   --disable-libssp \
                   --with-simd=none \
                   --enable-default-pie \
                   --enable-languages=c,c++,fortran,objc,obj-c++,lto
   cd $(GCC)/tools-build-all && make ${JOBS}
   cd $(GCC)/tools-build-all && make install-strip
```
此时安装的GCC会替换掉我们在上面安装的简易版GCC。


#### 9. 特殊说明
LoongArch的GCC上游在版本13以后，再编译GCC的时候，会默认生成向量指令，即产生参数```-msimd=lsx```，
我们可以使用-v来查看验证
```bash
loongarch64-linux-gnu-gcc main.c -o main -v
```

生成的详细命令参数如下（省略了不必要的部分）
```bash
gcc version 14.1.0 (GCC) 
COLLECT_GCC_OPTIONS='-o' 'main' '-v' '-mabi=lp64d' '-march=la64v1.0' '-mfpu=64' '-msimd=none' '-mcmodel=normal' '-mtune=generic'
 /home/airxs/local/gcc-14.1.0-loongarch64-linux-gnu/bin/../libexec/gcc/loongarch64-linux-gnu/14.1.0/cc1 -quiet -v -iprefix /home/airxs/local/gcc-14.1.0-loongarch64-linux-gnu/bin/../lib/gcc/loongarch64-linux-gnu/14.1.0/ -isysroot /home/airxs/local/gcc-14.1.0-loongarch64-linux-gnu/bin/../sysroot main.c -quiet -dumpbase main.c -dumpbase-ext .c -mabi=lp64d -march=la64v1.0 -mfpu=64 -msimd=none -mcmodel=normal -mtune=generic -version -o /tmp/ccaWuA6Z.s
```

如果想在编译GCC的时候，关闭默认向量指令的生成，可以使用参数
```bash
--with-simd=none
```
比如上面我们在编译的时候，默认关闭了向量的生成。


--with-simd=none它只是在编译在**默认情况下**关闭生成向量指令，但是还是可以使用命令参数```-msimd=```来
手动的指定可以产生128位向量。

我们用上面使用```--with-simd=none```生成的交叉编译器，来生成具有向量指令的可执行文件：
```shell
loongarch64-linux-musl-gcc main.c -o main -msimd=lsx -v
```

反汇编时，我们可以看见使用了```vld和vst```等向量指令。




## 二、GDB的编译和安装

- GDB版本： gdb-16.3

- [https://ftp.gnu.org/gnu/gdb/](https://ftp.gnu.org/gnu/gdb/)


```Makefile
GDB       := gdb-16.3
gdb:
   rm -rf $(GDB)/build
   mkdir -p $(GDB)/build
   cd $(GDB)/build && ../configure --prefix=${SYSDIR}/$(CROSS_BUILD_DIR) \
                      --build=${CROSS_HOST} \
                     --host=${CROSS_HOST} --target=${CROSS_TARGET} \
                     --with-sysroot=${SYSDIR}/$(CROSS_BUILD_DIR)/sysroot --enable-64-bit-bfd
   cd $(GDB)/build && make ${JOBS}
   cd $(GDB)/build && make DESTDIR=${SYSDIR}/${CROSS_BUILD_DIR} install
```

## 三、如何编译 LoongArch Musl

基于musl-c库的交叉编译器编译顺序和上述的基本一致，我们为了方便，将其做了封装，可以直接使用编译仓库。

1. 克隆musl-cross-make仓库
```bash 
git clone https://github.com/lyw19b/musl-cross-make.git
```
2. 复制配置文件
```bash
cd musl-cross-make && cp config.mak.loongarch64 config.mak
```

3. 修改配置文件，指令需要编译的工具链版本
```bash
#修改配置文件 config.mak
BINUTILS_VER = 2.25.1
GCC_VER = 15.2.0
GDB_VER = 16.3
MUSL_VER = 1.2.5
GMP_VER = 6.3.0
MPC_VER = 1.3.1
MPFR_VER = 4.2.2
LINUX_VER = 6.7
```
如果不指定版本，会使用默认的版本编译。

4. 定制配置参数
按照需求设置，如果不设置按照默认的参数编译。
```bash
# COMMON_CONFIG 编译各个工具链时都用的配置，比如HOST编译器参数等
COMMON_CONFIG += CFLAGS="-g0 -Os" CXXFLAGS="-g0 -Os" LDFLAGS="-s"

# GCC_CONFIG 特定针对GCC编译时的参数。
GCC_CONFIG += --disable-libquadmath --disable-decimal-float
GCC_CONFIG += --disable-libitm
GCC_CONFIG += --disable-fixed-point
GCC_CONFIG += --disable-lto

GCC_CONFIG += --enable-languages=c,c++ --enable-checking=release

```

5. 选择支持浮点还是禁止浮点指令
```bash
# 修改配置文件 config.mak

# 1. 如果时禁止浮点使用下面的TARGET 
TARGET = loongarch64-linux-muslsf

# 2. 如果使用支持生成浮点指令的编译器使用下面的TARGET
TARGET = loongarch64-linux-musl
```

编译之后，会在output中生成我们需要的交叉编译器，可以在out/bin/测试是否正常
```bash
shell> ./bin/loongarch64-linux-musl-gcc -v
# Using built-in specs.
# COLLECT_GCC=./bin/loongarch64-linux-musl-gcc
# COLLECT_LTO_WRAPPER=/home/airxs/user/toolchains/musl-cross-make/loongarch64-linux-musl-gcc-15.2.0/bin/../libexec/gcc/loongarch64-linux-musl/15.2.0/lto-wrapper
# Target: loongarch64-linux-musl
# Configured with: ../src_gcc/configure --enable-languages=c,c++ --with-simd=none --enable-languages=c,c++ --enable-checking=release --disable-bootstrap --disable-assembly --disable-werror --target=loongarch64-linux-musl --prefix= --libdir=/lib --disable-multilib --with-sysroot=/sysroot --enable-tls --disable-libmudflap --disable-libsanitizer --disable-gnu-indirect-function --disable-libmpx --enable-initfini-array --enable-libstdcxx-time=rt --with-build-sysroot=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_sysroot AR_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/ar AS_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/gas/as-new LD_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/ld/ld-new NM_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/nm-new OBJCOPY_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/objcopy OBJDUMP_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/objdump RANLIB_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/ranlib READELF_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/readelf STRIP_FOR_TARGET=/home/airxs/user/toolchains/musl-cross-make/build/local/loongarch64-linux-musl/obj_binutils/binutils/strip-new --build=x86_64-pc-linux-gnu --host=x86_64-pc-linux-gnu
# Thread model: posix
# Supported LTO compression algorithms: zlib zstd
# gcc version 15.2.0 (GCC) 
```


## 四、LoongArch LLVM编译和安装

- 版本： llvmorg-21.1.8

- 下载路劲:[https://github.com/llvm/llvm-project/releases/download/llvmorg-21.1.8/llvm-project-21.1.8.src.tar.xz](https://github.com/llvm/llvm-project/releases/download/llvmorg-21.1.8/llvm-project-21.1.8.src.tar.xz)


```bash
LDFLAGS="${LDFLAGS} -lutil" PKG_CONFIG_SYSROOT_DIR="" \
cmake .. -G Ninja -DCMAKE_INSTALL_PREFIX:PATH=${SYSDIR}/cross-tools \
	 -DCMAKE_CXX_COMPILER="g++" -DCMAKE_C_COMPILER="gcc" \
	 -DBUILD_SHARED_LIBS:BOOL=OFF   -DCMAKE_BUILD_TYPE=Release  \
	 -DLLVM_LIBDIR_SUFFIX=64 \
	 -DCMAKE_C_FLAGS="-DNDEBUG" -DCMAKE_CXX_FLAGS="-DNDEBUG" \
	 -DLLVM_ENABLE_LIBCXX:BOOL=OFF \
	 -DLLVM_ENABLE_TERMINFO:BOOL=OFF \
	 -DLLVM_ENABLE_RTTI:BOOL=ON -DLLVM_BUILD_LLVM_DYLIB:BOOL=ON  \
	 -DLLVM_LINK_LLVM_DYLIB:BOOL=ON  \
	 -DCMAKE_INSTALL_RPATH="${SYSDIR}/cross-tools/lib64;\\\${ORIGIN}/../lib64" \
	 -DLLVM_BUILD_EXTERNAL_COMPILER_RT:BOOL=ON   \
	 -DLLVM_INSTALL_TOOLCHAIN_ONLY:BOOL=OFF \
	 -DDEFAULT_SYSROOT:PATH="${SYSDIR}/sysroot" \
	 -DLLVM_DEFAULT_TARGET_TRIPLE=${CROSS_TARGET} \
	 -DLLVM_ENABLE_PROJECTS='llvm;clang;lld;lldb'
ninja
ninja install

```

## 五、LoongArch rust 安装和源码编译

### 1. 从官方下载使用

``` shell 
# 获得rustup
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# 获得rust所支持的所有架构相关
rustc --print target-list

# 与LoongArch相关的target如下所示：

# loongarch32-unknown-none
# loongarch32-unknown-none-softfloat
# loongarch64-unknown-linux-gnu
# loongarch64-unknown-linux-musl
# loongarch64-unknown-linux-ohos
# loongarch64-unknown-none
# loongarch64-unknown-none-softfloat


# 增加LoongArch工具
rustup target add loongarch64-unknown-none

# 增加 cargo-binutils （objcopy, objdump）
cargo install cargo-binutils
rustup component add llvm-tools
#

```

### 2. rust从源码编译和安装

- 版本：1.93.0

- 下载地址：[Rust: https://static.rust-lang.org/dist/rustc-1.93.0-src.tar.gz](Rust: https://static.rust-lang.org/dist/rustc-1.93.0-src.tar.gz)


```bash
tar -zxf rustc-1.93.0-src.tar.gz

cd rustc-1.93.0-src

./configure --target=${CROSS_TARGET},$(echo ${CROSS_HOST} | sed 's@cross@unknown@g') \
                --prefix=${SYSDIR}/cross-tools --sysconfdir=${SYSDIR}/cross-tools/etc \
                --local-rust-root=${SYSDIR}/cross-tools/rust/usr/local \
                --enable-extended --enable-vendor --disable-docs --disable-dist-src --release-channel=dev \
                --disable-codegen-tests --experimental-targets="" --enable-llvm-static-stdcpp --enable-profiler \
                --set=target.${CROSS_TARGET}.linker="${CROSS_TARGET}-gcc" \
                --set=target.${CROSS_TARGET}.cc="${CROSS_TARGET}-gcc" \
                --set=target.${CROSS_TARGET}.cxx="${CROSS_TARGET}-g++" \
                --set=target.${CROSS_TARGET}.llvm-config="${CROSS_TARGET}-llvm-config" \
                --set=target.$(echo ${CROSS_HOST} | sed 's@cross@unknown@g').llvm-config="${SYSDIR}/cross-tools/bin/llvm-config"
    export CARGO_TARGET_$(echo ${CROSS_TARGET^^} | tr '-' '_')_LINKER="${CROSS_TARGET}-gcc"
    export CARGO_TARGET_$(echo ${CROSS_TARGET^^} | tr '-' '_')_RUSTFLAGS="-Ccode-model=large"
    make HOST_CC="gcc" ${JOBS}
    make HOST_CC="gcc" install
    unset CARGO_TARGET_$(echo ${CROSS_TARGET^^} | tr '-' '_')_LINKER
    unset CARGO_TARGET_$(echo ${CROSS_TARGET^^} | tr '-' '_')_RUSTFLAGS

```

## 六、LoongArch QEMU 编译安装

- 版本：10.2.0

- 下载地址：[https://download.qemu.org/qemu-10.2.0.tar.xz](https://download.qemu.org/qemu-10.2.0.tar.xz)


```bash
cd qemu-10.2.0 && mkdir build

cd build 

../configure --prefix=${SYSDIR}/cross-tools --target-list=loongarch64-linux-user,loongarch64-softmmu

ninja
```

------

注意：上述的编译都是按照LoongArch64架构来处理的。


## 七、LoongArch32R 相关工具链

GCC 版本： 16.0.0
GDB 版本： 17.0.5

x86_64 host: Ubuntu 24.02

下载地址在[这里](https://github.com/LoongsonLab/cross-build-tools/releases/tag/loongarch32r-unknown-linux-gnusf-gcc-16.0.0-ubuntu24.04)


## 八、工具列表汇总

本仓库所有工具如下表所示：

| 工具名称    | 版本 | 说明    |   文件名称 |
|------|:------:|:------|:------|
|Clang | 19.0.0 | 支持硬件浮点和软浮点，也支持loongarch32，但是工具没集成32位的库| clang-19.0.0-loongarch64.tar.gz|
|GCC | 13.2.0 | 支持硬件浮点| gcc-13.2.0-loongarch64-linux-gnu.tgz|
|GCC | 13.2.0 | 支持软浮点| gcc-13.2.0-loongarch64-linux-gnu-sf.tgz|
|GCC | 8.3.0  | 支持软浮点，适用于32版本| gcc-8.3.0-loongarch32r-linux-gnusf.tgz|
|MUSL | 1.2.2 | C库 | musl-loongarch64-1.2.2.tgz|
|Qemu | 8.2.50 | 模拟器 | qemu.tgz|
|GDB | 12.0.50 | 执行于x86_64的loongarch64-gdb | loongarch64-linux-gnu-gdb.tgz|
|MUSL|1.2.5  |C库（默认生成向量） | loongarch64-linux-musl-cross.tgz
|MUSL|1.2.5  |C库（默认不生成向量） | loongarch64-linux-musl-cross-novec.tgz

注：部分二进制可执文件在Releases页面下载。

本仓库地址在[这里](https://github.com/LoongsonLab/oscomp-toolchains-for-oskernel)

LoongArch 开发与教学常用工具链索引，点击下方链接跳转。



