# 题库配置
> ✨完全适配OCS


## ⚙️题库配置
在ZE题库的 `我的>题库配置`界面，你会看到你的配置数据，它完全兼容OCS，你可以直接复制到OCS题库配置界面。
<div class="pic">
<img src="/images/question_bank_settings.png" alt="题库配置" />
</div>

添加到ocs的方法如下:
<div class="pic">
  <img src="/images/添加配置.gif" alt="添加到ocs" />
</div>

## ⚠️警告弹窗
在不使用OCS桌面软件的情况下，我们遇到这样的警告弹窗。我们必须解决这个警告，否则题库会连接失败。有下面三种方案可以选择。
<div class="pic">
<img src="/images/warning.png" alt="警告弹窗" />
</div>



#### 方案一
你可以按照提示安装ocs全域名版，这个版本与普通版一样是免费的。不过因为网络原因你可能会打不开链接，而脚本猫也没有这个版本。

#### 方案二
你可以点击下方按钮将你目前使用的OCS脚本修改，以适用ZError题库。不过在每次ocs版本更新时

<ClientOnly>
    <button class="test-api-button" style="margin-left: 10px; background-color: #2196F3;" onclick="window.open('https://ocs.csid.cc/OCS%E7%BD%91%E8%AF%BE%E5%8A%A9%E6%89%8B.user.js','_blank')">
      点击安装
    </button>
</ClientOnly>


#### 方案三
1. 参照动图打开脚本的代码页
<div class="pic">
<img src="/images/编辑.gif" alt="编辑" />
</div>

2. 添加这一行代码
``` javascript
// @connect                 api.zaizhexue.top
```

![添加域名](/images/add_domain.png)

3.切记改完后ctrl+s保存。上面两个方法的原理是一样的。
:::  warning 注意
 所有跨域提示，请选择永久允许，否则题库无法使用。
:::

## 🤯仍然连接失败
如果你经过上面的操作，仍然显示连接失败，请你进行下列检测：
1. 你的网络环境位于中国大陆
2. 你可以正常访问 api.zaizhexue.top

点击下方按钮测试连接


<ClientOnly>
  <div class="api-test">
    <button class="test-api-button" onclick="testApiConnection()">
      测试API连接
    </button>
    <p class="test-result" id="testResult"></p>
  </div>
</ClientOnly>

如果api可以正常连接，但仍然显示连接失败，请你联系开发者帮助配置QQ2669624618
<style>
.test-api-button {
  padding: 10px 20px;
  background-color:rgb(90, 215, 94);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.test-result {
  margin-top: 10px;
}
</style>

<script>
export default {
  mounted() {
    window.testApiConnection = function() {
      const result = document.getElementById('testResult');
      result.textContent = '测试中...';
      result.style.color = '#666666';
      
      fetch('https://api.zaizhexue.top/', {
        method: 'GET',
        mode: 'cors'
      })
      .then(response => {
        if (response.ok) {
          result.innerHTML = '✅ API 连接正常！';
          result.style.color = '#4CAF50';
        } else {
          throw new Error('API 响应异常');
        }
      })
      .catch(error => {
        result.innerHTML = '❌ API 连接失败，请联系开发者QQ2669624618';
        result.style.color = '#f44336';
      });
    }
  }
}
</script>





