module.exports = {

    plugins : [

        require('postcss-import'),
        require('postcss-preset-env')({stage: 1}), //we added ({stage: 1}) meaning there is a new feature that allows nesting in css just like sass so this makes nesting with & work 
        require('cssnano'),

    ]
}