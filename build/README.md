# 构建目录（Build Directory）

构建目录用于存放应用程序的所有构建文件和资源文件。

其目录结构如下：

* bin - 输出目录（存放最终生成的可执行文件等）
* darwin -  macOS 系统专属文件（仅用于苹果电脑系统）
* windows - Windows 系统专属文件（仅用于Windows系统）

## macOS 系统（Mac）

`darwin` 目录存放 macOS 系统构建相关的专属文件。  
这些文件可根据需求自定义，并在构建过程中被使用。若需将这些文件恢复为默认状态，只需删除它们，然后执行 `wails build` 命令重新构建即可。

该目录包含以下文件：
* `Info.plist`：macOS 系统构建时使用的主配置文件，执行 `wails build` 命令构建时会调用此文件。
* `Info.dev.plist`：功能与主配置文件（Info.plist）一致，但仅在执行 `wails dev` 命令（开发模式构建）时使用。

## Windows 系统

`windows` 目录包含执行 `wails build` 命令构建时所需的清单文件（manifest）和资源文件（rc）。  
这些文件可根据应用程序需求自定义。若需恢复为默认状态，只需删除它们，再执行 `wails build` 命令重新构建即可。

该目录包含以下文件：
* `icon.ico`：应用程序的图标文件，执行 `wails build` 命令构建时会使用。若需更换图标，直接用自定义图标文件替换此文件即可；若该文件缺失，系统会自动使用构建目录中的 `appicon.png` 文件生成新的 `icon.ico` 文件。
* `installer/*`：用于创建 Windows 安装程序的相关文件，执行 `wails build` 命令构建时会调用这些文件（`*` 表示该目录下的所有文件）。
* `info.json`：Windows 系统构建时使用的应用程序详情文件。文件中的数据不仅会被 Windows 安装程序调用，还会应用于程序本身（例如：右键点击可执行文件 -> 属性 -> 详细信息 中显示的内容）。
* `wails.exe.manifest`：应用程序的主清单文件，用于定义程序在 Windows 系统中的运行配置（如兼容性、权限等）。
