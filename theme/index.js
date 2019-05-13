const path = require('path')

module.exports = {
    name: 'vuepress-theme-hds',
    plugins: [
        '@vuepress/blog',
        [
            '@vuepress/search', {
                searchMaxSuggestions: 10
            }],
        [
            '@vuepress/register-components', {
                componentsDir: [
                    path.resolve(__dirname, 'components')
                ]
            }]
    ]
}
