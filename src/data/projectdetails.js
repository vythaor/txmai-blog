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
        title: '<p>Blockchain Explorer for Transparent</p><p class="mt-4">Transaction Monitoring</p>',
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
