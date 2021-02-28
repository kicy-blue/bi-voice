const {
	override,
	addDecoratorsLegacy,
	disableEsLint,
	addBundleVisualizer,
	addWebpackAlias,
	adjustWorkbox,
	addLessLoader,
	fixBabelImports,
} = require("customize-cra");
const path = require("path");

module.exports = override(
	// enable legacy decorators babel plugin
	addDecoratorsLegacy(),

	// disable eslint in webpack
	disableEsLint(),

	// add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
	process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

	// add an alias for "ag-grid-react" imports

	fixBabelImports("import", {
		libraryName: "antd",
		libraryDirectory: "es",
		style: true,
	}),
	addWebpackAlias({
		"@": path.resolve(__dirname, "src"),
	}),

	// adjust the underlying workbox
	// adjustWorkbox(wb =>
	//   Object.assign(wb, {
	//     skipWaiting: true,
	//     exclude: (wb.exclude || []).concat("index.html")
	//   })
	// )
	addLessLoader({
		javascriptEnabled: true,
	})
	// addLessLoader({
	// 	lessOptions: {
	// 		noIeCompat: true,
	// 		javascriptEnabled: true,
	// 		cssLoaderOptions: {},
	// 		cssModules: true,
	// 		localIdentName: "[local]--[hash:base64:5]",
	// 	},
	// })
	// addLessLoader({
	// 	lessOptions: {
	// 		javascriptEnabled: true,
	// 		localIdentName: "[local]--[hash:base64:5]",
	// 	},
	// })
	// addLessLoader()
);
