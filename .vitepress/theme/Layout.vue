<template>
    <div>
      <slot />
      <!-- 页脚区域 -->
      <footer class="footer">
        <p>© 2024 在浙学网课助手 | 题库. All Rights Reserved.</p>
        <p>备案号: <a href="http://www.beian.miit.gov.cn" target="_blank">浙ICP备2024001234号</a></p>
      </footer>
    </div>
  </template>
  
  <script setup>
  // 在这里你可以进行一些页面底部的定制设置
  </script>
  
  <style scoped>
  .footer {
    text-align: center;
    padding: 20px;
    font-size: 14px;
    color: #999;
    background-color: #f1f1f1;
  }
  .footer a {
    color: #0066cc;
    text-decoration: none;
  }
  .footer a:hover {
    text-decoration: underline;
  }
  </style>
  