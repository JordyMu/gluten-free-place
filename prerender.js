import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// All actual routes (excluding dynamic :slug routes)
const routesToPrerender = [
  '/',
  '/countries',
  '/all-countries',
  '/auth',
  '/italy',
  '/spain',
  '/france',
  '/australia',
  '/ireland',
  '/germany',
  '/new-zealand',
  '/sweden',
  '/thailand',
  '/argentina',
  '/usa',
  '/japan',
  // UK
  '/gluten-free/united-kingdom',
  '/gluten-free/united-kingdom/london',
  '/gluten-free/united-kingdom/edinburgh',
  '/gluten-free/united-kingdom/manchester',
  '/gluten-free/united-kingdom/birmingham',
  // Canada
  '/gluten-free/canada',
  '/gluten-free/canada/toronto',
  '/gluten-free/canada/vancouver',
  '/gluten-free/canada/montreal',
  '/gluten-free/canada/calgary',
  // South Africa
  '/gluten-free/south-africa',
  '/gluten-free/south-africa/cape-town',
  '/gluten-free/south-africa/johannesburg',
  '/gluten-free/south-africa/durban',
  '/gluten-free/south-africa/pretoria',
  '/gluten-free/south-africa/cape-town/stellenbosch',
  '/gluten-free/south-africa/cape-town/franschhoek',
  '/gluten-free/south-africa/cape-town/street-food',
  '/gluten-free/south-africa/cape-town/bakeries',
  '/gluten-free/south-africa/cape-town/grocery-stores',
  '/gluten-free/south-africa/cape-town/gluten-free-products',
  // Kenya
  '/gluten-free/kenya',
  '/gluten-free/kenya/nairobi',
  '/gluten-free/kenya/mombasa',
  '/gluten-free/kenya/kisumu',
  '/gluten-free/kenya/nakuru',
  // Egypt
  '/gluten-free/egypt',
  '/gluten-free/egypt/cairo',
  '/gluten-free/egypt/alexandria',
  '/gluten-free/egypt/giza',
  '/gluten-free/egypt/sharm-el-sheikh',
  '/gluten-free/egypt/hurghada',
  '/gluten-free/egypt/luxor',
  // Mauritius
  '/gluten-free/mauritius',
  '/gluten-free/mauritius/grand-baie',
  '/gluten-free/mauritius/port-louis',
  '/gluten-free/mauritius/flic-en-flac',
  '/gluten-free/mauritius/curepipe',
  '/gluten-free/mauritius/quatre-bornes',
  '/gluten-free/mauritius/mahebourg',
  // Other
  '/gluten-free/nigeria',
  '/gluten-free/morocco',
  '/gluten-free/botswana',
  // Spain restaurants
  '/spain/jansana-gluten-free-bakery',
  '/spain/chok-sagasta-pasteleria',
  '/spain/chok-chocolate-bar',
  '/spain/messie-sin-gluten-muntaner',
  '/spain/la-nonna-carmela',
  '/spain/aruku',
  '/spain/grosso-napoletano-senza-glutine',
  '/spain/yummy-heladeria',
  '/spain/coliaki',
  '/spain/la-papita-de-leche-take-away',
  '/spain/restaurante-en-ville',
  '/spain/messie-pizza-gluten-free-gracia',
]

;(async () => {
  for (const routeUrl of routesToPrerender) {
    const { html: appHtml, head } = render(routeUrl)
    let html = template
      .replace('<!--app-html-->', appHtml)
    
    // Inject helmet head tags before </head>
    if (head) {
      html = html.replace('</head>', `${head}\n</head>`)
    }

    // Create nested directory structure for deep routes
    const filePath = `dist${routeUrl === '/' ? '/index' : routeUrl}.html`
    const dir = path.dirname(toAbsolute(filePath))
    fs.mkdirSync(dir, { recursive: true })

    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
