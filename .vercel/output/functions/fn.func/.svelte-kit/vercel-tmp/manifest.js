export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/doriangorecond.eot","fonts/doriangorecond.svg","fonts/doriangorecond.ttf","fonts/doriangorecond.woff"]),
	mimeTypes: {".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff"},
	_: {
		client: {"start":"_app/immutable/entry/start.5c27a840.js","app":"_app/immutable/entry/app.2409cf17.js","imports":["_app/immutable/entry/start.5c27a840.js","_app/immutable/chunks/index.8015430d.js","_app/immutable/chunks/singletons.65a5d007.js","_app/immutable/chunks/index.472fc310.js","_app/immutable/entry/app.2409cf17.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.8015430d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/dashboard/admin",
				pattern: /^\/dashboard\/admin\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
