(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['layout'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials["partials/header"],depth0,{"name":"partials/header","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "	<h3>No header</h3>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<p>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.header : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<section class=\"body\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pars : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</section>\n\n\n"
    + ((stack1 = container.invokePartial((((stack1 = (depth0 && depth0.extra)) && stack1.whichPartial) || helpers.helperMissing).call(alias1,{"name":"extra.whichPartial","hash":{},"data":data}),depth0,{"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
templates['partials/header'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<h1>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h1>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<p>some intro "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.intro : stack1), depth0))
    + "</p>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<p>No intro</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"header\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.header : depth0)) != null ? stack1.intro : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</section>";
},"useData":true});
templates['partials/list'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "		<li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.extra : depth0)) != null ? stack1.items : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
})();