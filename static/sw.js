importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "fxbui",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.01262cd7b956c06701aa8f3124c4635e.css",
    "revision": "01262cd7b956c06701aa8f3124c4635e"
  },
  {
    "url": "/_nuxt/app.90544c124c2cd34ac951.js",
    "revision": "2ec9832246ddcc027bfbedcac8827c36"
  },
  {
    "url": "/_nuxt/layouts_default.74fe07f0a885c272a846.js",
    "revision": "ccd5b9b64739c5a8a4fead18ca14f208"
  },
  {
    "url": "/_nuxt/layouts_investlisttmp.fa1f1f15de184b0a51ca.js",
    "revision": "bc334cad654958143e40988df1367439"
  },
  {
    "url": "/_nuxt/manifest.d2ca7e1257efb2474fdc.js",
    "revision": "0d8894bdd2d130569e1f74dacb3b5621"
  },
  {
    "url": "/_nuxt/pages_about.7e1476216b2282959c81.js",
    "revision": "a2600dcdfb95ab5080fa552de341a0c9"
  },
  {
    "url": "/_nuxt/pages_bid_investlist.953cd20f1eb0861f7e44.js",
    "revision": "dd8a6a3f7a204f34aa4cd504eece6b30"
  },
  {
    "url": "/_nuxt/pages_bid_productlist.107c3357885717c3ec9b.js",
    "revision": "d80a2a6557dc7347c9c6b7a502730275"
  },
  {
    "url": "/_nuxt/pages_bid_transfer.2a399c76f9e2e2eb2a38.js",
    "revision": "aa29513fd152fa0a81b82b1a5d4db30c"
  },
  {
    "url": "/_nuxt/pages_find_index.74d3be032f21360dc3d4.js",
    "revision": "7917153f296ba7884fdf4a16389a09d5"
  },
  {
    "url": "/_nuxt/pages_index.0efb234d209a41910c1e.js",
    "revision": "39a33e4fb9f2c830eaea477a2f042985"
  },
  {
    "url": "/_nuxt/pages_login.326dbee9123e3a063e5b.js",
    "revision": "81cf89a6a7ac941759daa8cc267cc6eb"
  },
  {
    "url": "/_nuxt/pages_userCenter.3a07db11b251c28403c7.js",
    "revision": "71de5bbcf531d9cfe52e9b394d636128"
  },
  {
    "url": "/_nuxt/vendor.d2ca7e1257efb2474fdc.js",
    "revision": "979b3852404dea8b3febdb3a5ab9a665"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

