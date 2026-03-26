---
title: LoongArch Linux
outline: deep
---

# LoongArch Linux kernel

Linux内核（Linux Kernel）是**开源的类Unix操作系统宏内核**，是整个Linux操作系统家族的核心，负责管理硬件资源、提供系统调用接口，支撑着从超级计算机到嵌入式设备的各类应用场景。自1991年由Linus Torvalds发布以来，Linux内核已成为全球最流行、最灵活的操作系统内核之一，其设计哲学（如“一切皆文件”、“向后兼容”）和社区驱动的开发模式，使其不断适应新技术需求，保持了旺盛的生命力。


## **一、Linux内核的基本概况**
### 1. **定义与核心功能**  
Linux内核是操作系统的**核心组件**，介于硬件与用户空间之间，主要负责：  
- **硬件管理**：通过设备驱动程序抽象硬件（如CPU、内存、磁盘、网络），提供统一的访问接口；  
- **进程调度**：管理进程的创建、销毁、切换，实现多任务并发（如CFS完全公平调度器）；  
- **内存管理**：负责虚拟内存分配、页面置换（如LRU算法）、内存保护（如ASLR地址空间随机化）；  
- **文件系统**：通过虚拟文件系统（VFS）支持多种文件系统（如ext4、Btrfs、NTFS），提供统一的文件操作接口（如`open`、`read`、`write`）；  
- **系统调用**：向用户空间程序提供访问内核功能的接口（如`fork`、`exec`、`socket`），是用户程序与内核交互的唯一途径。  

### 2. **设计哲学**  
Linux内核的设计遵循以下核心原则：  
- **一切皆文件**：将所有硬件设备（如磁盘、键盘、网络）抽象为文件，通过文件操作（如`read`、`write`）访问，简化了应用程序的开发；  
- **向后兼容**：新版内核必须支持旧版系统调用接口（ABI），确保旧应用程序能在新内核上运行；  
- **模块化**：通过可加载内核模块（LKM）动态添加/删除功能（如设备驱动、文件系统），避免内核膨胀；  
- **社区驱动**：由全球开发者共同维护，遵循“早发布、常发布”的开发节奏，快速迭代修复漏洞。  


## **二、Linux内核的最新进展（2025-2026年）**  
2025-2026年，Linux内核的开发重点围绕**性能优化、安全增强、硬件支持**展开，主要进展包括：  
### 1. **版本迭代**  
- **Linux 7.0**：2026年2月发布首个候选版本（7.0-rc1），正式确立**Rust语言的长期支持地位**（结束试验期），新增对英特尔Nova Lake、AMD Zen 6、高通骁龙X2等新硬件的适配，优化了文件系统（如Btrfs的快照功能）和网络栈（如TCP BBR拥塞控制）；  
- **Linux 6.19**：2026年2月发布稳定版，重点改进了内存管理（如`mmap`性能优化）、设备驱动（如AMD GPU的DCN 3.0支持），并修复了多个安全漏洞（如CVE-2025-68260）。  

### 2. **安全增强**  
- **Runtime Kernel Protection**：2026年2月，Linux Kernel Runtime Guard（LKRG）发布1.0版本，成为首个稳定的运行时内核安全模块，通过监控内核函数调用、检测异常行为（如rootkit），提升系统抗攻击能力；  
- **Microarchitecture Hardening**：针对VMScape、Spectre等硬件漏洞，内核增加了**指针标记**（Pointer Tagging）、**控制流完整性**（CFI）等缓解措施，减少侧信道攻击风险。  

### 3. **硬件支持**  
- **新处理器架构**：增加对RISC-V 64位架构的全面支持（如`rv64gc`指令集），以及对ARMv9.2架构的优化（如SVE2向量指令）；  
- **嵌入式设备**：优化了针对ARM Cortex-M、RISC-V等低功耗处理器的内核配置（如关闭不必要的模块），支持更小的内存 footprint（如1MB以下）。  


