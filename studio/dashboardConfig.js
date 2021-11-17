export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61957e4ab973d5006f61b6bb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-vxubjt4o',
                  apiId: 'b3e4f2c3-8cd3-4031-9ed8-652d083671b7'
                },
                {
                  buildHookId: '61957e4abd2124165014ab7b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dr9nxt3e',
                  apiId: '4b8244d7-bd3e-464d-a389-42cb0bde54f8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HilmAlex/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dr9nxt3e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
