import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Foo = {
  template: '<div style="color: white;"><h1>Foo component!</h1></div>'
};

const Bar = {
  template: '<div style="color: white;"><h1>Bar component!</h1></div>'
};

const Home = {
  template: '<div style="color: white;"><h1>Home</h1></div>'
};

const routes = [
	{
	 	path: "/",
      	component: Home
    },
	{ 
		name: 'foo',
		path: '/foo', 
		component: Foo 
	},
	{ 
		name: 'bar',
		path: '/bar', 
		component: Bar 
	},
];

export default new VueRouter({ 
	routes:routes, 
	mode: "history"
});