# 题库配置
> ✨完全适配OCS


## 题库配置
在ZE题库的 `我的>题库配置`界面，你会看到你的配置数据，它完全兼容OCS，你可以直接复制到OCS题库配置界面。

![题库配置](/images/question_bank_settings.png)

::: tip 添加到ocs的方法如下:
![添加到ocs](/images/添加配置.gif)
:::

::: warning 一般情况下，我们会遇到这样的警告弹窗
![警告弹窗](/images/warning.png)
我们必须解决这个警告，否则题库是无法使用的。
你可以按照提示安装ocs全域名版，这个版本与普通版一样是免费的
或者参照下面的方法解决这个警告
![编辑](/images/编辑.gif)
添加这一行代码

// @connect                 api.zaizhexue.top
![添加域名](/images/add_domain.png)
:::



## 返回的数据示例

```json
{
  "data": {
    "code": 1,
    "data": "生物的进化和变异。#生态环境变化。#人口流动和人类行为。#国际贸易和旅行的发展。#不良医疗行为。#落后的公共卫生体制。",
    "msg": null
  },
  "success": true
}
```



## python 测试小工具

```python
import requests
import json

# API 配置信息
api_config = {
    "name": "ZE题库",
    "homepage": "https://pages.zaizhexue.top/",
    "url": "http://api.zaizhexue.top/api/query",
    "method": "get",
    "type": "GM_xmlhttpRequest",
    "contentType": "json",
    "data": {
        "ai": 1,
        "token": "your_token_here",  #替换为你的 token
        "title": "${title}",
        "options": "${options}",
        "type": "${type}"
    },
    "handler": "return (res)=>res.code === 0 ? [undefined, undefined] : [undefined,res.data.data]"
}

def test_api(title, options="", question_type=""):
    """
    测试 ZE 题库 API
    
    参数:
        title (str): 问题标题
        options (str): 问题选项，可选
        question_type (str): 问题类型，可选
    """
    # 准备请求参数
    params = {
        "ai": api_config["data"]["ai"],
        "token": api_config["data"]["token"],
        "title": title,
        "options": options,
        "type": question_type
    }
    
    print(f"正在发送请求到 {api_config['url']}")
    print(f"请求参数: {json.dumps(params, ensure_ascii=False, indent=2)}")
    
    try:
        # 发送 GET 请求
        response = requests.get(api_config["url"], params=params)
        
        # 检查响应状态码
        print(f"响应状态码: {response.status_code}")
        
        if response.status_code == 200:
            # 解析 JSON 响应
            result = response.json()
            print(f"响应内容: {json.dumps(result, ensure_ascii=False, indent=2)}")
            
            # 检查是否成功
            if result.get("success"):
                data = result.get("data", {})
                code = data.get("code")
                answer = data.get("data")
                
                if code == 1 and answer:
                    print(f"\n✅ 查询成功！答案: {answer}")
                else:
                    print(f"\n❌ 未找到答案: {data.get('msg')}")
            else:
                print(f"\n❌ 请求失败: {result.get('error')}")
        else:
            print(f"\n❌ 请求失败: HTTP {response.status_code}")
            print(response.text)
            
    except Exception as e:
        print(f"\n❌ 发生错误: {str(e)}")

if __name__ == "__main__":
    # 测试示例
    print("=" * 50)
    print("ZE题库 API 测试工具")
    print("=" * 50)
    
    while True:
        print("\n请选择操作:")
        print("1. 测试单个问题")
        print("2. 退出")
        
        choice = input("请输入选项 (1/2): ").strip()
        
        if choice == "1":
            title = input("\n请输入问题标题: ").strip()
            options = input("请输入选项 (可选): ").strip()
            question_type = input("请输入问题类型 (可选): ").strip()
            
            print("\n" + "=" * 50)
            test_api(title, options, question_type)
            print("=" * 50)
        elif choice == "2":
            print("\n感谢使用 ZE题库 API 测试工具！")
            break
        else:
            print("\n❌ 无效的选项，请重新输入。")
```