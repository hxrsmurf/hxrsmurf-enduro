var _ = require('lodash')
var Promise = require('bluebird')

enduro.templating_engine.registerHelper('quote_pages', function (options) {

    // will store all the blog entries
    var quote_pages

    // get_cms_list will return a structured list of all pages in a project
    return enduro.api.pagelist_generator.get_cms_list()
        .then((pagelist) => {

            quote_pages = _.chain(pagelist.structured.quotes)
                .filter((o) => { return typeof o === 'object' }).value() // filter pages only

        })
        .then(() => {

            // pass blog entries as context for the template
            return options.fn(quote_pages)
        })
})
