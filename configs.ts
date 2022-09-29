export const configs = {

	// Apollo Graphql Configs
	'plugin.apollo.httpLinkOptions': {
		uri: "https://lgonnzutejauqwnexlge.supabase.co" + '/graphql/v1',
		headers: {
			apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxnb25uenV0ZWphdXF3bmV4bGdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQyNTg3NzIsImV4cCI6MTk3OTgzNDc3Mn0.gMckEYd-VAXMHeupDZzth3TV3ErhgTxuxDnZKAR0PLk"
		}
	},
	'locale.options': {
		en: 'English',
		fr: 'French',
		ur: 'اُردُو',
	},
	'theme.overrides': {
		light: {
			components: {
				ToDoAppIcon: {
					root: {
						backgroundColor: '#6750A4',
					}
				}
			}
		}
	},
	// 'tasks.itemsPerPage': 5,
};