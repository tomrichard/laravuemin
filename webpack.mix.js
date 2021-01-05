const mix 					= require('laravel-mix');

const VuetifyLoaderPlugin 	= require('vuetify-loader/lib/plugin')

var webpackConfig 		  	= {

	plugins: [
		new VuetifyLoaderPlugin({

			match (originalTag, { kebabTag, camelTag, path, component }) {
		      if (kebabTag.startsWith('core-')) {
		        return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
		      }
		    }

		})
	] 

}

mix.webpackConfig(webpackConfig);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
	.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css');

// mix.js('resources/js/app.js', 'public/js').vuetify('vuetify-loader')
