module.exports = {
    dest: '.build',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '文言',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'GalAster/WenyanLanguage',
        editLinks: true,
        docsDir: 'packages/wenyan-site',
        markdown: {
            lineNumbers: true
        },
        sidebar: [
            {
                title: 'Basic',
                collapsable: true,
                children: [
                    ['/basic/', 'Syntax'],
                    ['/basic/type.md', 'Basic Types'],
                    ['/basic/list.md', 'List'],
                    ['/basic/dict.md', 'Dict'],
                    ['/basic/function.md', 'Function'],
                    ['/basic/module.md', 'Module'],
                ]
            },
        ]
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    },
    plugins: []
};
