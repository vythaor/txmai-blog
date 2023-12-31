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
        isContribute: false,
    },
    {
        id: 'aura-scan',
        title: 'Aurascan',
        category: 'UI design for Blockchain Explorer',
        img: require('@/assets/images/ui-project-2.jpg'),
        skate: require('@/assets/icons/web3.svg'),
        client: require('@/assets/icons/aura.svg'),
        isFeature: true,
        isContribute: false,
    },
    {
        id: 'luna',
        title: 'Luna MVP',
        category: 'Blockchain Explorer for Transparent Transaction Monitoring',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: false,
        isContribute: false,
    },
    {
        id: 'costco-wholesale',
        title: 'Diversity Dashboard; Warehouse Factsheet',
        category: 'UX design for Power BI Dashboard for a multi-billion dollar global retailer',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/fiserv.svg'),
        isFeature: true,
        isContribute: false,
    },
    {
        id: 'fiserv',
        title: 'Dispute workstation; Paypoint',
        category: 'Global fintech products for banking',
        img: require('@/assets/images/ui-project-4.png'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/fiserv.svg'),
        isFeature: false,
        isContribute: false,
    },
    {
        id: 'beckman',
        title: 'Bidding/Pilot projects',
        category: 'HMI System for blood hematology analyzer; Website builder studio',
        img: require('@/assets/images/ui-project-5.png'),
        skate: require('@/assets/images/hmi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: false,
        isContribute: true,
    },
    {
        id: 'workshop',
        title: 'Internal workshop',
        category: 'Holistic Design for digital products in the right time description',
        img: require('@/assets/images/ui-project-3.jpg'),
        skate: require('@/assets/icons/bpi.svg'),
        client: require('@/assets/icons/costco.svg'),
        isFeature: false,
        isContribute: true,
    }
];

export default projects;