## **三、Linux内核在嵌入式系统中的应用**  
Linux内核是**嵌入式系统的首选操作系统核心**，广泛应用于智能设备、工业控制、物联网（IoT）等场景，其优势在于：  
### 1. **可裁剪性**  
通过**内核配置工具（如`menuconfig`）**，可裁剪掉不必要的模块（如网络栈、图形界面），生成极小的内核镜像（如几百KB），适合资源受限的嵌入式设备（如智能手表、传感器节点）；  
### 2. **多架构支持**  
支持ARM、RISC-V、LoongArch、x86、MIPS等多种嵌入式架构，覆盖从低端微控制器（如STM32）到高端多核处理器（如NVIDIA Tegra）的全谱系；  
### 3. **丰富的中间件**  
与嵌入式Linux生态（如Buildroot、Yocto）结合，可快速构建完整的嵌入式系统，包括根文件系统（如BusyBox）、图形界面（如Qt）、网络协议栈（如lwIP）；  
### 4. **实时性支持**  
通过**PREEMPT_RT补丁**，可将Linux内核改造为实时操作系统（RTOS），满足工业控制、医疗设备等对延迟敏感的场景（如机器人关节控制）。  


## **四、Linux内核与C标准库的关系**  
Linux内核与C标准库（如glibc、musl）是**相互独立但紧密协作**的组件，其关系可概括为：  
### 1. **所属空间不同**  
- **内核空间**：Linux内核运行在特权模式（Ring 0），负责硬件管理和系统调用；  
- **用户空间**：C标准库运行在非特权模式（Ring 3），为应用程序提供标准函数（如`printf`、`malloc`）。  

### 2. **协作方式**  
C标准库中的函数**封装了内核的系统调用**，例如：  
- `printf`函数：通过`write`系统调用将数据输出到终端；  
- `malloc`函数：通过`brk`或`mmap`系统调用申请内存；  
- `open`函数：通过`sys_open`系统调用打开文件。  

### 3. **独立性**  
内核升级**不会影响C标准库**，因为内核通过**向后兼容的系统调用接口**（ABI）与C库交互。例如，CentOS 7升级内核到6.1后，glibc仍保持2.17版本（`ldd --version`可查看），旧版C库仍可正常运行在新内核上。


## **五、学习Linux内核的资源推荐**  
若想深入学习Linux内核，以下资源值得参考：  
### 1. **经典书籍**  
- **《Understanding the Linux Kernel》（第3版）**：深入解析内核的核心机制（如进程调度、内存管理），适合有一定基础的读者；  
- **《Linux Kernel Development》（第3版）**：侧重内核开发实践，讲解了模块编写、调试技巧，适合想参与内核开发的读者；  
- **《The Linux Programming Interface》（TLPI）**：详细介绍了系统调用和C库函数，是理解内核与用户空间交互的必备书籍。

### 2. **在线资源**  
- **Linux内核文档**：官方文档（https://www.kernel.org/doc/）包含内核源码注释、开发指南，是最权威的学习资料；  
- **Linux Journal**：定期发布内核技术文章（如2026年2月的《LKRG 1.0: A Major Milestone for Runtime Kernel Security》），涵盖最新进展；  
- **GitHub内核仓库**：https://github.com/torvalds/linux，可查看最新源码和提交记录。  

### 3. **实践工具**  
- **QEMU**：模拟嵌入式设备或不同架构，用于测试内核镜像；  
- **GDB**：调试内核模块（需配合`kgdb`补丁）；  
- **Buildroot/Yocto**：构建嵌入式Linux系统，快速生成内核镜像和根文件系统。  



## LoongArch支持现状

目前linux内核主线在5.18的时候已经来时支持LoongArch了。

可以直接从主线上下载、编译。

## 和LoongArch有关的系统调用号

