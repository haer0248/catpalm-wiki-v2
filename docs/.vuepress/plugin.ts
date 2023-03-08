import type { PluginConfig } from '@vuepress/core'
import { seoPlugin } from 'vuepress-plugin-seo2'

const plugins: PluginConfig = [
    seoPlugin({
        hostname: 'https://catpalm.haer0248.me',
        ogp: (ogp, page, app) => {
            ogp['og:site_name'] = app.siteData.title
            ogp['og:description'] = ogp['og:description'] || app.siteData.description
            ogp['og:title'] = `${page.title} • ${app.siteData.title}`
            ogp['og:locale'] = app.siteData.lang.replace('-', '_')
            ogp['og:image'] = 'https://i.imgur.com/NxDAsy5.png'
            ogp['og:image:width'] = '780'
            ogp['og:image:height'] = '498'
            ogp['twitter:card'] = 'summary_large_image'

            return ogp
        }
    }),
]

export default plugins