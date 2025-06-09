# 自己搭建AI题库
>下面展示两种不同的搭建方式，选择一种即可

## 本地搭建

:::tip 1️⃣获取API Key

[点击查看教程](./GetAPIKey.md)

:::

:::tip 2️⃣下载并安装 ZError
> [软件官网](https://zerror.neoregion.cn)
- [蓝奏云](https://wwyl.lanzouv.com/b00ocrzzje)    密码：43so
- [直链下载](https://dwpan.com/f/bYhj/ZError_Setup_1.0.0.exe)

:::

:::tip 3️⃣打开软件

填入相应平台的API Key，然后点击保存，启动服务

![images/DeepSeekProxy.png](/images/Settings.png)

![LaunchServer](/images/LaunchServe.png)
:::


在软件的首页，你可以看到你的题库配置，你可以将其添加到OCS网课助手中
## 服务器搭建

Github仓库：https://github.com/Miaozeqiu/ai-ocs-question_bank

#### 环境要求
- Python 3.8+
- pip 包管理器

#### 安装依赖
```bash
pip install -r requirements.txt
```

#### 配置
在 `config.json` 文件中设置以下配置：
- host: API服务器地址
- port: API服务器端口
- api_key: 硅基流动 API密钥

目前只支持硅基流动的API_Key
[注册链接](https://cloud.siliconflow.cn/i/yWzlOTHL)
邀请码：`yWzlOTHL`

#### 如何运行

```bash
python main.py
```

#### 测试

```bash
python test_api.py
```