import{_ as e,a as i}from"./chunks/LaunchServer.BeAinQTL.js";import{_ as t}from"./chunks/DeepSeekProxy.CHSQ3kwC.js";import{_ as s,c as l,o,ae as r}from"./chunks/framework.DN7zo1cr.js";const g=JSON.parse('{"title":"自己搭建AI题库","description":"","frontmatter":{},"headers":[],"relativePath":"home/build-question-bank.md","filePath":"home/build-question-bank.md"}'),n={name:"home/build-question-bank.md"};function p(h,a,c,d,u,k){return o(),l("div",null,a[0]||(a[0]=[r('<h1 id="自己搭建ai题库" tabindex="-1">自己搭建AI题库 <a class="header-anchor" href="#自己搭建ai题库" aria-label="Permalink to &quot;自己搭建AI题库&quot;">​</a></h1><blockquote><p>下面展示两种不同的搭建方式，选择一种即可</p></blockquote><h2 id="本地搭建" tabindex="-1">本地搭建 <a class="header-anchor" href="#本地搭建" aria-label="Permalink to &quot;本地搭建&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">1️⃣获取API Key</p><p><a href="./GetAPIKey">点击查看教程</a></p></div><div class="tip custom-block"><p class="custom-block-title">2️⃣下载并运行 ZE网课助手（自建AI题库）</p><ul><li><a href="https://wwyl.lanzouv.com/b00ocrzzje" target="_blank" rel="noreferrer">蓝奏云</a> 密码：43so</li><li><a href="https://gitee.com/m0zey/ZjoocEasyPro/releases" target="_blank" rel="noreferrer">Gitee</a> 下载.zip文件</li><li><a href="https://dwpan.com/f/Dyte/ZE_question_bank.zip" target="_blank" rel="noreferrer">直链下载</a></li></ul></div><div class="tip custom-block"><p class="custom-block-title">3️⃣打开软件</p><p><img src="'+e+'" alt="open_exe"></p><p>填入相应平台的API Key，然后点击保存，启动服务</p><p><img src="'+t+'" alt="images/DeepSeekProxy.png"></p><p><img src="'+i+'" alt="LaunchServer"></p></div><p>在软件的首页，你可以看到你的题库配置，你可以将其添加到OCS网课助手中</p><h2 id="服务器搭建" tabindex="-1">服务器搭建 <a class="header-anchor" href="#服务器搭建" aria-label="Permalink to &quot;服务器搭建&quot;">​</a></h2><p>Github仓库：<a href="https://github.com/Miaozeqiu/ai-ocs-question_bank" target="_blank" rel="noreferrer">https://github.com/Miaozeqiu/ai-ocs-question_bank</a></p><h4 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h4><ul><li>Python 3.8+</li><li>pip 包管理器</li></ul><h4 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span></code></pre></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><p>在 <code>config.json</code> 文件中设置以下配置：</p><ul><li>host: API服务器地址</li><li>port: API服务器端口</li><li>api_key: 硅基流动 API密钥</li></ul><p>目前只支持硅基流动的API_Key <a href="https://cloud.siliconflow.cn/i/yWzlOTHL" target="_blank" rel="noreferrer">注册链接</a> 邀请码：<code>yWzlOTHL</code></p><h4 id="如何运行" tabindex="-1">如何运行 <a class="header-anchor" href="#如何运行" aria-label="Permalink to &quot;如何运行&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.py</span></span></code></pre></div><h4 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_api.py</span></span></code></pre></div>',21)]))}const f=s(n,[["render",p]]);export{g as __pageData,f as default};
