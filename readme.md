# webpack bootstrap and fontawesome demo

Webpack + Boostrap 4 + Font Awesome demo

Use this repo as a doc if you want to add in your webpack project Bootstrap 4 and/or Font Awesome.

  - bootstrap@4.0.0-alpha.4
  - webpack@1.13.2
  - webpack-dev-server@1.16.2
  - font-awesome@4.6.3
  - ES6

## Demo

see [demo](https://guillaumevincent.github.io/webpack-bootstrap-fontawesome/) on github page

## Usage

### Install

    npm install
    
### Dev

the project use webpack-dev-server

    npm run dev
    
### Build for production

    npm run build
    
## How it works

For dev we set publicPath to `'/dist/'` to specify to webpack-dev-server where files should be.
But in production and because we want fonts to be relative to the css file, we set publicPath to `''`.
In the css built we got something like that `@font-face{font-family:FontAwesome;src:url(25a32416abee198dd821b0b17a198a8f.eot);`.

Now it works on gh-pages and this is not depending on base url.

We use `extract-text-webpack-plugin` to extract css in its own file. So do not forget to add `<link rel="stylesheet" href="dist/styles.css">` in your index.html

We use bootstrap 4 that needs Tether and jQuery. So do not forget to add the corresponding plugin if you want to use Bootstrap Javascript.

    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'Tether': 'tether',
        'window.Tether': 'tether'
    })
 
## Files

index.html

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>webpack-bootstrap-fontawesome</title>
        <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="dist/styles.css">
    </head>
    <body>
    <div id="app"></div>
    <script src="dist/bundle.js"></script>
    </body>
    </html>

webpack.config.js
    
    var webpack = require('webpack');
    var path = require('path');
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    
    module.exports = {
        entry: './src/main.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
                {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
                {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath: ''})},
                {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'}
            ]
        },
        plugins: [
            new ExtractTextPlugin("styles.css"),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'Tether': 'tether',
                'window.Tether': 'tether'
            })
        ]
    };
    
    if (process.env.NODE_ENV === 'production') {
        module.exports.devtool = false;
        module.exports.plugins = (module.exports.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"production"'
                }
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: true
                },
                output: {
                    comments: false
                },
                sourceMap: false
            })
        ]);
    }
    
main.js
    
    import 'bootstrap/dist/css/bootstrap.css';
    import 'font-awesome/css/font-awesome.css';
    import 'bootstrap';
    
    document.body.innerHTML = '<button class="btn btn-success">it works</button>';
    document.body.innerHTML += '<br>';
    document.body.innerHTML += '<i class="fa fa-fw fa-thumbs-up"></i>';