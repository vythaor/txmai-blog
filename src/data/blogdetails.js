const blogdetails = [
    //blog 1
    {
        id: 'Design-Dashboard-mobile-view-in-Power-BI',
        component: import(/* webpackChunkName: "project-details" */ '@/components/blogs/Blog1.vue'),
        title: 'Design Dashboard mobile view in Power BI',
        time: 'Dec 12nd, 2023',
        relatedBlog: {
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
     //blog 2
     {
        id: 'Building-smart-components-in-Figma',
        component: import(/* webpackChunkName: "project-details" */ '@/components/blogs/Blog2.vue'),
        title: 'Building smart components in Figma ',
        time: 'Dec 12nd, 2023',
        relatedBlog: {
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
     //blog 3
     {
        id: 'Dividing-projects-and-keeping-components-organized',
        component: import(/* webpackChunkName: "project-details" */ '@/components/blogs/Blog3.vue'),
        title: 'Design Dashboard mobile view in Power BI',
        time: 'Dec 22nd, 2023',
        relatedBlog: {
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
export default blogdetails;
