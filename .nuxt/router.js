import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _30ff0ef5 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _1a8c53f6 = () => import('..\\pages\\find\\index.vue' /* webpackChunkName: "pages_find_index" */).then(m => m.default || m)
const _479f9119 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _f59f4d58 = () => import('..\\pages\\bid\\productlist.vue' /* webpackChunkName: "pages_bid_productlist" */).then(m => m.default || m)
const _7e4dd3c8 = () => import('..\\pages\\bid\\investlist.vue' /* webpackChunkName: "pages_bid_investlist" */).then(m => m.default || m)
const _02ba5c34 = () => import('..\\pages\\bid\\transfer.vue' /* webpackChunkName: "pages_bid_transfer" */).then(m => m.default || m)
const _67576bde = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _30ff0ef5,
			name: "login"
		},
		{
			path: "/find",
			component: _1a8c53f6,
			name: "find"
		},
		{
			path: "/about",
			component: _479f9119,
			name: "about"
		},
		{
			path: "/bid/productlist",
			component: _f59f4d58,
			name: "bid-productlist"
		},
		{
			path: "/bid/investlist",
			component: _7e4dd3c8,
			name: "bid-investlist"
		},
		{
			path: "/bid/transfer",
			component: _02ba5c34,
			name: "bid-transfer"
		},
		{
			path: "/",
			component: _67576bde,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
