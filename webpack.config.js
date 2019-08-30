const RewriteImportPlugin = require("less-plugin-rewrite-import");
module.exports = {
    essLoader: {
        lessPlugins: [
            new RewriteImportPlugin({
                paths: {
                    '../../theme.config':  __dirname + '/app/semantic-ui/theme.config',
                },
            }),
        ],
    }
}