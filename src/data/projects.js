// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Aura HaloTrade',
		category: 'A scalable Design System for DeFi Trading Platform',
		img: require('@/assets/images/ui-project-1.jpg'),
		skate: require('@/assets/icons/web3.svg'),
		client: require('@/assets/icons/aura.svg')
	},
	{
		id: 2,
		title: 'Aurascan',
		category: 'Blockchain Explorer for Transparent Transaction Monitoring',
		img: require('@/assets/images/ui-project-2.jpg'),
		skate: require('@/assets/icons/web3.svg'),
		client: require('@/assets/icons/aura.svg')
	},
	{
		id: 3,
		title: 'Diversity Dashboard; Warehouse Factsheet',
		category: 'Power BI Dashboard for a multi-billion dollar global retailer ',
		img: require('@/assets/images/ui-project-3.jpg'),
		skate: require('@/assets/icons/bpi.svg'),
		client: require('@/assets/icons/costco.svg')
	}
];

export default projects;
