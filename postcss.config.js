module.exports = {
    syntax: 'postcss-scss',
    parser: 'postcss-scss',
    plugins: [
        require('postcss-strip-inline-comments'),
        require('autoprefixer'),
        // require('postcss-import'),
        require('precss'),
        require('cssnano'),
    ]
};