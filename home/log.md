
# 本站的更新日志
1. <span class="improve">优化</span> [题库]题库配置改为使用POST请求以适应ocs
2. <span class="improve">优化</span> [题库]后端重构，由Python Flask改为Go Fiber
3. <span class="improve">优化</span> [题库]采用主从数据库+redis缓存架构
4. <span class="improve">优化</span> [题库]题库接口使用cdn加速
4. <span class="new">新增</span> [题库]试卷添加一键截图功能，可以快速截图，转发给好友

## 2025/4/29
1. <span class="fix">修复</span> [助手]选择题无法自动答题的问题
2. <span class="improve">改进</span> [助手]优化了插件的自动播放功能,现在会跳过卡住的视频了
3. <span class="improve">改进</span> [助手]添加警告弹窗，更好地提醒用户

## 2025/3/28
1. <span class="improve">改进</span>[题库]使用Vue3 重构的新版题库网站上线
2. <span class="new">新增</span>[题库]题库支持OCS

## 2025/3/16
1. <span class="improve">改进</span> [助手]在点击自动播放时,会跳出任务列表选项
3. <span class="improve">改进</span> [助手]数学公式显示优化
2. <span class="new">新增</span> [助手]课件速刷功能


## 2025/3/05
1. <span class="fix">修复</span> [助手]页面刷新时登陆状态失效的问题
2. <span class="fix">修复</span> [助手]复制功能失效问题
2. <span class="improve">改进</span> [助手]每个用户每日有50次使用DeepSeek的限额，DeepSeekProxy作为可选项
## 2025/3/02
1. <span class="fix">修复</span> [助手]一些页面下，“上一题“，”下一题“按钮失效的问题
2. <span class="new">新增</span> [助手]添加了对DeepSeek的支持
## 2025/2/14
1. <span class="improve">改进</span> [助手]登陆方式，不用再手动复制Token
2. <span class="improve">改进</span> [助手]自动播放，准确定位到未查看课件
3. <span class="new">新增</span> [助手]了一个彩蛋（广告）
4. <span class="new">新增</span> [助手]修复Bing搜索第一个结果的空白页问题

## 2024/12/27
1. <span class="new">新增</span> [助手]更新了考试模式 (祝大家期末不挂科！)
2. <span class="new">新增</span> [助手]答案显示后可以隐藏

## 2024/12/24
1. <span class="fix">修复</span> [助手]修复了某些页面下，答案顺序混乱的bug
2. <span class="fix">修复</span> [助手]修复了自动播放下，提示框显示的bug
3. <span class="fix">修复</span> [助手]修复了插件窗口被拖至屏幕外无法复原的问题
4. <span class="new">新增</span> [助手]为填空题添加提示，并增加一键复制按钮


## 2024/12/20
1. <span class="fix">修复</span> [助手]修复了插件自动播时，元素识别出错的bug
2. <span class="fix">修复</span> [助手]修复了听力题以及不定项选择可能在插件中答案显示出错的bug
3. <span class="improve">改进</span> [助手&网站]美化了网站以及插件界面，添加了适当的动画效果
4. <span class="improve">改进</span> 优化了公众号交互，用户可以在公众号中反馈问题
5. <span class="new">新增</span> 🎄Merry Christmas.

## 2024/12/13
1. <span class="new">新增</span> [题库]更新了私有题库功能

## 2024/12/09
1. <span class="fix">修复</span> [题库]修复服务器题库上传bug
2. <span class="new">新增</span> [助手]脚本自动播放视频功能开始测试

## 2024/12/08
1. <span class="improve">优化</span> [题库]优化上传函数，更好地支持有子题目的题型
2. <span class="new">新增</span> [题库]网站拥有了第一个测试的油猴脚本，可以在网页上直接答案(太棒了) 🎉 
3. <span class="new">新增</span> [题库]增加了登陆系统，用户无需账号密码即可登录


## 2024/11/20
1. <span class="improve">优化</span> [题库]更新本站域名，以及文档域名
2. <span class="new">新增</span> [题库]支持在浙学平台几乎所有题目🎉



## 2024/11/10
1. <span class="improve">优化</span> [题库]请求优化，减少服务器压力
2. <span class="improve">优化</span> [题库]优化了网站显示，添加等待的动画效果，改善搜索栏的布局，调整页脚
3. <span class="new">新增</span> [题库]添加一个无服务器站点 https://www.在浙学.top ，分散主服务器压力
4. <span class="new">新增</span> 生日快乐，QJC


## 2024/11/05
1. <span class="fix">修复</span> [题库]修复同一题目在搜索之后无法搜索到的bug
2. <span class="improve">优化</span> [题库]优化网站显示，调整页脚字体大小，改善移动设备触摸交互
3. <span class="new">新增</span> [题库]启用新的已备案的主站域名替代之前的IP
4. <span class="new">新增</span> [题库]起用新的文档主域名，增加了Couldflare以及Netlify的托管

## 2024/11/01
1. <span class="improve">优化</span> [题库]换用高性能的MySel数据库，提高并发能力
2. <span class="improve">优化</span> [题库]优化了搜索，防止题目中间的多个空格被浏览器的自动隐藏，从而导致直接复制搜索失败的问题
3. <span class="new">新增</span> [题库]添加了对填空题以及上传视频类题型的支持
4. <span class="new">新增</span> [题库]起用了一个新的IP

## 2024/10/29

1. <span class="improve">优化</span> [题库]优化了网站显示，页脚再也不会遮挡网站主体，尤其是‘加载更多’按钮了
2. <span class="fix">修复</span> [题库]修复了‘加载更多’按钮重复发送请求导致同一结果展示两次的bug
3. <span class="fix">修复</span> [题库]修复了页脚只有一部分具有超链接的bug
4. <span class="fix">修复</span> [题库]题目上传时，HTML有时会解析错误的bug

## 2024/10/28

1. <span class="fix">修复</span> [题库]修复了直接复制题目时，末尾空格导致的搜索失败的bug
2. <span class="new">新增</span> [题库]增加了题目的来源信息
3. <span class="new">新增</span> [题库]为网站文档编写了API页面以及日志页面

## 2024/10/23

1. <span class="new">新增</span> [题库]增加了网站文档，并将文档添加到页脚超链接

## 2024/10/22

1. 🎉<span class="new">新增</span> [题库]网站上线