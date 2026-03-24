import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase()
    return name === 'index' ? '/' : `/${name}`
  })

;(async () => {
  for (const routeUrl of routesToPrerender) {
    const { html: appHtml, head } = render(routeUrl)
    let html = template
      .replace('<!--app-html-->', appHtml)
    
    // Inject helmet head tags before </head>
    if (head) {
      html = html.replace('</head>', `${head}\n</head>`)
    }

    const filePath = `dist${routeUrl === '/' ? '/index' : routeUrl}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
