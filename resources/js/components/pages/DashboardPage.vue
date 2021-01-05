<template>
	<div>
		<v-row>
			<v-col>
				<v-card class="pa-2" outlined tile>
					One of three columns
				</v-card>
			</v-col>
			<v-col>
				<v-card class="pa-2" outlined tile>
					One of three columns
				</v-card>
			</v-col>
			<v-col>
				<v-card class="pa-2" outlined tile>
					One of three columns
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
    export default {

    	data: () => ({
	      alignments: [
	        'start',
	        'center',
	        'end',
	      ],
	    }),

        mounted() {
        
        }
        
    }
</script>
