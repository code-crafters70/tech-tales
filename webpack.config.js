const path = require("path");

module.exports =
{
    mode: "development",
    entry:
    {
        index: [
            "./ttserver/app/static/jsx/pages/index.jsx",
        ]
    },

    output:
    {
        path: path.resolve(__dirname, "ttserver/app/static/jsx/dist"),
        filename: "[name].bundle.js"
    },

    module:
    {
        rules:
        [
            {
                test: /\.(?:js|jsx)$/,
                exclude: /node_modules/,
                use:
                {
                    loader: "babel-loader",
                    options: 
                    {
                        presets:
                        [
                            ["@babel/preset-env", {targets: "defaults"}],
                            ["@babel/preset-react"]
                        ]
                    }
                }
            }
        ]
    },

    resolve:
    {
        extensions: [".js", ".jsx"]
    }
}