import type { PluginConfig } from '@vuepress/core'
import { seoPlugin } from 'vuepress-plugin-seo2'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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
    }),

    // docsearchPlugin({
    //     // 配置项
    // }),
]

export default plugins