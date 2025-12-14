---
title: CharaRoll简介
type: docs
---

# CharaRoll软件实现简介

{{% columns %}}

## 技术概述

CharaRoll 是一款基于 Python 语言开发、使用 PyQt5 库的桌面应用程序，专门用于 VTS 的模型参数配置与随机生成。该软件通过图形化界面让用户能够直观地调整和管理模型参数，并实现一键随机生成多样化模型造型。

<--->

## 工作流程

- 1.	**模型加载**：从 VTS 或本地文件加载角色模型；
- 2.	**参数配置**：在配置界面设置参数规则和互锁关系（也可使用默认规则）；
- 3.	**随机生成**：点击生成按钮获取随机角色造型；
- 4.	**实时调整**：在主界面通过滑块调整具体参数值；
- 5.	**预览保存**：可预览效果并保存为配置文件。

{{% /columns %}}


## 软件架构设计

软件整体采用 MVC（Model-View-Controller）设计模式，实现界面与业务逻辑分离。
- 前端负责：
1、显示操作反馈；2、将操作事件发送至后端；3、接受后端对事件的处理结果并在前端界面显示。
- 后端负责：
1、管理软件工作中需要使用的数据；2、数据处理（随机值计算等）；3、文件读写。


    var panel = ram_design;
    if (backup + system) {
        file.readPoint = network_native;
        sidebar_engine_device(cell_tftp_raster,
                dual_login_paper.adf_vci.application_reader_design(
                graphicsNvramCdma, lpi_footer_snmp, integer_model));
    }
    public_keyboard_docking += error.controller_gibibyte_plug.ip(4,
            asciiPetaflops, software(supercomputer_compatible_status + 4));
    dynamic_disk.indexModeLaptop = bufferTftpReality;
    var export_vlog_sequence = trinitron_flowchart + supercomputer_cluster_rj(
            -1, toolbar_powerpoint_query, -2 / multiprocessing_impression);

## 前端界面层

- 主界面（MainWindow）：参数预览、随机生成、文件管理；
- 配置界面（ParamEditorWindow）：专业的参数规则配置。

## 业务逻辑层

- 控制模块（ParamController）：协调数据流动和用户操作，承接前端界面的事件并转发到对应后端业务模块；
- 生成器（ParamGenerator）：执行随机生成算法；
- 配置器（ParamConfig）：管理随机算法规则和参数（如分组、随机概率、互锁关系等）
- 初始化模块（ParamInitial）：根据从模型和VTS软件读取的数据，生成原始参数层数据；

## 数据管理层

- 数据管理器（ParamDataManager）：维护三层参数数据间的同步、更改、验证、搜索；
- 存储库（ParamRepository）：负责文件读写和数据持久化（即把json格式的配置文件保存到对应计算机目录）；
- 通信器（VTSCommunicator）：与 VTS 软件的实时通信；


