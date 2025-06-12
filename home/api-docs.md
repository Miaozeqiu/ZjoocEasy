# API 文档

> 📚 ZE题库API接口的具体说明

## 接口详情

### 查询题目答案

**接口地址**: `https://api.zaizhexue.top/api/query`

**请求方式**: GET / POST

- **响应格式**: JSON

#### GET 请求方式

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| token | string | 是 | 用户认证令牌 |
| title | string | 是 | 题目标题 |
| options | string | 否 | 题目选项，多选题时使用 |
| type | string | 否 | 题目类型标识 |

**请求示例**:
```
GET https://api.zaizhexue.top/api/query?token=your_token&title=题目内容&options=选项内容&type=题目类型
```

#### POST 请求方式

**请求头**:
```
Content-Type: application/json
Authorization: Bearer your_token_here
```

**请求参数** (JSON格式):

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| title | string | 是 | 题目标题/问题内容 |
| options | string | 否 | 题目选项，多选题时使用 |
| type | string | 否 | 题目类型标识 |

**请求示例**:
```bash
curl -X POST https://api.zaizhexue.top/api/query \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Authorization: Bearer your_token_here" \
  -d "title=题目内容&options=选项内容&type=题目类型"
```

**响应格式**:

```json
{
  "data": {
    "code": 1,
    "data": "答案内容",
    "msg": "来自题库。。。"
  },
  "success": true
}
```

**响应参数说明**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| success | boolean | 请求是否成功，一般不用管 |
| data.code | integer | 状态码，1表示找到答案，0表示未找到答案或token无效 |
| data.data | string | 答案内容，多个答案用#分隔 |
| data.msg | string | 额外信息 |





## 使用限制

- **请求频率**: 暂无限制
- **Token有效期**: 在手动重置前无限期



## 常见问题

### Q: 如何获取Token？
A: 访问[ZError](https://tiku.zerror.cc)并登录，在`我的>题库配置`页可以查看到。

### Q: 答案格式是什么？
A: 多个答案用 `#` 分隔，例如：`答案1#答案2#答案3`


## OCS题库配置

以下是用于OCS题库的完整配置JSON格式：

```json
[
  {
    "name": "ZE题库",
    "homepage": "https://tiku.zerror.cc/",
    "url": "https://api.zaizhexue.top/api/query",
    "method": "post",
    "type": "GM_xmlhttpRequest",
    "data": {
      "title": "${title}",
      "options": "${options}",
      "type": "${type}"
    },
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer your_token_here"
    },
    "handler": "return (res)=>res.data.code === 0 ? [res.data.msg, undefined] : [undefined,res.data.data]"
  }
]
```

::: tip 配置说明
- 将 `your_token_here` 替换为您的实际API令牌
- POST方式使用Bearer认证，GET方式将token作为参数传递
- handler函数处理不同的响应格式
:::


---

*最后更新时间: 2025-06-12*