module.exports = ctx => {
    return {
        map: ctx.options.map,
        plugins: {
            'postcss-import': {
                path: 'assets'
            },
            'postcss-cssnext': {
                browsers: ['last 2 versions', '> 5%'],
            },
            'postcss-reporter': {
                clearReportedMessages: true
            }
        }
    }
};
