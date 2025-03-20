import { defineConfig } from 'vitepress';

// 导入主题的配置
import { blogTheme } from './blog-theme';

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: '云朵之上',
  description: 'Lemonz的博客主题,基于 vitepress 实现',
  lastUpdated: true,
  cleanUrls: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/cloud.svg' }],

    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://chinese-fonts-cdn.deno.dev/packages/yozai/dist/Yozai-Medium/result.css'
      }
    ]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/cloud.svg',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端基础',
        items: [
          { text: 'JavaScript', link: '/Frontend/JavaScript' },
          { text: 'CSS', link: '/Frontend/CSS' }
        ]
      },
      { text: '面试', link: '/Interview' },
      {
        text: '个人项目',
        items: [
          { text: 'AiDialog', link: '/Project/AiDialog' },
          { text: '教学后台管理', link: '/Project/Manage' }
        ]
      }

      // { text: '关于作者', link: 'https://sugarat.top/aboutme.html' }
    ],
    sidebar: {
      '/Frontend/': [
        {
          text: 'Javascript',
          collapsed: false,
          items: [
            {
              text: '对Javascript执行上下文和执行栈的理解',
              link: '/Frontend/JavaScript/Execution-context'
            }
          ]
        },
        {
          text: 'CSS',
          collapsed: false,
          items: [
            {
              // text: '对Javascript执行上下文和执行栈的理解',
              // link: '/Frontend/JavaScript/Execution-context'
            }
          ]
        }
      ],
      '/Interview/': [
        {
          text: '面试',
          collapsed: false,
          items: [
            {
              // text: '对Javascript执行上下文和执行栈的理解',
              // link: '/Frontend/JavaScript/Execution-context'
            }
          ]
        }
      ],
      '/Project/': [
        {
          text: '大模型对话系统',
          collapsed: false,
          items: [
            {
              text: 'AiDialog项目功能详解',
              link: '/Project/AiDialog/ai-dialog'
            },
            {
              text: 'BaseDialog组件详解',
              link: '/Project/AiDialog/BaseDialog'
            },
            {
              text: 'ChatAside组件详解',
              link: '/Project/AiDialog/ChatAside'
            },
            {
              text: 'ChatHeader组件详解',
              link: '/Project/AiDialog/ChatHeader'
            },
            {
              text: 'ChatMain组件详解',
              link: '/Project/AiDialog/ChatMain'
            },
            {
              text: '内联对话框组件详解',
              link: '/Project/AiDialog/InnerDialog'
            }
          ]
        },
        {
          text: '教学后台管理系统',
          collapsed: false,
          items: [
            {
              text: '教学后台管理系统项目功能详解',
              link: '/Project/Manage/manage'
            }
          ]
        }
      ]
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lmz2003/'
      }
    ]
  }
});
