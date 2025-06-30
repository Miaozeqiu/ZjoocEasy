import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "在浙学助手|题库",
  description: "为在浙江学用户提供更好的使用体验和题库服务，支持OCS网课助手，免费题库搜索，一键刷课，DeepSeek AI答案解析",
  lang: 'zh-CN',
  head: [
    // Favicon
    [
      "link",
      {
        rel: "icon",
        type: "image/svg",
        href: "/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png",
      },
    ],
    // SEO Meta Tags
    ['meta', { name: 'keywords', content: '在浙学,网课助手,题库,OCS,刷课,答案搜索,DeepSeek,AI,浙江学习,网课,自动播放,脚本' }],
    ['meta', { name: 'author', content: 'M0zey' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '在浙学助手|题库 - 最好用的在浙学网课助手' }],
    ['meta', { property: 'og:description', content: '为在浙江学用户提供更好的使用体验和题库服务，支持OCS网课助手，免费题库搜索，一键刷课，DeepSeek AI答案解析' }],
    ['meta', { property: 'og:image', content: '/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png' }],
    ['meta', { property: 'og:site_name', content: '在浙学助手' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: '在浙学助手|题库 - 最好用的在浙学网课助手' }],
    ['meta', { name: 'twitter:description', content: '为在浙江学用户提供更好的使用体验和题库服务，支持OCS网课助手，免费题库搜索，一键刷课，DeepSeek AI答案解析' }],
    ['meta', { name: 'twitter:image', content: '/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png' }],
    
    // Viewport and Mobile
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    
    // Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': '在浙学助手|题库',
      'description': '为在浙江学用户提供更好的使用体验和题库服务，支持OCS网课助手，免费题库搜索，一键刷课，DeepSeek AI答案解析',
      'url': 'https://zjooc.miaozeqiu.top',
      'author': {
        '@type': 'Person',
        'name': 'M0zey'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://app.zaizhexue.top/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })],
  ],

  themeConfig: {
    logo:"/images/%E5%9C%A8%E6%B5%99%E5%AD%A6%E5%9B%BE%E6%A0%87.png",
    nav: [
      { text: '首页', link: '/home/about' },
      { text: '日志', link: '/home/log' }
    ],
    footer: {
      message: "",
      copyright: "Copyright © 2024 M0zey 在浙学网课助手|题库\n<a href='https://beian.miit.gov.cn/' target='_blank'>津ICP备2024025272号-2</a>",
    },
    sidebar: [
      {
        text: '关于',
        items: [
          { text: '简介', link: '/home/about' },
          { text: '日志', link: '/home/log' },
          { text: '外卖红包', link: '/home/takeout-red-envelopes' },
        ],
      },
      {
        text: '使用',
        items: [
          { text: '插件安装', link: '/home/web-plugin' },
          { text: '课件速刷', link: '/home/QuickCoursewareBrowsing' },
          { text: '本地AI代理', link: '/home/DeepSeek'},
          // { text: '获取API Key', link: '/home/GetAPIKey'},
          { text: '常见问题', link: '/home/frequently-asked-questions'},
        ]
      },
      // {
      //   // text: '题库',
      //   // items: [
      //     // { text: '私人题库', link: '/home/private-question-bank' },
      //     // { text: '题库配置', link: '/home/API' },
      //     // { text: '题库API', link: '/home/api-docs' },
      //     // { text: '自己搭建AI题库', link: '/home/build-question-bank' },  // 新增这一行

      //   // ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Miaozeqiu/ZjoocEasy/' }
    ]
  },
  cleanUrls: true,  // 开启 cleanUrls 功能
  
  // SEO 优化配置
  sitemap: {
    hostname: 'https://pages.zaizhexue.top'
  },
  
  // 启用最后更新时间
  lastUpdated: true,
  
  // 搜索优化
  transformHead: ({ pageData }) => {
    const head = []
    
    // 为每个页面添加canonical链接
    if (pageData.relativePath !== 'index.md') {
      head.push([
        'link',
        {
          rel: 'canonical',
          href: `https://zjooc.miaozeqiu.top/${pageData.relativePath.replace(/\.md$/, '.html')}`
        }
      ])
    } else {
      head.push([
        'link',
        {
          rel: 'canonical',
          href: 'https://zjooc.miaozeqiu.top/'
        }
      ])
    }
    
    return head
  }
})