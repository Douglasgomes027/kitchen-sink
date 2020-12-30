export default {
  widgets: [
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
                  buildHookId: '5fece874ff43c62249868c3f',
                  title: 'Sanity Studio',
                  name: 'kitchen-sink-studio',
                  apiId: '91884360-07c6-4045-8980-36f8b5fdf3be'
                },
                {
                  buildHookId: '5fece8741a26102a9316d7f7',
                  title: 'Blog Website',
                  name: 'kitchen-sink',
                  apiId: 'a6e58ac7-fa96-48fc-b551-f723c87dc122'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Douglasgomes027/kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
