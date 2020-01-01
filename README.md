## fasda


├─dist/                    # 生产环境构建目录
├─public/                  # 主页模板目录
├─src/                     # 源码目录
│    ├─api/                # 数据接口目录
│    ├─assets/             # 静态资源文件目录
│    ├─components/         # 全局公用组件目录
│    ├─config/             # 项目配置目录
│    ├─layouts/            # 布局目录
│    ├─lib/                # 静态数据目录
│    ├─router/             # 路由配置目录
│    ├─store/              # Vuex配置目录
│    ├─themes/             # 项目主题目录
│    ├─utils/              # 工具函数目录
│    ├─mock/               # mock 目录
│    └─pages/              # 页面容器组件目录
│        ├─dashboard/      # 监控分析页
│        ├─list-page/      # 列表页
│        │  ├─query-list/    # 查询表格
│        │  └─standard-list/ # 标准列表
│        ├─login/          # 登陆页
│        └─user-page/      # 个人页
│            ├─user-center/  # 个人中心
│            └─user-set/     # 设置中心
├─.eslintignore            # 指定 eslint 忽略的文件
├─.eslintrc.js             # 配置 eslint 的检测规则
├─.gitignore               # Git 提交忽略的文件配置
├─.postcss.js              # 转换 css 的工具配置文件
├─.prettierignore          # Prettier忽略文件配置
├─.prettierrc              # Prettier配置
├─babel.config.js          # babel 编译配置
├─package-lock.json        # 用来锁定依赖的版本号（NPM 自动生成）
├─package.json             # 项目基本信息
├─README.md                # 项目介绍
├─vue.config.js            # 项目打包配置文件
