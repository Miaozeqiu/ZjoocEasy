import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学网课助手|题库",
  description: "A VitePress Site",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: "/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png",
      },
    ],
  ],

  themeConfig: {
    logo:"/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png",
    nav: [
      { text: '首页', link: '/home/about' },
      { text: '日志', link: '/home/log' }
    ],
    footer: {
      message: "",
      copyright: "Copyright © 2024 M0zey 在浙学网课助手|题库",
    },
    sidebar: [
      {
        text: '目录',
        items: [
          { text: '首页', link: '/home/about' },
          { text: '插件安装', link: '/home/web-plugin' },
          { text: '✨DeepSeekProxy', link: '/home/DeepSeek'},
          { text: '✨获取API Key', link: '/home/GetAPIKey'},
          { text: '常见问题', link: '/home/frequently-asked-questions'},
          { text: '私人题库', link: '/home/private-question-bank' },
          { text: '日志', link: '/home/log' },
          { text: 'API', link: '/home/API' },
          { text: '外卖红包', link: '/home/takeout-red-envelopes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu/ZjoocEasy/' }
    ]
  },
  cleanUrls: true  // 开启 cleanUrls 功能
})