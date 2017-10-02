# handlebars-playground
Playing around with / learning handlebars js
These notes are intended only as an aid to memory

## Notes

Handlebars is a templating library that allows for HTML templates to be creating separate to content.

These templates can be compiled in the browser (expensive) or server side and deployed as pre-compiled js files.

These files need to be loaded into the DOM or imported into the main js app and rendered into a DOM container element once processed by the `Handlebars` function in the handlebars.runtime library. 

All templates are processed into the same file; additional work will be required to only render the templates that are required by the content. 

Partials are supported in templates to allow for modular construction (know as partials). Best solution found for partials when precompiling is to set `Handlebars.partials = Handlebars.templates`. As all partials are included when templates are precompiled but nothing is referenced as partials. This remove the need to manually register individual partials. 

Partial templates can be dynamically chosen/set from context obj but must be a function expression
