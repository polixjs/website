module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Polix.js',
      description: 'Annotations and Plugin Web Framework for Node.js'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Polix.js',
      description: 'Node.js 注解、插件式 Web框架'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'polixjs/polix',
    editLinks: false,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },{
            text: 'Middlware',
            link: '/middlware/'
          },
          {
            text: 'Controller',
            link: '/controller/'
          },
          {
            text: 'Service',
            link: '/service/'
          },{
            text: 'Plugin',
            link: '/plugin/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/',
          },
          {
            text: '配置',
            link: '/zh/config/'
          },{
            text: '中间件',
            link: '/zh/middlware/'
          },
          {
            text: '控制器',
            link: '/zh/controller/'
          },
          {
            text: '服务',
            link: '/zh/service/'
          },{
            text: '插件',
            link: '/zh/plugin/'
          }
        ],
        sidebar: {
          '/zh/guide/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        // 'getting-started',
        // 'basic-config',
        // 'assets',
        // 'using-vue',
        // 'i18n',
        // 'deploy'
      ]
    }
  ]
}
