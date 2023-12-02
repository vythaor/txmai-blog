const projectdetails = [
    //project 1
    {
        id: 'halo-trade',
        component: import(
            /* webpackChunkName: "project-details" */ '@/components/projects/HaloTrade.vue'
        ),
        singleProjectHeader: {
            singleProjectTitle: 'Aura HaloTrade',
            singleProjectName:
                'A scalable Design System for DeFi Trading Platform',
            // singleProjectDate: 'March 2023',
            // singleProjectTag: 'Freelance Project',
        },
        // projectImages: [
        //     {
        //         id: 1,
        //         title: 'Car Control',
        //         img: require('@/assets/images/ui-project-1.jpg'),
        //     },
        // ],
        // projectInfo: {
        //     clientHeading: 'About Client',
        //     companyInfos: [
        //         {
        //             id: 1,
        //             title: 'Name',
        //             details: 'Personal Client',
        //         },
        //         {
        //             id: 2,
        //             title: 'Appstore',
        //             details: `In development`,
        //         }
        //     ],
        //     technologies: [
        //         {
        //             title: 'Tools & Technologies',
        //             tools: [
        //                 'Figma',
        //                 'Photoshop',
        //                 'Illustrator'
        //             ],
        //             techs: [
        //                 'UI Design',
        //                 'UX Design'
        //             ]
        //         },
        //     ],
        //     projectDetailsHeading: 'Project Goals',
        //     projectDetails: [
        //         {
        //             id: 1,
        //             details:
        //                 'Car-controlling application is designed to provide seamless control over your vehicle through your smartphone. Compatible with a wide range of car models, this app connects to your car\'s onboard system via Bluetooth or an internet connection, allowing you to access and manage various functions remotely.',
        //         },
        //     ],
        // },
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
    //project 1
    {
        id: 'aura-scan',
        component: import(
            /* webpackChunkName: "project-details" */ '@/components/projects/AuraScan.vue'
        ),
        singleProjectHeader: {
            singleProjectTitle: 'project 2',
            singleProjectName:
                'A scalable Design System for DeFi Trading Platform',
            // singleProjectDate: 'March 2023',
            // singleProjectTag: 'Freelance Project',
        },
        // projectImages: [
        //     {
        //         id: 1,
        //         title: 'Car Control',
        //         img: require('@/assets/images/ui-project-1.jpg'),
        //     },
        // ],
        // projectInfo: {
        //     clientHeading: 'About Client',
        //     companyInfos: [
        //         {
        //             id: 1,
        //             title: 'Name',
        //             details: 'Personal Client',
        //         },
        //         {
        //             id: 2,
        //             title: 'Appstore',
        //             details: `In development`,
        //         }
        //     ],
        //     technologies: [
        //         {
        //             title: 'Tools & Technologies',
        //             tools: [
        //                 'Figma',
        //                 'Photoshop',
        //                 'Illustrator'
        //             ],
        //             techs: [
        //                 'UI Design',
        //                 'UX Design'
        //             ]
        //         },
        //     ],
        //     projectDetailsHeading: 'Project Goals',
        //     projectDetails: [
        //         {
        //             id: 1,
        //             details:
        //                 'Car-controlling application is designed to provide seamless control over your vehicle through your smartphone. Compatible with a wide range of car models, this app connects to your car\'s onboard system via Bluetooth or an internet connection, allowing you to access and manage various functions remotely.',
        //         },
        //     ],
        // },
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
