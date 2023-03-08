import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from '@vuepress/theme-default'

import sidebar from './sidebar'
import navbar from './navbar'

const config = defineUserConfig({
  base: '/',
  lang: 'zh_tw',
  title: '貓掌伺服器 Wiki',
  description: 'CatPalm 由 xuancat0208@gmail.com、創立於 2020/07/21',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['link', { rel: 'shortcut icon', href: '/images/73d617852e3fafadd042f4277d0a4934.ico' }],
    ['link', { rel: 'icon', href: '/images/73d617852e3fafadd042f4277d0a4934_16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', href: '/images/73d617852e3fafadd042f4277d0a4934_32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', href: '/images/73d617852e3fafadd042f4277d0a4934_64.png', sizes: '64x64' }],
    ['link', { rel: 'icon', href: '/images/73d617852e3fafadd042f4277d0a4934_127.png', sizes: '127x127' }],
  ],


  locales: {
    '/zh_tw': {
      lang: 'zh_tw',
      title: '貓掌伺服器',
      description: 'CatPalm 由 xuancat0208@gmail.com、創立於 2020/07/21',
    },
    '/ja_jp/': {
      lang: 'ja_jp',
      title: '猫の手サーバー',
      description: 'CatPalm created by xuancat0208@gmail.com. Since 2020/07/21',
    },
  },

  // theme and its config
  theme: defaultTheme({
    sidebarDepth: 3,
    logo: './images/73d617852e3fafadd042f4277d0a4934_32.png',
    navbar,
    sidebar,
    repo: 'https://github.com/haer0248/catpalm-wiki',
    docsRepo: 'https://github.com/haer0248/catpalm-wiki',
    docsBranch: 'main',
    docsDir: 'guide',
    locales: {
      '/zh_tw': {
        selectLanguageName: '繁體中文',
        home: '/zh_tw/',
        editLink: true,
        editLinkPattern: ':repo/blob/:branch/:path',
        editLinkText: '在 GitHub 查看此頁面',
        lastUpdated: true,
        lastUpdatedText: '最後更新',
        contributors: true,
        contributorsText: '貢獻者',
        backToHome: '回到首頁',
        openInNewWindow: '在新視窗中開啟',
        toggleColorMode: '切換顏色模式',
        toggleSidebar: '切換導覽列',
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
          '很抱歉，找不到此頁面。'
        ]
      },
      '/ja_jp/': {
        selectLanguageName: '日本語',
        home: '/ja_jp/',
        editLink: true,
        editLinkPattern: ':repo/blob/:branch/:path',
        editLinkText: 'GitHub のこのページをチェックしてください',
        lastUpdated: true,
        lastUpdatedText: '最新のアップデート',
        contributors: true,
        contributorsText: '寄稿者',
        backToHome: 'ホームページに戻る',
        openInNewWindow: '新しいウィンドウで開きます',
        toggleColorMode: 'カラーモードの切り替え',
        toggleSidebar: 'ナビゲーション バーの切り替え',
        tip: 'ヒント',
        warning: '知らせ',
        danger: '暖かい',
        notFound: [
          'このページは見つかりませんでした。'
        ]
      },
    },
  })
})

export default config