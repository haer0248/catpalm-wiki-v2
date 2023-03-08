import type { PluginConfig } from '@vuepress/core'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
const { ALGOLIA_DOCSEARCH_API_KEY, ALGOLIA_DOCSEARCH_APP_ID } = process.env

const plugins: PluginConfig = [
    seoPlugin({
        hostname: 'https://catpalm.haer0248.me',
        ogp: (ogp, page, app) => {
            ogp['og:site_name'] = app.siteData.title
            ogp['og:description'] = ogp['og:description'] || app.siteData.description
            ogp['og:title'] = `${page.title} • ${app.siteData.title}`
            ogp['og:locale'] = app.siteData.lang.replace('-', '_')
            ogp['og:image'] = '/images/open_graph.png'
            ogp['og:image:width'] = '484'
            ogp['og:image:height'] = '252'
            ogp['twitter:card'] = 'summary_large_image'

            return ogp
        }
    })
]


if (ALGOLIA_DOCSEARCH_APP_ID && ALGOLIA_DOCSEARCH_API_KEY) {
    plugins.push(docsearchPlugin({
      appId: ALGOLIA_DOCSEARCH_APP_ID,
      apiKey: ALGOLIA_DOCSEARCH_API_KEY,
      indexName: 'catpalm-haer0248',
      placeholder: '搜尋',
      translations: {
        button: {
          buttonText: '搜尋',
          buttonAriaLabel: '搜尋'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查詢',
            resetButtonAriaLabel: '清除查詢',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '最近',
            noRecentSearchesText: '没有最近的搜尋',
            saveRecentSearchButtonTitle: '保存此搜尋',
            removeRecentSearchButtonTitle: '從歷史記錄中刪除此搜尋',
            favoriteSearchesTitle: '最愛',
            removeFavoriteSearchButtonTitle: '從最愛中刪除此搜尋'
          },
          errorScreen: {
            titleText: '無法取得結果',
            helpText: '您可能需要檢查您的網路連線。'
          },
          footer: {
            selectText: '選擇',
            selectKeyAriaLabel: '回車鍵',
            navigateText: '導航',
            navigateUpKeyAriaLabel: '向上箭頭',
            navigateDownKeyAriaLabel: '向下箭頭',
            closeText: '關閉',
            closeKeyAriaLabel: '退出鍵',
            searchByText: 'Search by'
          },
          noResultsScreen: {
            noResultsText: '沒有結果 for',
            suggestedQueryText: '嘗試搜尋 for',
            reportMissingResultsText: '此查詢應該返回結果嗎？',
            reportMissingResultsLinkText: '讓我們知道。'
          }
        }
      }
    }))
  }

export default plugins