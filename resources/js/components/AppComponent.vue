<template>
<v-app>
	
	<v-navigation-drawer app v-model="drawer">
		<sidebar-component></sidebar-component>	
	</v-navigation-drawer>

	<v-app-bar app>
		<!-- -->
		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

		<v-toolbar-title>Vue Admin</v-toolbar-title>

	</v-app-bar>
		<!-- Sizes your content based upon application components -->
	
	<v-main>
		<!-- Provides the application the proper gutter -->
		<v-container fluid>

			<!-- If using vue-router -->
			<example-component v-if="section == 'example'"></example-component>
			<dashboard-page v-if="section == 'dashboard'"></dashboard-page>
		
		</v-container>
	</v-main>

	<v-footer app>
	<!-- -->
	</v-footer>

</v-app>
</template>

<script>
    export default {

    	props: ['section'],

    	data: () => ({
	      drawer: false,
	      group: null,
	    }),

        mounted() {
        }
        
    }
</script>
