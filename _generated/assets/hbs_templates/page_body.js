define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"wrapper\">\n<!-- end #header -->\n<div id=\"page\">\n<div id=\"page-bgtop\">\n<div id=\"page-bgbtm\">\n<div id=\"content\">\n<div class=\"post\">\n<h2 class=\"title\"> "
    + alias4(((helper = (helper = helpers.post_title || (depth0 != null ? depth0.post_title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_title","hash":{},"data":data}) : helper)))
    + "</h2>\n<div style=\"clear: both;\">\n&nbsp;\n</div>\n<div class=\"entry\">\n<p>\n"
    + alias4(((helper = (helper = helpers.post_body || (depth0 != null ? depth0.post_body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"post_body","hash":{},"data":data}) : helper)))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.post_body : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\n</div>\n</div>\n<div style=\"clear: both;\">\n&nbsp;\n</div>\n</div>\n\n";
},"useData":true}); });