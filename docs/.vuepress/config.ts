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
      description: 'CatPalm.net 由 xuancat0208@gmail.com、創立於 2020/07/21',
    },
    '/ja_jp/': {
      lang: 'ja_jp',
      title: '猫の手サーバー',
      description: 'CatPalm.netは2020年7月21日にxuancat0208@gmail.comによって設立されました',
    },
    '/ko_kr/': {
      lang: 'ko_kr',
      title: '고양이 발 서버',
      description: 'CatPalm.net은 2020/07/21에 xuancat0208@gmail.com에 의해 설립되었습니다',
    },
    '/en_us/': {
      lang: 'en_us',
      title: 'CatPalm Server',
      description: 'CatPalm.net was founded on July 21, 2020 by xuancat0208@gmail.com',
    },
  },

  // theme and its config
  theme: defaultTheme({
    sidebarDepth: 3,
    logo: '/images/73d617852e3fafadd042f4277d0a4934_32.png',
    navbar,
    sidebar,
    repo: 'https://github.com/haer0248/catpalm-wiki-v2',
    docsRepo: 'https://github.com/haer0248/catpalm-wiki-v2',
    docsBranch: 'main',
    docsDir: 'docs',
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
      '/ko_kr/': {
        selectLanguageName: '한국어',
        home: '/ko_kr/',
        editLink: true,
        editLinkPattern: ':repo/blob/:branch/:path',
        editLinkText: 'GitHub에서 이 페이지 보기',
        lastUpdated: true,
        lastUpdatedText: '최근 업데이트',
        contributors: true,
        contributorsText: '기여자',
        backToHome: '홈으로 돌아가기',
        openInNewWindow: '새 창에서 열기',
        toggleColorMode: '색상 모드 전환',
        toggleSidebar: '사이드바 전환',
        tip: '팁',
        warning: '주의',
        danger: '경고',
        notFound: [
          '죄송합니다. 이 페이지를 찾을 수 없습니다.'
        ]
      },
      '/en_us/': {
        selectLanguageName: 'English',
        home: '/en_us/',
      }
    },
  })
})

export default config