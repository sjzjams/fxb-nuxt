importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "fxbui",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.90544c124c2cd34ac951.js",
    "revision": "2ec9832246ddcc027bfbedcac8827c36"
  },
  {
    "url": "/_nuxt/app.c3bc7205d54f97aef73f441adf4d72af.css",
    "revision": "c3bc7205d54f97aef73f441adf4d72af"
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
    "url": "/_nuxt/manifest.a5d593f58ec5d6786dac.js",
    "revision": "a1c85b087e853c0140f3a97a08e45fc7"
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
    "url": "/_nuxt/pages_find_index.97e390a22bc7dd6b1e58.js",
    "revision": "09c5d8f75d8e0855802e8e0a8cba9c3d"
  },
  {
    "url": "/_nuxt/pages_index.e0b4672ba7d91ccd7649.js",
    "revision": "7aaa7cb5dbec2865f5c388d594a9df2f"
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
    "url": "/_nuxt/vendor.a5d593f58ec5d6786dac.js",
    "revision": "979b3852404dea8b3febdb3a5ab9a665"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

