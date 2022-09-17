
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/cfaber/Sites/cesar-oliveira-web/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/cfaber/Sites/cesar-oliveira-web/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/cfaber/Sites/cesar-oliveira-web/src/pages/index.tsx"))
}

