<template>
	<div>
		<v-list-item style="height: 64px;">
			<v-list-item-content>
			  <v-list-item-title class="title">
			    Application
			  </v-list-item-title>
			  <v-list-item-subtitle>
			    Admin User
			  </v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider style="margin-top: 0px;"></v-divider>

		<v-list dense >

			<div v-for="item in items" >

				<v-list-group v-if="(item.children && item.children.length)"
			        :key="item.title"
			        v-model="item.active"
			        :prepend-icon="item.icon"
			        no-action>

		      		<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title v-text="item.title"></v-list-item-title>
						</v-list-item-content>
					</template>

					<v-list-item 
						:link="true" :ripple="{ center: true, class: 'blue--text' }"
						v-for="child in item.children"
						:key="child.title">
						<v-list-item-content>
							<v-list-item-title v-text="child.title"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>

				</v-list-group>

				<v-list-item :link="true" :ripple="{ center: true, class: 'blue--text' }" :key="item.title" v-if="!(item.children && item.children.length)">
					<v-list-item-icon>
						<v-icon v-text="item.icon"></v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="item.title"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				
			</div>
			
		</v-list>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
			{ 
				title: 'Dashboard', icon: 'mdi-view-dashboard',
				active: false
			},
			// { title: 'Photos', icon: 'mdi-image' },
			{ 
				title: 'Blog', icon: 'mdi-newspaper',
				active: false, 
				children:[
					{ title: 'Calendar : app' },
					{ title: 'Chrome : app' },
					{ title: 'Webstorm : app' },
				]
			},
			{ 
				title: 'Human Resource', icon: 'mdi-account-multiple',
				active: false,
				children: [
					{ title: 'Calendar : app' },
					{ title: 'Chrome : app' },
					{ title: 'Webstorm : app' },
				]
			},
			{ 	
				title: 'About', icon: 'mdi-help-box',
				active: false
			},
        ],
        right: null,
      }
    },
    methods : {
    }
  }
</script>