```c
__SYSCALL_WITH_COMPAT(0, sys_io_setup, compat_sys_io_setup)
__SYSCALL(1, sys_io_destroy)
__SYSCALL_WITH_COMPAT(2, sys_io_submit, compat_sys_io_submit)
__SYSCALL(3, sys_io_cancel)
__SYSCALL(4, sys_io_getevents)
__SYSCALL(5, sys_setxattr)
__SYSCALL(6, sys_lsetxattr)
__SYSCALL(7, sys_fsetxattr)
__SYSCALL(8, sys_getxattr)
__SYSCALL(9, sys_lgetxattr)
__SYSCALL(10, sys_fgetxattr)
__SYSCALL(11, sys_listxattr)
__SYSCALL(12, sys_llistxattr)
__SYSCALL(13, sys_flistxattr)
__SYSCALL(14, sys_removexattr)
__SYSCALL(15, sys_lremovexattr)
__SYSCALL(16, sys_fremovexattr)
__SYSCALL(17, sys_getcwd)
__SYSCALL(19, sys_eventfd2)
__SYSCALL(20, sys_epoll_create1)
__SYSCALL(21, sys_epoll_ctl)
__SYSCALL_WITH_COMPAT(22, sys_epoll_pwait, compat_sys_epoll_pwait)
__SYSCALL(23, sys_dup)
__SYSCALL(24, sys_dup3)
__SYSCALL(25, sys_fcntl)
__SYSCALL(26, sys_inotify_init1)
__SYSCALL(27, sys_inotify_add_watch)
__SYSCALL(28, sys_inotify_rm_watch)
__SYSCALL_WITH_COMPAT(29, sys_ioctl, compat_sys_ioctl)
__SYSCALL(30, sys_ioprio_set)
__SYSCALL(31, sys_ioprio_get)
__SYSCALL(32, sys_flock)
__SYSCALL(33, sys_mknodat)
__SYSCALL(34, sys_mkdirat)
__SYSCALL(35, sys_unlinkat)
__SYSCALL(36, sys_symlinkat)
__SYSCALL(37, sys_linkat)
__SYSCALL(39, sys_umount)
__SYSCALL(40, sys_mount)
__SYSCALL(41, sys_pivot_root)
__SYSCALL(43, sys_statfs)
__SYSCALL(44, sys_fstatfs)
__SYSCALL(45, sys_truncate)
__SYSCALL(46, sys_ftruncate)
__SYSCALL_WITH_COMPAT(47, sys_fallocate, compat_sys_fallocate)
__SYSCALL(48, sys_faccessat)
__SYSCALL(49, sys_chdir)
__SYSCALL(50, sys_fchdir)
__SYSCALL(51, sys_chroot)
__SYSCALL(52, sys_fchmod)
__SYSCALL(53, sys_fchmodat)
__SYSCALL(54, sys_fchownat)
__SYSCALL(55, sys_fchown)
__SYSCALL(56, sys_openat)
__SYSCALL(57, sys_close)
__SYSCALL(58, sys_vhangup)
__SYSCALL(59, sys_pipe2)
__SYSCALL(60, sys_quotactl)
__SYSCALL(61, sys_getdents64)
__SYSCALL(62, sys_lseek)
__SYSCALL(63, sys_read)
__SYSCALL(64, sys_write)
__SYSCALL_WITH_COMPAT(65, sys_readv, sys_readv)
__SYSCALL_WITH_COMPAT(66, sys_writev, sys_writev)
__SYSCALL_WITH_COMPAT(67, sys_pread64, compat_sys_pread64)
__SYSCALL_WITH_COMPAT(68, sys_pwrite64, compat_sys_pwrite64)
__SYSCALL_WITH_COMPAT(69, sys_preadv, compat_sys_preadv)
__SYSCALL_WITH_COMPAT(70, sys_pwritev, compat_sys_pwritev)
__SYSCALL(71, sys_sendfile64)
__SYSCALL(72, sys_pselect6)
__SYSCALL(73, sys_ppoll)
__SYSCALL_WITH_COMPAT(74, sys_signalfd4, compat_sys_signalfd4)
__SYSCALL(75, sys_vmsplice)
__SYSCALL(76, sys_splice)
__SYSCALL(77, sys_tee)
__SYSCALL(78, sys_readlinkat)
__SYSCALL(79, sys_newfstatat)
__SYSCALL(80, sys_newfstat)
__SYSCALL(81, sys_sync)
__SYSCALL(82, sys_fsync)
__SYSCALL(83, sys_fdatasync)
__SYSCALL_WITH_COMPAT(84, sys_sync_file_range, compat_sys_sync_file_range)
__SYSCALL(85, sys_timerfd_create)
__SYSCALL(86, sys_timerfd_settime)
__SYSCALL(87, sys_timerfd_gettime)
__SYSCALL(88, sys_utimensat)
__SYSCALL(89, sys_acct)
__SYSCALL(90, sys_capget)
__SYSCALL(91, sys_capset)
__SYSCALL(92, sys_personality)
__SYSCALL(93, sys_exit)
__SYSCALL(94, sys_exit_group)
__SYSCALL_WITH_COMPAT(95, sys_waitid, compat_sys_waitid)
__SYSCALL(96, sys_set_tid_address)
__SYSCALL(97, sys_unshare)
__SYSCALL(98, sys_futex)
__SYSCALL_WITH_COMPAT(99, sys_set_robust_list, compat_sys_set_robust_list)
__SYSCALL_WITH_COMPAT(100, sys_get_robust_list, compat_sys_get_robust_list)
__SYSCALL(101, sys_nanosleep)
__SYSCALL_WITH_COMPAT(102, sys_getitimer, compat_sys_getitimer)
__SYSCALL_WITH_COMPAT(103, sys_setitimer, compat_sys_setitimer)
__SYSCALL_WITH_COMPAT(104, sys_kexec_load, compat_sys_kexec_load)
__SYSCALL(105, sys_init_module)
__SYSCALL(106, sys_delete_module)
__SYSCALL_WITH_COMPAT(107, sys_timer_create, compat_sys_timer_create)
__SYSCALL(108, sys_timer_gettime)
__SYSCALL(109, sys_timer_getoverrun)
__SYSCALL(110, sys_timer_settime)
__SYSCALL(111, sys_timer_delete)
__SYSCALL(112, sys_clock_settime)
__SYSCALL(113, sys_clock_gettime)
__SYSCALL(114, sys_clock_getres)
__SYSCALL(115, sys_clock_nanosleep)
__SYSCALL(116, sys_syslog)
__SYSCALL_WITH_COMPAT(117, sys_ptrace, compat_sys_ptrace)
__SYSCALL(118, sys_sched_setparam)
__SYSCALL(119, sys_sched_setscheduler)
__SYSCALL(120, sys_sched_getscheduler)
__SYSCALL(121, sys_sched_getparam)
__SYSCALL_WITH_COMPAT(122, sys_sched_setaffinity, compat_sys_sched_setaffinity)
__SYSCALL_WITH_COMPAT(123, sys_sched_getaffinity, compat_sys_sched_getaffinity)
__SYSCALL(124, sys_sched_yield)
__SYSCALL(125, sys_sched_get_priority_max)
__SYSCALL(126, sys_sched_get_priority_min)
__SYSCALL(127, sys_sched_rr_get_interval)
__SYSCALL(128, sys_restart_syscall)
__SYSCALL(129, sys_kill)
__SYSCALL(130, sys_tkill)
__SYSCALL(131, sys_tgkill)
__SYSCALL_WITH_COMPAT(132, sys_sigaltstack, compat_sys_sigaltstack)
__SYSCALL_WITH_COMPAT(133, sys_rt_sigsuspend, compat_sys_rt_sigsuspend)
__SYSCALL_WITH_COMPAT(134, sys_rt_sigaction, compat_sys_rt_sigaction)
__SYSCALL_WITH_COMPAT(135, sys_rt_sigprocmask, compat_sys_rt_sigprocmask)
__SYSCALL_WITH_COMPAT(136, sys_rt_sigpending, compat_sys_rt_sigpending)
__SYSCALL(137, sys_rt_sigtimedwait)
__SYSCALL_WITH_COMPAT(138, sys_rt_sigqueueinfo, compat_sys_rt_sigqueueinfo)
__SYSCALL_WITH_COMPAT(139, sys_rt_sigreturn, compat_sys_rt_sigreturn)
__SYSCALL(140, sys_setpriority)
__SYSCALL(141, sys_getpriority)
__SYSCALL(142, sys_reboot)
__SYSCALL(143, sys_setregid)
__SYSCALL(144, sys_setgid)
__SYSCALL(145, sys_setreuid)
__SYSCALL(146, sys_setuid)
__SYSCALL(147, sys_setresuid)
__SYSCALL(148, sys_getresuid)
__SYSCALL(149, sys_setresgid)
__SYSCALL(150, sys_getresgid)
__SYSCALL(151, sys_setfsuid)
__SYSCALL(152, sys_setfsgid)
__SYSCALL_WITH_COMPAT(153, sys_times, compat_sys_times)
__SYSCALL(154, sys_setpgid)
__SYSCALL(155, sys_getpgid)
__SYSCALL(156, sys_getsid)
__SYSCALL(157, sys_setsid)
__SYSCALL(158, sys_getgroups)
__SYSCALL(159, sys_setgroups)
__SYSCALL(160, sys_newuname)
__SYSCALL(161, sys_sethostname)
__SYSCALL(162, sys_setdomainname)
__SYSCALL_WITH_COMPAT(165, sys_getrusage, compat_sys_getrusage)
__SYSCALL(166, sys_umask)
__SYSCALL(167, sys_prctl)
__SYSCALL(168, sys_getcpu)
__SYSCALL(169, sys_gettimeofday)
__SYSCALL(170, sys_settimeofday)
__SYSCALL(171, sys_adjtimex)
__SYSCALL(172, sys_getpid)
__SYSCALL(173, sys_getppid)
__SYSCALL(174, sys_getuid)
__SYSCALL(175, sys_geteuid)
__SYSCALL(176, sys_getgid)
__SYSCALL(177, sys_getegid)
__SYSCALL(178, sys_gettid)
__SYSCALL_WITH_COMPAT(179, sys_sysinfo, compat_sys_sysinfo)
__SYSCALL_WITH_COMPAT(180, sys_mq_open, compat_sys_mq_open)
__SYSCALL(181, sys_mq_unlink)
__SYSCALL(182, sys_mq_timedsend)
__SYSCALL(183, sys_mq_timedreceive)
__SYSCALL_WITH_COMPAT(184, sys_mq_notify, compat_sys_mq_notify)
__SYSCALL_WITH_COMPAT(185, sys_mq_getsetattr, compat_sys_mq_getsetattr)
__SYSCALL(186, sys_msgget)
__SYSCALL_WITH_COMPAT(187, sys_msgctl, compat_sys_msgctl)
__SYSCALL_WITH_COMPAT(188, sys_msgrcv, compat_sys_msgrcv)
__SYSCALL_WITH_COMPAT(189, sys_msgsnd, compat_sys_msgsnd)
__SYSCALL(190, sys_semget)
__SYSCALL_WITH_COMPAT(191, sys_semctl, compat_sys_semctl)
__SYSCALL(192, sys_semtimedop)
__SYSCALL(193, sys_semop)
__SYSCALL(194, sys_shmget)
__SYSCALL_WITH_COMPAT(195, sys_shmctl, compat_sys_shmctl)
__SYSCALL_WITH_COMPAT(196, sys_shmat, compat_sys_shmat)
__SYSCALL(197, sys_shmdt)
__SYSCALL(198, sys_socket)
__SYSCALL(199, sys_socketpair)
__SYSCALL(200, sys_bind)
__SYSCALL(201, sys_listen)
__SYSCALL(202, sys_accept)
__SYSCALL(203, sys_connect)
__SYSCALL(204, sys_getsockname)
__SYSCALL(205, sys_getpeername)
__SYSCALL(206, sys_sendto)
__SYSCALL_WITH_COMPAT(207, sys_recvfrom, compat_sys_recvfrom)
__SYSCALL_WITH_COMPAT(208, sys_setsockopt, sys_setsockopt)
__SYSCALL_WITH_COMPAT(209, sys_getsockopt, sys_getsockopt)
__SYSCALL(210, sys_shutdown)
__SYSCALL_WITH_COMPAT(211, sys_sendmsg, compat_sys_sendmsg)
__SYSCALL_WITH_COMPAT(212, sys_recvmsg, compat_sys_recvmsg)
__SYSCALL_WITH_COMPAT(213, sys_readahead, compat_sys_readahead)
__SYSCALL(214, sys_brk)
__SYSCALL(215, sys_munmap)
__SYSCALL(216, sys_mremap)
__SYSCALL(217, sys_add_key)
__SYSCALL(218, sys_request_key)
__SYSCALL_WITH_COMPAT(219, sys_keyctl, compat_sys_keyctl)
__SYSCALL(220, sys_clone)
__SYSCALL_WITH_COMPAT(221, sys_execve, compat_sys_execve)
__SYSCALL(222, sys_mmap)
__SYSCALL(223, sys_fadvise64_64)
__SYSCALL(224, sys_swapon)
__SYSCALL(225, sys_swapoff)
__SYSCALL(226, sys_mprotect)
__SYSCALL(227, sys_msync)
__SYSCALL(228, sys_mlock)
__SYSCALL(229, sys_munlock)
__SYSCALL(230, sys_mlockall)
__SYSCALL(231, sys_munlockall)
__SYSCALL(232, sys_mincore)
__SYSCALL(233, sys_madvise)
__SYSCALL(234, sys_remap_file_pages)
__SYSCALL(235, sys_mbind)
__SYSCALL(236, sys_get_mempolicy)
__SYSCALL(237, sys_set_mempolicy)
__SYSCALL(238, sys_migrate_pages)
__SYSCALL(239, sys_move_pages)
__SYSCALL_WITH_COMPAT(240, sys_rt_tgsigqueueinfo, compat_sys_rt_tgsigqueueinfo)
__SYSCALL(241, sys_perf_event_open)
__SYSCALL(242, sys_accept4)
__SYSCALL(243, sys_recvmmsg)
__SYSCALL(260, sys_wait4)
__SYSCALL(261, sys_prlimit64)
__SYSCALL(262, sys_fanotify_init)
__SYSCALL(263, sys_fanotify_mark)
__SYSCALL(264, sys_name_to_handle_at)
__SYSCALL(265, sys_open_by_handle_at)
__SYSCALL(266, sys_clock_adjtime)
__SYSCALL(267, sys_syncfs)
__SYSCALL(268, sys_setns)
__SYSCALL_WITH_COMPAT(269, sys_sendmmsg, compat_sys_sendmmsg)
__SYSCALL(270, sys_process_vm_readv)
__SYSCALL(271, sys_process_vm_writev)
__SYSCALL(272, sys_kcmp)
__SYSCALL(273, sys_finit_module)
__SYSCALL(274, sys_sched_setattr)
__SYSCALL(275, sys_sched_getattr)
__SYSCALL(276, sys_renameat2)
__SYSCALL(277, sys_seccomp)
__SYSCALL(278, sys_getrandom)
__SYSCALL(279, sys_memfd_create)
__SYSCALL(280, sys_bpf)
__SYSCALL_WITH_COMPAT(281, sys_execveat, compat_sys_execveat)
__SYSCALL(282, sys_userfaultfd)
__SYSCALL(283, sys_membarrier)
__SYSCALL(284, sys_mlock2)
__SYSCALL(285, sys_copy_file_range)
__SYSCALL_WITH_COMPAT(286, sys_preadv2, compat_sys_preadv2)
__SYSCALL_WITH_COMPAT(287, sys_pwritev2, compat_sys_pwritev2)
__SYSCALL(288, sys_pkey_mprotect)
__SYSCALL(289, sys_pkey_alloc)
__SYSCALL(290, sys_pkey_free)
__SYSCALL(291, sys_statx)
__SYSCALL(292, sys_io_pgetevents)
__SYSCALL(293, sys_rseq)
__SYSCALL(294, sys_kexec_file_load)
__SYSCALL(424, sys_pidfd_send_signal)
__SYSCALL(425, sys_io_uring_setup)
__SYSCALL(426, sys_io_uring_enter)
__SYSCALL(427, sys_io_uring_register)
__SYSCALL(428, sys_open_tree)
__SYSCALL(429, sys_move_mount)
__SYSCALL(430, sys_fsopen)
__SYSCALL(431, sys_fsconfig)
__SYSCALL(432, sys_fsmount)
__SYSCALL(433, sys_fspick)
__SYSCALL(434, sys_pidfd_open)
__SYSCALL(435, sys_clone3)
__SYSCALL(436, sys_close_range)
__SYSCALL(437, sys_openat2)
__SYSCALL(438, sys_pidfd_getfd)
__SYSCALL(439, sys_faccessat2)
__SYSCALL(440, sys_process_madvise)
__SYSCALL_WITH_COMPAT(441, sys_epoll_pwait2, compat_sys_epoll_pwait2)
__SYSCALL(442, sys_mount_setattr)
__SYSCALL(443, sys_quotactl_fd)
__SYSCALL(444, sys_landlock_create_ruleset)
__SYSCALL(445, sys_landlock_add_rule)
__SYSCALL(446, sys_landlock_restrict_self)
__SYSCALL(448, sys_process_mrelease)
__SYSCALL(449, sys_futex_waitv)
__SYSCALL(450, sys_set_mempolicy_home_node)
__SYSCALL(451, sys_cachestat)
__SYSCALL(452, sys_fchmodat2)
__SYSCALL(453, sys_map_shadow_stack)
__SYSCALL(454, sys_futex_wake)
__SYSCALL(455, sys_futex_wait)
__SYSCALL(456, sys_futex_requeue)
__SYSCALL(457, sys_statmount)
__SYSCALL(458, sys_listmount)
__SYSCALL(459, sys_lsm_get_self_attr)
__SYSCALL(460, sys_lsm_set_self_attr)
__SYSCALL(461, sys_lsm_list_modules)
__SYSCALL(462, sys_mseal)
__SYSCALL(463, sys_setxattrat)
__SYSCALL(464, sys_getxattrat)
__SYSCALL(465, sys_listxattrat)
__SYSCALL(466, sys_removexattrat)

```

## 如何编译

可查看前面文档具体的操作。

## **总结**  
Linux内核是一个**灵活、可扩展、社区驱动**的操作系统核心，其设计哲学和架构使其能适应从超级计算机到嵌入式设备的各类场景。随着2025-2026年的版本迭代（如7.0的Rust支持）和安全增强（如LKRG 1.0），Linux内核将继续保持其在操作系统领域的领先地位，为云计算、物联网、人工智能等新兴技术提供坚实的基础。  

对于开发者而言，学习Linux内核不仅能深入理解操作系统的运行机制，还能提升对计算机系统整体的认知，为开发高性能、高可靠性的应用程序提供有力支撑。

