// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'EmbedCard',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
