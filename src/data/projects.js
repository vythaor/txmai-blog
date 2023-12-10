// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
    {
        id: 'halo-trade',
        title: 'Aura HaloTrade',
        category: 'A scalable Design System for DeFi Trading Platform',
        img: require('@/assets/images/ui-project-1.jpg'),
        skate: require('@/assets/icons/web3.svg'),
        client: require('@/assets/icons/aura.svg'),
        isFeature: true,
        isContribute: true,
    },
    {
        id: 'aura-scan',
        title: 'Aurascan',
        category: 'Blockchain Explorer for Transparent Transaction Monitoring',
        img: require('@/assets/images/ui-project-2.jpg'),
        skate: require('@/assets/icons/web3.svg'),
        client: require('@/assets/icons/aura.svg'),
        isFeature: true,
        isContribute: true,
    },
    {
        id: 'costco-wholesale',
        title: 'Diversity Dashboard; Warehouse Factsheet',
        category: 'Power BI Dashboard for a multi-billion dollar global retailer ',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/fiserv.svg'),
        isFeature: true,
        isContribute: true,
    },
    {
        id: 'fiserv',
        title: 'Dispute workstation; Paypoint',
        category: 'Global fintech products for banking',
        img: require('@/assets/images/ui-project-4.png'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/fiserv.svg'),
        isFeature: false,
        isContribute: true,
    },
    {
        id: 5,
        title: 'Bidding/Pilot projects',
        category: 'HMI System for blood hematology analyzer; Website builder studio',
        img: require('@/assets/images/ui-project-5.png'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: false,
        isContribute: false,
    },
    {
        id: 6,
        title: 'Internal workshop',
        category: 'Holistic Design for digital products in the right time description',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: false,
        isContribute: false,
    },
];

export default projects;
