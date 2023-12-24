const projectdetails = [
    //project 1
    {
        id: 'halo-trade',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/HaloTrade.vue'),
        name: 'Aura HaloTrade',
        title: `<p>A scalable Design System</p> <p class="mt-4">for DeFi Trading Platform</p>`,
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    //project 2
    {
        id: 'aura-scan',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/AuraScan.vue'),
        name: 'AuraScan',
        title: '<p><span class="font-semibold">Blockchain Explorer</span> for Transparent</p><p class="mt-4">Transaction Monitoring</p>',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    //project 3
    {
        id: 'fiserv',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Fiserv.vue'),
        name: 'fiserv',
        title: '<p><span class="font-semibold">Global fintech products</span> for banking</p>',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'costco-wholesale',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/CostcoWholesale.vue'),
        name: 'Costco Wholesale',
        title: 'Power BI Dashboard for a multi-billion dollar global retailer',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
    {
        id: 'beckman',
        component: import(/* webpackChunkName: "project-details" */ '@/components/projects/Beckman.vue'),
        name: 'HMI System for blood hematology analyzer',
        title: 'Bidding/pilot projects',
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: [
                {
                    id: 9,
                    title: 'NFT Marketplace',
                    img: require('@/assets/images/ui-project-1.jpg'),
                },
            ],
        },
    },
];
export default projectdetails;
