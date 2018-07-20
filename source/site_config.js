var siteConfig = {

    content: [
        {
            id: 'about',
            template: 'layout/side_menu_item',
            data: {
                title: 'Introduction',
                icon: 'info_outline',
                link: '#/about',
                file: 'content/about.html'
            }
        },
        {
            id: 'get_started',
            template: 'layout/side_menu_item',
            data: {
                title: 'Get started',
                icon: 'build',
                link: '#/get_started',
                file: 'content/install.html'
            }
        },
        {
            id: 'clients',
            template: 'layout/side_menu_item',
            data: {
                title: 'Clients',
                icon: 'important_devices',
                link: '#/clients',
                file: 'content/clients.html'
            }
        },
        {
            id: 'docs',
            template: 'layout/side_menu_item',
            data: {
                title: 'Documentation',
                icon: 'import_contacts',
                link: '#/docs/setup'
            },
            list: [
                {
                    id: 'setup',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Setup',
                        link: '#/docs/setup',
                        file: 'content/docs/setup.html'
                    }
                },
                {
                    id: 'configure',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Configuration',
                        link: '#/docs/configure',
                        file: 'content/docs/configure.html'
                    }
                },
                {
                    id: 'scenarios',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Scenarios',
                        link: '#/docs/scenarios',
                        file: 'content/docs/scenarios.html'
                    }
                },
                {
                    id: 'remotes',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'IR/RF remotes',
                        link: '#/docs/remotes',
                        file: 'content/docs/remotes.html'
                    }
                },
                {
                    id: 'scheduling',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Scheduling',
                        link: '#/docs/scheduling',
                        file: 'content/docs/scheduling.html'
                    }
                },
                {
                    id: 'upnp_dlna',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'UPnP/DLNA',
                        link: '#/docs/upnp_dlna',
                        file: 'content/docs/upnp_dlna.html'
                    }
                },
                {
                    id: 'interconnect',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Interconnections',
                        link: '#/docs/interconnect',
                        file: 'content/docs/interconnect.html'
                    }
                }
            ]
        },
        {
            id: 'develop',
            template: 'layout/side_menu_item',
            data: {
                title: 'Developing', // copy some stuff from old site and add second level contents
                icon: 'extension',
                link: '#/develop/programs'
            },
            list: [
                ,
                {
                    id: 'programs',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Programs (APP)',
                        link: '#/develop/programs',
                        file: 'content/devs/programs.html'
                    }
                },
                {
                    id: 'widgets',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Widgets',
                        link: '#/develop/widgets',
                        file: 'content/devs/widgets.html'
                    }
                },
                {
                    id: 'ape',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Program API',
                        link: 'api/ape/annotated.html',
                        attr: 'target="_blank"'
                    }
                },
                {
                    id: 'api',
                    template: 'layout/side_menu_subitem',
                    data: {
                        title: 'Web API',
                        link: 'api/mig/overview.html',
                        attr: 'target="_blank"'
                    }
                }
            ]
        }/*,
        {
            id: 'source',
            template: 'layout/side_menu_item',
            data: {
                title: 'Source',
                icon: 'view_headline',
                link: 'https://github.com/genielabs/HomeGenie'
            }
        },
        {
            id: 'community',
            template: 'layout/side_menu_item',
            data: {
                title: 'Community', // System Integrators
                icon: 'group',
                link: 'https://plus.google.com/communities/116563910167155544886'
            }
        }*//*,
        {
             id: 'partners',
             template: 'layout/side_menu_item',
             data: {
                 title: 'Vendors/S.I.', // System Integrators
                 icon: 'business_center',
                 link: '#'
             }
         },
         {
             id: 'archive',
             template: 'layout/side_menu_item',
             data: {
                 title: 'Archived',
                 icon: 'archive',
                 link: '#'
             }
         }*/
    ],

    strings: {
        startPage: '#/about',
        baseUrl: '/',
        title: 'Website Demo'
    }


};
if (typeof module !== 'undefined') {
    module.exports = siteConfig;
}