const path = require("path");

module.exports = {
    "mode": "development",
    "entry": [
        "./src/Components/preview-widget.js",
    ],
    "output": {
        "filename": "preview-widget.js",
        "library": "@crystalclear506/preview-widget",
        "libraryTarget": "umd",
        "libraryExport": "default"
    },
    "module": {
        "rules": [
            {
                "test": /\.m?js$/,
                "exclude": /(node_modules|bower_components)/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-react"]
                    }
                }
            },
            {
                "test": /\.s[ac]ss$/i,
                "use": [
                    "style-loader",
                    { 
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    "externals": {
        "react": 'react',
        "react-dom": 'reactDOM'
    },
};
